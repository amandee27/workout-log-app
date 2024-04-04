import { useEffect } from "react";
import useFetch from "./useFetch";

const MyList = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/userData');
    console.log("this is data");
    
    // useEffect(()=>{
    //     const newData = data && data.filter((user)=>((user.username === JSON.parse(localStorage.getItem('username'))
    // )));
    // console.log("This is new data : ",data, newData);
    // },[data])

    return ( 
        <div>
            {data ? (
                data.filter((user)=>(user.username === JSON.parse(localStorage.getItem('username')))).map(
                    (userData, index)=>(

                        <div key={index}>
                            <h2>Logged workout</h2>
                            {
                                userData.logged_workouts.map((workout, newIndex) => (
                                    <div key={newIndex}>
                                        <div className="card w-75 mb-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{ workout.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }</h5>
                                                <p className="card-text"><b>Machine/Equipment : </b>{workout.equipment_machine} <b>Weight/Strength : </b>{workout.weight_strength} <b>Counts Per Round : </b>{workout.countsPerRound} <b>No. of Rounds : </b>{workout.rounds} </p>
                                                <p className="card-text">Date: {workout.day} Month: {workout.month}</p>
                                                <a href="#" className="btn btn-primary">View</a>
                                                <a href="#" className="btn btn-primary">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <h2>Planned Workout</h2>
                            {
                                userData.planned_workouts.map((workout, newIndex) => (
                                    <div key={newIndex}>
                                        <div className="card w-75 mb-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{ workout.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }</h5>
                                                <p className="card-text"><b>Machine/Equipment : </b>{workout.equipment_machine} <b>Weight/Strength : </b>{workout.weight_strength} <b>Counts Per Round : </b>{workout.countsPerRound} <b>No. of Rounds : </b>{workout.rounds} </p>
                                                <p className="card-text">Date: {workout.day} Month: {workout.month}</p>
                                                <a href="#" className="btn btn-primary">View</a>
                                                <a href="#" className="btn btn-primary">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                )
            ) : (
                <div>
                    <p>Pending ....</p>
                </div>
            )}
        </div>
     );
}
 
export default MyList;