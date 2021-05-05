import axios from 'axios';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Project1.css'

const NewUser = ()=>{
    let History = useHistory();
    const [ user, setUser] = useState({
        name:"",
        shift:"",
        date:[{amount:0,fat:0}, {amount:0,fat:0}, {amount:0,fat:0}, {amount:0,fat:0},{amount:0,fat:0},
            {amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},
            {amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},
            {amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},
            {amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0},{amount:0,fat:0}]
    })
    const {name} = user;
    const onInput = e =>{
        setUser({...user,[e.target.name]: e.target.value}) 
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("https://my-json-server.typicode.com/vishalpatel08/JsonServer/users", user);
        History.push("/")
    }
    return <div className='d-uselist'>
        <header >
            <h1 className="Newuser"> New User Info </h1>
        </header>

        <form onSubmit={ e => onSubmit(e)}>
            <div class="row mb-3">
                <label for="name" className="A-Label">Name</label>
                <div className="i-adduser">
                <input type="text" className="form-control" name="name" value={name} onChange={e => onInput(e)}/>
                </div>
            </div>
            <fieldset class="row mb-3"  onChange={e => onInput(e)}>
                <legend className="A-Label"> Shifts </legend>
                <div className="A-Label" >
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="shift"  value="1" />
                    <label class="form-check-label" for="gridRadios1"> 1 Shift</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="shift" value="2" />
                    <label class="form-check-label" for="gridRadios2">2 Shift</label>
                </div>
                </div>
            </fieldset>
            <button type="submit" className="btn-s">Submit</button>
        </form>
    </div>
}

export default NewUser
