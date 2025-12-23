import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Pages/CSS/login.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
 
 const navigate= useNavigate();
        const [msg,setMsg]=useState();
        const [email,setEmail]=useState();
        const [password,setPassword]=useState();
        
       const handlelogin = async () => {
        console.log("email:", email);
console.log("Password:", password);
  try {
    const res = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password
    });

    if (res.data.success) {
      setMsg("Login successful");
      navigate("/");
    } else {
      setMsg("Invalid Email or Password");
    }
  } catch (error) {
    console.log(error);
    setMsg("Server error");
  }
};
 
 
 
  return (
    <div className='login'>
      <div className="login-container">
        <center><h1>Login</h1></center>
        <div className="login-fields">
         <h2>{msg}</h2>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email address' name='email' required/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' name='password' required/>
        </div>
        <button onClick={handlelogin}>Login</button>
         <p className='login-login'>Does not have an Account? <span><Link to='/signup'>Register Here</Link></span></p>
                 
        
      </div>
    </div>
  )
}

export default Login;