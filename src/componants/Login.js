import react from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";   
function Login() {
    const navigate=useNavigate();
    const handleback=()=>{
        navigate('/');
    }
    const handleregister=()=>{
        navigate('/register');
    }
    const handleadmin=()=>{
        navigate('/adminlogin');
    }

 
        const [msg,setMsg]=useState();
        const [email,setemail]=useState();
        const [password,setpassword]=useState();
        
       const getlogin = async () => {
        console.log("email:", email);
console.log("Password:", password);
  try {
    const res = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password
    });

    if (res.data.success) {
      setMsg("Login successful");
      navigate("/userhome");
    } else {
      setMsg("Invalid Email or Password");
    }
  } catch (error) {
    console.log(error);
    setMsg("Server error");
  }
};
 


    return(
        <div className="container-fluid logincontainer">
           
            <form className="loginform" >
                <center><h2>Login Here</h2></center> <br/>
                <h4>{msg}</h4>
                <button onClick={handleadmin}  style={{backgroundColor:"orange" , borderRadius:"5px",width:"70px" }}>Admin</button>
                <button onClick={handleback}  style={{backgroundColor:"gray" , borderRadius:"2px",width:"50px", marginLeft:"60%" }}> back</button>
                <br/>
                <label>Username </label><br/>
                <input className="form-control" type="text" name="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} required />
                <br/><br/>
                <label>Password </label><br/>
                <input className="form-control" type="password" name="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)} required />
                <br/><br/>
                <center><button className="loginbtns"type="button" onClick={(e) => {e.preventDefault(); getlogin();}}>Login</button></center>
                <br/>
                <center><h5>or if you are new user :</h5></center>

          <center>      <button className="loginbtns" type="button" onClick={handleregister} >Register Here</button>
          </center>
  </form>
        </div>
    )
}
export default Login;