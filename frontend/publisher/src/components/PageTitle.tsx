import React from 'react';

export default function PageTitle(): JSX.Element {
  return (
    <>
      <h1 className='lg:text-4xl text-3xl font-semibold leading-9 text-gray-800'>
        Join Our Blog Community
      </h1>
      <p className='md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600'>
        If you're looking for random paragraphs, you've come to the right place.
      </p>
    </>
  );
}
