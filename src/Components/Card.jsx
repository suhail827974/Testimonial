import React from 'react'
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import './Card.css'

function Card({review}) {
  return (
    <div className='cardParent'>
        <div className='image'>
            <img src={review.img} />
        </div>

        <div className='naam'>
            <p>{review.name}</p>
        </div>

        <div className='jobReview'>
            <p>{review.job}</p>
        </div>
        <div className='leftQuote'>
            <FaQuoteLeft/>
        </div>
        <div className='textReview'>
            {review.text}
        </div>
        <div className='rightQuote'>
            <FaQuoteRight/>
        </div>
        
    </div>
  )
}

export default Card