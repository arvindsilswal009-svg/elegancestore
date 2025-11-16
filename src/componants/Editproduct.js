
import react, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
function Editproduct(){
  const navigate=useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    pname: "",
    price: "",
    type: "",
    description: "",
    image: ""
  });

  // Load old product data into form
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // Update local state when typing
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Send updated data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/products/${id}`, product)
      .then(() => alert("Product updated successfully"))
      .catch(err => console.log(err));
  };
    return(
        <div className="container-fluid addproductcontainer">
            <form className="addproductform" onSubmit={handleSubmit} >
                <center><h2>Edit  Product</h2></center><br/><br/>
                <label>Product Name:</label><br/>
                <input className="form-control" type="text" value={product.pname} name="pname" placeholder="Enter Product Name" onChange={handleChange} required /><br/>
                
  <label>Product Type:</label><br/><br/>
  <input type="radio" id="tshirt" value={product.tshirt} name="type" checked={product.tshirt === "tshirt"} onChange={handleChange} />
  <label for="tshirt">T-shirt</label>
&emsp;&emsp;
  <input type="radio" id="mug" name="type" value={product.mug}  checked={product.mug === "mug"} onChange={handleChange} />
  <label for="mug">Mug</label>
&emsp;&emsp;
  <input type="radio" id="mousepad" name="type" value={product.mousepad}  checked={product.mousepad === "mousepad"}  onChange={handleChange}/>
  <label for="mousepad">Mousepad</label><br/><br/>

                <label>Product Description:</label><br/>
                <textarea className="form-control" value={product.description} name="description" placeholder="Enter Product Description"  onChange={handleChange} required></textarea><br/>
                <label>Price:</label><br/>
                <input className="form-control" type="number" value={product.price} name="price" placeholder="Enter Price" onChange={handleChange} required /><br/>
                <label>Upload Image:</label><br/>
                <input className="form-control" type="file" name="image" accept="image/*" onChange={handleChange}  required /><br/><br/>
               <center> <button type="submit" className="loginbtns" onClick={() => navigate(`/editproduct/${product.id}`)}>Save Changes</button></center>
            </form>
        </div>
    )
}
export default Editproduct;