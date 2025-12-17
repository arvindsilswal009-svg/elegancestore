import React, { useContext } from 'react'
import '../Pages/CSS/Shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
const Shopcategory = (props) => {
  const {all_product}=useContext(Shopcontext);
  return (
    <div className='shopcategory'>
      <div className='category-banner'>
        <img src={props.banner} alt="" />
        <div className='indexsort'>
          <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="sortby">
          sort by <img src={dropdown_icon} alt="" />
        </div>
        </div>
        <div className="category-products">
         {all_product.map((item,i)=> {
          if (item.category===props.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
 } 
 else
  { return null; }
 }) }
        </div>
        <div className="loadmore">
          Explore More 
        </div>
      </div>
    </div>
  )
}

export default Shopcategory;