import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Admincard(){
  const [expanded, setExpanded] = useState(false);

  const { id } = useParams();

  const remove = async (productId) => {
  if (!productId) {
    console.log(productId);
    console.error("didnt get id");
    return;
  }

  try {
    await axios.delete(`http://localhost:5000/products/${id}`);
    setProducts(prevProducts =>
      prevProducts.filter(p => p.id !== productId)
    );
  } catch (err) {
    console.log(err);
  }
};
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
    <hr/>
    <p className="card-text"  style={{ display: "-webkit-box", WebkitLineClamp: expanded ? "unset" : 2,  WebkitBoxOrient: "vertical", overflow: "hidden" }}>description: <br/>{product.description}</p>
<span style={{ color: "blue", cursor: "pointer" }}onClick={() => setExpanded(!expanded)}>{expanded ? "Read less" : "Read more"}</span>
    <br/>
    <Link to={`/editproduct/${product.id}`} class="btn btn-success"  style={{width:"80px",boxShadow:"0 10px 8px 0 rgb(0, 0, 0)"}} >Edit</Link> &emsp;&emsp;&emsp;&emsp;
    <button class="btn btn-danger"  style={{width:"90px",boxShadow:"0 10px 8px 0 rgb(0, 0, 0)"}} onClick={()=>remove(product.id)}  >Remove</button>
  </div>
</div> ))}
</div>
</>
      )} 
      
          
export default Admincard;
