import React from 'react';
import Article from '../components/Article';
import PageTitle from '../components/PageTitle';

export default function Home() {
  return (
    <>
      <PageTitle />
      <>
        {new Array(10).fill('').map((_, index) => (
          <Article key={index} />
        ))}
      </>
    </>
  );
}
