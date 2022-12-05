import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import img1 from "./Images/img1.svg"
import "./login.css";
import ReCAPTCHA from 'react-google-recaptcha';
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [recaptcha, setRecaptcha] = useState("")
  const navigate = useNavigate('');


  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('login',true)
    if (recaptcha) {
      axios.post("https://authentication-app-by.onrender.com/", { email: email, password: password }).then(
        result => {
          // localStorage.setItem('token',result.data.token)  
          console.log(result)
          if (result.data) {
            navigate("/home")
          }
          // else {
          //   alert("Incorrect Details or User not found")
          //   navigate("/signup")
          // }
        }).catch(error => {
          alert(error.response.data)
          // alert("Incorrect Details or User not found")
          // navigate("/signup")
          })
    }
    else {
      alert("Verify ReCaptcha");
    }
  }
  function onChange(value) {
    console.log('Captcha value:', value);
    setRecaptcha(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='box1'>
          <div>
            <img src={img1} alt="img" />
          </div>
          <div className='box2'>
            <h1 className='mainhead'>Login</h1>
            <input className='userimg' type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
            <input className='passimg' type="password" minLength="8" placeholder='Password' required onChange={(e) => setPass(e.target.value)} />
            <div className='remem'>
              <input className="chk" type="checkbox" name='remember' value="remember" />
              <label htmlFor="remember">Remember Me</label>
              <NavLink className="link" to="./reset">Forget Password?</NavLink>
            </div>
            <div className="cap">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                // sitekey="6LdQCQwjAAAAAKaRZNEidtK7Miw52mhn8TSoYeS5"
                onChange={onChange}
              />
            </div>
            <input type="submit" className='btn' value="Sign In" />
            <div>
              <div className='forget'>Don’t have a account?<NavLink className="link" id="link2" to="./register"> Register</NavLink></div>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;