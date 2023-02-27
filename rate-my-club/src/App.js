import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
        <Route exact path="/register" element= {<RegisterPage/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
