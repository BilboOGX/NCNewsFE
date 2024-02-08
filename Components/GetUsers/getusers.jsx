import { fetchUsers } from "../../Axios Requests/requests";
import { useState, useEffect } from "react";
import '../GetUsers/getUsers.css'
import { UserContext } from "../Context/users";
import { useContext } from "react";

export default function UserList(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { setUser } = useContext(UserContext);

                
    useEffect(() => {
            fetchUsers().then((response) => {
            setUsers(response.data)
            setIsLoading(false)
                })
            
        }, []);
        if(isLoading) return <p>Loading Users...</p>
        return (
        <>
            <section>
            <ul className='userList'>
                {users.map((user) => {
                
                    return (
                        <li className='userList2'onClick={() => {setUser(user); alert(`You signed in as ${user.name}`); }}>
                            <p>Username: {user.username}</p>
                            <p>Full Name: {user.name}</p>
                            <img className='userpic' src={user.avatar_url}/>
                        </li>
                    )
                })}
            </ul>
            </section>
            </>
        )
    }
    