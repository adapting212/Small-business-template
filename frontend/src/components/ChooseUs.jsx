import React from 'react';
import { Button, Typography } from '@mui/material';
import right from '../assets/landing.jpg';
import '../styles/ChooseUsBanner.scss';

const ChooseUsBanner = () => {
  return (
    <div className="choosecontainer">
<div className="choosetop">
<div className="chooseleft">
  
<img src={right} alt="Description" class="chooseimg" />
    <img src={right} alt="Description" class="choose2img" />
  
</div>
<div className="chooseright">
<img src={right} alt="Description" class="choose3img" />
<img src={right} alt="Description" class="choose4img" />
</div>
</div>
      <div className="choosebottom">
        <Typography variant="h4" gutterBottom className="chooseheader1">
        WHY CHOOSE US
        </Typography>
        <Typography variant="h5" gutterBottom className="chooseheader2">
        A Personalized Approach To Your Well-Being
        </Typography>
        <Typography variant="body1" gutterBottom className="chooseparagraph">
        At Transformative Health & Wellness, we understand that healthcare can be a financial burden for many individuals and families. That's why we strive to provide high quality service at an affordable price. We are committed to ensuring that every patient feels heard, respected and provided with the best possible care.
        </Typography>
        <Typography variant="h5" gutterBottom className="chooseheader2">
        A Personalized Approach To Your Well-Being
        </Typography>
        <Typography variant="body1" gutterBottom className="chooseparagraph2">
        Weight loss solutions including semaglutide, tirezapetide and other compound services. In addition we also offer aesthetic services such as neurotoxins and fillers, among other things.
        </Typography>
        <Typography variant="h5" gutterBottom className="chooseheader2">
        A Personalized Approach To Your Well-Being
        </Typography>
        <Typography variant="body1" gutterBottom className="chooseparagraph3">
        Weight loss solutions including semaglutide, tirezapetide and other compound services. In addition we also offer aesthetic services such as neurotoxins and fillers, among other things.
        </Typography>



        <Button variant="contained" className="choosecustombutton">
          Read More About Us
        </Button>
      </div>
      

    </div>
  );
};

export default ChooseUsBanner;
