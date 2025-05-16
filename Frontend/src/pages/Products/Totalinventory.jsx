import React from 'react'

const Totalinventory = (props) => {
  return (
    <>
      <div className="p-6 bg-white rounded shadow w-full">
      <h2 className="text-2xl font-semibold mb-6">Total Inventory</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition">
    <h3 className="mb-2 text-xl font-bold tracking-tight text-blue-500 dark:text-white">Total Products</h3>
    <p className="text-4xl font-bold text-gray-900 dark:text-white">{props.totalProducts}</p>
  </div>

  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition">
    <h3 className="mb-2 text-xl font-bold tracking-tight text-green-600 dark:text-white">Total Categories</h3>
    <p className="text-4xl font-bold text-gray-900 dark:text-white">{props.totalCategories}</p>
  </div>

  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition">
    <h3 className="mb-2 text-xl font-bold tracking-tight text-purple-600 dark:text-white">Total Brands</h3>
    <p className="text-4xl font-bold text-gray-900 dark:text-white">{props.totalBrands}</p>
  </div>
</div>

    </div>
    
    </>
  )
}

export default Totalinventory
