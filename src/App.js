import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Errorpage from './Errorpage';
import Reset from './Reset';
import ForgetPass from './Reset';
import Home from './Home';
import Login from './Login';
import OtpSent from './otpsent';
// import OtpVerify from './otpverify';
import Protected from './Protected';
import Signup from './Signup';
import Verify from './Verify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/h' element={<Home />} /> */}
          <Route path='/register' element={<Signup />} />
          {/* <Route path='/otpverify' element={<OtpVerify />} /> */}
          <Route path='/otp' element={<OtpSent />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/home' element={<Protected Component={Home} />} />
          <Route path='/*' element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
