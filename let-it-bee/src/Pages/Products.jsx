import React from 'react'
import { useState, useEffect } from 'react';
import {ProductDetails} from './ProductDetails';
import { Link, redirect, useNavigate } from "react-router-dom";
import ProductCatalogStyles from './ProductCatalogStyles.css';
import { Allroutes } from '../Routes/Allroutes';

export const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setOrderBy] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setFilterByCategory] = useState("all");
  const [isError, setIsError] = useState(null);


  let getData = async (categoryFilter, sortBy, sortOrder, page) => {
    let url = `http://localhost:8080/products2?_page=${page}&_limit=9`;
    
    if(categoryFilter === "all") {
      url = url;
    }

    if(categoryFilter !== "all") {
      url = `${url}&category=${categoryFilter}`
    }
    if(sortBy !== "" && sortOrder !== "") {
      if(sortOrder === "aToZ") {
          setOrderBy("asc");
      }
      else if(sortOrder === "zToA") {
          setOrderBy("desc");
      }
      else if(sortOrder === "desc") {
          setOrderBy("desc");
      }
          url = `${url}&_sort=${sortBy}&_order=${sortOrder}`
    }
    
    try {
      setIsLoading(true);
      let response = await fetch(url);
      let json = await response.json();
      setProducts(json);
      setIsLoading(false);
    }
    catch(error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    getData(categoryFilter, sortBy, sortOrder, page);
  }, [categoryFilter, sortBy, sortOrder, page]);

  return (
	<div id="container">

    <div id="head-info-div">
      <p id="head-info">PRODUCTS</p>
    </div>

    <div id="scroll-div">
    <marquee id="scroll-text"  scrollamount="10">UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATES AND BARS</marquee>
    </div>

    <div id="filter-div">
      <div id="category-div">
      <select name = "selectCategory" id = "selectCategory" onChange={(event) => {setFilterByCategory(event.target.value); } }>
          <option value = "all">ALL CATEGORIES</option>
          <option value = "honey">HONEY</option>
          <option value = "pollen">POLLEN</option>
          <option value = "bars">BARS</option>
        </select>
      </div>
      <div id="sort-div">
        <select name = "sortingFunctionality" id = "sortingFunctionality" onChange={(event) => {setOrderBy(event.target.value); }}>
          <option value = "popularity">SORT BY POPULARITY</option>
          <option value = "asc">SORT BY PRICE - LOW TO HIGH</option>
          <option value = "desc">SORT BY PRICE - HIGH TO LOW</option>
          <option value = "aToZ">SORT BY A TO Z</option>
          <option value = "zToA">SORT BY Z TO A</option>
        </select>
      </div>
    </div>


    <div className="product-catalog-div">
      {products.map((product) => {
        return (
          <div id="product-div" key={product.id}>
            <div id="img-div">
              <img id="product-img" src={product.image} alt="" />
            </div>
            <div id="product-info">
              <div id="product-name"><h3>{product.name}</h3></div>
              <div id="product-cost"><h3>{product.cost}</h3></div>
            </div>
              <Link to={`/product/${product.id}`} product={product}>More Details</Link>
          </div>
        )
      })}
    </div>

    <div id="pagination-div">
      <button onClick={()=>(setPage(1))}>1</button>
      <button onClick={()=>(setPage(2))}>2</button>
      <button onClick={()=>(setPage(3))}>3</button>
    </div>
  </div>
  )
}
