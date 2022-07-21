import React, { useEffect, useState } from 'react';

const CatPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://cdn2.thecatapi.com/images/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a cat' />
    </div>
  );
};

export default CatPicture;