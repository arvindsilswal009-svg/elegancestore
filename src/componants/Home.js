import react, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Cart from "./Cart";
function Home(){

     return (
      <>
      <div className="container-fluid">
      <div> <p style={{backgroundColor:"gray"}}><marquee direction="right">You Will Get The Product with premium quality and high definition printing .                                                                        You can customize the photos as you want it.</marquee>   </p></div>
     
      <div className="row items-center">
        <div className="col-md-3 text-center"><img src="logo.jpg" style={{height:"80px",width:"90px" , borderRadius:"40%", backgroundColor:"gray" }}/></div>
        <div className="col-md-6 text-center"><center>  <h3>Welcome To Elegance Store</h3></center></div>
        <div className="col-md-3 text-center">
<span><Link ><i class="fa-solid fa-phone"></i> +91-1234567890 </Link></span><br/>
<span><Link ><i class="fa-brands fa-whatsapp"></i> +91-1234567890 </Link></span><br/>
<span><Link ><i class="fa-solid fa-envelope"></i> elegancestore@gmail.com </Link></span>

        </div>
      </div>
      <br/>
      <div> 
      <Nav/> // Navigation Bar
      </div> 
      <Cart/> /* Cart Componant */
      <br/>
      <hr/>
        <p>Copyright @2024 Elegance Store. All Rights Reserved</p>
        <hr/>
        <div>
        <center> <h4><u><b>Contact us</b></u></h4> </center>
        <center> 
            <div className="col-md-3 text-center">
<span><i class="fa-solid fa-phone fa-2x"></i> &emsp;&emsp; :<Link > +91-1234567890 </Link></span><br/><br/>
<span><i class="fa-brands fa-whatsapp fa-2x"></i>&emsp;&emsp; :<Link > +91-1234567890 </Link></span><br/><br/>
<span><i class="fa-solid fa-envelope fa-2x"></i>&emsp;&emsp; :<Link > elegancestore@gmail.com </Link></span><br/><br/><br/>

        </div>

        </center>
      </div>
    </div>
    </>
     )
}

export default Home;