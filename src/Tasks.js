import axios from "axios"
import { useEffect, useState } from "react"
import './Tasks.css'
import { v4 as uuidv4 } from 'uuid';
import Test from './Test';

import {Link} from 'react-router-dom';

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

    function toggleCompleteTask(taskId) {
        console.log("On veut changer le status de la tâche!" + taskId)

        // Faire une copie de toutes nos tâches
        const currTasks = [...todos];
        console.log(currTasks);

        // Retrouver notre tâche qu'on veut modifier
        const index = currTasks.findIndex(task => task.id === taskId)
        console.log(index)

        // De modifier la valeur de cette tâche
        // !true -> false     !false -> true
        currTasks[index].completed = !currTasks[index].completed

        // Remet à jour notre todo grâce à setTodo pour cette nouvelle liste
        setTodos(currTasks)
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

                        <input type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompleteTask(task.id)}
                        />

                        <Link to={"/todos/" + task.id} className="btn btn-primary">EN SAVOIR PLUS</Link>

                        <button className="btn btn-danger"
                            onClick={() => deleteTask(task.id)}>SUPPRIMER</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
