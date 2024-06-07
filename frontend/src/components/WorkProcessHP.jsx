import React from 'react';
import process1 from '../assets/health1.svg';
import process2 from '../assets/health2.svg';
import process3 from '../assets/health3.svg';
import '../styles/WorkProcess.scss';

const WorkProcess = () => {
  return (
    <div className="wptopcontainer">
      <div className='wptitle'>OUR WORK PROCESS</div>
      <div className='wpheader'>How To Get Your Weight Loss Journey Started</div>
      <div className='wpbody'>During a consultation, your healthcare provider will assess your current health status, discuss your goals and any concerns you may have, and recommend a treatment plan that is tailored to your individual needs.</div>
      <div className='wpcontainer'>
        <div className="wpleftsquare">
          <div className="wpcircle-image-container">
            <img src={process1} className="wpcircle-image" />
          </div>
          <div className="wpbanner-title1">Schedule A Consult</div>
          <div className="wpbanner-subtitle1">Email or call us to set up an appointment to go over your unique treatment options based on your conditions and concerns.</div>
        </div>

        <div className="wpcentersquare">
          <div className="wpcircle-image-container">
            <img src={process2} className="wpcircle-image" />
          </div>
          <div className="wpbanner-title1">Meet At Your Convenience</div>
          <div className="wpbanner-subtitle1">We also are able to provide televisits allowing for convenient and flexible scheduling, as well as the comfort to seeing the provider from wherever you are.</div>
        </div>

        <div className="wprightsquare">
          <div className="wpcircle-image-container">
            <img src={process3} className="wpcircle-image" />
          </div>
          <div className="wpbanner-title1">Create Weight Loss Plan</div>
          <div className="wpbanner-subtitle1">We then create a program consisting of diet and excercise regiments as well as any recommended medical procedures or prescriptions.</div>
        </div>

      </div>
    </div>
  );
};

export default WorkProcess;
