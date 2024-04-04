import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const IntensityTrainingCategory = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/workouts');
    //var itensityExercises = data.filter(exercise => exercise.category_id==1);

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            marginLeft: 2
        }}>

            {data ? (
                data.filter((exercise)=>(exercise.category_name === "intensity")).map(
                    (exercise, index) => (
                        <div className="card card-style" style={{width: '18rem'}} key={index}>
                            <img className="card-img-top" src={exercise.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{exercise.name}</h5>
                                    <p className="card-text">{exercise.body_area}</p>
                                    <a href="#" className="btn btn-primary">Add</a>
                                    <a href="#" className="btn btn-primary">Remove</a>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                        </div>
                    )
                )
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}

export default IntensityTrainingCategory;