import React from 'react'
import './Project1.css'
import {Link} from 'react-router-dom'

const Frontpage = () => {
    return(
            <div className='f-div'>
            {/* 
            <Link to='/removeuser'> <button id='p-button'> Remove user </button> </Link>
            <Link to='/checkuserdata'><button id='p-button'> Check user data </button></Link> */}
            <Link to='/userlist' > <button id='p-button'> User List </button> </Link>
            <Link to='/adduser'><button id='p-button'> Add New User </button></Link>
            </div>
        )
}

export default Frontpage
