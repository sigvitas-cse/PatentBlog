import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Patent Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Patent Blog! This platform was created by Dheeraj Verma as a dedicated space to explore and share insights into the fascinating world of patents. Dheeraj is passionate about intellectual property and aims to simplify complex patent topics for inventors, professionals, and curious minds alike.
            </p>

            <p>
              On this blog, you'll find regular articles and tutorials covering topics such as patent filing procedures, patent law basics, international patent systems, recent innovations, and strategies for protecting intellectual property. Whether you're a startup founder, a researcher, or just interested in how ideas are protected legally, there's something here for you.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage in meaningful discussions with fellow readers. You can like others' comments and join the conversation through replies. We believe a knowledgeable community can empower individuals to better navigate the patent landscape.
            </p>

          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}