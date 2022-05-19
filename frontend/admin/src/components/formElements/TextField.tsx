import React from 'react';

interface Props {
  desc: string;
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

export default function TextField({
  desc,
  title,
  value,
  name,
  onChange,
}: Props) {
  return (
    <div>
      <p className='text-base font-medium leading-none text-gray-800'>
        {title}
      </p>
      <input
        className='w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50'
        name={name}
        value={value}
        onChange={(val) => onChange(val)}
      />
      <p className='mt-3 text-xs leading-3 text-gray-600'>{desc}</p>
    </div>
  );
}
