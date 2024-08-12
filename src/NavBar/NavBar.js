import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import './NavBar.css'


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
                <Link to="/workout-history">Calendar</Link>
                <Link to="/workout-summary">Scheduler</Link>{/*exercise tracker, Exercise log, */}
                <Link to="/weight-summary">Progress</Link>
                <Link to="/users/:id"><b>User Profile</b></Link>
                <Link to="/test">TEST</Link>
                {/*<Link to="/my-list"><b>My List</b></Link> */}
                {/*<Link to="/calendar"><b>Workout plan</b></Link>*/}
                {!loggedIn && <Link to="/login">Login</Link>}
                {loggedIn && <button onClick={logout}>Logout</button>}
                
            </div>
        </nav>
     );
}
 
export default NavBar;