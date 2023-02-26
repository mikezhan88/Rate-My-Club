import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navBar'>
      <Link to='/'>
        <button className='landing-button'>
          <img src={require("../images/club-logo.png")} className='club-logo' alt="logo" />
        </button>
      </Link>
      <span className='navBar-buttons'>
        <Link to='/login'>
          <button className='navBar-button'>Login</button>
        </Link>
        <Link to='/register'>
        <button className='navBar-button'>Register</button>
        </Link>
      </span>
    </div>
  )
}
