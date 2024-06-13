import { useEffect, useState } from 'react';
import './PlannedWorkoutPopup.css'

const PlannedWorkoutPopup = (props) => {

    const [childData, setChildData] = useState(props.data);
    useEffect(() => {
        setChildData(props.data);
    }, [props.trigger]);

    useEffect(() => {
        setChildData(props.data);
    }, [props.data, props.trigger]);


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children} {/**Shows all comes inside from parent's child directive */}
                {childData ? (
                    childData.map(
                        (d, index) => (
                            <div className="card card-style" style={{ width: '30rem' }} key={index}>
                                <div className="row">
                                    <div className="col-8"><p>{d.name}</p></div>
                                    <div className="col-2"><button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }}>Complete</button></div>
                                    <div className="col-2"><button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }} onClick={() => props.setDelete(d.id)}>delete</button></div>
                                </div>
                            </div>
                        )
                    )
                ) : (<p>Test</p>)
                }
                <div className="row">
                    <div className="col"> <button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }} onClick={() => props.addWorkout(true)}>Add Workout</button></div>
                    <div className="col"><button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }} onClick={() => props.setTrigger(false)}>close</button></div>
                </div>
            </div>
        </div>
    ) : "";
}

export default PlannedWorkoutPopup;