import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/workout-type">Workout Catagory</Link>
                <Link to="/workout-history">Workout History</Link>
                <Link to="/workout-summary">Workout Summary</Link>
                <Link to="/weight-summary">Weight Summary</Link>
                
                <Link to="/weight-summary"><b>User Detail</b></Link>
            </div>
        </nav>
     );
}
 
export default NavBar;