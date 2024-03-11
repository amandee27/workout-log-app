import Home from './Home';
import NavBar from './NavBar';
import UserDetail from './UserDetail';
import Users from './Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkoutCategory from './WorkoutCategory';
import LoggedWorkout from './LoggedWorkout';
import WorkoutSummmary from './WorkoutSummary';
import WeightMonitor from './WeightMonitor';
import Login from './Login';
import SignIn from './Sign-In';
import PageNotFound from './PageNotFound';
import { useState, useEffect } from 'react';

function App() {
  //const {username, setUsername} = useState(null)

  //console.log(username);
  //console.log(loggedIn);

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('login') !== null) {
      setLoggedIn(JSON.parse(localStorage.getItem('login')));
    } else {
      localStorage.setItem('login', false);
      setLoggedIn(JSON.parse(localStorage.getItem('login')));
    }
  }, [loggedIn]);

  return (

    <Router>

      <div>
        <NavBar />
        {loggedIn}
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/users/:id">
              <UserDetail />
            </Route>
            <Route exact path='/workout-history'>
              <LoggedWorkout />
            </Route>
            <Route exact path='/workout-type'>
              <WorkoutCategory />
            </Route>
            <Route exact path='/workout-summary'>
              <WorkoutSummmary />
            </Route>
            <Route path='/weight-summary'>
              <WeightMonitor />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/sign-in'>
              <SignIn />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
