import CalendarDays from "../CalendarDays";
import './PlannedWorkout.css';
import { useEffect, useState } from "react";
import PlannedWorkoutPopup from "./PlannedWorkoutPopup/PlannedWorkoutPopup";
import '../useFetch';
import { useNavigate, Link } from "react-router-dom";

const Calendar = () => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let [state, setState] = useState({
        currentDay: new Date()
    });
    const [popup, setPopup] = useState(false);
    const [date, setDate] = useState(null);
    const [plannedWorkouts, setPlannedWorkouts] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    
    let changeCurrentDay = (day) => {
        setState({currentDay: new Date(day.year, day.month, day.number)});
        setDate(Date.parse(state.currentDay));
        setPopup(true);
    }

    
    useEffect(() => {
        fetchedData();
        if(count){
            functionAfterCountUpdate();
        }
        
    }, [date,count, popup]);

      
    const fetchedData = async () => {
        let dateNew = Date.parse(state.currentDay);
        if (dateNew) {
            try {
                const response = await fetch(`http://localhost:8000/planned_workouts?date=${dateNew}`, { method: 'GET' });
                const data = await response.json();
                setPlannedWorkouts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }


const deletePlannedWorkout = (param) => {
    fetch(`http://localhost:8000/planned_workouts/${param}`, { method: 'DELETE' }). then(
        (response) => {
            if(response.ok){
                console.log("Delete successfull", response);
            } else {
                console.log("ERROR")
            }
        }
    )
}

const nextButton = () => {
    setCount(count+1); 
}

const previousButton = () => {
    setCount(count-1); 
}

const functionAfterCountUpdate = () => {
    setState({currentDay: new Date(state.currentDay.getFullYear(),state.currentDay.getMonth()+count,state.currentDay.getDate())});
    setCount(0);
}


const addNewWorkout = (param) => {
    navigate('/workout-type');  
}

    return ( 
        <div className="calendar">
            <div className="calendar-header">
                <Link onClick={previousButton}><i className="bi bi-caret-left-fill icon-style"></i></Link>
                <h2>{state.currentDay.getFullYear()} {months[state.currentDay.getMonth()]}</h2>
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
                <CalendarDays day={state.currentDay} changeCurrentDay = {changeCurrentDay}  />    
            </div>

            <PlannedWorkoutPopup trigger = {popup} setTrigger ={setPopup} setDelete = {deletePlannedWorkout} addWorkout = {addNewWorkout} data={plannedWorkouts}>
                    <h3>My Planned Workout List</h3>
            </PlannedWorkoutPopup>
        </div>
     );
}
 
export default Calendar;