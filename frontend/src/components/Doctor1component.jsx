import React, { useState } from 'react';
import doctor1 from '../assets/spielbauer.jpg';
import '../styles/doctor1.scss';

const DoctorComponent1 = ({ dispatch, state }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="d1-container">
      <img 
        src={doctor1} 
        className={`doctor-1 ${isHovered ? 'hover' : ''}`} 
        aria-hidden="true" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      />
      <div className='d1-text-container'>
        <div className='d1-title'>
          <span>Brooke Spielbauer</span>
        </div>
        <div className='d1-subtitle'>
          <span>FNP-C</span>
        </div>
        <div className='d1-body'>
          <span>
            Brooke Spielbauer, FNP has been a primary care practitioner for over 10 years. During this time she has seen the damage that excess weight causes physically, mentally, and emotionally on her patients. This has developed her passion for helping patients feel and look their best. She works with patients helping each feel more self-confident.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorComponent1;
