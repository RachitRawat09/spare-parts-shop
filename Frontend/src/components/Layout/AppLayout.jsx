import React from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import Footer from '../../pages/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/Sidebar/Sidebar'

const AppLayout = () => {
  return (
    <>
     <div className="flex">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Main content pushed right with margin */}
      <div className="flex flex-col ml-64 min-h-screen">
        <Navbar />
        <div className="flex-grow  pt-20 p-4 bg-gray-50">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default AppLayout
