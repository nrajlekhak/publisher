import React, { useState } from 'react';
import Article from './components/Article';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default function Layout({ children }: { children: JSX.Element[] }) {
  return (
    <>
      <div className='absolute w-full'>
        <Nav />
        <div className='my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300'>
          <div>
            <h3 className='text-3xl font-bold leading-tight text-gray-800'>
              Trending Articles
            </h3>
          </div>
        </div>
        <div className='container mx-auto px-6'>
          <div className='w-full rounded '>
            <div className='2xl:mx-auto 2xl:container'>
              <div className='flex flex-wrap'>{children}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
