import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Cart(){
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
  <img src={`http://localhost:5000/${product.image}`} className="card-img-top" alt={product.pname}/>
  <div className="card-body">
    <h5 className="card-title">Product: {product.pname}</h5>
    <p className="card-text">description: {product.description}</p>
    <p className="card-text"> Price: {product.price}</p>
    <Link ef="#" class="btn btn-primary">Add to cart</Link>
  </div>
</div> ))}
</div>
</>
      )} 
      
          
export default Cart;
