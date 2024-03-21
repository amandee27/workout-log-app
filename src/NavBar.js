import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';


const NavBar = () => {

    const [loggedIn, set] = useState(JSON.parse(localStorage.getItem('token')));

   const logout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    window.location.reload();
   }



    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/workout-type">Workout Catagory</Link>
                <Link to="/workout-history">Workout History</Link>
                <Link to="/workout-summary">Workout Summary</Link>
                <Link to="/weight-summary">Weight Summary</Link>
                <Link to="/weight-summary"><b>User Detail</b></Link>
                {!loggedIn && <Link to="/login">Login</Link>}
                {loggedIn && <button onClick={logout}>Logout</button>}
                
            </div>
        </nav>
     );
}
 
export default NavBar;