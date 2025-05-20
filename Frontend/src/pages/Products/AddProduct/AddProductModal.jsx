import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const AddProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex justify-center items-center border-black">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <div className='flex items-center justify-between'>
          <h2 className="text-xl font-semibold mb-4">New Product</h2>
        <IoIosCloseCircle className='text-2xl text-gray-500 cursor-pointer' onClick={onClose} />
        </div>
        

        <form className="space-y-3">
          <input type="text" placeholder="Enter product name" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Enter description" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Enter price" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Enter brand" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Enter category" className="w-full border px-4 py-2 rounded" />

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
