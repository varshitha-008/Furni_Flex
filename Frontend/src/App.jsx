// // App.jsx
// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Admin from './components/Admin/Admin'
import Users from './components/Admin/Dashboard/Users';
import Product from './components/Admin/Dashboard/Product';
import Barchart from './components/Admin/Dashboard/BarChart';
import Piee from './components/Admin/Dashboard/Pie';
import Contact from './components/Admin/Dashboard/Contact';
import Coupon from './components/Admin/Dashboard/Coupon';
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard'
import React from 'react';
import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Sidebar from './components/Admin/Sidebar/Sidebar';




const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Grid templateColumns="250px auto" gap={6} p={4}>
          <GridItem colSpan={1}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={1}>
            <Routes>
              {/* <Route path="/" element={<Admin />} /> */}
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/user" element={<Users />} />
              <Route path="/products" element={<Product />} />
              <Route path="/bar-chart" element={<Barchart />} />
              <Route path="/pie-chart" element={<Piee />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/coupon" element={<Coupon />} />
            </Routes>
          </GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  );
};

export default App;

