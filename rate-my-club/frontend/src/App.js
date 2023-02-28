import React, { useState, useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/Login-Page/LoginPage';
import RegisterUserPage from './components/RegisterUserPage/RegisterUserPage';
import NavBar from './components/NavBar/NavBar';


function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        date: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    date: data.Date,
                });
            })
        );
    }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
        <Route exact path="/register" element= {<RegisterPage/>} />
        <Route exact path="/login" element= {<LoginPage/>} />
        <Route exact path="/registeruser" element= {<RegisterUserPage/>} />
      </Routes>

        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.date}</p>
            </header>
        </div>
    </React.Fragment>


  );
}

export default App;

