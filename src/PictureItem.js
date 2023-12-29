// PictureItem.js

import React from 'react';
import { FaStar } from "react-icons/fa";

const PictureItem = ({ picture }) => {
  return (
    <div className="card">
      <img className='picturesimg' src={picture.imgae} alt={picture.name} />
      <butt className='buttononpic'>on sale</butt>
      <p className='picturesname'>{picture.name}</p>
      <p className='price'>{picture.price}</p>
      <p className='rating'>{picture.rating}</p>
      <FaStar className='star' />    <p className='reviews'>{picture.reviews}</p>
    </div>
  );
};

export default PictureItem;
