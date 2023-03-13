import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider, googleLogout, useGoogleLogin   } from '@react-oauth/google';
import axios from 'axios';

export default function LoginPage() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    const google = () => {

        return (
            <GoogleLogin
                onSuccess={(codeResponse) => {
                    setUser(codeResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
        )
    }
    
  return (
    <React.Fragment>
        <NavBar/>
        <div className='login-page'>
        <img src={require("../images/logo.png")} className='login-logo' alt="logo" />
            <div className='login-container'>
                <span className='login-bigtext'>LOGIN</span>
                <input type='text' className='login-input' placeholder='Email Address' ></input>
                <input type='text' className='login-input' placeholder='Password' ></input>
                <button className='login-button' type='button'>LOGIN</button>
                <div className='line-text'>
                    <hr className='line'></hr>
                    <div className='or-text'>OR</div>
                    <hr className='line'></hr>
                </div>
                
                <button className='google-signin' type='button' onClick={() => login()}>
                    <img src={require("../images/google-logo.png")} className='google-logo' alt="search" />
                   
                    {/* <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              /> */}
                    
                    Continue with Google
                    {
                        console.log(profile.name)
                    }
                </button>
                
                <span className='register-redirect'>Are you a new club? <span/>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <span className='register-here'>Register here</span>
                    </Link>
                </span>
            </div>
        </div>
    </React.Fragment>
  )
}

