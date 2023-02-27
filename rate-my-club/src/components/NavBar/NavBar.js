import {Link} from 'react-router-dom'
import React, {useState, useEffect, useRef} from 'react';

export default function NavBar() {

  const [open, setOpen] = useState(false);
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
       
        <div className='navbar-menu-container'>
              <div className='navbar-menu-trigger'onClick={()=>{setOpen(!open)}}>
                
                  <button className='navBar-button'>Register</button>
                 
                </div>
            
                <div className= {`navbar-dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>
                          <DropdownItem text = {"Create a New Club"}/>
                        </Link>
                        <DropdownItem text = {"Create a User Profile"}/>
                    </ul>
                </div>
            
          </div>
          </span>
      
    </div>
  )
}

function DropdownItem(props){
    return(
        <li className= 'navbar-dropdownItem'>
            <a>{props.text}</a>
        </li>
    );
  }
