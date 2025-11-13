import react, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Cart from "./Cart";
function Home(){

     return (
      <>
      <div className="container">
      <div> <p style={{backgroundColor:"gray"}}><marquee direction="right">You Will Get The Product with premium quality and high definition printing .                                                                        You can customize the photos as you want it.</marquee>   </p></div>
     <hr/>
      <div className="row items-center">
        <div className="col-md-3 text-center"> Logo</div>
        <div className="col-md-6 text-center"><center>  <h3>Welcome To Elegance Store</h3></center></div>
        <div className="col-md-3 text-center">
<span><Link ><i class="fa-solid fa-phone"></i> +91-1234567890 </Link></span><br/>
<span><Link ><i class="fa-brands fa-whatsapp"></i> +91-1234567890 </Link></span><br/>
<span><Link ><i class="fa-solid fa-envelope"></i> elegancestore@gmail.com </Link></span>

        </div>
      </div>
      <br/>
      <div> 
      <Nav/>
      </div> 
      <Cart/>
    </div>
    </>
     )
}

export default Home;