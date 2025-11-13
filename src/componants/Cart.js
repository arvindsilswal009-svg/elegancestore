import { Link } from "react-router-dom";

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
         </>
     )
 }  
    export default Cart;