import React from 'react';
import health1 from '../assets/health1.svg';
import health2 from '../assets/health2.svg';
import health3 from '../assets/health3.svg';
import health4 from '../assets/health4.svg';
import '../styles/BannerSquares.scss';

const BannerSquares = () => {
  return (
    <div className="bannersquarecontainer">
      <div className="leftbannersquare">
        <div className="circle-image-container">
          <img src={health1} className="circle-image" />
        </div>
        <div className="banner-title1">Semaglutide</div>
        <div className="banner-subtitle1">About Semaglutide</div>
      </div>

      <div className="centerbannersquare">
        <div className="circle-image-container">
          <img src={health2} className="circle-image" />
        </div>
        <div className="banner-title2">Dermal Filler</div>
        <div className="banner-subtitle2">About fillers</div>
      </div>

      <div className="centerbannersquare2">
        <div className="circle-image-container">
          <img src={health3} className="circle-image" />
        </div>
        <div className="banner-title1">Tirezapetide</div>
        <div className="banner-subtitle1">About Tirezapetide</div>
      </div>

      <div className="rightbannersquare">
        <div className="circle-image-container">
          <img src={health4} className="circle-image" />
        </div>
        <div className="banner-title2">Neurotoxins</div>
        <div className="banner-subtitle2">About Neurotoxins</div>
      </div>
    </div>
  );
};

export default BannerSquares;
