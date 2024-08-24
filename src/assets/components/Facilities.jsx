import React from 'react'
import './Facilities.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faDumbbell, faLaptopFile, faMinus, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
// import {faBoltLightning} from '@fortawesome/free-solid-svg-icons';



const Facilities = () => {
  return (
    <div className='facilites-content'>
    <div className='text-content'>   
    <p className='title-facilites'>We do our best</p>
    <p className='title-facilites'>facilites provide you</p>
    <span className='lorem-facilites'>Lorem ipsum is simply dummy text of printing and typesetting industry.Lorem Ipsum has been industry's standard dummy</span>
    <div style={{width:'100%',boxSizing:'border-box',marginTop:''}}>
    <button className='facilites-button'>Contact Now</button>
    </div>
   
    </div>
    <div className="facilities-logos">
    <div className="col-1">
       <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faLaptopFile} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Personalized Space</span>
        </div> 
        <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
        <FontAwesomeIcon icon={faSquareParking} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}} />
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Parking</span>
        </div> 
        <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faMugHot} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Breakfast</span>
        </div> 
        <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faWifi} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Free Wifi</span>
        </div> 

    
    </div>
    <div className="col-1">
    <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faBoltLightning} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Free Electricity</span>
        </div> 
        <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faPersonSwimming} size="2xl" flip="horizontal" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Swimming Pool</span>
        </div> 
        <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faDumbbell} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Exercise Space</span>
        </div> 
        <div style={{display:'flex',flexDirection:'column'}} className='logo-list'>
       <FontAwesomeIcon icon={faMinus} size="2xl" style={{color: "#63E6BE",marginBottom:'1rem',marginTop:'1.2rem',marginBottom:'1rem'}}/>
       <span style={{textAlign:'center',margin:'0',fontWeight:'350'}}>Other Service</span>
        </div> 
    </div>
    </div>
    </div>
  )
}

export default Facilities
