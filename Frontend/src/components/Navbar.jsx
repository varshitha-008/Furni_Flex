// import React, { useState } from 'react';
// import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement, Image } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setSearchQuery } from '../store'; 
// import logoImage from './Screenshot 2024-06-15 at 1.01.48 PM.png'; 

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     dispatch(setSearchQuery(searchTerm.trim()));
//   };

//   return (
//     <Box bg="gray.800" p={4} boxSizing='border-box'>
//       <Flex align="center">
//         <Box mr={2} style={{ width: '60px', height: '60px' }}>
//           <Image src={logoImage} alt="FurniFlex Logo" w="full" h="full" objectFit="contain" />
//         </Box>
//         <Heading as="h1" size="lg" color="white">
//           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>FurniFlex</Link>
//         </Heading>
//         <Spacer />
//         <InputGroup maxW="300px" mr={4}>
//           <Input
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleSearch();
//               }
//             }}
//             color="white"
//             _placeholder={{ color: 'whiteAlpha.700' }}
//             bg="gray.600"
//             borderRadius="md"
//             border="none"
//             _focus={{ outline: 'none' }}
//           />
//           <InputRightElement>
//             <Button onClick={handleSearch} colorScheme="teal">Go</Button>
//           </InputRightElement>
//         </InputGroup>
//         <Button as={Link} to="/cart" colorScheme="teal" ml={4}>
//           Cart
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement, Image } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setSearchQuery } from '../store';
// import logoImage from './Screenshot 2024-06-15 at 1.01.48 PM.png';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     dispatch(setSearchQuery(searchTerm.trim()));
//   };

//   return (
//     <Box bg="gray.800" p={4} boxSizing="border-box">
//       <Flex align="center">
//         <Box mr={2} style={{ width: '60px', height: '60px' }}>
//           <Image src={logoImage} alt="FurniFlex Logo" w="full" h="full" objectFit="contain" />
//         </Box>
//         <Heading as="h1" size="lg" color="white">
//           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//             FurniFlex
//           </Link>
//         </Heading>
//         <Spacer />
//         <Flex align="center">
//           <Button as={Link} to="/chairs" variant="link" color="white" mr={4}>
//             Chairs
//           </Button>
//           <Button as={Link} to="/sofas" variant="link" color="white" mr={4}>
//             Sofas
//           </Button>
//           <Button as={Link} to="/curtains" variant="link" color="white" mr={4}>
//             Curtains
//           </Button>
//           <Button as={Link} to="/tables" variant="link" color="white" mr={4}>
//             Tables
//           </Button>
//           <Button as={Link} to="/wardrobes" variant="link" color="white" mr={4}>
//             Wardrobes
//           </Button>
//         </Flex>
//         <InputGroup maxW="300px" mr={4}>
//           <Input
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleSearch();
//               }
//             }}
//             color="white"
//             _placeholder={{ color: 'whiteAlpha.700' }}
//             bg="gray.600"
//             borderRadius="md"
//             border="none"
//             _focus={{ outline: 'none' }}
//           />
//           <InputRightElement>
//             <Button onClick={handleSearch} colorScheme="teal">
//               Go
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//         <Button as={Link} to="/cart" colorScheme="teal" ml={4}>
//           Cart
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement, Image, Icon } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setSearchQuery } from '../store';
// import { AiOutlineHome } from 'react-icons/ai'; // Importing the home icon
// import logoImage from './Screenshot 2024-06-15 at 1.01.48 PM.png';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     dispatch(setSearchQuery(searchTerm.trim()));
//   };

//   return (
//     <Box bg="gray.800" p={4} boxSizing="border-box">
//       <Flex align="center">
//         <Box mr={2} style={{ width: '60px', height: '60px' }}>
//           <Image src={logoImage} alt="FurniFlex Logo" w="full" h="full" objectFit="contain" />
//         </Box>
//         <Heading as="h1" size="lg" color="white">
//           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//             FurniFlex
//           </Link>
//         </Heading>
//         <Spacer />
//         <Flex align="center">
          
//           <Button as={Link} to="/chairs" variant="link" color="white" mr={4}>
//             Chairs
//           </Button>
//           <Button as={Link} to="/sofas" variant="link" color="white" mr={4}>
//             Sofas
//           </Button>
//           <Button as={Link} to="/curtains" variant="link" color="white" mr={4}>
//             Curtains
//           </Button>
//           <Button as={Link} to="/tables" variant="link" color="white" mr={4}>
//             Tables
//           </Button>
//           <Button as={Link} to="/wardrobes" variant="link" color="white" mr={4}>
//             Wardrobes
//           </Button>
//         </Flex>
//         <InputGroup maxW="300px" mr={4}>
//           <Input
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleSearch();
//               }
//             }}
//             color="white"
//             _placeholder={{ color: 'whiteAlpha.700' }}
//             bg="gray.600"
//             borderRadius="md"
//             border="none"
//             _focus={{ outline: 'none' }}
//           />
//           <InputRightElement>
//             <Button onClick={handleSearch} colorScheme="teal">
//               Go
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//         <Button as={Link} to="/" variant="link" color="white" mr={4}>
//             <Icon as={AiOutlineHome} boxSize={6} />
//           </Button>

//         <Button as={Link} to="/cart" colorScheme="teal" ml={4}>
//           Cart
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'; // Importing icons
import logoImage from './Screenshot 2024-06-15 at 1.01.48 PM.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(setSearchQuery(searchTerm.trim()));
  };

  return (
    <Box bg="gray.700" p={4} borderBottom="1px solid" borderBottomColor="gray.600" position="relative">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Box w="60px" h="60px" mr={2} flexShrink={0}> {/* Set flexShrink to 0 to prevent resizing */}
            <Image src={logoImage} alt="FurniFlex Logo" w="full" h="full" objectFit="contain" />
          </Box>
          <Heading as="h1" size="lg" color="white" fontFamily="sans-serif" ml={2}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              FurniFlex
            </Link>
          </Heading>
        </Flex>
        <Flex align="center">
          <Button as={Link} to="/chairs" variant="link" color="white" mx={4} fontFamily="sans-serif">
            Chairs
          </Button>
          <Button as={Link} to="/sofas" variant="link" color="white" mx={4} fontFamily="sans-serif">
            Sofas
          </Button>
          <Button as={Link} to="/curtains" variant="link" color="white" mx={4} fontFamily="sans-serif">
            Curtains
          </Button>
          <Button as={Link} to="/tables" variant="link" color="white" mx={4} fontFamily="sans-serif">
            Tables
          </Button>
          <Button as={Link} to="/wardrobes" variant="link" color="white" mx={4} fontFamily="sans-serif">
            Wardrobes
          </Button>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

