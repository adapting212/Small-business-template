import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from "./navBar/Navbar";
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";










function App() {

  const { state, dispatch } = useApplicationData();


  return (
    <Router>
      <Navbar dispatch={dispatch} state={state} />
      <Footer/>
      <Routes>
      <Route path="/" element={<HomePage state={state} dispatch={dispatch} />} />
      <Route path="/about" element={<AboutPage state={state} dispatch={dispatch} />} />

      </Routes>
      
      </Router>
  );
}

export default App;
