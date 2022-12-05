import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import img2 from "./Images/Vault 1.svg"
import "./Reset.css"
import axios from 'axios';
const Reset = () => {
  const [email,setemail]=useState("")
  console.log(email)
  const reset = () =>{
    axios.get("https://authentication-app-by.onrender.com/reset",{email:email}).then(result =>{console.log(result)}).catch(error => console.error())
  }
  return (
    <div>
      <div className='box1'>
        <div>
          <img src={img2} alt="img" />
        </div>
        <div className='box2'>
          <div className='forgethead'>Reset Your Password</div>
          <div className='subhead'>The verification email will be sent to the mailbox.</div>
          <div className='subhead' id='subhead2'>Please check It </div>
          <div className='email'>Email</div>
          <input id='enter' type="text" placeholder=' Please Enter Your Email' required onChange={(e) => setemail(e.target.value) } />
          <button className='btn' id='forgetbtn' onClick={reset}>Send</button>
          <NavLink className="link" id="link4" to="/">Back To Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Reset;