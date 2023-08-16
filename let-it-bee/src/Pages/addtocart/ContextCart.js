import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import { CartContext } from './AddToCart';
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { handleClearCart } from '../../Redux/action';


const ContextCart = () => {
  // const {items,clearCart,totalItem,totalAmount}=useContext(CartContext);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalItem = cartItems.reduce((total, item) => total + item.quantity, 0);
  // const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  const dispatch = useDispatch();
  // console.log(cartItems);

  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const totalAmount = calculateSubtotal(cartItems);
  const handleCheckout = () => {
    // Redirect to the payment page with the total amount
    navigate('/address');
  };

  const handleClear = () => {
    dispatch(handleClearCart());
  }

  if (cartItems.length === 0) {
    return (
      <>
        <section className="main-cart-section">
          <h1>Shopping cart</h1>
          <p className="total-items">you have <span className='total-items-count'> 0 </span> items in cart</p>
        </section>
      </>
    )
  }
  return (
    <>
      <section className="main-cart-section">
        <h1>Shopping cart</h1>
        <p className="total-items">you have <span className='total-items-count'> {totalItem} </span>items in cart</p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {
                cartItems.map((curItem) => {
                  return <Item key={curItem.id} id={curItem.id} quantity={curItem.quantity} />
                })

              }

            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>SUBTOTAL:<span>3500 ₹</span></h3>
          <button onClick={handleCheckout}>CHECKOUT</button>
          <button className="clear-cart" onClick={handleClear}>Clear Cart</button>

        </div>

      </section>
    </>
  );
};
export default ContextCart;


