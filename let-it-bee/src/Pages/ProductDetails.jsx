import React from 'react'
import { useEffect, useState } from 'react';
import ProductDetailsStyles from './ProductDetailsStyles.css'
import { useParams } from 'react-router-dom';



export const ProductDetails = () => {
  
  const [is1Active, set1IsActive] = useState(false);
  const [is2Active, set2IsActive] = useState(false);
  const [is3Active, set3IsActive] = useState(false);
  const [is4Active, set4IsActive] = useState(false);
  const [prod, setProd] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);
  const urlParam = useParams();
  console.log("url param here" + urlParam);

  let fetchData = async () => {
    let data = await fetch(`http://localhost:8080/products2/1`);
    data = await data.json();
    setProd(data);
    console.log(data);
  }



  return (
    <div id="container">
      <div id="product-main-div">
        <div id="product-images-div">
          <img src={prod.image} alt="" />
          <img src={prod.image} alt="" />
          {/* <img src={prod.image} alt="" /> */}
        </div>
        <div id="product-details-div">
          <div id="product-details">
            <p id="prod-name">{prod.name}</p>
            <div id="price-div">
              <p id="product-weight">Product Weight: {prod.weight}</p>
              <p id="product-price">{prod.cost}</p>
            </div>
            <p id="product-description">{prod.description}</p>
            <div id="add-to-cart-div">
              <div id="add-sub-buttons">
                <button id="sub-button" onClick={() => (setCount(count - 1))} disabled={count===1}>-</button>
                <button id="count" min="1">{count}</button>
                <button id="add-button" onClick={() => (setCount(count + 1))} disabled={count===10}>+</button>
              </div>
              <div id="add-to-cart-button-div">
                <button id="add-to-cart-button">ADD TO CART</button>
              </div>
            </div>
          </div>
          <p id="about-prod">ABOUT THE PRODUCT</p>
          <div id="about-product">
            <div id="accordion-item">
                <div id="accordion-title" onClick={() => set1IsActive(!is1Active)}>
                  <p>INGREDIENTS</p> <span ID="expand-button">{is1Active ? '-' : '+'}</span>
                </div>
                {is1Active && <div id="accordion-content"><li>Honey</li></div>}
            </div>
            
            <div id="accordion-item">
                <div id="accordion-title" onClick={() => set2IsActive(!is2Active)}>
                  <p>NUTRITIONAL FACTS</p> <span ID="expand-button">{is2Active ? '-' : '+'}</span>
                </div>{is2Active && <div id="accordion-content"><li>Energy: 319 kcal</li><li>Carbohydrate: 79.5 g</li><li>Sugar: 0.9 g</li><li>Protein: 0.3 g</li><li>Total Fat: 0 g</li></div>}
            </div>
            
            <div id="accordion-item">
                <div id="accordion-title" onClick={() => set3IsActive(!is3Active)}>
                <p>HOW TO USE</p> <span ID="expand-button">{is3Active ? '-' : '+'}</span>
                </div>{is3Active && <div id="accordion-content">
                  <li>Consume it as it is or spread some honey on bread for an easy dessert.</li>
                  <li>It can also be had on an empty stomach with a bit of lemon juice.</li>
                  <li>Storage Information: Do not refrigerate. Store in a cool dry place.</li>
                </div>}
            </div>
            
            <div id="accordion-item" class="last-acc">
                <div id="accordion-title" onClick={() => set4IsActive(!is4Active)}>
                <p>REVIEWS</p> <span ID="expand-button">{is4Active ? '-' : '+'}</span>
                </div>{is4Active && <div id="accordion-content">
                  <h3 id="reviewer-name">Meenakshi Badola</h3>
                  <p id="review-content">These are authentic product available at discounted prices... go for it guys... Big basket is trust worthy. I order my groceries from big basket, this is not just time saving and convenient but they have always lived up to expected standard of quality.</p>
                  <h3 id="reviewer-name">Piyu Parmar</h3>
                  <p id="review-content">I liked n loved it most...coz d product from this brand that in less price.....awwwwwwwsommmmme</p>
                  <h3 id="reviewer-name">Shaji</h3>
                  <p id="review-content">one of the best products available at an unbeatable price</p>
                </div>}
            </div>
            
          </div>
        </div>
      </div>
      <div id="similar-products-div">
        <div id="similar-div1">
          <div id="sim-div-head"><p>YOU MIGHT ALSO LIKE</p></div>
          <div id="sim-div-body"><p>100% natural and organic</p></div>
        </div>
        <div>
        <div id="img-div">
              <img id="product-img" src='https://drive.google.com/uc?export=view&id=1iOiGbs3KWZamezF4P_D2fLr-BtLPFxWJ' alt="" />
            </div>
            <div id="product-info">
              <div id="product-name"><h3>Royal Jelly</h3></div>
              <div id="product-cost"><h3>₹1500.00</h3></div>
            </div>
        </div>
        <div>
        <div id="img-div">
              <img id="product-img" src='https://drive.google.com/uc?export=view&id=1RLonM1c5hYI3-K3r8Zr_9OXNFNPwCQeC' alt="" />
            </div>
            <div id="product-info">
              <div id="product-name"><h3>Bee Bread</h3></div>
              <div id="product-cost"><h3>₹249.00</h3></div>
            </div>
        </div>
        <div>
        <div id="img-div">
              <img id="product-img" src='https://drive.google.com/uc?export=view&id=1g4szzB0e1QSTBtzqXvTj-j8dgLNqlt-s' alt="" />
            </div>
            <div id="product-info">
              <div id="product-name"><h3>Pollen Honey</h3></div>
              <div id="product-cost"><h3>₹750.00</h3></div>
            </div>
        </div>
      </div>
    </div>
  )
}
