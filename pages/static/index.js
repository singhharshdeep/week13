import React from 'react';

function StaticDogImage({ imageUrl }) {
  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={imageUrl} alt="A random dog" style={{ width: '300px', height: '300px' }} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();

  return {
    props: {
      imageUrl: data.message,
    },
  };
}

export default StaticDogImage;