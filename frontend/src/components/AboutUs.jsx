import React from 'react';
import { Button, Typography } from '@mui/material';
import right from '../assets/homepage/landing.jpg';
import '../styles/AboutUsBanner.scss';

const AboutUsBanner = () => {
  return (
    <div className="container">

<div class="left">
  <div class="background-image pink-blob"></div>
  <div class="background-image abstract-flower"></div>
  <div class="aboutUsimg-container">
    <img src={right} alt="Description" class="aboutusimg" />
  </div>
</div>
      <div className="right">
        <Typography variant="h4" gutterBottom className="header1">
          GET THE CARE YOU DESERVE
        </Typography>
        <Typography variant="h5" gutterBottom className="header2">
          Unlock a Healthier and Happier You
        </Typography>
        <Typography variant="body1" gutterBottom className="paragraph">
          Our team of highly-skilled and experienced nurse practitioners are able to provide a wide range of services, weight loss solutions to enhance your beauty.
        </Typography>

<div className="buttondivabout"><Button variant="contained" className="customButton2">
          Call Now
        </Button>
        
        <Button variant="contained" className="customButton1">
          Book Appointment
        </Button></div>

        <Button variant="contained" className="customButton3">
          Book Appointment
        </Button>
      </div>
      

    </div>
  );
};

export default AboutUsBanner;
