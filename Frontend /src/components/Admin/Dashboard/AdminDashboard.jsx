import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Square, VStack, useColorMode } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import Barchart from './BarChart';
import TableHOC from './Table';
import Piee from './Pie';
import Sidebar from '../Sidebar/Sidebar';

const AdminDashboard = () => {
  const { colorMode } = useColorMode(); // Accessing colorMode and toggleColorMode from useColorMode
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const fetchAllProductsCount = async () => {
    try {
      const [
        sofaResponse,
        curtainResponse,
        tablesResponse,
        wardrobesResponse,
        chairsResponse
      ] = await Promise.all([
        fetch('https://furni-flex-4-yx74.onrender.com/sofa').then(res => res.json()),
        fetch('https://furni-flex-4-yx74.onrender.com/curtains').then(res => res.json()),
        fetch('https://furni-flex-4-yx74.onrender.com/tables').then(res => res.json()),
        fetch('https://furni-flex-4-yx74.onrender.com/wardrobes').then(res => res.json()),
        fetch('https://furni-flex-4-yx74.onrender.com/chairs').then(res => res.json())
      ]);

      const sofaCount = Array.isArray(sofaResponse) ? sofaResponse.length : 0;
      const curtainCount = Array.isArray(curtainResponse) ? curtainResponse.length : 0;
      const tablesCount = Array.isArray(tablesResponse) ? tablesResponse.length : 0;
      const wardrobesCount = Array.isArray(wardrobesResponse) ? wardrobesResponse.length : 0;
      const chairsCount = Array.isArray(chairsResponse) ? chairsResponse.length : 0;

      const totalProductCount = sofaCount + curtainCount + tablesCount + wardrobesCount + chairsCount;
      setProductCount(totalProductCount);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await fetch('https://furni-flex-4-yx74.onrender.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUserCount(data.length);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchAllProductsCount();
    fetchUserCount();
  }, []);

  return (
    <Box bg={colorMode === 'light' ? '#fff' : '#1a202c'} w='100%' minH="100vh" color={colorMode === 'light' ? 'black' : 'white'} >
    <Flex>
      <Box w='250px'> {/* Adjust width as needed for the Sidebar */}
        <Sidebar />
      </Box>
      <Box flex="1" p={[2, 4, 6]}>
      <Flex
        color='white'
        gap="5px"
        wrap="nowrap"
        justifyContent="space-around"
      >
        <Square bg={colorMode === 'light' ? 'blue.500' : 'blue.800'} size="150px" w="300px">
          <VStack>
            <Text>Products: {productCount}</Text>
            <CircularProgress value={productCount} max={100} color='orange.400'>
              <CircularProgressLabel>{productCount}</CircularProgressLabel>
            </CircularProgress>
          </VStack>
        </Square>
        <Square bg={colorMode === 'light' ? 'blue.500' : 'blue.800'} size="150px" w="300px">
          <VStack>
            <Text>Users: {userCount}</Text>
            <CircularProgress value={userCount} max={100} color='orange.400'>
              <CircularProgressLabel>{userCount}</CircularProgressLabel>
            </CircularProgress>
          </VStack>
        </Square>
        <Square bg={colorMode === 'light' ? 'blue.500' : 'blue.800'} size="150px" w="300px">
          <VStack>
            <Text>Revenue: $34000</Text>
            <CircularProgress value={70} max={100} color='orange.400'>
              <CircularProgressLabel>$34K</CircularProgressLabel>
            </CircularProgress>
          </VStack>
        </Square>
        <Square bg={colorMode === 'light' ? 'blue.500' : 'blue.800'} size="150px" w="300px">
          <VStack>
            <Text>Transaction: $2500</Text>
            <CircularProgress value={50} max={100} color='orange.400'>
              <CircularProgressLabel>$2.5K</CircularProgressLabel>
            </CircularProgress>
          </VStack>
        </Square>
      </Flex>

        <Flex
          color='white'
          gap={[2, 4, 6]}
          wrap="wrap"
          justifyContent="center"
          mt="20px"
        >
          <Box
            bg={colorMode === 'light' ? 'white' : '#2d3748'}
            w={['100%', '48%', '48%', '48%']}
            p={4}
            borderRadius="md"
            boxShadow="md"
          >
            <Barchart />
          </Box>
          <Box
            bg={colorMode === 'light' ? 'white' : '#2d3748'}
            w={['100%', '48%', '48%', '48%']}
            p={4}
            borderRadius="md"
            boxShadow="md"
          >
            {/* Adjusted Square size for TableHOC */}
            <Square bg={colorMode === 'light' ? 'white' : '#2d3748'} size={['100%', '50%', 'auto']} w={['100%', '50%', '70%']} color={colorMode === 'light' ? 'black' : 'white'} ml={['0', '100px', '100px']} mb="20px">
              <VStack>
                <TableHOC />
              </VStack>
            </Square>
            <Square bg={colorMode === 'light' ? 'white' : '#2d3748'} size={['100%', 'auto', 'auto']} w={['100%', 'auto', '70%']} color={colorMode === 'light' ? 'black' : 'white'} ml={['0', '70px', '20px']} mb="20px">
              <VStack>
                <Piee />
              </VStack>
            </Square>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Box>
  
  
  );
};

export default AdminDashboard;
