import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomePage from './pages/HomePage';
import Navbar from "./navBar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";










function App() {

  const { state, dispatch } = useApplicationData();


  return (
    <div className="App">
      
      <HomePage  state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
