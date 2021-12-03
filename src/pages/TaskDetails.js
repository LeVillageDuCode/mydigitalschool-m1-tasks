import axios from "axios";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

export default function TaskDetails() {
    let params = useParams();
    const [task, setTask] = useState({})

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos/' + params.taskid)
        .then(res => setTask(res.data))
    }, []);

    return (
        <div>
           <h1>Les détails d'une tâche {params.taskid}</h1>
           <span>id: {task.id}</span>
           <p>{task.title}</p>
        </div>
    )
}
