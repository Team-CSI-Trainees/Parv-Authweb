import axios from 'axios';
import React, { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom';
import img5 from "./Images/enterotp.svg"
// import "./forget.css"
import "./otpsent.css"
const OtpSent = () => {
  const navigate=useNavigate();
  const [dig1, setdig1] = useState("")
  const [dig2, setdig2] = useState("")
  const [dig3, setdig3] = useState("")
  const [dig4, setdig4] = useState("")
  let otp = (dig1).toString() + dig2 + dig3 + dig4

  const otpchk = () => {

    console.log(otp)
    axios.post("https://authentication-app-by.onrender.com/otp", { otp: otp }).then
      (result => {
        if (result.data === 'Valid') 
        { navigate('/Verify') }
        console.log(result)
      }).catch
      (error => console.error())

  }

  return (
    <div>
      <div className='box1'>
        <div>
          <img src={img5} alt="img" />
        </div>
        <div className='box2'>
          <div className='otpsenthead'>Enter your OTP</div>
          <div className='otpsentsubhead'>Enter your Six digit OTP sent on your Phone Number.</div>
          <div className='otpsentsubhead' id='otpsubhead2'>It is valid for 10 mins only</div>
          <div className='mainotphead'>OTP</div>
          <div className='mainotp'>
            <input className='otp' type="text" maxLength="1" required onChange={(e) => setdig1(e.target.value)} />
            <input className='otp' type="text" maxLength="1" required onChange={(e) => setdig2(e.target.value)} />
            <input className='otp' type="text" maxLength="1" required onChange={(e) => setdig3(e.target.value)} />
            <input className='otp' type="text" maxLength="1" required onChange={(e) => setdig4(e.target.value)} />
            {/* <input className='otp' type="text" maxLength="1"  required />
          <input className='otp' type="text" maxLength="1"  required /> */}
          </div>
          <input type="submit" className='btn' id='confirmbtn' value="Confirm OTP" onClick={otpchk} />
          <NavLink className="link" id="link5" to="/">Back To Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default OtpSent;