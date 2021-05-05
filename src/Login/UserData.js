import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
// import {useHistory} from 'react-router-dom'

const UserData = () => {
    // let History = useHistory();
    const [users, setUsers] = useState({
        date:[]
    });

    let sum=0;

    useEffect(()=> {    
        loadUsers();    
    },[]);

    const {id} = useParams();
    const{date}=users;

        const loadUsers = async () =>{
            const result = await axios.get(`https://my-json-server.typicode.com/vishalpatel08/JsonServer/users/${id}`);
            setUsers(result.data);
        }

        const onInput1 = (e, i) =>{
            date[i].amount= e.target.value;
        }
        const onInput2 = (e, i) =>{
            date[i].fat= e.target.value;
        }
        const onSubmit = async e =>{
            e.preventDefault();
            await axios.put(`https://my-json-server.typicode.com/vishalpatel08/JsonServer/users/${id}`, users);
            loadUsers();
            calC();
            // History.push("/");
        }

        const calC = () => {
            console.log("date = "+date)
            date.map((user, index)=>(
                sum += Number(((user.amount)*(user.fat)*6.5).toFixed(1))
            ))
        }
        
    return(
        <div>
            <table class="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">F</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        date.map((user, index)=>(
                            <tr>
                                <th scope="row" >{index+1}</th>
                                <td><input type="number" placeholder={user.amount} name="amount" style={ {color:"red", border:"none"}} value={date.amount} onChange ={e => onInput1(e, index)}/></td>
                                <td><input type="number" placeholder={user.fat} name="fat" style={ {color:"red", border:"none"}} value={date.fat} onChange ={e => onInput2(e, index)}/></td>
                                <td>{((user.amount)*(user.fat)*6.5).toFixed(1)}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <button type="submit" class="btn btn-primary" onClick={e => onSubmit(e)}>Submit</button>
                <div> {sum}</div>
            </table>
        </div>
    )
}

export default UserData





