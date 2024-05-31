import React from 'react';
import doctor2 from '../assets/bryant.jpg';
import '../styles/doctor2.scss';

const DoctorComponent2 = () => {
  return (
    <div className="d2-container">
      <img src={doctor2} className="doctor-2" aria-hidden="true" />
      <div className='d2-text-container'>
        <div className='d2-title'>
          <span>Brooke bryant</span>
        </div>
        <div className='d2-subtitle'>
          <span>FNP-C</span>
        </div>
        <div className='d2-body'>
          <span>Brooke Spielbauer, FNP has been a primary care practitioner for over 10 years. During this time she has seen the damage that excess weight causes physically, mentally, and emotionally on her patients. This has developed her passion for helping patients feel and look their best. She works with patients helping each feel more self-confident.</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorComponent2;