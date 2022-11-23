import React, { useReducer, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import signupimg from "./Images/signupimg.svg"
import "./Signup.css"
import ReCAPTCHA from 'react-google-recaptcha';
import axios from "axios";


const initialstate = {
    fullname: "",
    rollno: "",
    year: "",
    branch: "",
    email: "",
    mobno: "",
    gender: "",
    password: "",
    password2: ""
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                [action.key]: action.value,
            }
        default:
            return state;
    }
}



const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)
    const [recaptcha, setRecaptcha] = useState("")
    const [valNameerror, setvalNameerror] = useState(false)
    const [valemailerror, setvalemailerror] = useState(false)
    const [valPhoneerror, setvalPhoneerror] = useState(false)
    const [valpassworderror, setvalpassworderror] = useState(false)


    const navigate = useNavigate();

    var error = false;
    var name = state.fullname;
    var email = state.email;
    var MobileNumber = state.mobno;
    var password1 = state.password;
    var password2 = state.password2;
    var valEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    var valPhone = /^\d{10}$/;
    var valName = /^[a-zA-Z ]+$/;
    const val = () => {
        if (name === "" || !valName.test(name)) {
            setvalNameerror(true)
            error = true;
        }
        if (email === "" || !valEmail.test(email)) {
            setvalemailerror(true)
            error = true;
        }

        if (password1 !== password2) {
            setvalpassworderror(true)
            error = true;
        }
        if (MobileNumber === "" || !valPhone.test(MobileNumber)) {
            setvalPhoneerror(true)
            error = true;
        }
        return error;
    }


    function onChange(value) {
        console.log('Captcha value:', value);
        setRecaptcha(value);

    }
    const submit = (e) => {
        e.preventDefault()
        let err = val()
        if (recaptcha && !err) {
            console.log(state.fullname, state.rollno, state.year, state.branch, state.email, state.mobno, state.gender, state.password, state.password2)
            console.log(state);
            axios.post("https://authentiction-app.herokuapp.com/register", state).then(
                result => {
                    if (result.data.success) {
                        navigate('/otpsent')
                    }
                    console.log(result)
                }).catch(error => console.log(error))
        }
        else {
            alert("Please Enter all data correctly and Verify I'm not a robot");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className='register'>
                    <div>
                        <img src={signupimg} alt="img" />
                    </div>
                    <div className='registerdetails'>
                        <div className='reghead'>Registration</div>
                        <div className='field'>
                            <div className='registersubhead'>
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="Name" placeholder='Name' value={state.fullname} required onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'fullname' })} />
                                {valNameerror ? <p>"Invalid Name" </p> : " "}
                            </div>
                            <div className='registersubhead'>
                                <label htmlFor="Roll Number">Roll Number</label>
                                <input type="text" name='RollNumber' placeholder='Roll Number' maxLength="13" value={state.rollno} required onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'rollno' })} />
                            </div>
                        </div>
                        <div className='field'>
                            <div className='registersubhead'>
                                <label htmlFor="Year">Year:</label>
                                <select name="Year" id="Year" value={state.year} onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'year' })}>
                                    <option value="select">--Please Select First--</option>
                                    <option value="1">1st</option>
                                    <option value="2">2nd</option>
                                    <option value="3">3rd</option>
                                    <option value="4">4th</option>
                                </select>
                            </div>
                            <div className='registersubhead'>
                                <label htmlFor="Branch">Branch:</label>
                                <select name="Branch" id="Branch" value={state.branch} onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'branch' })} >
                                    <option value="select">--Please Select First--</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AIML">CSE AIML</option>
                                    <option value="CSE DS">CSE DS</option>
                                    <option value="CSIT">CSIT</option>
                                </select>
                            </div>
                        </div>
                        <div className='field'>
                            <div className='registersubhead'>

                                <label htmlFor="Email">Email</label>
                                <input type="text" name='Email' placeholder='Email' value={state.email} required onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'email' })} />
                                {valemailerror ? <p>"Invalid Email" </p> : " "}
                            </div>
                            <div className='registersubhead'>

                                <label htmlFor="Mobile Number">Mobile Number</label>
                                <input type="text" name='MobileNumber' maxLength="10" placeholder='Mobile Number' value={state.mobno} required onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'mobno' })} />
                                {valPhoneerror ? <p>"Invalid MobileNumber" </p> : " "}
                            </div>

                        </div>
                        <div className='field'>
                            <div className='registersubhead'>
                                <label htmlFor="Password">Password</label>
                                <input type="password" name='Password' minLength="8" placeholder='Password' value={state.password} required onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'password' })} />
                                {valpassworderror ? <p>"Password not same as Confirm Password" </p> : " "}

                            </div>

                            <div className='registersubhead'>
                                <label htmlFor="Confirm">Confirm Password</label>
                                <input type="password" name='Confirm' minLength="8" placeholder='Confirm Password' value={state.password2} required onChange={(e) => dispatch({ type: 'UPDATE', value: e.target.value, key: 'password2' })} />
                                {valpassworderror ? <p>"Password not same as Confirm Password" </p> : " "}

                            </div>

                        </div>
                        <div className='maingender'>
                            <div className='registersubhead'>
                                <label htmlFor="gender">Gender:</label>
                            </div>
                            <div className='genderflex'>
                                <input className='gender' type="radio" id="male" name="gender" value="male" onClick={() => dispatch({ type: 'UPDATE', value: 'male', key: 'gender' })} checked={state.gender === 'male'} />
                                <label htmlFor="male">Male</label>
                                <input className='gender' type="radio" id="female" name="gender" value="female" onClick={() => dispatch({ type: 'UPDATE', value: 'female', key: 'gender' })} checked={state.gender === 'female'} />
                                <label htmlFor="female">Female</label>
                                <input className='gender' type="radio" id="other" name="gender" value="other" onClick={() => dispatch({ type: 'UPDATE', value: 'other', key: 'gender' })} checked={state.gender === 'other'} />
                                <label htmlFor="other">Other</label>
                                <input className='gender' type="radio" id="no" name="gender" value="prefernottosay" onClick={() => dispatch({ type: 'UPDATE', value: 'prefernottosay', key: 'gender' })} checked={state.gender === 'prefernottosay'} />
                                <label htmlFor="no">Prefer not to say</label>
                            </div>
                        </div>
                        <div className="cap2">
                            <ReCAPTCHA
                                sitekey="6LdQCQwjAAAAAKaRZNEidtK7Miw52mhn8TSoYeS5"
                                onChange={onChange}
                                size={"normal"}
                            />
                            <div className='reme'><input className="chk" type="checkbox" name='remember' value="remember" />
                                <label htmlFor="remember">Remember Me</label></div>
                        </div>
                        <input type="submit" className='btn' id='btn5' value='Register' />
                        <div className='leave'>
                            <div>Already have a account?<NavLink className="link" id="link2" to="/"> Sign In</NavLink></div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;