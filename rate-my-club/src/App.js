import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/Login-Page/LoginPage';
import RegisterUserPage from './components/RegisterUserPage/RegisterUserPage';
import AllClubsPage from './components/AllClubsPage/AllClubsPage';
import ClubPage from './components/ClubPage/ClubPage';
import UserPage from './components/UserProfilePage/UserProfilePage';
import WriteReviewPage from './components/ReviewPage/WriteReview';
import EditReviewPage from './components/ReviewPage/EditReview';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
        <Route exact path="/registerClub" element= {<RegisterPage/>} />
        <Route exact path="/login" element= {<LoginPage/>} />
        <Route exact path="/registeruser" element= {<RegisterUserPage/>} />
        <Route exact path="/allclubs*" element= {<AllClubsPage />} />
        <Route exact path="/clubpage/*" element= {<ClubPage/>} />
        <Route exact path="/userpage" element= {<UserPage/>} />
        <Route exact path="/newreview/*" element= {<WriteReviewPage/>} />
        <Route exact path="/editreview" element= {<EditReviewPage/>} />
        
      </Routes>
    </React.Fragment>
  );
}

export function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function DropdownItem(props){
  return(
      <li className= 'navbar-dropdownItem'>
          <a>{props.text}</a>
      </li>
  );
}

export default App;

