import React from 'react';
import './Main.css';
import img1 from './img2.png';
import img2 from './img3.png';
import img3 from './img4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <div className='main-content'>
      <div className='main-dummy'>
        <div className='dummy-text'> 
        <p className='main-text'>Our most popular Hotels</p>
      <span className='main-lorem'>
        Lorem ipsum is simply a dummy text of the printing and typesetting industry.
      </span>
        </div>
     
      <div className="main-view">
        <button className='main-button'>View All</button>
      </div>
      </div>
      

      <div className="hotel-list">
        <div className="card-container">
          <div className="card-component">
            <div className="card">
              <img src={img1} alt="" />
              <p style={{ color: 'rgb(14, 186, 48)' }}>London NW8 7JT England</p>
              <p style={{ fontWeight: '550', fontSize: '1.5rem' }}>Danubius Hotel Regents Park</p>
              <div style={{ display: 'flex' }}>
                <span>200$ Per Night</span>
                <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '9rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
              </div>
            </div>

            <div className="card">
              <img src={img2} alt="" />
              <p style={{ color: 'rgb(14, 186, 48)' }}>London NW8 7JT England</p>
              <p style={{ fontWeight: '550', fontSize: '1.5rem' }}>The Resident Soho</p>
              <div style={{ display: 'flex' }}>
                <span>200$ Per Night</span>
                <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '9rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                
              </div>
              
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <p style={{ color: 'rgb(14, 186, 48)' }}>London NW8 7JT England</p>
              <p style={{ fontWeight: '550', fontSize: '1.5rem' }}>London Bridge Hotel</p>
              <div style={{ display: 'flex' }}>
                <span>200$ Per Night</span>
                <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '9rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                   <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: '#ff6251', marginLeft: '0.4rem', top: '0.35rem', position: 'relative' }}
                />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
