import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import AdminDashboard from './Dashboard/AdminDashboard';
import Users from './Dashboard/Users';
import Product from './Dashboard/Product';
import Barchart from './Dashboard/BarChart';
import Contact from './Dashboard/Contact';
import Piee from './Dashboard/Pie';
import Coupon from './Dashboard/Coupon';

const Admin = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Flex>
        <Sidebar />
        <Flex flex="1" p="4" flexDirection="column">
          <Flex justifyContent="flex-end" mb={4}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Flex>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/user" element={<Users />} />
            <Route path="/products" element={<Product />} />
            <Route path="/bar-chart" element={<Barchart />} />
            <Route path="/pie-chart" element={<Piee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coupon" element={<Coupon />} />
          </Routes>
        </Flex>
      </Flex>
    </Router>
  );
};

export default Admin;
