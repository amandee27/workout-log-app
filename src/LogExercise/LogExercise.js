import { useSearchParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const LogExercise = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const exerciseId = searchParam.get('w_id');
    const { data } =  useFetch(`http://localhost:8000/workout_details?w_id=${exerciseId}`);
    const [formData,setFormData] = useState({
        username: "",
        password: "",
      });

      console.log(formData);

/*
     function addExercise({exerciseId}){
        //event.preventDefault();

        //"use server";
        //const exerciseId =event.get('execiseId');
         console.log(exerciseId);
    }

    */
    return ( 
        <div>
            <form>
                <lable>Username: 
                <input type="text" name="username" value={formData.username} />
                </lable>
                <label>Password:
                <input type="text" name="password" value={formData.password} />
                </label>
                {/*<button type="submit">Submit</button>*/}
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default LogExercise;