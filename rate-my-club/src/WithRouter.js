// import { useLocation } from "react-router-dom";

// export const withRouter = Component => props => {
//     const location = useLocation();
  
//     return <Component {...props} location={location} />;
//   };


import { useNavigate } from 'react-router';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}