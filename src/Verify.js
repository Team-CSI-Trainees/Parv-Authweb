import React from 'react'
import { Link } from 'react-router-dom';
import  verifyimg from "./Images/verify.svg";
import "./verify.css"
const Verify = () => {
  return (
    <>
    <div className='bg'>
    <div className='verify'>
        <img src={verifyimg} alt="email sent" />
        <h1>Verification Mail have been sent</h1>
        <button><Link to="/">Login</Link></button>
    </div>
    </div>
    </>
  )
}

export default Verify;