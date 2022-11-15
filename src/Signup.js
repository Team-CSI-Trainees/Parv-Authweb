import React from 'react'
import { NavLink } from 'react-router-dom';
import signupimg from "./Images/signupimg.svg"
import "./Signup.css"

const Signup = () => {
    return (
        <div>
            <form>
                <div className='login'>
                    <div>
                        <img src={signupimg} alt="img" />
                    </div>
                    <div className='logindetails'>
                        <div>Register</div>
                        <div className='field'>
                        <input type="text" placeholder='Name' required />
                        <input type="text" placeholder='Roll Number' required />
                        </div>
                        <div className='field'>
                        <label for="Year">Year:</label>
                        <select name="Year" id="Year">
                            <option value="select">--Please Select First--</option>
                            <option value="First">1st</option>
                            <option value="Second">2nd</option>
                            <option value="Third">3rd</option>
                            <option value="Fourth">4th</option>
                        </select>
                        <label for="Branch">Branch:</label>
                        <select name="Branch" id="Branch" >
                            <option value="select">--Please Select First--</option>
                            <option value="CSE">CSE</option>
                            <option value="CSE AIML">CSE AIML</option>
                            <option value="CSE DS">CSE DS</option>
                            <option value="CSIT">CSIT</option>
                        </select>
                        </div>
                        <div className='field'>
                        
                        <input type="email" placeholder='Email' required />
                        <input type="text" placeholder='Mobile Number' required />
                        </div>
                        <div className='field'>
                        <input type="password" placeholder='Password' required />
                        <input type="password" placeholder='Confirm Password' required />
                        </div>
                        <div className='field'>
                        <label for="gender">Gender:</label>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">female</label>
                        <input type="radio" id="other" name="gender" value="other" />
                        <label for="other">Other</label>
                        <input type="radio" id="no" name="gender" value="no" />
                        <label for="no">Prefer not to say</label>
                        </div>
                        <button className='btn'>Register</button>
                        <div>
                            <div>Already have a account?<NavLink className="link" id="link2" to="/"> Sign In</NavLink></div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;