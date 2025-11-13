import react from "react";
import { useNavigate } from "react-router-dom";

function Register() {  
const navigate=useNavigate();
    const handleback=()=>{
        navigate('/login');
    }
    return(
        <div className="container-fluid registercontainer">
<form className="registerform">
        <center><h2>Register Here</h2></center> <br/>
        <button onClick={handleback}  style={{backgroundColor:"gray" , borderRadius:"2px",width:"50px", marginLeft:"60%" }}> back</button>
        <br/>
        <label>Enter Username </label><br/>
        <input className="form-control" type="text" name="username" placeholder="Enter Username" required />
        <br/><br/>
        <label>Enter Phone No.</label><br/>
        <input className="form-control" type="tel" name="phone" placeholder="Enter Phone No." required />
        <br/><br/>
        <label>Enter Email </label><br/>       
        <input className="form-control" type="email" name="email" placeholder="Enter Email" required />
        <br/><br/>
        <label>Enter Password </label><br/>
        <input className="form-control" type="password" name="password" placeholder="Enter Password" required />
        <br/><br/>
        <center>
        <button className="loginbtns" type="submit" >Register</button>           </center>     
</form>
        </div>
    )
}
export default Register;