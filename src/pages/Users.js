import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export default function Users() {
    const [users,setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    }, [])

    return (
        <div>
            <h1>Liste de mes utilisateurs</h1>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <Link to={"/users/" + user.id}>Voir</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
