import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CalendarDays from "../CalendarDays";
import LogWorkoutPopup from "./LoggedWorkoutPopup/LogWorkoutPopup";
import './LoggedWorkout.css';

const LoggedWorkout = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [count, setCount] = useState(0);
    const [popup, setPopup] = useState(false);
    const [loggedWorkout, setLoggedWorkout] = useState([]);
    const [loadinData, setLoadingData] = useState(false);
    const navigate = useNavigate();
    const changeCurrentDay = (day) => {
        setState({today: new Date(day.year, day.month, day.number)});
        setPopup(true);
    } 
    const [state, setState] = useState({
        today: new Date()
    });
    

    useEffect(()=>{
        fetchData();
        if(count){
            functionAfterCountUpdate();
        }      
    },[popup, count]);

    const fetchData = async () => {
        let dateNew = Date.parse(state.today);
        setLoggedWorkout([]);
        setLoadingData(true);

        if(dateNew){
            try{
                const response = await fetch(`http://localhost:8000/logged_workouts?date=${dateNew}`, { method: 'GET' });
                const data = await response.json();
                setLoggedWorkout(data);
                setLoadingData(false);
            } catch {
                console.log("Error");
            }
        }
    }

    const viewWorkoutDetails = (id) => {
        navigate(`/logged-workout?id=${id}`);
    }

    const addCompletedWorkouts = () => {
        //need to pass current date or define a set of workout list to add more
        navigate('/workout-type');
    }

    const previousButton = () => {
        setCount(count-1); 
    }

    const nextButton = () => {
        setCount(count+1); 
    }

    const functionAfterCountUpdate = () => {
        setState({today: new Date(state.today.getFullYear(),state.today.getMonth()+count,state.today.getDate())});
        setCount(0); 
    }

    const deleteWorkout = (id) => {
        console.log(id,typeof(id));
        
        
        fetch(`http://localhost:8000/logged_workouts/${id}`, { method: 'DELETE'}).then((res)=>{
            if(res.ok){
                console.log("Delete Successful");
                fetchData();
            } else {
                console.log("Error");
            }
        })
    
   
    }

    return ( 
        <div className="calendar">
            <div className="calendar-header">
                <Link onClick={previousButton}><i className="bi bi-caret-left-fill icon-style"></i></Link>
                <h2>{state.today.getFullYear()} {months[state.today.getMonth()]}</h2>
                <Link onClick={nextButton}><i className="bi bi-caret-right-fill icon-style"></i></Link>
            </div>
            <div className="calendar-body">
                <div className="table-header">
                    {
                        weekdays.map((weekday, index)=>{
                            return <div key={index} className="weekday"><p>{weekday}</p></div>
                        })
                    }
                </div> 
                <CalendarDays day={state.today} changeCurrentDay = {changeCurrentDay}  />  
                <LogWorkoutPopup trigger = {popup} closePopup = {setPopup} data = {loggedWorkout} loading = {loadinData} viewDetails = {viewWorkoutDetails} addWorkouts = {addCompletedWorkouts} deleteItem = {deleteWorkout}/>
            </div>
        </div>
     );
}
 
export default LoggedWorkout;