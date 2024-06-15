
// App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <Navbar />
      

    </div>
  );
};

import React from 'react'
import { Flex } from '@chakra-ui/react'
import Sidebar from './components/Admin/Sidebar/Sidebar'



const App = () => {
  return (
    <Flex>
        <Sidebar/>
    </Flex>
  )
}


export default App;
