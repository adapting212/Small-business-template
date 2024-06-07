import * as React from 'react';
import SplashBanner from '../components/SplashBanner';
import BannerSquares from '../components/BannerSquares';
import AboutUsHp from '../components/AboutUsHp';
import ChooseUsBanner from '../components/ChooseUs';
import WorkProcess from '../components/WorkProcessHP';



const HomePage = ({ state, dispatch }) => {

  


  return (
    <>
     <SplashBanner/>
     <BannerSquares/>
     <AboutUsHp/>
     <ChooseUsBanner/>
     <WorkProcess/>

    </>
  );
};

export default HomePage;