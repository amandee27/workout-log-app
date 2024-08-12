import { useEffect, useState } from "react";
import { json, useSearchParams } from "react-router-dom";
import SimpleDateTime from 'react-simple-timestamp-to-date';
import './LoggedWorkoutDetails.css';

const LoggedWorkoutDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('id'));
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, [searchParams]);
    //console.log(id);

    const fetchData = () => {
        console.log(searchParams.get('id'));

        setTimeout(() => {
            fetch(`http://localhost:8000/logged_workouts?id=${searchParams.get('id')}`, { method: 'GET' })
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    console.log(data);
                    setData(data);
                })
        }, 1000)

    }


    return (
        <div>
            {
                data.map((loggedWorkout, index) => (
                    <div key={index}>
                        <div className="detail-box">
                            <h3 className="detail-header">{loggedWorkout.name}</h3>
                            <div className="details">
                                <div className="row">
                                    <div className="col"><h6>Equipment/Machine : </h6></div>
                                    <div className="col"><p>{loggedWorkout.equipment_machine}</p></div>
                                </div>
                                <div className="row">
                                    <div className="col"><h6>Weight/Strength : </h6></div>
                                    <div className="col">{loggedWorkout.weight_strength}</div>
                                </div>
                                <div className="row">
                                    <div className="col"><h6>Counts per Rounds : </h6></div>
                                    <div className="col"><p>{loggedWorkout.countsPerRound}</p></div>
                                </div>
                                <div className="row">
                                    <div className="col"><h6>Rounds : </h6></div>
                                    <div className="col"><p>{loggedWorkout.rounds}</p></div>
                                </div>
                                <div className="row">
                                    <div className="col"><h6>Date : </h6></div>
                                    <div className="col">{new Date(loggedWorkout.date).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", })}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default LoggedWorkoutDetail;