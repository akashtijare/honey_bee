import React, { createContext, useEffect, useReducer} from 'react'
 import "./Cart.css";
import ContextCart from './ContextCart';
import { product } from './product';
import { reducer } from './reducer';

export const CartContext=createContext();

const initialState={
  items:product,
  totalAmount:0,
  totalItem:0,
}

export const AddToCart = () => {
  // const[items,setItems]=useState(product);
  const[state,dispatch]=useReducer(reducer,initialState);

  // to delete indivisual item 
  const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    });
  };
  // clear all item
  const clearCart=()=>{
    return dispatch({
      type:"CLEAR_CART",
    });
  };
  // increment 
  const increment=(id)=>{
    return dispatch({
      type:"INCREMENT",
      payload:id,
    });
  };
  // decrement
  const decrement=(id)=>{
    return dispatch({
      type:"DECREMENT",
      payload:id,
    });
  };
  // use useeffect for update the data
  useEffect(()=>{
    dispatch({
      type:"GET_TOTAL"
     
    });
    console.log("aaaa")
  },[state.items]);
  
  return (
    
    <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
    <ContextCart/>
    </CartContext.Provider>
 
    
  )
}
