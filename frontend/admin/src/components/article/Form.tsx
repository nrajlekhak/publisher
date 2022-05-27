import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';

import { PrimaryButton, SecondaryButton } from '@components/common/Button';
import TextAreaWysiwyg from '@components/formElements/TextAreaWysiwyg';
import TextField from '@components/formElements/TextField';
import store from '@redux/store';
import { Article } from '@@types/Article';

function Form({
  edit = false,
  article = null,
  action,
}: {
  edit?: boolean;
  article?: Article | null;
  action: string;
}): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className='px-2 w-full '>
        <div className='flex flex-no-wrap items-start'>
          <div className='w-full '>
            <div className='pb-4 px-2'>
              <div className='bg-white rounded shadow '>
                <Formik
                  initialValues={{
                    title: article?.title || '',
                    slug: article?.slug || '',
                    keywords: article?.keywords || '',
                    description: article?.description || '',
                    metaDesc: article?.metaDesc || '',
                    featured_image: article?.featured_image || '',
                  }}
                  onSubmit={(e) => {
                    store.dispatch({
                      type: action,
                      payload: {
                        _id: edit ? article?._id : '',
                        title: e.title,
                        slug: e.slug,
                        description: e.description,
                        keywords: e.keywords,
                        metaDesc: e.metaDesc,
                        featured_image: e.featured_image,
                      },
                    });
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div className=' px-7'>
                        <p className='text-xl font-semibold leading-tight text-gray-800'>
                          {edit ? 'Edit' : 'Create'} Article
                        </p>
                        <div className='grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 '>
                          <TextField
                            title='Title'
                            desc='Set a simple and precise title'
                            name='title'
                            value={props.values.title}
                            onChange={props.handleChange}
                          />
                          <TextField
                            title='Slug'
                            desc='Set a SEO Friendly Slug'
                            name='slug'
                            value={props.values.slug}
                            onChange={props.handleChange}
                          />
                          <TextField
                            title='Keywords'
                            name='keywords'
                            desc='Set Meta Keywords for SEO'
                            value={props.values.keywords}
                            onChange={props.handleChange}
                          />
                          <TextField
                            title='Meta Description'
                            desc='Meta Description for SEO'
                            name='metaDesc'
                            value={props.values.metaDesc}
                            onChange={props.handleChange}
                          />

                          <TextField
                            title='Featured Image'
                            desc='URL to the featured image'
                            name='featured_image'
                            value={props.values.featured_image}
                            onChange={props.handleChange}
                          />
                        </div>
                      </div>
                      <TextAreaWysiwyg
                        title='Article Body'
                        desc='Enter product meta description for better understanding'
                        value={props.values.description}
                        setValue={(val) =>
                          props.setFieldValue('description', val)
                        }
                        name='description'
                      />
                      <hr className='h-[1px] bg-gray-100 my-14' />
                      <div className='flex items-center justify-center px-7 lg:justify-end md:justify-end gap-x-4 gap-y-4'>
                        <SecondaryButton
                          title='Cancel'
                          type='button'
                          onClick={() => navigate('/admin/articles')}
                        />
                        <PrimaryButton
                          title={edit ? 'Update' : 'Create'}
                          type='submit'
                          onClick={() => {}}
                        />
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
