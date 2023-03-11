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
        <Route exact path="/register" element= {<RegisterPage/>} />
        <Route exact path="/login" element= {<LoginPage/>} />
        <Route exact path="/registeruser" element= {<RegisterUserPage/>} />
        <Route exact path="/allclubs" element= {<AllClubsPage/>} />
        <Route exact path="/clubpage/*" element= {<ClubPage/>} />
        <Route exact path="/userpage" element= {<UserPage/>} />
        <Route exact path="/newreview" element= {<WriteReviewPage/>} />
        <Route exact path="/editreview" element= {<EditReviewPage/>} />
        
      </Routes>
    </React.Fragment>
  );
}

function DropdownItem(props){
  return(
      <li className= 'navbar-dropdownItem'>
          <a>{props.text}</a>
      </li>
  );
}

export default App;

