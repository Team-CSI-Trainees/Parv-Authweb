import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from "./Images/img1.svg"
import "./login.css";

const Login = () => {

  return (
    <div>
      <form>
        <div className='login'>
          <div>
            <img src={img1} alt="img" />
          </div>
          <div className='logindetails'>
            <h1 className='mainhead'>Login</h1>
            <input className='userimg' type="text" placeholder='Email' required />
            <input className='passimg' type="password" placeholder='Password' required />
            <div>
              <NavLink className="link" to="./forgetpass">Forget Password?</NavLink>
            </div>
            <div className='remem'>
              <input className="chk" type="checkbox" name='remember' value="remember" />
              <label for="remember">Remember Me</label>
            </div>
            <button className='btn'>Sign In</button>
            <div>
              <div className='forget'>Don’t have a account?<NavLink className="link" id="link2" to="./signup"> Register</NavLink></div>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;