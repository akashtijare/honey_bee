import React, { useContext } from "react";
import { CartContext } from "./AddToCart";

const Item=({id,image,name,weight,cost,quantity})=>{
    const {removeItem,increment,decrement}=useContext(CartContext);
    return (
        <>
         <div className='items-info'>
         <div className='product-img'>
          <img src={image} alt='imag'/>
         </div>

         <div className='title'>
          <h2>{name}</h2>
          <p>{weight}</p>
         </div>

          <div className='add-minus-quantity'>
          <i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
          <input type='text' placeholder={quantity} disabled/>
          <i className="fas fa-plus add" onClick={()=>increment(id)}></i>

         </div>
         <div className='price'>
          <h3>{cost} ₹</h3>

         </div>
         <div className='remove-item'>
         <i className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}></i>
          </div>
         </div>
         <hr class="line"/>

         </>
    )
}
export default Item;