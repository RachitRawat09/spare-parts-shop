import React from "react";
import { MdProductionQuantityLimits, MdOutlineCategory   } from "react-icons/md";
import { GiSwordBrandish } from "react-icons/gi";

const Totalinventory = (props) => {
  return (
    <>
      <div className="p-6 bg-white rounded shadow w-full">
        <h2 className="text-2xl font-semibold mb-6">Total Inventory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-2 text-xl  tracking-tight text-blue-500 dark:text-white">
                  Total Products
                </h5>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  {props.totalProducts}
                </p>
              </div>
              <MdProductionQuantityLimits className="text-white text-5xl" />
            </div>
          </div>

           <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-2 text-xl  tracking-tight text-blue-500 dark:text-white">
                  Total Categories
                </h5>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  {props.totalCategories}
                </p>
              </div>
              <MdOutlineCategory  className="text-white text-5xl" />
            </div>
          </div>

           <div className="max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-2 text-xl  tracking-tight text-blue-500 dark:text-white">
                  Total Brands
                </h5>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  {props.totalBrands}
                </p>
              </div>
              <GiSwordBrandish className="text-white text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Totalinventory;
