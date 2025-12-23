import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
<div>
    <div className="hero-hand-icon">
        <p>NEW</p>
        <img src={hand_icon} alt=''/>
    </div>
    <p>COLLECTIONS</p>
    <p>FOR EVERYONE</p>
</div>
<div className="latest-btn">
    
    <div>Latest</div>
    <img src={arrow} alt=''/>
    </div> 
       </div>
        <div className="hero-right"></div>
<img src={hero_image} alt='' />
    </div>
  )
}

export default Hero ;