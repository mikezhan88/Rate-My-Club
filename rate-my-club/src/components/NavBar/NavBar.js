import {Link} from 'react-router-dom'
import React, {useState, useEffect, useRef} from 'react';
import { isLoggedin } from '../Login-Page/LoginPage';

export default function NavBar() {

  const [open, setOpen] = useState(false);

  let menu = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menu.current.contains(e.target)){
        setOpen(false);
        console.log(menu.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });



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
       
        <div className='navbar-menu-container' ref={menu}>
              <div className='navbar-menu-trigger'onClick={()=>{setOpen(!open)}}>
                
                  <button className='navBar-button'>Register</button>
                 
                </div>
            
                <div className= {`navbar-dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <Link to='/registerClub' style={{ textDecoration: 'none', color: 'black' }}>
                          <DropdownItem text = {"Create a New Club"}/>
                        </Link>
                        <Link to='/registerUser' style={{ textDecoration: 'none', color: 'black' }}>
                          <DropdownItem text = {"Create a User Profile"}/>
                        </Link>
                       
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



