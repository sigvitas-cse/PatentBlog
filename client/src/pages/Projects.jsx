import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6'>
      <h1 className='text-4xl font-bold text-center'>Explore Patent Projects</h1>
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
        Discover a range of projects aimed at simplifying and showcasing the patent process. Whether you're an innovator, researcher, or legal professional, these tools and examples are designed to support patent filing, search, analysis, and visualization. Dive in to enhance your understanding and management of intellectual property.
      </p>
      <div className='w-full flex flex-col gap-6'>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Why Work on Patent Projects?
          </h2>
          <p className='text-gray-700 mt-2'>
            Engaging with patent-related projects helps you better understand the intricacies of intellectual property. From automating prior art searches to building visual dashboards of patent landscapes, these practical applications empower you to make informed decisions and innovate responsibly.
          </p>
        </section>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            What You'll Learn
          </h2>
          <ul className='list-disc list-inside text-gray-700 mt-2'>
            <li>How to structure patent data for efficient search and analysis</li>
            <li>Creating user interfaces for filing and tracking patents</li>
            <li>Integrating APIs for patent databases like Google Patents or WIPO</li>
            <li>Building tools for visualizing patent trends and citations</li>
            <li>Understanding key legal and technical aspects of patent systems</li>
          </ul>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}
