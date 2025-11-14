<<<<<<< HEAD

import react, { useState } from "react";
import axios from "axios";
function Addproduct(){
const [pname,setpname]=useState();
const [type,settype]=useState("physical");
const [description,setdescription]=useState();
const [price,setprice]=useState();
const [file,setfile]=useState();

const getproductadd=async(e)=>{
    e.preventDefault();
   const formdata= new FormData();
   formdata.append("pname",pname);
   formdata.append("type",type);
   formdata.append("description",description);
   formdata.append("price",price);
   formdata.append("image",file);

   try{
    const res=await axios.post("http://localhost:5000/addproduct",formdata,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    });
    console.log(res.data.message);
    alert("Product added successfully!");
   }catch(err){
    console.log("❌ ERROR:",err);
}
};

    return(
        <div className="container-fluid addproductcontainer">
            <form className="addproductform" onSubmit={getproductadd} >
                <center><h2>Add New Product</h2></center><br/><br/>
                <label>Product Name:</label><br/>
                <input className="form-control" type="text" name="productname" placeholder="Enter Product Name" onChange={(e)=>setpname(e.target.value)} required /><br/>
                
  <label>Product Type:</label><br/><br/>
  <input type="radio" id="tshirt" name="type"  value="physical" onChange={(e)=>settype(e.target.value)} />
  <label for="tshirt">T-shirt</label>
&emsp;&emsp;
  <input type="radio" id="mug" name="type" value="digital"  onChange={(e)=>settype(e.target.value)} />
  <label for="mug">Mug</label>
&emsp;&emsp;
  <input type="radio" id="mousepad" name="type" value="service"  onChange={(e)=>settype(e.target.value)}/>
  <label for="mousepad">Mousepad</label><br/><br/>

                <label>Product Description:</label><br/>
                <textarea className="form-control" name="productdescription" placeholder="Enter Product Description"  onChange={(e)=>setdescription(e.target.value)} required></textarea><br/>
                <label>Price:</label><br/>
                <input className="form-control" type="number" name="price" placeholder="Enter Price" onChange={(e)=>setprice(e.target.value)} required /><br/>
                <label>Upload Image:</label><br/>
                <input className="form-control" type="file" name="image" accept="image/*" onChange={(e) => setfile(e.target.files[0])} required /><br/><br/>
=======
import react from "react";
function Addproduct(){
    return(
        <div className="container-fluid addproductcontainer">
            <form className="addproductform">
                <center><h2>Add New Product</h2></center><br/><br/>
                <label>Product Name:</label><br/>
                <input className="form-control" type="text" name="productname" placeholder="Enter Product Name" required /><br/>
                
  <label>Product Type:</label><br/><br/>
  <input type="radio" id="tshirt" name="type" value="T-shirt"/>
  <label for="tshirt">T-shirt</label>
&emsp;&emsp;
  <input type="radio" id="mug" name="type" value="Mug" />
  <label for="mug">Mug</label>
&emsp;&emsp;
  <input type="radio" id="mousepad" name="type" value="Mousepad"/>
  <label for="mousepad">Mousepad</label><br/><br/>

                <label>Product Description:</label><br/>
                <textarea className="form-control" name="productdescription" placeholder="Enter Product Description" required></textarea><br/>
                <label>Price:</label><br/>
                <input className="form-control" type="number" name="price" placeholder="Enter Price" required /><br/>
                <label>Upload Image:</label><br/>
                <input className="form-control" type="file" name="productimage" accept="image/*" required /><br/><br/>
>>>>>>> d4f0ffdf14439246b0d352f9b552ad486d391628
               <center> <button type="submit" className="loginbtns">Add Product</button></center>
            </form>
        </div>
    )
}
export default Addproduct;