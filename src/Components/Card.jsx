import React,{useEffect,useState} from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import RatingStar from './RatingStar';

function Card({Data}) {
  const [discountedPrice, setDiscountedPrice] = useState(0)
  useEffect(()=>{
    const discountedPrice = Data.price * 0.5;
    setDiscountedPrice(discountedPrice)
  },[Data])
  
  return (
  <>
  <Link to={`/nextpage?name=${Data.name}`} className="link">
    <div key={Data.name} className="card">
      <div className="Imag-parent">
      <img className='picturesimg' src={Data?.imgae[0]} />
          <p className='buttononpic'>ON SALE</p>
      
        
      </div>
          <p className='Datasname'>{Data?.name}</p>
          <div className="rating">

            <RatingStar rating={Data?.rating}/>
           
          <p className='reviews'>{Data?.reviews} Reviews</p>
          </div>
          <div className="price-parent">
          <p>Rs. {discountedPrice}</p>
          <s className='price'>Rs. {Data?.price}</s>
          </div>
          </div>
        {/* </div> */}
        </Link>
</>
  )
}





export default Card;



























