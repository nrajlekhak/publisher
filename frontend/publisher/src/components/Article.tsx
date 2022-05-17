import React from 'react';

const Article = () => {
  return (
    <>
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2'>
        <div>
          <div className='relative'>
            <img src='https://i.ibb.co/HxkBZQM/img-1.png' alt='stairs' />
            <div className='bg-white absolute top-0 left-0'>
              <p className='text-base leading-4 py-3 px-5 text-gray-800'>
                News
              </p>
            </div>
          </div>
          <p className='text-base font-light leading-4 text-gray-800 mt-6'>
            Michael Jackson
          </p>
          <h1 className='text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800'>
            Moving up the corporate ladder?
          </h1>
          <p className='text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
        </div>
      </div>
    </>
  );
};

export default Article;
