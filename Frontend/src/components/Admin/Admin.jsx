import React from 'react'
import { Box } from '@chakra-ui/react'
import Homeadmin from './Homeadmin'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserAdmin from './UserAdmin';
import Productsadmin from './Productsadmin';



const Admin = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
       <Homeadmin />,
    },
    {
      path: "users",
      element:<UserAdmin/>,
    },
    {
      path: "products",
      element:<Productsadmin/>,
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default Admin
