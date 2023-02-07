import {useState} from 'react'

function ToDoList() {
    const [task,setTask] = useState("")
    const [text, settext] = useState("")

    function x() {
        return <li>{task}</li>

    }

return (
    <>
    <h1>To Do List</h1>
    <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
    <button onClick={() => {
        setTask(()=>x)
    }}></button>

    <ul>
    {x()}
    </ul>
    </>
)


}
export default ToDoList