import React, { useState, useEffect } from 'react';
import ProductCatalogStyles from './ProductCatalogStyles.css' ;
// import styles from './styles.css';

const ProductCatalog = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  let fetchData = async () => {
    let data = await fetch('http://localhost:3000/products2');
    data = await data.json();
    setProducts(data);
    console.log(data);
  }
  return (
	<div id="container">
    <div id="filter-div">
      <div id="category-div">
      <select name = "selectCategory" id = "selectCategory" onchange = "sortCategory()">
          <option value = "allCategories">ALL CATEGORIES</option>
          <option value = "honey">HONEY</option>
          <option value = "pollen">POLLEN</option>
          <option value = "bars">BARS</option>
        </select>
      </div>
      <div id="sort-div">
        <select name = "sortingFunctionality" id = "sortingFunctionality" onchange = "sortProducts()">
          <option value = "popularity">SORT BY POPULARITY</option>
          <option value = "lToH">SORT BY PRICE - LOW TO HIGH</option>
          <option value = "hToL">SORT BY PRICE - HIGH TO LOW</option>
          <option value = "aToZ">SORT BY A TO Z</option>
          <option value = "zToA">SORT BY Z TO A</option>
        </select>
      </div>
    </div>


    <div className="product-catalog-div">
      {products.map((product) => {
        return (
          <div id="product-div">
            <div id="img-div">
              <img id="product-img" src={product.image} alt="" />
            </div>
            <div id="product-info">
              <div id="product-name"><h3>{product.name}</h3></div>
              <div id="product-cost"><h3>{product.cost}</h3></div>
            </div>
          </div>
        )
      })}
    </div>

    <div id="pagination-div">
      <button className='hexagon-button'>1</button>
      <button className='hexagon-button'>2</button>
      <button className='hexagon-button'>3</button>
      <button className='hexagon-button'>4</button>
    </div>
  </div>
  )
}

export default ProductCatalog