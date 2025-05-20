import React, { useState } from 'react';
import ProductHeader from './ProductHeader';
import AddProductModal from '../AddProduct/AddProductModal';

const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="p-6 bg-white rounded shadow">
        <ProductHeader onAddProductClick={() => setShowModal(true)} />
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Brand</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">{product.description}</td>
                <td className="p-2 border">₹{product.price}</td>
                <td className="p-2 border">{product.brand}</td>
                <td className="p-2 border">{product.category}</td>
                <td className="p-2 border">edit / delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Component */}
      <AddProductModal isOpen={showModal} onClose={() => setShowModal(false)}/>
    </>
  );
};

export default ProductList;
