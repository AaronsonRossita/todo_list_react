import React, { useState } from "react";
import "./Example.css";

function Example(props) {

    const [newTask, setNewTask] = useState("");

    const newTaskHandler = (event) => {
        setNewTask(event.target.value);
    }

    const addTaskHandler = () => {
        props.newTaskHandler(newTask);
        setNewTask("");
    }
    

    return (
        <div>
            <input type="text" onChange={newTaskHandler} value={newTask}/>
            <button onClick={addTaskHandler}> Add task </button>
        </div>
    )
}

export default Example;