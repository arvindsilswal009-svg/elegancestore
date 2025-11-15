import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Admincard(){


   const [products, setProducts] = useState([]);
   
  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  
     return(
         <>
         <div className="cardmap">
         {products.map((product) => (
          
<div className="card">
  <img src={`http://localhost:5000/${product.image}`} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{product.pname} &emsp;&emsp;  Price: $ {product.price}</h5>
    <p className="card-text">description: <br/>{product.description}</p>
    <br/>
    <Link to={`/editproduct/${product.id}`} class="btn btn-success"  style={{width:"80px",boxShadow:"0 10px 8px 0 rgb(0, 0, 0)"}} >Edit</Link> &emsp;&emsp;&emsp;&emsp;
    <Link to="#" class="btn btn-danger"  style={{width:"90px",boxShadow:"0 10px 8px 0 rgb(0, 0, 0)"}}  >Remove</Link>
  </div>
</div> ))}
</div>
</>
      )} 
      
          
export default Admincard;
