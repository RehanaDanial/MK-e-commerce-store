import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

function RatingStar({rating}) {
  return (
    <div className="star-parent">
            {rating > 0 ? <FaStar/> : <FaRegStar/>}
            {rating > 1 ? <FaStar/> : <FaRegStar/>}
            {rating > 2 ? <FaStar/> : <FaRegStar/>}
            {rating > 3 ? <FaStar/> : <FaRegStar/>}
            {rating > 4 ? <FaStar/> : <FaRegStar/>}
          </div> 
  )
}

export default RatingStar