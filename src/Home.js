import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Home.css"
import homeicon from "./Images/Vector.svg"

const Home = () => {
  const logout = () =>{
    axios.get("https://authentication-app-by.onrender.com/logout",{token: localStorage.getItem('token')}).then(result =>{console.log(result)}).catch(error => console.error())
  }
  return (
    <div className='home'>
    <div className='navbar'>
      <NavLink className="homelink" to="/home">Home</NavLink>
      <NavLink className="homelink" to="/home">Services</NavLink>
      <NavLink className="homelink" to="/home">Portfolio</NavLink>
      <NavLink className="homelink" to="/home">Contact</NavLink>
      <NavLink className="homelink" onClick={logout}>Logout</NavLink>
      <img  className="user" src={homeicon} alt=""/>
    </div>
    <div className='head'>Welcome To Our Website</div>
    <button className='btn' id="btn2">Join Now</button>
    </div>

  )
}

export default Home;