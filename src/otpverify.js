import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import img4 from "./Images/otpverify.svg"
import "./otpverify.css";
const OtpVerify = () => {
  const [email,setEmail]=useState("");
 
  const navigate = useNavigate('');

  const handleSubmit=(e) =>{
    e.preventDefault()
    console.log("otpsent on ",email)
    navigate('/otpsent')
  }
  return (
    <form onSubmit={handleSubmit} >
      <div className='box1'>
        <div>
          <img src={img4} alt="img" />
        </div>
        <div className='box2'>
          <div className='otphead'>OTP Verification</div>
          <div className='otpsubhead'>An OTP has been sent on your Email.</div>
          <div className='subhead' id='subhead3'>It is valid for 10 mins only</div>
          <div className='otpemail'>Email</div>
          <input id='enter' type="email" placeholder='Email Address' required onChange={(e) => setEmail(e.target.value)} />
          <input type="submit" className='btn' id='verifybtn'value="Send OTP" />
          <NavLink className="link" id="link4" to="/">Back To Login</NavLink>
        </div>
      </div>
    </form>
  )
}

export default OtpVerify;