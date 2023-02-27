import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/Login-Page/LoginPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
        <Route exact path="/register" element= {<RegisterPage/>} />
        <Route exact path="/login" element= {<LoginPage/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
