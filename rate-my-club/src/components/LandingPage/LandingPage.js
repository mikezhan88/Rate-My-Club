import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'

export default function LandingPage() {
  return (
        <React.Fragment>
            <NavBar/>
            <div className='main'>
                <img src={require("../images/logo.png")} className='logo' alt="logo" />
                <input type='text' className='search-bar'placeholder='Find a Club...' ></input>
                <img src={require("../images/search-icon.png")} className='search-icon' alt="search"/>
                <div className='button-container'>
                    <Link to='/clubs'>
                        <button className='landing-button'>
                            <img src={require("../images/clubs-icon.png")} className='clubs-icon' alt="search"/>
                            <span className='button-text'>All Clubs</span>
                        </button>
                    </Link>
                    <Link to='/userpage'>
                        <button className='landing-button'>
                            <img src={require("../images/profile-icon.png")} className='profile-icon' alt="search"/>
                            <span className='button-text'>Profile</span>
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
  )
}
