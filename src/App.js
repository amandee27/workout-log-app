import Home from './Home';
import UserDetail from './UserDetail';
import Users from './Users';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import WorkoutCategory from './WorkoutCategory/WorkoutCategory';
import LoggedWorkout from './LoggedWorkout/LoggedWorkout';
import WorkoutSummmary from './WorkoutSummary';
import WeightMonitor from './Weight Monitor/WeightMonitor';
import Login from './Login';
import SignIn from './Sign-In';
import PageNotFound from './PageNotFound';
import { useState, useEffect } from 'react';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import CoreTrainingCategory from './WorkoutCategory/CoreTraining/CoreTrainingCategory';
import IntensityTrainingCategory from './WorkoutCategory/IntensityTraining/IntensityTrainigCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyList from './MyList';
import PlannedWorkout from './PlannedWorkout/PlannedWorkout';
import { BrowserRouter } from 'react-router-dom';
import AddWorkout from './AddWorkout/AddWorkout';
import LoggedWorkoutDetail from './LoggedWorkout/LoggedWorkoutDetails/LoggedWorkoutDetails';
import TestMainPage from './Testpage/TestMainPage';


function App() {
  /*
  const updateData = (newData) => {
    setLoggedIn(newData);
  }

  */
  //const {username, setUsername} = useState(null)
  //console.log(username);
  //console.log(loggedIn);
  ///const navigate = useNavigate();
  //const location = useLocation();
  //const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('token')));
  const [isLoggedIn, setIsLoggedIn] = useState(false);




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

  /** Disabled due render component twice. check the app functionality */

  // useEffect(() => {
  //   if(loggedIn){
  //     setIsLoggedIn(true);
  //   }
  //   console.log(isLoggedIn)
  // }, [loggedIn])



  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
    console.log("Calling from login ", isLoggedIn);
  };

  console.log("Calling app.js");

  return (
    <div>
      {/*isLoggedIn && <NavBar></NavBar> */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/users" element={<Users />}></Route>
              <Route exact path="/users/:id" element={<UserDetail />}></Route>
              <Route exact path='/workout-history' element={<LoggedWorkout />}></Route>
              <Route exact path='/workout-type' element={<WorkoutCategory />}></Route>
              <Route exact path='/workout-summary' element={<WorkoutSummmary />}></Route>
              <Route path='/weight-summary' element={<WeightMonitor />}></Route>
              <Route path='/core-training' element={< CoreTrainingCategory />}></Route>
              <Route path='/intensity-training' element={< IntensityTrainingCategory />}></Route>
              <Route path='/my-list' element={<MyList />}></Route>
              <Route path='/calendar' element={<PlannedWorkout />}></Route>
              <Route path='/add-workout' element={<AddWorkout />}></Route>
              <Route path='/logged-workout' element={<LoggedWorkoutDetail />}></Route>
              <Route path='/test' element={<TestMainPage />}></Route>
            </Route>
            {!isLoggedIn && <Route path='/login' element={<Login onLogin={handleLogin} />}></Route>}
            <Route path='/sign-up' element={<SignIn />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter> {/* BrowserRouter moved to here from app.js. since NavBar no longer available in here */}
      </div>
    </div>

  );
}

export default App;
