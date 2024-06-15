// App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Admin from './components/Admin/Admin';



const App = () => {
  return (
    <ChakraProvider>
      <Admin />
      
      
    </ChakraProvider>
  );
};

export default App;
