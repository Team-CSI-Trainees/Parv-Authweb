import React from 'react'
import { NavLink } from 'react-router-dom';
import img2 from "./Images/Vault 1.svg"
import "./forget.css"
const ForgetPass = () => {
  return (
    <div>
      <div className='login'>
        <div>
          <img src={img2} alt="img" />
        </div>
        <div className='logindetails'>
          <h1>Reset Your Password</h1>
          <div className='subhead'>The verification email will be sent to the mailbox.
            Please check It </div>
          <div>Email</div>
          <input type="text" placeholder=' Please Enter Your Email' required />
          <button className='btn'>Send</button>
          <NavLink className="link" to="/">Back To Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass;