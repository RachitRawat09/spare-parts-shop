import React, { useState,useEffect } from 'react'

import axios from 'axios';
import Totalinventory from './Totalinventory';
import ProductList from './Product_List/ProductList';

const Product = () => {

  const [products,setProducts] = useState([]);
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/products');
      setProducts(response.data);
      console.log("get data succesfully");
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts(); // this was missing
}, []);
// Extract summary data from the products array
  const totalProducts = products.length;
  const totalCategories = new Set(products.map(product => product.category)).size;
  const totalBrands = new Set(products.map(product => product.brand)).size;
  

  return (
    <>
    <Totalinventory totalProducts={totalProducts} totalCategories={totalCategories} totalBrands={totalBrands}/>

    <ProductList products ={products}/>
     </>
  );
};

export default Product
