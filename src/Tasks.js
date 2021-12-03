import axios from "axios"
import { useEffect, useState } from "react"
import './Tasks.css'
import { v4 as uuidv4 } from 'uuid';

export default function Tasks() {

    const [todos, setTodos] = useState([])
    const [taskInput, setTaskInput] = useState("")

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data)
            setTodos(res.data)

        })
    }, [])

    useEffect(() => {
        document.title="Nombre de tâches (" + todos.length + ")";
        // document.title = `Nombre de tâches (${todos.length})`;
    },[todos])


    function handleTaskInput(e) {
        setTaskInput(e.target.value)
    }

    function addTask(e) {
        e.preventDefault();
        console.log("Formulaire soumis");

        const newTask = {id: uuidv4(), title: taskInput, completed:false}
        console.log(newTask)
        setTodos([newTask, ...todos])
    }


    return (
        <div>
            <h1>Tu as {todos.length} tâches actuellement</h1>
            <form onSubmit={addTask}>
                <input type="text" value={taskInput} onChange={handleTaskInput} />
                <button type="submit">OK</button>
            </form>


            <ul>
                {todos.map(task => (
                    <li key={task.id}
                        className={task.completed ? "task task-completed" : "task"}
                    >{task.title}</li>
                ))}
            </ul>
        </div>
    )
}
