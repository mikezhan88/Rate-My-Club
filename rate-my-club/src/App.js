import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
