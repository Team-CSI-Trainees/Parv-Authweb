import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Home.css"
import homeicon from "./Images/Vector.svg"

const Home = () => {
  return (
    <div className='home'>
    <div className='navbar'>
      <NavLink className="homelink" to="/h">Home</NavLink>
      <NavLink className="homelink" to="/h">Services</NavLink>
      <NavLink className="homelink" to="/h">Portfolio</NavLink>
      <NavLink className="homelink" to="/h">Contact</NavLink>
      <NavLink className="homelink" to="/h">Logout</NavLink>
      <img  classname="user" src={homeicon} alt=""/>
    </div>
    <div className='head'>Welcome To Our Website</div>
    <button className='btn' id="btn2">Join Now</button>
    </div>

  )
}

export default Home;