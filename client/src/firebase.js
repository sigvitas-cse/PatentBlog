// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "patent-blog.firebaseapp.com",
  projectId: "patent-blog",
  storageBucket: "patent-blog.firebasestorage.app",
  messagingSenderId: "38453678969",
  appId: "1:38453678969:web:f1db0dc669308442ced5a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);