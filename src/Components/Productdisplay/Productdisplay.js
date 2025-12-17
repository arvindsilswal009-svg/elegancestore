
import React, { useContext } from 'react'
import './Productdisplay.css';
import { Shopcontext } from '../../Context/Shopcontext';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart}=useContext(Shopcontext);
  return (
    <div className='productdisplay'>
        <div className="displayleft">
           <div className="displayleft-image">
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
           </div>
              <div className="displayleft-mainimage">
                <img src={product.image} alt=''/>
              </div>
        </div>
        <div className="displayright">
           <h1>{product.name}</h1>
           <div className="displayright-stars">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
           </div>
           <div className="display-right-price">
            <div className="display-right-newprice">${product.new_price}</div>
            <div className="display-right-oldprice">${product.old_price}</div>
           </div>
           <div className="displayright-description"></div>
        
        <div className="right-size">
            <h3>SELECT SIZE</h3>
            <div className="size-options">
                <div className="size-option">S</div>
                <div className="size-option">M</div>
                <div className="size-option">L</div>
                <div className="size-option">XL</div>
                <div className="size-option">XXL</div>
            </div>
        </div>
       <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
       <p className='right-category'><span>Category :</span>Women , T-shirt , Crop Top</p>
   <p className='right-category'><span>Tags :</span>Modern</p>
    </div>
    </div>
  )
}

export default Productdisplay;