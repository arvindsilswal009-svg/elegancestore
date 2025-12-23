import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Signup = () => {
    const navigate=useNavigate();
   
      
    const [msg,setMsg]=useState();
     const [name,setname]=useState();
 const [email,setemail]=useState();
 const [password,setpassword]=useState();
 
 const handlesignup = async (e) => {
  e.preventDefault(); 

var dt = {
    name: name,
    email: email,
    password: password,
  };

  try {
    

    const res = await axios.post("http://localhost:5000/signup", dt);
    setMsg("You are registered to Elegance Store, " + name);
    navigate('/login')
  } 
  catch (err) {
    console.log(err);
    setMsg("Registration failed!");
  }
};
  return (
     <div className='login'>
      <div className="login-container">
        <center><h1>Sign Up</h1></center>
        <h2>{msg}</h2>
        <div className="login-fields">
          <input type="text" onInput={(e)=>setname(e.target.value)} placeholder='your name' required/>
          <input type="email" onInput={(e)=>setemail(e.target.value)} placeholder='email address' required />
          <input type="password" onInput={(e)=>setpassword(e.target.value)} placeholder='password' required />
        </div>
        <button onClick={handlesignup}> Continue</button>
          <p className='login-login'>Already have an Account? <span><Link to='/login'>Login Here</Link></span></p>
          <div className="agree">
            <input type="checkbox" name=' ' id='' />
            <p>I agree to the Terms of Service and Privacy Policy</p>
          </div>
        </div>
        </div>
  )
}

export default Signup;