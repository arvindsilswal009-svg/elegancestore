import react from "react";
import { useNavigate } from "react-router-dom";

function Adminlogin() {
    const navigate=useNavigate();
    const handleback=()=>{
        navigate('/');
    }
    

    return(
        <div className="container-fluid logincontainer">
           
            <form className="loginform">
                <center><h2> Admin Login</h2></center> <br/>
                <button onClick={handleback}  style={{backgroundColor:"gray" , borderRadius:"2px",width:"50px", marginLeft:"60%" }}> back</button>
                <br/>
                <label>Username </label><br/>
                <input className="form-control" type="text" name="username" placeholder="Enter id" required />
                <br/><br/>
                <label>Password </label><br/>
                <input className="form-control" type="password" name="password" placeholder="Enter Password" required />
                <br/><br/>
                <center><button className="loginbtns" type="submit" >Login</button></center>
                <br/>
                

         
  </form>
        </div>
    )
}
export default Adminlogin;