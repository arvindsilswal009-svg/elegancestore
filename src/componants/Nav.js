import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate=useNavigate();
    const handlelog=()=>{
        navigate('/login');
    }
  return (
   <>
    <div className="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   <label class="navbar-brand" to="#">Elegance Store</label>&emsp;&emsp;&emsp;&emsp;
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class ="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        &emsp;&emsp;
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">T-Shirts</Link>
        </li>&emsp;&emsp;
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Mugs</Link>
        </li>&emsp;&emsp;
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Mouse pads</Link>
        </li>&emsp;&emsp;
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Custom</Link>
        </li>&emsp;&emsp;
       <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">About</Link>
        </li>
       </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-success" type="submit" onClick={handlelog}>SignIn</button>
      </form>

    </div>
  </div>
</nav>
    </div>    </>
  )

        }
export default Nav;