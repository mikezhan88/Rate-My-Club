import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Dropdown from './DropdownAllClubs';
import { categoriesOptions, sizeOptions, commitmentOptions, sortOptions } from '../RegisterPage/DropdownObjects';
import ClubList from './ClubList';

export var sizeOpt = "{}";
export var commitOpt = "{}";
export var searchOpt = "{}";

export default function AllClubsPage() {
  
  const [size, setSize] = useState("Club Size");

  const [lessFifty, setLessFifty] = useState(false);
  const [fifty2Hundred, setFifty2Hundred] = useState(false);
  const [hundredPlus, setHundredPlus] = useState(false);

  useEffect(() => {
    size === '{"clubSize" : "< 50 ppl"}' ? setLessFifty(true) : setLessFifty(false);
    size === '{"clubSize" : "50-100 ppl"}' ? setFifty2Hundred(true) : setFifty2Hundred(false);
    size === '{"clubSize" : "100+ ppl"}' ? setHundredPlus(true) : setHundredPlus(false);
  }, [size]);

  const[commitment, setCommitment] = useState("Commitment Level");

  const[less2hrs, setless2hrs] = useState(false);
  const[twotofivehrs, settwotofivehrs] = useState(false);
  const[fivehrsplus, setfivehrsplus] = useState(false);
  
  useEffect(() => {
    commitment === '{"commitmentLevel" : "< 2 hours"}' ? setless2hrs(true) : setless2hrs(false);
    commitment === '{"commitmentLevel" : "2-5 hours"}' ? settwotofivehrs(true) : settwotofivehrs(false);
    commitment === '{"commitmentLevel" : "5+ hours"}' ? setfivehrsplus(true) : setfivehrsplus(false);
  }, [commitment]);

  const handleOnChangeSize = (e) => {
    setSize(e.target.value);
    sizeOpt = e.target.value;
    
  };

  const handleOnChangeCommitment = (e) => {
    setCommitment(e.target.value);
    commitOpt = e.target.value;
  };

  const handleOnChangeSearch = () => {
    searchOpt = '{ "name" : { $regex : ".*(' + document.getElementById("searchbar").value + ').*", $options : "i" } }';
  }
  

  
  return (
          <React.Fragment>
           <NavBar/>
           <div className='clubs-page'>
             <div className='clubs-largetext'>Explore Clubs</div>
             <div style={{ borderTop: "1px solid black ", width: "250px"}}></div>
             </div> 
             <div className='filter-backdrop'>
              <div className='clubs-fiter-sort'>
                  <div className='clubs-filter'>
                      <div className='clubs-text' >Filter Clubs</div>

                      <select className="size_select" value={size} onChange={handleOnChangeSize}>
                        <option value="{}">Club Size</option>
                        <option value='{"clubSize" : "< 50 ppl"}'>Less than 50</option>
                        <option value='{"clubSize" : "50-100 ppl"}'>50 to 100</option>
                        <option value='{"clubSize" : "100+ ppl"}'>Greater than 100</option>
                      </select>

                      <select className="commitment_select" value={commitment} onChange={handleOnChangeCommitment}>
                        <option value="{}">Commitment Level</option>
                        <option value='{"commitmentLevel" : "< 2 hours"}'>Less than 2 hours</option>
                        <option value='{"commitmentLevel" : "2-5 hours"}'>2 to 5 hours</option>
                        <option value='{"commitmentLevel" : "5+ hours"}'>Greater than 5 hours</option>
                      </select>
                  </div>
              </div>
                <div className='clubs-search-div'>
                  <input id="searchbar" type='text' className='clubs-search-bar'placeholder='Search Club Name...' onChange={handleOnChangeSearch}></input>
                  <img src={require("../images/search-icon.png")} className='clubs-search-icon' alt="search"/>
                  <ClubList/>
                </div>
              </div>   
         </React.Fragment>
  )
}


