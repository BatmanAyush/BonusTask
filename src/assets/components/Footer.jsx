import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div style={{boxSizing:'border-box'}}>
        <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0817407877576!2d-122.4019021!3d37.7881241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580881f0c9dd7%3A0xbe09e1083f7d7fcb!2sPalace%20Hotel%2C%20a%20Luxury%20Collection%20Hotel%2C%20San%20Francisco!5e0!3m2!1sen!2sin!4v1724361318685!5m2!1sen!2sin" 
      width='2000' height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='Responsive Google Map'></iframe>
        </div>
        <div style={{position:'relative'}} className="head">
        <div className="footer-bar">
        <div className="footer-text">
            <p>Location of our Hotelos</p>
            <span>Lorem ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum has been industry's</span>
        </div>

        <div className="email-contact">
            
           <input type="text" placeholder='Enter Your Email' className='input-email'/>
           <button className='footer-button'>Contact</button>
        </div>
        </div>
        </div>
      
     
    </div>
  )
}

export default Footer
