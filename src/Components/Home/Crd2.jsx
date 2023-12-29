

import React from 'react';
import RatingStar from '../RatingStar';
// import Card from '../Card';
// import Data from '../../Api/data';
function Cardd(props) {
  const { Reviews } = props;

  return (
    <div style={{ textAlign: 'start' }} className='reviewsection'>
      {Reviews && Reviews.length > 0 ? (
        Reviews.map((Review) => {
          console.log(Review, "review ");
          return (
            <>
            <div>
            <div className='div' key={Reviews.id}>
              <p> {Review?.name}</p>
              <button className='verified'> verified</button>
              <p> {Review.date}</p>
              <p> {Review.rating}</p>

              {/* <RatingStar rating={products?.rating} /> */}
              <p> {Review.productName}</p>
            </div>
            </div>
            </>
          );
        })
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default Cardd;
