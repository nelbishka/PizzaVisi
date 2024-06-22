import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What Are They Saying</h1>
        <p className='primary-text'>Take a look at our customers feedback to get a better vision of our business</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>A place that won't disappoint you. The pizzas are good and the price is very cheap. The service is kind and quick. Not the yummiest pizza ever but zero complaints for the price you paid. Familiar size is really big! Recommended for a filling and quick dinner!</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Mike Amiri</h2>
      </div>
    </div>
  )
}

export default Testimonials