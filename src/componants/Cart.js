import { Link } from "react-router-dom";
<<<<<<< HEAD
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
</div> 
      ))} 
      </div>     
=======

function Cart(){
   
     return(
         <>
         <h1>Products </h1>
         <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" class="btn btn-primary">Go somewhere</Link>
  </div>

</div>
>>>>>>> d4f0ffdf14439246b0d352f9b552ad486d391628
         </>
     )
 }  
    export default Cart;