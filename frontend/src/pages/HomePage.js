import * as React from 'react';
import SplashBanner from '../components/SplashBanner';
import BannerSquares from '../components/BannerSquares';
import AboutUsBanner from '../components/AboutUs';
import ChooseUsBanner from '../components/ChooseUs';




const HomePage = ({ state, dispatch }) => {

  


  return (
    <>
     <SplashBanner/>
     <BannerSquares/>
     <AboutUsBanner/>
     <ChooseUsBanner/>
      

  
    </>
  );
};

export default HomePage;