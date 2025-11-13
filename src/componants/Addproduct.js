import react from "react";
function Addproduct(){
    return(
        <div className="container-fluid addproductcontainer">
            <form className="addproductform">
                <center><h2>Add New Product</h2></center><br/><br/>
                <label>Product Name:</label><br/>
                <input className="form-control" type="text" name="productname" placeholder="Enter Product Name" required /><br/>
                <label>Product Description:</label><br/>
                <textarea className="form-control" name="productdescription" placeholder="Enter Product Description" required></textarea><br/>
                <label>Price:</label><br/>
                <input className="form-control" type="number" name="price" placeholder="Enter Price" required /><br/>
                <label>Upload Image:</label><br/>
                <input className="form-control" type="file" name="productimage" accept="image/*" required /><br/><br/>
               <center> <button type="submit" className="loginbtns">Add Product</button></center>
            </form>
        </div>
    )
}
export default Addproduct;