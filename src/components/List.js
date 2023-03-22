import React from "react";
import Task from "./Task";


function List(props){
    return(
        <ol>
            {props.list.map( (element) => {
                return <Task task={element}/>
            } )}
        </ol>
    )
}

export default List;