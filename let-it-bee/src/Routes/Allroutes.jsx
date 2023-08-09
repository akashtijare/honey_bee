import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { AddToCart } from '../Pages/AddToCart';
import { Login } from '../Components/Login';
import { SignUp } from '../Components/SignUp';
import { Payment } from '../Pages/Payment';
import { Products } from '../Pages/Products';
import { ProductDetails } from '../Pages/ProductDetails';

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products:id' element={<ProductDetails />}/>

    </Routes>
  )
}
