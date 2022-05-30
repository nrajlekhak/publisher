import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Comments from '@components/Comments';
import * as ActionTypes from '@constants/actionTypes';

export default function ArticleDetails() {
  const dispatch = useDispatch();

  const article = useSelector((state: any) => state.reducer.publisher.article);

  const { slug } = useParams();

  useEffect(() => {
    dispatch({ type: ActionTypes.Publisher.GET_ARTICLE, payload: slug });
  }, [slug]);

  if (!article) return <>Error</>;

  return (
    <>
      <div className='dark:bg-gray-900'>
        <div className='mx-auto container w-full flex md:flex-row flex-col justify-between px-6 lg:px-0'>
          <div className='flex flex-col justify-start items-start lg:w-3/5 px-2 lg:px-0'>
            <div className='md:mt-3'>
              <p className='text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9'>
                {article.title}
              </p>
            </div>
            <div>
              <p className='lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none pt-2'>
                {article.authorName}
              </p>
            </div>
            <div className='grid grid-cols-2 mt-8 gap-y-6'>
              <div>
                <p className='text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none'>
                  Published On:{' '}
                  <span className='font-semibold md:font-bold'>
                    {article.publishedOn}
                  </span>
                </p>
              </div>
              <div>
                <p className='text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none'>
                  {/* Edited: */}
                  <span className='font-semibold md:font-medium'>
                    {/* {article.edited} times */}
                  </span>
                </p>
              </div>
              <div>
                <p className='text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none'>
                  Edited:{' '}
                  <span className='font-semibold md:font-bold'>
                    {article.edited} times
                  </span>
                </p>
              </div>
            </div>
            <div className='mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0'>
              <div className='flex flex-col justify-start items-start px-3'>
                <div>
                  {article.featured_image && (
                    <img
                      className='w-full'
                      src={article.featured_image}
                      alt={article.title}
                    />
                  )}
                </div>
                <div
                  className='mt-8 text-justify'
                  dangerouslySetInnerHTML={{ __html: article.description }}
                ></div>
              </div>
            </div>
            <Comments
              articleId={article._id}
              comments={article.comments || []}
            />
          </div>
          <div className='lg:w-1/4'>
            <div className='flex justify-center items-center  my-10 md:mt-0 pb-5'>
              <img
                className='w-full'
                src='https://i.ibb.co/181DvLN/Project-Cover-6.png'
                alt='laptops'
              />
            </div>
            <div className=' px-4 md:px-0 lg:px-16 mt-10 xl:mt-0  w-full flex bg-gradient-to-l from-indigo-600 to-indigo-700'>
              <div className='flex flex-col lg:justify-start  lg:items-start  my-10'>
                <div>
                  <p className='md:text-2xl text-lg font-semibold text-center lg:text-left leading-normal text-white'>
                    Get Webber for your organization
                  </p>
                </div>
                <div className='mt-8'>
                  <p className='md:text-base text-xs text-center lg:text-left leading-normal text-white'>
                    If you're looking for random facts, you've arrived at the
                    correct webpage. The Random Fact Generator has thousands of
                    facts ready to be revealed with a simple click of a mouse.
                  </p>
                </div>
                <div className='mt-8 flex flex-row justify-start items-center space-x-4'>
                  <div>
                    <button className='btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100'>
                      Start trial
                    </button>
                  </div>
                  <div>
                    <button className='btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700'>
                      Contact sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
