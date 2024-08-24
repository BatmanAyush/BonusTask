import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-content'>
        <div >
        <p className='title'>LOREM IPSUM</p>
        </div>

<div  className='props' style={{display:'flex',gap:'50px'}}>
   <p>Booking</p>
   <p>Facilites</p>
    <p>About</p>
    <p>Location</p>
    <p>Contact</p>
</div>
<div>
    <button className='login-button'>Login</button>
</div>
    </div>
  )
}

export default Header
