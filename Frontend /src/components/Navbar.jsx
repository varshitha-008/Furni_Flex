

import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Icon,
  Avatar,
  VStack,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import logoImage from './Screenshot 2024-06-15 at 1.01.48 PM.png';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSearch = () => {
    dispatch(setSearchQuery(searchTerm.trim()));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';
  if (isLoginOrSignup) {
    return null;
  }

  return (
    <Box bg="gray.700" p={4} borderBottom="1px solid" borderBottomColor="gray.600" position="relative">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Box w="60px" h="60px" mr={2} flexShrink={0}>
            <Image src={logoImage} alt="FurniFlex Logo" w="full" h="full" objectFit="contain" />
          </Box>
          <Heading as="h1" size="lg" color="white" fontFamily="sans-serif" ml={2}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              FurniFlex
            </Link>
          </Heading>
        </Flex>
        <Flex align="center">
          <Box className="navbar-item">
            <Button as={Link} to="/chairs" variant="link" color="white" mx={4} fontFamily="sans-serif">
              Chairs
            </Button>
            <VStack className="dropdown" align="start">
              <Link to="/chairs/office" className="dropdown-item">Office Chairs</Link>
              <Link to="/chairs/gaming" className="dropdown-item">Gaming Chairs</Link>
              <Link to="/chairs/dining" className="dropdown-item">Dining Chairs</Link>
            </VStack>
          </Box>
          <Box className="navbar-item">
            <Button as={Link} to="/sofas" variant="link" color="white" mx={4} fontFamily="sans-serif">
              Sofas
            </Button>
            <VStack className="dropdown" align="start">
              <Link to="/sofas/sectional" className="dropdown-item">Sectional Sofas</Link>
              <Link to="/sofas/recliner" className="dropdown-item">Recliner Sofas</Link>
              <Link to="/sofas/sleeper" className="dropdown-item">Sleeper Sofas</Link>
            </VStack>
          </Box>
          <Box className="navbar-item">
            <Button as={Link} to="/curtains" variant="link" color="white" mx={4} fontFamily="sans-serif">
              Curtains
            </Button>
            <VStack className="dropdown" align="start">
              <Link to="/curtains/blackout" className="dropdown-item">Blackout Curtains</Link>
              <Link to="/curtains/sheer" className="dropdown-item">Sheer Curtains</Link>
              <Link to="/curtains/thermal" className="dropdown-item">Thermal Curtains</Link>
            </VStack>
          </Box>
          <Box className="navbar-item">
            <Button as={Link} to="/tables" variant="link" color="white" mx={4} fontFamily="sans-serif">
              Tables
            </Button>
            <VStack className="dropdown" align="start">
              <Link to="/tables/dining" className="dropdown-item">Dining Tables</Link>
              <Link to="/tables/coffee" className="dropdown-item">Coffee Tables</Link>
              <Link to="/tables/side" className="dropdown-item">Side Tables</Link>
            </VStack>
          </Box>
          <Box className="navbar-item">
            <Button as={Link} to="/wardrobes" variant="link" color="white" mx={4} fontFamily="sans-serif">
              Wardrobes
            </Button>
            <VStack className="dropdown" align="start">
              <Link to="/wardrobes/standalone" className="dropdown-item">Standalone Wardrobes</Link>
              <Link to="/wardrobes/walk-in" className="dropdown-item">Walk-in Wardrobes</Link>
              <Link to="/wardrobes/armoire" className="dropdown-item">Armoire</Link>
            </VStack>
          </Box>
        </Flex>
        <Flex align="center">
          <InputGroup maxW="300px">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              color="black"
              _placeholder={{ color: 'whiteAlpha.800' }}
              bg="white"
              borderRadius="md"
              border="none"
              _focus={{ outline: 'none' }}
              mr={2}
              fontFamily="sans-serif"
            />
            <InputRightElement>
              <Button onClick={handleSearch} colorScheme="teal" variant="solid">
                <Icon as={AiOutlineSearch} />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button as={Link} to="/" variant="link" color="white" ml={4} fontFamily="sans-serif">
            <Icon as={AiOutlineHome} boxSize={8} />
          </Button>
          <Button as={Link} to="/cart" variant="link" color="white" ml={4} fontFamily="sans-serif">
            <Icon as={AiOutlineShoppingCart} boxSize={8} />
          </Button>
          {user ? (
            <Button onClick={handleLogout} variant="link" color="white" ml={4} fontFamily="sans-serif">
              Logout
            </Button>
          ) : (
            <Button as={Link} to="/login" variant="link" color="white" ml={4} fontFamily="sans-serif">
              <Avatar size="sm" name="Profile" />
            </Button>
          )}
            {user && user.username ==="Admin" && <Button as={Link} ml={8} to="/dashboard" variant="link" color="white" mx={4} fontFamily="sans-serif">
             Admin
            </Button>}
        </Flex>
      
      </Flex>
    </Box>
  );
};

export default Navbar;
