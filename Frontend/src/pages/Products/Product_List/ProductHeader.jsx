import React from 'react';
import { FaFilter } from 'react-icons/fa';

const ProductHeader = ({ onAddProductClick }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <h1 className="text-xl font-semibold text-gray-800">Products</h1>
      <div className="flex space-x-2">
        <button
          onClick={onAddProductClick}
          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>

        <button className="flex items-center border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded">
          <FaFilter className="mr-2" />
          Filters
        </button>

        <button className="border border-gray-300 hover:bg-gray-100  px-4 py-2 rounded">
          Download all
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;
