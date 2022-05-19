import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface Props {
  desc: string;
  title: string;
  value: string;
  setValue: (e: string) => void;
  name: string;
}

export default function TextAreaWysiwyg({
  title,
  desc,
  value,
  setValue,
}: Props) {
  return (
    <>
      <div className='pt-6 border-gray-300 mt-2 px-7'>
        <p className='text-base leading-4 text-gray-800'>{title}</p>
        <div className='pt-5'>
          <Editor
            initialValue={value}
            onChange={(_, editor) => setValue(editor.getContent())}
          />
        </div>
      </div>
      <p className='mt-3 text-xs leading-[15px] text-gray-600 px-7'>{desc}</p>
    </>
  );
}
