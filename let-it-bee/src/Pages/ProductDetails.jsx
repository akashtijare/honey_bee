import React from 'react'
import { useEffect, useState } from 'react';
import ProductDetailsStyles from './ProductDetailsStyles.css'

export const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  
  let fetchData = async () => {
    let data = await fetch('http://localhost:8080/products2/1');
    data = await data.json();
    setProduct(data);
    console.log(product)
  }
  return (
    <div id="container">
      <div id="product-details-div">
        <div id="image-div">
          <div><img src={product.image} alt="" /></div>
          {/* <div><img src={product.image} alt="" /></div>
          <div><img src={product.image} alt="" /></div> */}
        </div>
        <div id="product-info">
          <div id="product-name-div">
            <h1 id="products-name">{product.name}</h1>
          </div>
          <div id="product-weight-price-div">
            <h3 id="product-weight">Product Weight {product.weight}</h3>
            <h3 id="product-cost">{product.cost}</h3>
          </div>
          <div id="description-div">
            <p id="description">{product.description}</p>
          </div>
          <div id="add-to-cart-div">
            <div id="button-div">
              <button>-</button>
              <button>count</button>
              <button>+</button>
            </div>
            <div id="add-to-cart-btn">
              <button id="add-to-cart">ADD TO CART</button>
            </div>
          </div>
          <div id="about-product-div">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      

      <div id="similar-products-div">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
