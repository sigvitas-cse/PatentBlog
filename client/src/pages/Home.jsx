import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-10  px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl pt-10'>US Patent Quality</h1>
        {/* <p className='text-gray-500 text-xs sm:text-sm'>
          Welcome to my patent blog! Here you'll find a wide range of articles,
          tutorials, and resources dedicated to helping you understand and navigate
          the world of patents. Whether you're curious about the patent application
          process, international patent laws, protecting your inventions, or staying
          updated on recent innovations, there's something here for everyone.
          Dive in and expand your knowledge of intellectual property and innovation.
        </p> */}

        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
        {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
          <CallToAction />
        </div> */}
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-3'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
