import react from "react";
import { useNavigate } from "react-router-dom";

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

    return(
        <div className="container-fluid logincontainer">
           
            <form className="loginform">
                <center><h2>Login Here</h2></center> <br/>
                <button onClick={handleadmin}  style={{backgroundColor:"orange" , borderRadius:"5px",width:"70px" }}>Admin</button>
                <button onClick={handleback}  style={{backgroundColor:"gray" , borderRadius:"2px",width:"50px", marginLeft:"60%" }}> back</button>
                <br/>
                <label>Username </label><br/>
                <input className="form-control" type="text" name="username" placeholder="Enter Username" required />
                <br/><br/>
                <label>Password </label><br/>
                <input className="form-control" type="password" name="password" placeholder="Enter Password" required />
                <br/><br/>
                <center><button className="loginbtns" type="submit" >Login</button></center>
                <br/>
                <center><h5>or if you are new user :</h5></center>

          <center>      <button className="loginbtns" type="submit" onClick={handleregister} >Register Here</button>
          </center>
  </form>
        </div>
    )
}
export default Login;