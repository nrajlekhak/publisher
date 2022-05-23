import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';

import { PrimaryButton, SecondaryButton } from '@components/common/Button';
import TextAreaWysiwyg from '@components/formElements/TextAreaWysiwyg';
import TextField from '@components/formElements/TextField';
import * as ActionTypes from '@constants/actionTypes';
import store from '@redux/store';

function Form(): JSX.Element {
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
                    title: '',
                    slug: '',
                    keywords: '',
                    description: '',
                    metaDesc: '',
                  }}
                  onSubmit={(e) => {
                    store.dispatch({
                      type: ActionTypes.Article.CREATE_ARTICLE,
                      payload: {
                        title: e.title,
                        slug: e.slug,
                        description: e.description,
                        keywords: e.keywords,
                        metaDesc: e.metaDesc,
                      },
                    });
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div className=' px-7'>
                        <p className='text-xl font-semibold leading-tight text-gray-800'>
                          Create Article
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
                          onClick={() => navigate('/articles')}
                        />
                        <PrimaryButton
                          title='Create'
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
