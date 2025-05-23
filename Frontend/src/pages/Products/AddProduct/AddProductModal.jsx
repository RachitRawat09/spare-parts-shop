import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';

const AddProductModal = ({ isOpen, onClose }) => {

   const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    category: ''
  });
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/api/products', formData);
      alert("Add Succesfully");
      onClose(); // close modal after success
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex justify-center items-center border-black">
      <ToastContainer />
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <div className='flex items-center justify-between'>
          <h2 className="text-xl font-semibold mb-4">New Product</h2>
        <IoIosCloseCircle className='text-2xl text-gray-500 cursor-pointer' onClick={onClose} />
        </div>
        

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter product name" className="w-full border px-4 py-2 rounded" onChange={handleChange} value={formData.name} />
          <input type="text" name="description" placeholder="Enter description" className="w-full border px-4 py-2 rounded" onChange={handleChange} value={formData.description} />
          <input type="text" name="price" placeholder="Enter price" className="w-full border px-4 py-2 rounded" onChange={handleChange} value={formData.price} />
          <input type="text" name="brand" placeholder="Enter brand" className="w-full border px-4 py-2 rounded" onChange={handleChange} value={formData.brand} />
          <input type="text" name="category" placeholder="Enter category" className="w-full border px-4 py-2 rounded" onChange={handleChange} value={formData.category} />

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Discard
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
