import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Errorpage from './Errorpage';
import ForgetPass from './Forgetpass';
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
        <Route path='/' element={<Login/>} />
        {/* <Route path='/h' element={<Home />} /> */}
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/otpverify' element={<OtpVerify />} /> */}
        <Route path='/otpsent' element={<Protected Component={OtpSent} />} />
        <Route path='/forgetpass' element={<ForgetPass />} />
        <Route path='/verify' element={<Protected Component={Verify} />} />
        <Route path='/home' element={<Protected Component={Home} />} />
        <Route path='/*' element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
