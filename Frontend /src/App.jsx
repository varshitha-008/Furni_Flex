



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Chairs from './components/Chairs';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Homepage from './components/Homepage';
import Sofas from './components/Sofas';
import Tables from './components/Tables';
import Wardrobes from './components/Wardrobes';
import Curtains from './components/Curtains';
import ProductCard from './components/ProductCard';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin/Admin'
import Users from './components/Admin/Dashboard/Users';
import Product from './components/Admin/Dashboard/Product';
import Barchart from './components/Admin/Dashboard/BarChart';
import Piee from './components/Admin/Dashboard/Pie';
import Contact from './components/Admin/Dashboard/Contact';
import Coupon from './components/Admin/Dashboard/Coupon';
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard'
// import React from 'react';
import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Sidebar from './components/Admin/Sidebar/Sidebar';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/sofas" element={<Sofas />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/curtains" element={<Curtains />} />
          <Route path="/wardrobes" element={<Wardrobes />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/user" element={<Users />} />
              <Route path="/products" element={<Product />} />
              <Route path="/bar-chart" element={<Barchart />} />
              <Route path="/pie-chart" element={<Piee />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/coupon" element={<Coupon />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;







