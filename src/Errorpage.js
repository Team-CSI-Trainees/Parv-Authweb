import React from 'react'
import error from "./Images/error.jpg"
import "./error.css"
import { NavLink } from 'react-router-dom'
const Errorpage = () => {
  return (
    <div className='error'>
      <img src={error} alt=''/>
      <NavLink className="link" id="link3" to="/">Go to Login Page</NavLink>

    </div>
  )
}

export default Errorpage;