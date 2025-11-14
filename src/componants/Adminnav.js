import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import axios from "axios";
import { useState } from "react";

function Adminnav() {
  const [results, setResults] = useState([]);
=======

function Adminnav() {
>>>>>>> d4f0ffdf14439246b0d352f9b552ad486d391628
  const navigate=useNavigate();
    const handlelog=()=>{
        navigate('/login');
    }
<<<<<<< HEAD
     const handleSearch = async (query) => {
    try {
      const res = await axios.get(`http://localhost:5000/products/search?q=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error("Search Error:", err);
    }
  };
=======
>>>>>>> d4f0ffdf14439246b0d352f9b552ad486d391628
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
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
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
          <Link class="nav-link active" aria-current="page" to="/addproduct">Add Products</Link>
        </li>&emsp;&emsp;
       <li class="nav-item">
<<<<<<< HEAD
          <Link class="nav-link active" aria-current="page" to="#">Orders</Link>
=======
          <Link class="nav-link active" aria-current="page" to="#">About</Link>
>>>>>>> d4f0ffdf14439246b0d352f9b552ad486d391628
        </li>
       </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<<<<<<< HEAD
        <button className="btn btn-outline-success" type="submit" onChange={handleSearch}>Search</button>
        &emsp;
       <button className="btn btn-outline-success" type="button" onClick={handlelog}>SignOut</button>
=======
        <button className="btn btn-outline-success" type="submit">Search</button>
        &emsp;
       <button className="btn btn-outline-success" type="submit" onClick={handlelog}>SignOut</button>
>>>>>>> d4f0ffdf14439246b0d352f9b552ad486d391628
      </form>

    </div>
  </div>
</nav>
    </div>    </>
  )

        }
export default Adminnav;