import { Link } from "react-router-dom";
import './WorkoutCategory.css';

const WorkoutCategory = () => {
    console.log("Loading workout category");
    return (
        <div className="categoryContainer">
            <div className="childContainernew">
                <div className="list-style">
                    <Link to="/core-training">
                        <button className="btn-style">
                            <h3><b>CORE TRAINING</b></h3>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/intensity-training">
                        <button className="btn-style">
                            <h3><b>HIGH INTENSITY INTERVAL TRAINING</b></h3>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WorkoutCategory;