import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { BiSearchAlt2} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {IoPeopleCircleSharp} from "react-icons/io5";

export var searchTerm = "";
export default function LandingPage() {

    const [searchState, setSearchState] = useState(false);

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       setSearchTerm(event.target.value);

//       const timeout = setTimeout(() => {
//         window.location.replace('http://localhost:3000/allclubs' + "?=" + event.target.value);
//       }, 500);
  
//       return () => clearTimeout(timeout);
//     }
//   };

    const[searchValue, setSearchValue] = useState("");

    const handleclick = (setSearchState) => {
        const tempState = true;
        setSearchState(tempState);
        console.log("click triggered");
        searchTerm = searchValue;
        console.log(searchTerm);
        return searchTerm;
    }

  return (
        <React.Fragment>
            <NavBar/>
            <div className='main'>
                <img src={require("../images/logo.png")} className='logo' alt="logo" />

                {/* <script> { s = '{ "name" : { "$regex" : ".*(' + searchTerm + ').*", "$options" : "i" } }' } </script>
                <script> {console.log("searchTerm in Landing: " + searchTerm)} </script> */}
               <div className='button-container'>
                    <Link to='/allclubs'>
                        <button className='landing-button'>
                        <div className='clubs-icon'><i className = 'icon'><IoPeopleCircleSharp size = {(60)}/> </i>  </div> 
                        
                            {/* <img src={require("../images/clubs-icon.png")} className='clubs-icon' alt="search"/> */}
                            <span className='button-text'>All Clubs</span>
                        </button>
                    </Link>
                    <Link to={'/allclubs/'} >
                        <button className='landing-button'>
                            
                            <div className='search-icon'><i className = 'icon'><BiSearchAlt2 size = {(60)}/> </i>  </div> 
                            {/* <img src={require("../images/search-icon.jpg")} className='search-icon' alt="search"/> */}
                            <span className='button-text'>Search</span>
                        </button>
                    </Link>
                    <Link to='/userpage'>
                        <button className='landing-button'>
                        <div className='profile-icon'><i className = 'icon'><CgProfile size = {(50)}/> </i>  </div> 
                            {/* <img src={require("../images/profile-icon.png")} className='profile-icon' alt="search"/> */}
                            <span className='button-text'>Profile</span>
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
  )
};