import React from 'react'
import '../Pages/CSS/login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
          <p className='login-login'>Already have an Account? <span>Login Here</span></p>
          <div className="agree">
            <input type="checkbox" name=' ' id='' />
            <p>I agree to the Terms of Service and Privacy Policy</p>
          </div>
      </div>
    </div>
  )
}

export default Login;