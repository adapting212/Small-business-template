import React from 'react';
import { Button, Typography } from '@mui/material';
import right from '../assets/landing.jpg';
import '../styles/AboutUsBanner.scss';

const AboutUsBanner = () => {
  return (
    <div className="container">
      <div className="left">
        <Typography variant="h4" gutterBottom className="header1">
          GET THE CARE YOU DESERVE
        </Typography>
        <Typography variant="h5" gutterBottom className="header2">
          Unlock a Healthier and Happier You
        </Typography>
        <Typography variant="body1" gutterBottom className="paragraph">
          Our team of highly-skilled and experienced nurse practitioners are able to provide a wide range of services, weight loss solutions to enhance your beauty.
        </Typography>
        <Button variant="contained" className="customButton">
          Book Appointment
        </Button>
      </div>
      <div className="right">
        <img src={right} alt="Description" />
      </div>
    </div>
  );
};

export default AboutUsBanner;
