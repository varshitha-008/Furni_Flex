import React, { useState } from 'react';
import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store'; 
import logoImage from './Screenshot 2024-06-15 at 1.01.48 PM.png'; 

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(setSearchQuery(searchTerm.trim()));
  };

  return (
    <Box bg="gray.800" p={4} boxSizing='border-box'>
      <Flex align="center">
        <Box mr={2} style={{ width: '60px', height: '60px' }}>
          <Image src={logoImage} alt="FurniFlex Logo" w="full" h="full" objectFit="contain" />
        </Box>
        <Heading as="h1" size="lg" color="white">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>FurniFlex</Link>
        </Heading>
        <Spacer />
        <InputGroup maxW="300px" mr={4}>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            color="white"
            _placeholder={{ color: 'whiteAlpha.700' }}
            bg="gray.600"
            borderRadius="md"
            border="none"
            _focus={{ outline: 'none' }}
          />
          <InputRightElement>
            <Button onClick={handleSearch} colorScheme="teal">Go</Button>
          </InputRightElement>
        </InputGroup>
        <Button as={Link} to="/cart" colorScheme="teal" ml={4}>
          Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
