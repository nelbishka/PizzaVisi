import React from 'react'
import Nav from './Nav'
import BannerImage from '../Assets/home-banner-background.png'
import PizzaImage from '../Assets/home-banner-image.png'


const Home = () => {
  return (
    <div className='home-container' id='home'>
        <Nav />

        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerImage} alt='pizza store'/>
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your Favorite Pizza Delivered Hot & Tasty
            </h1>
            <p className='primary-text'>
              Explore our diverse range of mouthwatering pizza options.
              Signature recipes crafted for the ultimate pizza experience.
            </p>

          </div>
          <div className='home-image-secton'>
              <img src={PizzaImage} alt='pizza shop'/>
            </div>
        </div>
        
    </div> 
    
    
  )
}

export default Home