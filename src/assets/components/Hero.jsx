import React from 'react'
import './Hero.css'
import img1 from './img1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  return (
  
        <div className='hero-content'>
           <div className='hero-text'>
            <div className='text'>
            <p className='hero-title'>Find your perfect</p>
            <p className='hero-title'>place to Stay</p>
            <span className='hero-lorem'>Lorem ipsum is simply dummy text of the printing and typesetting industry which creates random texts</span>

         <div className='fuck-this-shit'>
         <FontAwesomeIcon icon={faPlay} size="2xs" style={{color: "#63E6BE",}}  className='play-button'/>
         <p>Watch Video</p>
         </div>
            </div>
          
            </div>
          <div className='hero-image'>
          <img src={img1} className='hero-photo' />
          </div>
         
       

        </div>
      
   
  )
}

export default Hero
