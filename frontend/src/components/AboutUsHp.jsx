import React from 'react';
import person1 from '../assets/person1.jpg';
import effect1 from '../assets/effect1.svg';
import effect2 from '../assets/effect2.svg';
import effect3 from '../assets/zen.png'
import '../styles/AboutUsHp.scss';

const AboutUsHp = () => {
  return (
    <div className="about-hp-container">

        <img src={person1} className="personhp" aria-hidden="true" />
        <img src={effect1} className="effect1hp" aria-hidden="true" />
        <img src={effect2} className="effect2hp" aria-hidden="true" />
        
        <div className='hp-text-container'>
          <div className='hp-about-title'>
            <span>ABOUT US</span>
          </div>
          <div className='hp-sub-title'>
            <span>A Personalized Approach To Your Well-Being</span>
          </div>
          <div className="hp-body">
            <span>At Transformative Health & Wellness, we understand that healthcare can be a financial burden for many individuals and families. That's why we strive to provide high quality service at an affordable price. We are committed to ensuring that every patient feels heard, respected and provided with the best possible care.</span>
            <span>Weight loss solutions including semaglutide, tirezapetide and other compound services. In addition we also offer aesthetic services such as neurotoxins and fillers, among other things.</span>
          </div>
        </div>
        <img src={effect3} className='effect3hp' aria-hidden="true" />
    </div>
  );
};

export default AboutUsHp;