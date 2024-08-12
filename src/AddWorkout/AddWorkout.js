import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddWorkout.css";

const AddWorkout = (props) => {
    ///const searchParams = new URLSearchParams(props.location);
    let params = new URL(document.location).searchParams;
    //let name = params.get("name");
    //let body_area = params.get("body_area");
    // console.log(name, body_area);
    let testVal = "Test"
    const [name, setName] = useState(params.get("name"));
    const [machine, setMachine] = useState("");
    const [weight, setWeight] = useState(0);
    const [counts, setCounts] = useState(0);
    const [rounds, setRounds] = useState(0);
    const [date, setDate] = useState(new Date());
    const [id, setId] = useState(params.get("id"));
    console.log(date);



    const editValue = (event) => {
        console.log("Edite val: ", event);
    }

    const submitForm = (event) => {
        event.preventDefault(); // prevent reloading the form after submitting
        const obj = {
            name: event.target.name.value,
            machine: event.target.machine.value,
            weight: Number(event.target.weight.value),
            counts: Number(event.target.counts.value),
            rounds: Number(event.target.rounds.value),
            date: new Date(event.target.date.value).getTime(),
            id: Number(event.target.id.value)
        }
        console.log("Submitted the form :", obj);

        fetch('http://localhost:8000/planned_workouts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: event.target.name.value,
                machine: event.target.machine.value,
                weight: Number(event.target.weight.value),
                counts: Number(event.target.counts.value),
                rounds: Number(event.target.rounds.value),
                date: new Date(event.target.date.value).getTime(),
                id: Number(event.target.id.value)
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
        // console.log("Created obj", obj, obj.date.getTime());
        //console.log( new Date(obj.date.getTime()));
    }

    return (
        <div className="formBox">
            <h5 className="formHeading"> Add {name} </h5>
            <form onSubmit={submitForm}>
                <div className="formContent">
                <div className="row">
                    <div className="col-4"><label>Name:</label></div>
                    <div className="col-8"><input type="text" name="name" value={name} onChange={setName} disabled={true} /></div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>Machine/Equipment: </label>
                    </div>
                    <div className="col-8">
                        <input type="text" name="machine" value={machine} onChange={(e) => setMachine(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4"><label>Weight/Strength: </label></div>
                    <div className="col-8">
                        <input type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <label>Counts Per Rounds: </label>
                    </div>
                    <div className="col-8">
                        <input type="text" name="counts" value={counts} onChange={(e) => setCounts(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>Rounds: </label>
                    </div>
                    <div className="col-8">
                        <input type="text" name="rounds" value={rounds} onChange={(e) => setRounds(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"><label> Date: </label></div>
                    <div className="col-8"><ReactDatePicker name="date" selected={date} onChange={(date) => { setDate(date) }} /></div>
                </div>
                <label>
                    <input type="text" name="id" value={id} onChange={setId} disabled={true} hidden />
                </label>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" name="button" value="Submit" className="submit-btn" />
                    </div>
                </div>

            </form>
        </div>
    );
}

export default AddWorkout;