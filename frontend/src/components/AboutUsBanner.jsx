import React from 'react';
import person1 from '../assets/person1.jpg';
import '../styles/AboutUsBanner.scss';

const AboutUsComponent = () => {
  return (
    <div className="about-us-container">
      <main>
        <img src={person1} className="person" aria-hidden="true" />
        <div className='text-container'>
          <div className='about-title'>
            <span>ABOUT US</span>
          </div>
          <div className='sub-title'>
            <span>Proven weight loss results and Aesthetics</span>
          </div>
          <div className="body">
            <span>At our office, we are proud to have a team of highly-skilled and experienced nurse practitioners who are dedicated to helping our patients achieve their best possible health and wellness. They bring a wealth of knowledge and expertise to the table, and are an invaluable asset to our team. They are able to provide a wide range of services, weight loss solutions, and aesthetics such as neurotoxins and fillers to enhance your beauty. They are able to work closely with our patients to create personalized treatment plans that address their specific needs and goals. With their help, our patients can achieve optimal health and wellness and live their best lives.</span>
            <span>We are committed to ensuring that every patient feels heard, respected and provided with the best possible care. We believe that everyone deserves access to quality healthcare, without breaking the bank. That's our promise to you.</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUsComponent;