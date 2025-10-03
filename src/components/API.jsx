import { useEffect, useState } from "react"
import axios from "axios"

export const API = () =>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> setUsers(res.data))
    });
    return <div>
        {
            users.map((user)=>
            <p>{user.id}: {user.name} and {user.email}</p>
            )
        }
    </div>
}