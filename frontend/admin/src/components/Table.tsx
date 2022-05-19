import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TableProps {
  title: string;
}

const Table = ({ title }: TableProps) => {
  const navigate = useNavigate();
  return (
    <div className='py-20 w-full'>
      <div className='mx-auto container bg-white dark:bg-gray-800 shadow rounded'>
        <div className='flex flex-col lg:flex-row p-4 lg:p-8 justify-end lg:items-stretch mr-10 pr-5 '>
          <div className='flex flex-row items-end '>
            <div className='flex items-right lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6'>
              <p
                className='text-base text-gray-600 dark:text-gray-400'
                id='page-view'
              >
                Viewing 1 - 20 of 60
              </p>
              <a className='text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-chevron-left'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <polyline points='15 6 9 12 15 18' />
                </svg>
              </a>
              <a className='text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-chevron-right'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <polyline points='9 6 15 12 9 18' />
                </svg>
              </a>
            </div>

            <div className='lg:ml-6 flex items-center'>
              <div
                className='text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center'
                onClick={() => navigate('/admin/articles/create')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-plus'
                  width={28}
                  height={28}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
          <table className='min-w-full bg-white dark:bg-gray-800'>
            <thead>
              <tr className='w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8'>
                <th className='pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'></th>
                <th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
                  Invoice Number
                </th>
                <th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
                  Client
                </th>
                <th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
                  Company Contact
                </th>
                <th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
                  Amount
                </th>
                <th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
                  Date
                </th>
                <th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
                  <div className='opacity-0 w-2 h-2 rounded-full bg-indigo-400' />
                </th>
                <td className='text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4'>
                  More
                </td>
              </tr>
            </thead>
            <tbody>
              {new Array(20).fill('').map((_, index) => (
                <tr
                  className='h-24 border-gray-300 dark:border-gray-200 border-b'
                  key={index}
                >
                  <td className='pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4'></td>

                  <td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
                    #MC10023
                  </td>
                  <td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='h-8 w-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png'
                          alt=''
                          className='h-full w-full rounded-full overflow-hidden shadow'
                        />
                      </div>
                      <p className='ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
                    $2,500
                  </td>
                  <td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 rounded-full bg-indigo-400' />
                  </td>
                  <td className='pr-8 relative'>
                    <div className='dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32'>
                      <ul className='bg-white dark:bg-gray-800 shadow rounded py-1'>
                        <li className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal'>
                          Edit
                        </li>
                        <li className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal'>
                          Delete
                        </li>
                        <li className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                    <button className='text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
