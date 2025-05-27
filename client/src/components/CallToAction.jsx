import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Interested in exploring the world of patents and innovation?
        </h2>
        <p className='text-gray-500 my-2'>
          Use WIPO's Patentscope to search global patent data and learn how inventions are protected worldwide.
        </p>
        <a
          href='https://patentscope.wipo.int/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            gradientDuoTone='purpleToPink'
            className='rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            Explore Patentscope
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img
          src='https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg'
          alt='Patent blueprint illustration'
          className='w-full h-auto rounded-lg'
        />
        {/* 
  
        https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg
        https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg
        https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800
        https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80
        https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg
         */}
      </div>
    </div>
  );
}