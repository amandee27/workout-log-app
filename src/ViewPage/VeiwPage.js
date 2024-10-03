import './ViewPage.css';
import useFetch from "../useFetch";
import { useLocation, useSearchParams } from 'react-router-dom';


const VeiwPage = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const myParam = searchParam.get('id');
    console.log(myParam);
    const { data } = useFetch(`http://localhost:8000/workout_details?w_id=${myParam}`);
    return (
        data ? (
            data.filter(
                (exercise) => (exercise.category_name === "core")).map(
                    (exercise, index) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="row">
                                        <h1 className="heading">{capitalizeFirstLetter(exercise.name)}</h1>
                                    </div>

                                    <div>
                                        <img className="imageStyle" src={exercise.image} />
                                    </div>
                                </div>
                                <div className="col-sm detailsSection">
                                    <div className="detailSectionStyles">
                                        <div>
                                            <div className="details"><label><b>Primary muscles : </b></label></div>
                                            <div className="details"><p>{exercise.body_area}</p></div>
                                        </div>
                                        <div>
                                            <div className="details"><label><b>Secondary muscles : </b></label></div>
                                            <div className="details"><p>{exercise.video}</p></div>
                                        </div>
                                        <div>
                                            <div className="details"><label><b>Equipment : </b></label></div>
                                            <div className="details"><p>{exercise.video}</p></div>
                                        </div>
                                        <div>
                                            <div className="details"><label><b>Refference videos : </b></label></div>
                                            <div className="details"><p>{exercise.video}</p></div>
                                        </div>
                                        <div>
                                            <div className="details"><label><b>Exercise for opposite muscles : </b></label></div>
                                            <div className="details"><p>{exercise.video}</p></div>
                                        </div>
                                        <div>
                                            <div className="details"><label><b>Refference videos : </b></label></div>
                                            <div className="details"><p>{exercise.video}</p></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="row mainAllDetail">
                                <div className="allDetailStyle">
                                    <div className="mainAllDetail">
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Straight Leg Raise Instructions</b></h6>
                                            <ol className="detailsStyles">
                                                {exercise.instructions.map((instruct) => (
                                                    <li key={instruct.id}>{instruct}</li>)
                                                )}
                                            </ol>
                                        </div>
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Proper Form And Breathing Pattern</b></h6>
                                            <p className="detailsStyles">{exercise.breath_pat}</p>
                                        </div>
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Exercise Benefits</b></h6>
                                            <p className="detailsStyles">{exercise.exercise_ben}</p>
                                        </div>
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Straight Leg Raise Demonstration</b></h6>
                                            <p className="detailsStyles"></p>
                                        </div>
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Sets And Reps</b></h6>
                                            <p className="detailsStyles">{exercise.sets}</p>
                                        </div>
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Calories Burned</b></h6>
                                            <p className="detailsStyles"></p>
                                        </div>
                                        <div>
                                            <h6 className="subHeadingStyles"><b>Related Exercises</b></h6>
                                            <ol className="detailsStyles">
                                                {exercise.related_exercise.map((exer) => (
                                                    <li>{exer}</li>
                                                )
                                                )}
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                )
        ) : (<div>
            <p>Loading ...</p>
        </div>)

    );
}

export default VeiwPage;

function capitalizeFirstLetter(string) {
    const words = string.split(" ");
    const finalData = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    return finalData;
}