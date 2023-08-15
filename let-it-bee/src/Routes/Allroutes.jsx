import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { AddToCart } from '../Pages/AddToCart';
import { Login } from '../Components/Login';
import { SignUp } from '../Components/SignUp';
import { Products } from '../Pages/Products';
import { ProductDetails } from '../Pages/ProductDetails';
import Address from '../Pages/address/Address';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Products />}/>
        <Route path='/products:id' element={<ProductDetails />}/>
        <Route path='/address' element={<Address />}/>
        
    </Routes>
  )
}
