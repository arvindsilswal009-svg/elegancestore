import react from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";

function Adminlogin() {
    const navigate=useNavigate();
    const handleback=()=>{
        navigate('/');
    }

    const [id,setid]=useState();
    const [password,setpassword]=useState();
const getadminlogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/adminlogin", { id, password });
    console.log(res.data.message);
    navigate('/adminhome');
  } catch (err) {
    console.error(err.response.data.message);
  }
};
    return(
        <div className="container-fluid logincontainer">
           
            <form className="loginform" onSubmit={getadminlogin}>
                <center><h2> Admin Login</h2></center> <br/>
                <button onClick={handleback}  style={{backgroundColor:"gray" , borderRadius:"2px",width:"50px", marginLeft:"60%" }}> back</button>
                <br/>
                <label>ID or Email</label><br/>
                <input className="form-control" type="text" name="id" placeholder="Enter id" onChange={(e)=>(setid(e.target.value))} required />
                <br/><br/>
                <label>Password </label><br/>
                <input className="form-control" type="password" name="password" placeholder="Enter Password" onChange={(e)=>(setpassword(e.target.value))} required />

                <br/><br/>
                <center><button className="loginbtns" type="submit">Login</button></center>
  </form>
        </div>
    )
}
export default Adminlogin;