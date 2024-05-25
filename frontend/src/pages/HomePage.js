import * as React from 'react';
import SplashBanner from '../components/SplashBanner';
import BannerSquares from '../components/BannerSquares';
import ChooseUsBanner from '../components/ChooseUs';




const HomePage = ({ state, dispatch }) => {

  


  return (
    <>
     <SplashBanner/>
     <BannerSquares/>
     <ChooseUsBanner/>
      

  
    </>
  );
};

export default HomePage;