import axios from "axios"
import { useEffect, useState } from "react"
import './Tasks.css'
import { v4 as uuidv4 } from 'uuid';
import Test from './Test';

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

    function deleteTask(taskId) {
        console.log(taskId)

        // Que notre nouveau tableau, c'est toutes les tâches
        // sauf celle qu'on veut supprimer
        // celle qui a pour id taskId

        const newTodos = todos.filter(task => task.id !== taskId)
        setTodos(newTodos)
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
                    >
                        {task.title}

                        <button className="btn btn-primary"
                            onClick={() => deleteTask(task.id)}>DELETE</button>

                        <Test />
                    </li>
                ))}
            </ul>
        </div>
    )
}
