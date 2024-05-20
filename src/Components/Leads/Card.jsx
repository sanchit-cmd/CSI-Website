import React from 'react';
import logo from '../HeroSection/tempImg.jpg';
import './styling.css'
const Card = ({title, content, img_src}) => {
  return (
    <div className=''>
      <div class="card">
      <div class="image-box">
        <img src={img_src} alt='no image' />
      </div>
      <div class="content">
        <h2 className='text-2xl text-neutral-200 font-bold'>{title}</h2>
        <p>{content}</p>
        <div className='flex gap-2 justify-center items-center mt-2'>
          <p>LinkedIn</p>
          <p>Insta</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
