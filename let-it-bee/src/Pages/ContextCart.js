import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import { product } from './product';
import { CartContext } from './AddToCart';
import "./Cart.css";

const ContextCart=()=>{
    const {items,clearCart,totalItem,totalAmount}=useContext(CartContext);
    if(items.length===0){
        return(
            <>
      <section className='main-cart-section'>
      <h1>Shopping cart</h1>
      <p className='total-items'>you have <span className='total-items-count'> 0 </span> items in cart</p>
      </section>
            </>
        )
    }
    return(
    <>
     <section className='main-cart-section'>
      <h1>Shopping cart</h1>
      <p className='total-items'>you have <span className='total-items-count'> {totalItem} </span>items in cart</p>
     <div className='cart-items'>
      <div className='cart-items-container'>
      <Scrollbars>
        {
          items.map((curItem)=>{
            return <Item key={curItem.id} {...curItem}/>
          })
        }
       
     
         </Scrollbars>
      </div>
     </div>
     <div className='card-total'>
      <h3>Total:<span>{totalAmount} ₹</span></h3>
      <button>CHECKOUT</button>
      <button className="clear-cart" onClick={clearCart}>Clear Cart</button>

     </div>
    
    </section>
    </>
    );
};
export default ContextCart;