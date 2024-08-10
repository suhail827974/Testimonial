import React, { useState } from 'react'
import Card from './Card'
import { FaChevronRight,FaChevronLeft } from "react-icons/fa6";
import './Testimonial.css'

function Testimonial(props) {
    let reviews = props.reviews;
    let [index, setIndex]= useState(0)

    function rightHandler(){
        if(index +1 >= reviews.length){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    function leftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length-1)
        }else{
            setIndex(index - 1)
        }
    }
    function surpriseHandler(){
       let randomIndex = Math.floor(Math.random()*reviews.length);
       setIndex(randomIndex);
    }
  return (
    <div className='parentContainer'>
        <div className="container">
        <h1 className='heading'>Our Testimonial</h1>
        <div className='underline'></div>
        <Card review={reviews[index]}/>

        <div className='leftRightBtn'>
            <button onClick={leftHandler}>
                <FaChevronLeft/></button>

            <button onClick={rightHandler}>
                <FaChevronRight/></button>
        </div>
        <div className='supriseBtn'>
            <button onClick={surpriseHandler}>Surprise Me!</button>
        </div>
    </div>
    </div>
  )
}

export default Testimonial