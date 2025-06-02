import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';

const ImageUpload = forwardRef(({ onImageUpload }, ref) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const scriptLoadTimeoutRef = useRef(null);

  // Load Cloudinary script with retries
  useEffect(() => {
    const loadScript = () => {
      if (window.cloudinary) {
        setScriptLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
        clearTimeout(scriptLoadTimeoutRef.current);
      };
      script.onerror = () => {
        console.error('Failed to load Cloudinary script');
        clearTimeout(scriptLoadTimeoutRef.current);
      };
      document.body.appendChild(script);

      // Fallback timeout if script fails to load
      scriptLoadTimeoutRef.current = setTimeout(() => {
        if (!window.cloudinary) {
          console.error('Cloudinary script load timeout');
          setScriptLoaded(false);
        }
      }, 10000); // 10s timeout

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        clearTimeout(scriptLoadTimeoutRef.current);
      };
    };

    loadScript();

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const openWidget = () => {
    if (!scriptLoaded || !window.cloudinary) {
      console.error('Cloudinary widget not loaded');
      onImageUpload(null, new Error('Cloudinary widget not available'), 0, false);
      return;
    }

    if (uploading) return; // Prevent multiple uploads

    setUploading(true);
    setProgress(0);
    onImageUpload(null, null, 0, true);

    // Simulate progress
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 90) {
          clearInterval(progressIntervalRef.current);
          return 90;
        }
        onImageUpload(null, null, newProgress, true);
        return newProgress;
      });
    }, 500);

    try {
      window.cloudinary.openUploadWidget(
        {
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
          sources: ['local', 'url'],
          multiple: false,
          maxImageWidth: 1920,
          maxImageHeight: 1920,
          cropping: true,
          showSkipCropButton: false,
          folder: 'patent_images',
          tags: ['patent', 'user-upload'],
          maxFileSize: 10 * 1024 * 1024, // 2MB limit
          accept: 'image/*', // Only images
        },
        (error, result) => {
          clearInterval(progressIntervalRef.current);
          setUploading(false);
          if (!error && result?.event === 'success') {
            onImageUpload(result.info.secure_url, null, 100, false);
          } else if (error) {
            console.error('Upload error:', error);
            onImageUpload(null, error, 0, false);
          }
        }
      );
    } catch (err) {
      console.error('Error opening Cloudinary widget:', err);
      clearInterval(progressIntervalRef.current);
      setUploading(false);
      onImageUpload(null, err, 0, false);
    }
  };

  // Expose openWidget to parent via ref
  useImperativeHandle(ref, () => ({
    openWidget,
  }));

  return null; // No UI, widget triggered via profile picture
});

export default ImageUpload;