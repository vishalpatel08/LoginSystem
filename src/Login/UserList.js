import React,{useState, useEffect} from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUser] = useState([]);

        useEffect(()=> {
        loadUsers();
        },[]);

        const loadUsers = async () =>{
            const result = await axios.get("https://my-json-server.typicode.com/vishalpatel08/JsonServer/users"); 
            setUser(result.data);
        }

        const onDelete = async id =>{
            await axios.delete(`https://my-json-server.typicode.com/vishalpatel08/JsonServer/users/${id}`);
            loadUsers();
        }
    return(
        <div className='d-uselist'>
            <table class="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr>
                                <th scope="row" >{index+1}</th>
                                <Link to={`/userdata/${user.id}`}> <td>{user.name}</td></Link>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList
