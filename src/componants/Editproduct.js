/*
import react, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Editproduct(){
    return(
        <div className="container-fluid addproductcontainer">
            <form className="addproductform" onSubmit={handleSubmit} >
                <center><h2>Edit  Product</h2></center><br/><br/>
                <label>Product Name:</label><br/>
                <input className="form-control" type="text" value={product.pname} name="pname" placeholder="Enter Product Name" onChange={handleChange} required /><br/>
                
  <label>Product Type:</label><br/><br/>
  <input type="radio" id="tshirt" value={product.type} name="type"  onChange={handleChange} />
  <label for="tshirt">T-shirt</label>
&emsp;&emsp;
  <input type="radio" id="mug" name="type" value={product.type}  onChange={handleChange} />
  <label for="mug">Mug</label>
&emsp;&emsp;
  <input type="radio" id="mousepad" name="type" value={product.type}  onChange={handleChange}/>
  <label for="mousepad">Mousepad</label><br/><br/>

                <label>Product Description:</label><br/>
                <textarea className="form-control" value={product.description} name="productdescription" placeholder="Enter Product Description"  onChange={handleChange} required></textarea><br/>
                <label>Price:</label><br/>
                <input className="form-control" type="number" value={product.price} name="price" placeholder="Enter Price" onChange={handleChange} required /><br/>
                <label>Upload Image:</label><br/>
                <input className="form-control" type="file" name="image" accept="image/*" onChange={handleChange}  required /><br/><br/>
               <center> <button type="submit" className="loginbtns">Save Changes</button></center>
            </form>
        </div>
    )
}
export default Editproduct;
*/