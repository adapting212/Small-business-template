import * as React from 'react';
import AboutUsComponent from '../components/aboutuscomponent1';
import AboutUsBanner from '../components/AboutUsBanner';
import Doctor1 from '../components/Doctor1component'
import Doctor2 from '../components/Doctor2component'


const AboutPage = ({ state, dispatch }) => {

  


  return (
     <div className="about-page-container">
      <AboutUsComponent/>
      <AboutUsBanner/>
      <Doctor1/>
      <Doctor2/>
    </div>
  );
};

export default AboutPage;