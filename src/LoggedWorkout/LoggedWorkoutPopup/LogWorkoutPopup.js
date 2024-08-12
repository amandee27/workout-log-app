import { useEffect, useState } from "react";

const LogWorkoutPopup = (props) => {

    const [loggedWorkouts, setLoggedWorkouts] = useState([]);

   useEffect(()=>{
    setLoggedWorkouts(props.data)
    console.log(props.trigger)
   },[props.data, props.loading]);

    return ( (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner"> 
               {props.children}
               {
               loggedWorkouts.length !== 0 ? (loggedWorkouts.map((data,index)=>(
                <div key={index}>
                    
                    <div className="row">
                        <div className="col-6">
                            <p>{data.name}</p>
                        </div>
                        <div className="col-3">
                            <button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }} onClick={()=>{props.viewDetails(data.id)}} >View Detail</button>
                        </div>
                        <div className="col-3">
                            <button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }} onClick = {() => {props.deleteItem(data.id)}} >Delete</button>
                        </div>
                    </div>
                </div>
               ))) : (<div><p>Loading</p></div>)
               }
               
               <div className="row">
                    <div className="col" style={{alignItems: "right"}}>
                        <button onClick={()=>{props.addWorkouts()}} style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }}>Add More</button>
                    </div>
                    <div className="col">
                    <button style={{ backgroundColor: "dodgerblue", color: "white", borderRadius: 4, borderWidth: "1 px", borderColor: "transparent", fontSize: "12px" }} onClick={()=>{props.closePopup(false);}}>Close</button>
                    </div>
               </div>
              <p>This is trigger</p> <p>{props.trigger}</p>
            </div>
        </div>
        ):(<div><p>Alwayys appear</p><p>This is trigger</p> {props.trigger}</div>)
     );
}
 
export default LogWorkoutPopup;