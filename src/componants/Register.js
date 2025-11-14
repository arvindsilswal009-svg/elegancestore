
import react from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {  
    const navigate=useNavigate();
    const handleback=()=>{
        navigate('/');
    }
    const [msg,setMsg]=useState();
     const [name,setname]=useState();
 const [email,setemail]=useState();
 const [password,setpassword]=useState();
 const [contact,setcontact]=useState();


 const getregister = async (e) => {
  e.preventDefault(); 

var dt = {
    name: name,
    email: email,
    password: password,
    contact: contact,
  };

  try {
    

    const res = await axios.post("http://localhost:5000/userinfo", dt);
    setMsg("You are registered to Elegance Store, " + name);
  } catch (err) {
    console.log(err);
    setMsg("Registration failed!");
  }
};

 return(
        <div className="container-fluid registercontainer">

<form className="registerform" onSubmit={getregister} > 
 

        <center><h2>Register Here</h2></center> <br/>
        <h4>{msg}</h4>
        <button onClick={handleback}  style={{backgroundColor:"gray" , borderRadius:"2px",width:"50px", marginLeft:"60%" }}> back</button>
        <br/>
        <label>Enter Username </label><br/>
        <input className="form-control" type="text" name="name" placeholder="Enter Username" onInput={(e)=>setname(e.target.value)} required />
        <br/><br/>
        <label>Enter Phone No.</label><br/>
        <input className="form-control" type="tel" name="contact" placeholder="Enter Phone No." onInput={(e)=>setcontact(e.target.value)}  required />
        <br/><br/>
        <label>Enter Email </label><br/>       
        <input className="form-control" type="email" name="email" placeholder="Enter Email" onInput={(e)=>setemail(e.target.value)} required />
        <br/><br/>
        <label>Enter Password </label><br/>
        <input className="form-control" type="password" name="password" placeholder="Enter Password" onInput={(e)=>setpassword(e.target.value)} required />
        <br/><br/>
        <center>
        <button className="loginbtns" type="submit" >Register</button>           </center>     
</form>
        </div>
    )
}
export default Register;