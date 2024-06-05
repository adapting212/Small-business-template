import React from 'react';
import { Button, Typography } from '@mui/material';
import topleft from '../assets/weight-loss2-m.png';
import topright from '../assets/weight-loss1-m.png';
import bottomleft from '../assets/weight-loss5-m.png';
import bottomright from '../assets/weight-loss3-m.png';
import '../styles/ChooseUsBanner.scss';

const ChooseUsBanner = () => {
  return (
    <div className="choosecontainer">
      <div className="choosebottom">
        <div className="choosetitle">
          WHY CHOOSE US
        </div>
        <div className="chooseheader1">
          We Care About Your Health And Wellness
        </div>
        <div className="choosesubtitle">
          At Transformative Health and Wellness we promise the following:
        </div>
        <div className="choosebody1">
          Experienced and Qualified staff
        </div>
        <div className="choosebody2">
          To provide a high level of care to our patients in addition to our clinic's commitment to creating personalized treatment plans that are tailored to each individual's unique needs and goals.
        </div>
        <div className="choosebody1">
          Quick access with technology
        </div>
        <div className="choosebody2">
          We also are able to provide televisits allowing for convenient and flexible scheduling, as well as the comfort to seeing the provider from wherever you are.
        </div>
        <div className="choosebody1">
          Wide range of services
        </div>
        <div className="choosebody2">
        These include services such as a weight loss program, microdermabrasion, micro needling, dermaplaning, neurotoxins and fillers, which could make it a one-stop-shop for patients' aesthetic needs.
        </div>
        <Button variant="contained" className="choosecustombutton">
          Read More About Us
        </Button>
      </div>
      <div className="choosetop">
        <div className="chooseleft">
          <img src={topleft} alt="Description" className="chooseimg" />
          <img src={bottomleft} alt="Description" className="choose2img" />
        </div>
        <div className="chooseright">
          <img src={topright} alt="Description" className="choose3img" />
          <img src={bottomright} alt="Description" className="choose4img" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUsBanner;
