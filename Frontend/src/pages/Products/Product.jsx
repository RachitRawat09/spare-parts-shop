import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Totalinventory from './Totalinventory';
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

   <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Brand</th>
            <th className="p-2 border">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id} className="border-t">
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.description}</td>
              <td className="p-2 border">₹{product.price}</td>
              <td className="p-2 border">{product.brand}</td>
              <td className="p-2 border">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
     </>
  );
};

export default Product
