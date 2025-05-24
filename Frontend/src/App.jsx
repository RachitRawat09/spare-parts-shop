import React from "react";

import Login from "./pages/login/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/login/Register";
import Product from "./pages/Products/Product";
import SaleTracker from "./pages/Sale/SaleTracker";
import Profile from './pages/login/profile';

const route = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/saletracker',
        element: <SaleTracker />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/profile',
        element: <Profile />  
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
