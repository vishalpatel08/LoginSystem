import React, {useState} from 'react'
import './style.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
const Registration = () => {
    const [user , setUser] = useState({
        name: '',
        email:'',
        password:''
    })
    const {name, email, password}= user;

    const Onchange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const OnSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3002/register", {
        username: name,
        email: email,
        password: password,
    }).then((response)=>{
        console.log(response);
    })
    } 

    return (
        <div className='outer-div'>
            <h1> Registration </h1>
            <form>
                <div className='inner-div'>
                    <label className='c-label'>Name</label>
                    <input type='text' name="name" placeholder="Name" value={name} className='c-input' onChange={(e) => {Onchange(e)}}/>
                </div>
                <div className='inner-div'>
                    <label className='c-label'>G-mail</label>
                    <input type='text' name="email" placeholder="gmail" value={email} className='c-input' onChange={(e) => {Onchange(e)}}/>
                </div>
                <div className='inner-div'>
                    <label className='c-label'>Password</label>
                    <input type='password' name="password" placeholder="Password" autoComplete="on" value={password} className='c-input' onChange={(e) => {Onchange(e)}}/>
                </div>
                <button className='cbtn' onClick={(e)=>{OnSubmit(e)}}> Submit </button>
            </form>
            <p> Already user <Link to='/'>click </Link> for Login</p>
        </div>
    )
} 

export default Registration