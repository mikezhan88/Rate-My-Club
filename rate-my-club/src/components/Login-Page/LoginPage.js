import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider, googleLogout, useGoogleLogin   } from '@react-oauth/google';
import axios from 'axios';
import { genUUID } from '../../App';
import { useNavigate } from "react-router-dom";




export var isLoggedIn

export default function LoginPage() {

    let navigate = useNavigate();
    
    console.log(isLoggedIn)
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState(new Array());
    if (user.length === 0) {
        isLoggedIn = false
    }
  
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)

        
    });

    // const { isSignedIn } = useGoogleLogin()


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
                
                if (user.length != 0){
                    isLoggedIn = true;
                    console.log(isLoggedIn)
                }
               
            }

        },
        [ user ]
    );

    // useEffect( () => {
    //     console.log("profile use effect: " + profile.email);
    // }, [profile]);
    
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    useEffect(() => {
        console.log(profile)

        if (profile.length != 0){
            var username = (profile.email).split('@')[0];

            const create_user = () => {
                (console.log("try post user"));
                fetch('http://localhost:8000/users/', {
                    method: 'POST',
                    headers: {"Content-type" : "application/json"},
                    body: JSON.stringify({
                        "user_id": genUUID(),
                        "name": profile.name,
                        "username" : username
                    })
                })

                isLoggedIn = true
                let path = '/userpage/' + username;
                console.log("login page isloggedin: " + isLoggedIn)
                navigate(path);
                navigate(0);

            
            };
            
            console.log("tried get user")
            const getUser = async() => {
                const userURL = "http://localhost:8000/users/" + username;
                console.log(userURL);
                const response = await fetch(userURL, {
                    method: 'GET',
                })
                
                const myJson = await response.json();
                console.log(myJson);
                if (myJson.detail == "User not found") {
                    console.log("ERROR");
                    create_user();

                } else {
                    isLoggedIn = true
                    username = myJson.username;
                    let path = '/userpage/' + username;
                    console.log("login page isLoggedIn: " + isLoggedIn)
                    navigate(path);
                    navigate(0);
                }

                
            };
            getUser();

        }
    }, [profile]);


    // const google = () => {

    //     return (
    //         <GoogleLogin
    //             onSuccess={(codeResponse) => {
    //                 setUser(codeResponse);
    //             }}
    //             onError={() => {
    //               console.log('Login Failed');
    //             }}
    //           />
    //     )
    // }
    
  return (
    <React.Fragment>
        <NavBar/>
        <div className='login-page'>
        <img src={require("../images/logo.png")} className='login-logo' alt="logo" />
            <div className='login-container'>
                {/* <span className='login-bigtext'>LOGIN</span>
                <input type='text' className='login-input' placeholder='Email Address' ></input>
                <input type='text' className='login-input' placeholder='Password' ></input>
                <button className='login-button' type='button'>LOGIN</button>
                <div className='line-text'>
                    <hr className='line'></hr>
                    <div className='or-text'>OR</div>
                    <hr className='line'></hr>
                </div> */}
                
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
                        
                        console.log(profile.email)
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

