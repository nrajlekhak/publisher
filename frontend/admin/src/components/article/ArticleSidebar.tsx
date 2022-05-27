import React from 'react';
import { ArticleHistory } from '@@types/Article';

export default function ArticleSidebar({
  articleHistory,
}: {
  articleHistory: ArticleHistory[] | null;
}) {
  return (
    <>
      <div className='px-4'>
        <div className='border rounded-lg pb-6 border-gray-200'>
          <div className='flex items-center border-b border-gray-200 justify-between px-6 py-3'>
            <p className='text-sm lg:text-xl font-semibold leading-tight text-gray-800'>
              Article's Edit History
            </p>
          </div>
          <div className='px-6 pt-6 overflow-x-auto'>
            <table className='w-full whitespace-nowrap'>
              <tbody>
                {articleHistory &&
                  articleHistory.map((h) => (
                    <tr key={h._id}>
                      <td>
                        <div className='flex items-center'>
                          <div className='pl-3'>
                            <div className='flex items-center text-sm leading-none'>
                              <p className='font-semibold text-gray-800'>
                                {h.title}
                              </p>
                              <p className='text-blue-500 ml-3'>
                                {h.publishedOn}
                              </p>
                            </div>
                            <p className='text-xs md:text-sm leading-none text-gray-600 mt-2'>
                              {h.authorName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='pl-16'>
                        <div>
                          <p className='text-sm font-semibold leading-none text-right text-gray-800'>
                            $2200
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
