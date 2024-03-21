import Home from './Home';
import NavBar from './NavBar';
import UserDetail from './UserDetail';
import Users from './Users';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import WorkoutCategory from './WorkoutCategory';
import LoggedWorkout from './LoggedWorkout';
import WorkoutSummmary from './WorkoutSummary';
import WeightMonitor from './WeightMonitor';
import Login from './Login';
import SignIn from './Sign-In';
import PageNotFound from './PageNotFound';
import { useState, useEffect } from 'react';
import './App.css';
import ProtectedRoute from './ProtectedRoute';

function App() {
  //const {username, setUsername} = useState(null)

  //console.log(username);
  //console.log(loggedIn);

  //const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('token')));
  ///const navigate = useNavigate();
  //const location = useLocation();
  //const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*
  const updateData = (newData) => {
    setLoggedIn(newData);
  }

  */



  //const checkLocalStorage = () => {
  //   if (localStorage.getItem('login') !== null) {
  //     setLoggedIn(JSON.parse(localStorage.getItem('login')));
  //     if (loggedIn === false) {
  //       console.log('falseee');
  //       //history.push("/login");
  //       //return <Navigate to="/login" />
  //       navigate("/login");
  //     }
  //   } else {
  //     localStorage.setItem('login', false);
  //     setLoggedIn(JSON.parse(localStorage.getItem('login')));
  //   }
  // }
  /*
    const setLocalStorageData = () => {
      
      console.log("This is local storage login status : ", loggedIn);
      if(loggedIn === null) {
        localStorage.setItem('login', JSON.stringify(false));
        setLoggedIn(false);
      } else {
        setLoggedIn(JSON.parse(localStorage.getItem('login')));
      }
     
    }
    
  
    useEffect(() => {
      console.log("This is: ",loggedIn);
      setLocalStorageData();
      if(loggedIn  === false) { 
        navigate("/login", { state: { updateData } });
      }
    }, [loggedIn,pathname]);
  
    */

     

    const handleLogin = () => {
      // Perform login logic
      setIsLoggedIn(true);
      console.log("Calling from login ", isLoggedIn);
    };

  return (
    <div>
      {isLoggedIn && <NavBar></NavBar>}
      <div>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route exact path="/users/:id" element={<UserDetail />}></Route>
            <Route exact path='/workout-history' element={<LoggedWorkout />}></Route>
            <Route exact path='/workout-type' element={<WorkoutCategory />}></Route>
            <Route exact path='/workout-summary' element={<WorkoutSummmary />}></Route>
            <Route path='/weight-summary' element={<WeightMonitor />}></Route>
          </Route>
          <Route path='/login' element={<Login onLogin={handleLogin} />}></Route>
          <Route path='/sign-up' element={<SignIn />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
