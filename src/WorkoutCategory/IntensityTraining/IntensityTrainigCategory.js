import useFetch from "../../useFetch";
import './IntensityTrainigCategory.css'
import { Link } from "react-router-dom";

const IntensityTrainingCategory = () => {
    const { data } = useFetch('http://localhost:8000/workouts');
    //var itensityExercises = data.filter(exercise => exercise.category_id==1);

    return (
        <div className="intensityTrainingContainer">

            {data ? (
                data.filter((exercise)=>(exercise.category_name === "intensity")).map(
                    (exercise, index) => (
                        <div className="card card-style" style={{width: '18rem'}} key={index}>
                            <div className="cardImageContainer">
                                <img className="card-img-top" src={exercise.image} alt="Card cap"/>
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title cardTitleStyle">{capitalizeFirstLetter(exercise.name)}</h5>
                                    <p className="card-text cardBodyStyle">{capitalizeFirstLetter(exercise.body_area)}</p>
                                    <div className="row">
                                        <div className="col-6">
                                        <Link to={`/add-workout?name=${exercise.name}&body_area=${exercise.body_area}&id=${exercise.w_id}`}>
                                            <button href="#" className="btnStyle"><b>Add to My Plan</b></button>
                                        </Link>
                                        </div>
                                        <div className="col-3 "><button href="#" className="btnStyle2">Log</button></div>
                                        <div className="col-3"><button href="#" className="btnStyle2">View</button></div>
                                    </div>
                                </div>
                        </div>
                    )
                )
            ) : (
                <div className="childContainer">
                        <div class="spinner-border text-light" style={{width: "4rem", height: "4rem"}} role="status">
                        </div>
                </div>
            )}
        </div>
    );
}

function capitalizeFirstLetter(string) {
    const words = string.split(" ");
    const finalData = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    return finalData;
}


export default IntensityTrainingCategory;