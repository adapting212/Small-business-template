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
import './styles/App.scss';

function App() {
  const { state, dispatch } = useApplicationData();

  return (
    <div className="app-container">
      <Router>
        <Navbar dispatch={dispatch} state={state} />
        <Routes>
          <Route path="/" element={<HomePage state={state} dispatch={dispatch} />} />
          <Route path="/about" element={<AboutPage state={state} dispatch={dispatch} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
