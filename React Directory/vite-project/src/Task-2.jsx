import React, { useState } from "react";
const ToDoList = () => {
    const [task, setTask] = useState("")
    const [text, setText] = useState('')
    // const [newTask, setNewTask] = useState("newTask")

    return (
        <>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={() => {
            setTask(...task,text)
            // setNewTask("")


         } } > Add task to the list</button>
        <div>
            <div style={{ display:"inline-block", margin:"20px"}}>
                <h2 >Incompleteed Tasks</h2>
                <li>{task}</li>
            </div>
            <div style={{ display:"inline-block", margin:"20px"}}>
                <h2 >Completeed Tasks</h2>
                <li>{task}</li>
            </div>
        </div>
        </>
    )
}
export default ToDoList




























// function ToDoList (){
//     const [Task, setTask] = useState([])
    
    
//     function abc () {
//         var x = document.getElementById("input").value;
//         setTask(Task => [...Task,x])

//         // <li>{Task[0]}</li> 
        

//     }
    
//     return (
//         <>
//         <input id="input" type="text" width="50px" placeholder="your next task !" />
        
//         <button onClick={ () => abc() }
//         > Add task</button>

//         <div>
//             <h1>Incomplete Tasks</h1>
//             <h6>{Task}</h6>

//             {/* {Task.map((item) => {
                
//                 return <h5>{list.item}</h5>
//               })} */}

//         </div>
        
//         </>)
    
// }
// export default ToDoList 