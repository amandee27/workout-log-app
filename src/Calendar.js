import CalendarDays from "./CalendarDays";
import './Calendar.css';
import { useEffect, useState } from "react";
import PlannedWorkout from "./PlannedWorkout";
import './useFetch';

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


const addNewWorkout = () => {
    console.log("Add new workout");
}

    return ( 
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={previousButton}>Previous</button>
                <h2>{months[state.currentDay.getMonth()]} {state.currentDay.getFullYear()}</h2>
                <button onClick={nextButton}>Next</button>
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

            <PlannedWorkout trigger = {popup} setTrigger ={setPopup} setDelete = {deletePlannedWorkout} addWorkout = {addNewWorkout} data={plannedWorkouts}>
                    <h3>My Planned Workout List</h3>
            </PlannedWorkout>
        </div>
     );
}
 
export default Calendar;