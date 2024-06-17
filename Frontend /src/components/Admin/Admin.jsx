import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';

import { useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const Admin = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate= useNavigate();

  return (
  
      <Flex>
       
        <Flex flex="1" p="4" flexDirection="column">
          <Flex justifyContent="flex-end" mb={4}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Flex>
          <button onClick={() => navigate('/dashboard')}>Admin Dashboard</button>
      <button onClick={() => navigate('/user')}>Users</button>
      <button onClick={() => navigate('/products')}>Products</button>
      <button onClick={() => navigate('/bar-chart')}>Bar Chart</button>
      <button onClick={() => navigate('/pie-chart')}>Pie Chart</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/coupon')}>Coupon</button>
        </Flex>
      </Flex>
    
  );
};

export default Admin;
