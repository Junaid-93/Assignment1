import React, { useState } from "react";

function ToDoList (){
    const [Task, setTask] = useState([])
    
    
    function abc () {
        var x = document.getElementById("input").value;
        setTask(Task => [...Task,x])

        // <li>{Task[0]}</li> 
        

    }
    
    return (
        <>
        <input id="input" type="text" width="50px" placeholder="your next task !" />
        
        <button onClick={ () => abc() }
        > Add task</button>

        <div>
            <h1>Incomplete Tasks</h1>
            <h6>{Task}</h6>

            {/* {Task.map((item) => {
                
                return <h5>{list.item}</h5>
              })} */}

        </div>
        
        </>)
    
}
export default ToDoList 