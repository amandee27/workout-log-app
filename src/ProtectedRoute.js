import { Outlet, Navigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const ProtectedRoute = () => {
    console.log("Loading Protected route");
    let auth = {'token': localStorage.getItem('token') || false}
    return ( 
        auth.token ? <div>
            <NavBar></NavBar> {/*Navbar moved to here from app.js */}
            <Outlet/>
        </div>  : <Navigate to="/login"/>
    
     );
}
 
export default ProtectedRoute;