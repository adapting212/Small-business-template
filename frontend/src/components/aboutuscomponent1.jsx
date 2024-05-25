import React from 'react';
import background from '../assets/interior.jpg';
import '../styles/AboutPage.scss';

const AboutUsComponent = () => {
  return (
    <main>
        <img src={background} class="background" aria-hidden="true"/>
        <div className="container">
            <span class="title">About Us</span>
        </div>
    </main>
    
    
  );
};

export default AboutUsComponent;
