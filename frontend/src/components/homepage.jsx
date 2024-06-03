import React from 'react';
import { Button, Typography } from '@mui/material';
import right from '../assets/landing.jpg';
import '../styles/HomePageBanner.scss';

const AboutUsBanner = () => {
  return (
    <div className="container">

<div class="right">
  <div class="background-image pink-blob"></div>
  <div class="background-image abstract-flower"></div>
  <div class="aboutUsimg-container">
    <img src={right} alt="Description" class="aboutusimg" />
  </div>
</div>
      <div className="left">
        <Typography variant="h4" gutterBottom className="header1">
          ABOUT US
        </Typography>
        <Typography variant="h5" gutterBottom className="header2">
        A Personalized Approach To Your Well-Being
        </Typography>
        <Typography variant="body1" gutterBottom className="paragraph">
        At Transformative Health & Wellness, we understand that healthcare can be a financial burden for many individuals and families. That's why we strive to provide high quality service at an affordable price. We are committed to ensuring that every patient feels heard, respected and provided with the best possible care.
        </Typography>
        <Typography variant="body1" gutterBottom className="paragraph">
        Weight loss solutions including semaglutide, tirezapetide and other compound services. In addition we also offer aesthetic services such as neurotoxins and fillers, among other things.
        </Typography>

<div className="buttondivabout"><Button variant="contained" className="customButton2">
  Call{'\n'}Now
</Button>
        
        <Button variant="contained" className="customButton1">
          Book Appointment
        </Button></div>

        <Button variant="contained" className="customButton3">
          Read More About Us
        </Button>
      </div>
      

    </div>
  );
};

export default AboutUsBanner;
