import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import RegisterUserPage from './components/RegisterUserPage/RegisterUserPage';
import NavBar from './components/NavBar/NavBar';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
        <Route exact path="/register" element= {<RegisterPage/>} />
        <Route exact path="/registeruser" element= {<RegisterUserPage/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

