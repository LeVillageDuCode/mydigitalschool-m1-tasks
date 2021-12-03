import axios from "axios"
import { useState } from "react"
import './Tasks.css'

export default function Tasks() {

    const [todos, setTodos] = useState([])

    function loadTodos() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data)
            setTodos(res.data)
        })
    }

    return (
        <div>
            <button onClick={loadTodos}>Charger ma liste de tâches</button>
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
