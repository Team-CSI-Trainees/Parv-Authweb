import React from 'react'
import { NavLink } from 'react-router-dom';
import verifyimg from "./Images/verify.svg";
import "./verify.css"
const Verify = () => {
  return (
    <>
      <div className='bg'>
        <div className='verify'>
          <img src={verifyimg} alt="email sent" />
          <div className='verifyhead'>Congratulations</div>
          <div className='verifyhead'>You have successfully verified the account</div>
          <button className='btn' id="btn7" ><NavLink className="link7"to="/">Login</NavLink></button>
        </div>
      </div>
    </>
  )
}

export default Verify;