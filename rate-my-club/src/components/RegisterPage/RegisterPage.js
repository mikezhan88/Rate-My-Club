import React, {useState, useEffect, useRef, useCallback} from 'react';
import NavBar from '../NavBar/NavBar'
import Dropdown from './Dropdown';
import { categoriesOptions, sizeOptions, commitmentOptions } from './DropdownObjects';
import { genUUID } from '../../App';
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {

  let navigate = useNavigate();
  var uid = genUUID();

  function postClub() {
    fetch('http://localhost:8000/clubs/', {
        method: 'POST',
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({
            "_id": uid, //not from form
            "name": clubName,
            "description": text,
            "email": email,
            "profile_picture": "default_club.png", //not from form
            "tags": ["new club!!!"], //not from form
            "clubWebsite": website,
            "clubSize": size,
            "commitmentLevel": commitment,
            "updates": [{'content': "None at this time :)"}] //not from form
        }) 
    })

    let path = '/clubpage/' + uid;
    console.log("path: " + path) 
    navigate(path);
    navigate(0);
  } 

  const [clubName, setClubName] = useState("");
  const handleOnChangeCN = (e) => {
    setClubName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [website, setWebsite] = useState("");
  const handleOnChangeWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const [size, setSize] = useState("Club Size");
  const handleOnChangeSize = (e) => {
    setSize(e.target.value);
  };

  const [commitment, setCommitment] = useState("Commitment Level");
  const handleOnChangeCommitment = (e) => {
    setCommitment(e.target.value);
  };

  const [text, setText] = useState("");
  const handleOnChangeText = (e) => {
    setText(e.target.value);
  };

  return (
        <React.Fragment>
          <NavBar/>
          <div className='register-page'>
              <img src={require("../images/logo.png")} className='register-logo' alt="logo" />
              <div className='register-largetext'>Welcome to Rate My Club!</div>
              <div className='register-smalltext'>Please fill out the following information about your club to join our deck.</div>
              <div className='register-page-backdrop'>
                  <input id="form-clubName" type='text' className='club-register-input' placeholder='Club Name *' value={clubName} onChange={handleOnChangeCN}></input>
                  {/* <input type='text' className='club-register-input' placeholder='Club Tag Line *' ></input> */}
                  <input id="form-email" type='text' className='club-register-input' placeholder='Club Email Address *' value={email} onChange={handleOnChangeEmail}></input>
                  {/* <input id="form-clubName" type='text' className='club-register-input' placeholder='Password *' ></input> */}
                  <input id="form-website" type='text' className='club-register-input' placeholder='Club Website *' value={website} onChange={handleOnChangeWebsite}></input>

                  {/* <Dropdown isMulti placeholder='Select Categories *' options={ categoriesOptions }></Dropdown> */}

                  {/* <Dropdown null placeholder='Club Size *' options={ sizeOptions }></Dropdown> */}
                  <select className="size_select" value={size} onChange={handleOnChangeSize}>
                        <option value="">Club Size</option>
                        <option value="< 50 ppl">Less than 50</option>
                        <option value="50-100 ppl">50 to 100</option>
                        <option value="100+ ppl">Greater than 100</option>
                  </select>

                  {/* <Dropdown null placeholder='Commitment Level *' options={ commitmentOptions }></Dropdown> */}
                  <select className="commitment_select" value={commitment} onChange={handleOnChangeCommitment}>
                        <option value="">Commitment Level</option>
                        <option value="< 2 hours">Less than 2 hours</option>
                        <option value="2-5 hours">2 to 5 hours</option>
                        <option value="5+ hours">Greater than 5 hours</option>
                  </select>

                  <div className='club-description-text'>Club Description *</div>
                  <textarea className='register-description-box' value={text} onChange={handleOnChangeText}></textarea>

                  <div onClick={ postClub }>
                    <button type='button' className='register-button'>Register</button>
                  </div>

              </div>
          </div>      
        </React.Fragment>
    )
}





