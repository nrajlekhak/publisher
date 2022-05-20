import { PrimaryButton } from '@components/common/Button';
import TextField from '@components/formElements/TextField';
import LoginWithGithub from '@components/LoginWithGithub';
import React from 'react';

function MyApp() {
  return (
    <div className='h-full w-full px-4'>
      <div className='flex flex-col items-center justify-center'>
        <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10'>
          <p
            tabIndex={0}
            role='heading'
            aria-label='Login to your account'
            className='text-2xl text-center font-extrabold leading-6 text-gray-800 pb-5'
          >
            Login to your account
          </p>
          <LoginWithGithub />
          <div className='w-full flex items-center justify-between py-5'>
            <hr className='w-full bg-gray-400' />
            <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
              OR
            </p>
            <hr className='w-full bg-gray-400  ' />
          </div>
          <div>
            <TextField
              desc=''
              name='email'
              title='email'
              value=''
              type='email'
              onChange={() => {}}
            />
          </div>
          <div className='mt-6  w-full'>
            <TextField
              desc=''
              name='password'
              value=''
              title='password'
              type='password'
              onChange={() => {}}
            />
          </div>
          <div className='mt-8'>
            <PrimaryButton
              type='submit'
              title='Login'
              classNames='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
              onClick={() => {}}
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
