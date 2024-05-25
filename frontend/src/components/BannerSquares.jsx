import React from 'react';
import { Button, Typography } from '@mui/material';
import right from '../assets/landing.jpg';
import '../styles/BannerSquares.scss';

const BannerSquares = () => {
  return (
    <div className="bannersquarecontainer">
      <div className="leftbannersquare">
        <img src={right} alt="Description" className="circle-image" />
        <h1>Text</h1>
        <h2>Text2</h2>
      </div>
      <div className="centerbannersquare">
        <img src={right} alt="Description" className="circle-image" />
        <h1>Text</h1>
        <h2>Text2</h2>
      </div>
      <div className="centerbannersquare2">
        <img src={right} alt="Description" className="circle-image" />
        <h1>Text</h1>
        <h2>Text2</h2>
      </div>
      <div className="rightbannersquare">
        <img src={right} alt="Description" className="circle-image" />
        <h1>Text</h1>
        <h2>Text2</h2>
      </div>
    </div>
  );
};

export default BannerSquares;