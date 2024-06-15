
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Grid, GridItem, Box, Image, Badge, Text, Select, VStack, Flex, Heading, Button } from '@chakra-ui/react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import { setChairs, addToCart } from '../store'; // Import addToCart action

// const Chairs = () => {
//   const dispatch = useDispatch();
//   const chairs = useSelector((state) => state.chairs);
//   const searchQuery = useSelector((state) => state.searchQuery);
//   const [filteredChairs, setFilteredChairs] = useState([]);
//   const [subcategory, setSubcategory] = useState('');
//   const [sortOption, setSortOption] = useState('');
//   const [displayedChairs, setDisplayedChairs] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const ITEMS_PER_PAGE = 10;

//   // Fetch chairs data
//   useEffect(() => {
//     const fetchChairs = async () => {
//       try {
//         const response = await fetch('https://furni-flex-4-yx74.onrender.com/chairs');
//         const data = await response.json();
//         dispatch(setChairs(data));
//       } catch (error) {
//         console.error('Error fetching chairs:', error);
//       }
//     };

//     fetchChairs();
//   }, [dispatch]);

//   // Filter and sort chairs based on user input
//   useEffect(() => {
//     let updatedChairs = [...chairs];

//     if (subcategory) {
//       updatedChairs = updatedChairs.filter(chair => chair.subcategory === subcategory);
//     }

//     if (sortOption === 'priceAsc') {
//       updatedChairs.sort((a, b) => a.price - b.price);
//     } else if (sortOption === 'priceDesc') {
//       updatedChairs.sort((a, b) => b.price - a.price);
//     } else if (sortOption === 'ratingAsc') {
//       updatedChairs.sort((a, b) => a.rating - b.rating);
//     } else if (sortOption === 'ratingDesc') {
//       updatedChairs.sort((a, b) => b.rating - a.rating);
//     }

//     if (searchQuery) {
//       updatedChairs = updatedChairs.filter(chair =>
//         chair.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredChairs(updatedChairs);
//     setDisplayedChairs(updatedChairs.slice(0, ITEMS_PER_PAGE));
//     setHasMore(updatedChairs.length > ITEMS_PER_PAGE);
//   }, [chairs, subcategory, sortOption, searchQuery]);

//   // Fetch more chairs data
//   const fetchMoreData = () => {
//     if (displayedChairs.length >= filteredChairs.length) {
//       setHasMore(false);
//       return;
//     }
//     const nextItems = filteredChairs.slice(displayedChairs.length, displayedChairs.length + ITEMS_PER_PAGE);
//     setDisplayedChairs([...displayedChairs, ...nextItems]);
//   };

//   // Add to Cart Handler
//   const handleAddToCart = (chair) => {
//     dispatch(addToCart(chair));
//   };

//   return (
//     <>
//       <Navbar />
//       <Flex direction={{ base: 'column', md: 'row' }} p={4}>
//         {/* Sidebar */}
//         <Box w={{ base: '100%', md: '20%' }} p={4} bg="gray.50" borderRadius="lg" shadow="md" mb={{ base: 4, md: 0 }}>
//           <Heading as="h3" size="md" mb={4}>Filter & Sort</Heading>
//           <VStack spacing={4} align="flex-start">
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Subcategory</Text>
//               <Select
//                 placeholder="All Categories"
//                 onChange={(e) => setSubcategory(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="visitor chair">Visitor Chair</option>
//                 <option value="study chair">Study Chair</option>
//                 <option value="computer chair">Computer Chair</option>
//                 <option value="office chair">Office Chair</option>
//               </Select>
//             </Box>
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Sort by Price</Text>
//               <Select
//                 placeholder="Select Price Order"
//                 onChange={(e) => setSortOption(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="priceAsc">Price: Low to High</option>
//                 <option value="priceDesc">Price: High to Low</option>
//               </Select>
//             </Box>
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Sort by Rating</Text>
//               <Select
//                 placeholder="Select Rating Order"
//                 onChange={(e) => setSortOption(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="ratingAsc">Rating: Low to High</option>
//                 <option value="ratingDesc">Rating: High to Low</option>
//               </Select>
//             </Box>
//           </VStack>
//         </Box>

//         {/* Main content */}
//         <Box w={{ base: '100%', md: '80%' }} p={4}>
//           <Heading as="h2" size="lg" mb={6}>Chairs</Heading>
//           <InfiniteScroll
//             dataLength={displayedChairs.length}
//             next={fetchMoreData}
//             hasMore={hasMore}
//             loader={<h4>Loading...</h4>}
//             endMessage={<p style={{ textAlign: 'center' }}>No more chairs to display</p>}
//           >
//             <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
//               {displayedChairs.map((chair) => (
//                 <GridItem key={chair.id}>
//                   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
//                     <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
//                     <Box p="6">
//                       <Box d="flex" alignItems="baseline">
//                         <Badge borderRadius="full" px="2" colorScheme="teal">
//                           {chair.subcategory}
//                         </Badge>
//                         <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
//                           {chair.category}
//                         </Box>
//                       </Box>
//                       <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
//                         {chair.title}
//                       </Text>
//                       <Text mt="2">₹ {chair.price}</Text>
//                       <Text mt="2" fontSize="sm">
//                         Rating: {chair.rating}
//                       </Text>
//                       <Button mt="2" colorScheme="teal" onClick={() => handleAddToCart(chair)}>Add to Cart</Button> {/* Add to Cart button */}
//                     </Box>
//                   </Box>
//                 </GridItem>
//               ))}
//             </Grid>
//           </InfiniteScroll>
//         </Box>
//       </Flex>
//       <Footer />
//     </>
//   );
// };

// export default Chairs;



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, GridItem, Box, Image, Badge, Text, Select, VStack, Flex, Heading, Button } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { setChairs, addToCart } from '../store'; // Import addToCart action

const Chairs = () => {
  const dispatch = useDispatch();
  const chairs = useSelector((state) => state.chairs);
  const searchQuery = useSelector((state) => state.searchQuery);
  const [filteredChairs, setFilteredChairs] = useState([]);
  const [subcategory, setSubcategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [displayedChairs, setDisplayedChairs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [addedToCartMap, setAddedToCartMap] = useState({}); // Track added to cart state for each chair
  const ITEMS_PER_PAGE = 10;

  // Fetch chairs data
  useEffect(() => {
    const fetchChairs = async () => {
      try {
        const response = await fetch('https://furni-flex-4-yx74.onrender.com/chairs');
        const data = await response.json();
        dispatch(setChairs(data));
      } catch (error) {
        console.error('Error fetching chairs:', error);
      }
    };

    fetchChairs();
  }, [dispatch]);

  // Filter and sort chairs based on user input
  useEffect(() => {
    let updatedChairs = [...chairs];

    if (subcategory) {
      updatedChairs = updatedChairs.filter(chair => chair.subcategory === subcategory);
    }

    if (sortOption === 'priceAsc') {
      updatedChairs.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      updatedChairs.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'ratingAsc') {
      updatedChairs.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'ratingDesc') {
      updatedChairs.sort((a, b) => b.rating - a.rating);
    }

    if (searchQuery) {
      updatedChairs = updatedChairs.filter(chair =>
        chair.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredChairs(updatedChairs);
    setDisplayedChairs(updatedChairs.slice(0, ITEMS_PER_PAGE));
    setHasMore(updatedChairs.length > ITEMS_PER_PAGE);

    // Initialize addedToCartMap state based on filtered chairs
    const initialAddedToCartState = updatedChairs.reduce((acc, chair) => {
      acc[chair.id] = false; // Initialize all chairs as not added to cart
      return acc;
    }, {});
    setAddedToCartMap(initialAddedToCartState);
  }, [chairs, subcategory, sortOption, searchQuery]);

  // Fetch more chairs data
  const fetchMoreData = () => {
    if (displayedChairs.length >= filteredChairs.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredChairs.slice(displayedChairs.length, displayedChairs.length + ITEMS_PER_PAGE);
    setDisplayedChairs([...displayedChairs, ...nextItems]);
  };

  // Add to Cart Handler
  const handleAddToCart = (chair) => {
    dispatch(addToCart(chair));
    setAddedToCartMap(prevState => ({
      ...prevState,
      [chair.id]: true, // Update added to cart state for the specific chair
    }));
  };

  return (
    <>
      <Navbar />
      <Flex direction={{ base: 'column', md: 'row' }} p={4}>
        {/* Sidebar */}
        <Box w={{ base: '100%', md: '20%' }} p={4} bg="gray.50" borderRadius="lg" shadow="md" mb={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Filter & Sort</Heading>
          <VStack spacing={4} align="flex-start">
            <Box w="100%">
              <Text mb={2} fontWeight="bold">Subcategory</Text>
              <Select
                placeholder="All Categories"
                onChange={(e) => setSubcategory(e.target.value)}
                bg="white"
                borderColor="gray.300"
                shadow="sm"
              >
                <option value="visitor chair">Visitor Chair</option>
                <option value="study chair">Study Chair</option>
                <option value="computer chair">Computer Chair</option>
                <option value="office chair">Office Chair</option>
              </Select>
            </Box>
            <Box w="100%">
              <Text mb={2} fontWeight="bold">Sort by Price</Text>
              <Select
                placeholder="Select Price Order"
                onChange={(e) => setSortOption(e.target.value)}
                bg="white"
                borderColor="gray.300"
                shadow="sm"
              >
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </Select>
            </Box>
            <Box w="100%">
              <Text mb={2} fontWeight="bold">Sort by Rating</Text>
              <Select
                placeholder="Select Rating Order"
                onChange={(e) => setSortOption(e.target.value)}
                bg="white"
                borderColor="gray.300"
                shadow="sm"
              >
                <option value="ratingAsc">Rating: Low to High</option>
                <option value="ratingDesc">Rating: High to Low</option>
              </Select>
            </Box>
          </VStack>
        </Box>

        {/* Main content */}
        <Box w={{ base: '100%', md: '80%' }} p={4}>
          <Heading as="h2" size="lg" mb={6}>Chairs</Heading>
          <InfiniteScroll
            dataLength={displayedChairs.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: 'center' }}>No more chairs to display</p>}
          >
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
              {displayedChairs.map((chair) => (
                <GridItem key={chair.id}>
                  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
                    <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {chair.subcategory}
                        </Badge>
                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                          {chair.category}
                        </Box>
                      </Box>
                      <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
                        {chair.title}
                      </Text>
                      <Text mt="2">₹ {chair.price}</Text>
                      <Text mt="2" fontSize="sm">
                        Rating: {chair.rating}
                      </Text>
                      <Button
                        mt="2"
                        colorScheme="teal"
                        onClick={() => handleAddToCart(chair)}
                        disabled={addedToCartMap[chair.id]} // Disable button if already added to cart
                      >
                        {addedToCartMap[chair.id] ? 'Added to Cart' : 'Add to Cart'}
                      </Button> {/* Add to Cart button with dynamic text */}
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Chairs;





// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Grid, GridItem, Box, Image, Badge, Text, Select, VStack, Flex, Heading, Button } from '@chakra-ui/react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import { setChairs, addToCart } from '../store';

// const Chairs = () => {
//   const dispatch = useDispatch();
//   const chairs = useSelector((state) => state.chairs);
//   const searchQuery = useSelector((state) => state.searchQuery);
//   const [filteredChairs, setFilteredChairs] = useState([]);
//   const [subcategory, setSubcategory] = useState('');
//   const [sortOption, setSortOption] = useState('');
//   const [displayedChairs, setDisplayedChairs] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const ITEMS_PER_PAGE = 10;

//   // Fetch chairs data
//   useEffect(() => {
//     const fetchChairs = async () => {
//       try {
//         const response = await fetch('https://furni-flex-4-yx74.onrender.com/chairs');
//         const data = await response.json();
//         dispatch(setChairs(data));
//       } catch (error) {
//         console.error('Error fetching chairs:', error);
//       }
//     };

//     fetchChairs();
//   }, [dispatch]);

//   // Filter and sort chairs based on user input
//   useEffect(() => {
//     let updatedChairs = [...chairs];

//     if (subcategory) {
//       updatedChairs = updatedChairs.filter(chair => chair.subcategory === subcategory);
//     }

//     if (sortOption === 'priceAsc') {
//       updatedChairs.sort((a, b) => a.price - b.price);
//     } else if (sortOption === 'priceDesc') {
//       updatedChairs.sort((a, b) => b.price - a.price);
//     } else if (sortOption === 'ratingAsc') {
//       updatedChairs.sort((a, b) => a.rating - b.rating);
//     } else if (sortOption === 'ratingDesc') {
//       updatedChairs.sort((a, b) => b.rating - a.rating);
//     }

//     if (searchQuery) {
//       updatedChairs = updatedChairs.filter(chair =>
//         chair.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredChairs(updatedChairs);
//     setDisplayedChairs(updatedChairs.slice(0, ITEMS_PER_PAGE));
//     setHasMore(updatedChairs.length > ITEMS_PER_PAGE);
//   }, [chairs, subcategory, sortOption, searchQuery]);

//   // Fetch more chairs data
//   const fetchMoreData = () => {
//     if (displayedChairs.length >= filteredChairs.length) {
//       setHasMore(false);
//       return;
//     }
//     const nextItems = filteredChairs.slice(displayedChairs.length, displayedChairs.length + ITEMS_PER_PAGE);
//     setDisplayedChairs([...displayedChairs, ...nextItems]);
//   };

//   // Add to Cart Handler
//   const handleAddToCart = (chair) => {
//     dispatch(addToCart(chair));
//   };

//   return (
//     <>
//       <Navbar />
//       <Flex direction={{ base: 'column', md: 'row' }} p={4}>
//         {/* Sidebar */}
//         <Box w={{ base: '100%', md: '20%' }} p={4} bg="gray.50" borderRadius="lg" shadow="md" mb={{ base: 4, md: 0 }}>
//           <Heading as="h3" size="md" mb={4}>Filter & Sort</Heading>
//           <VStack spacing={4} align="flex-start">
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Subcategory</Text>
//               <Select
//                 placeholder="Select Subcategory"
//                 onChange={(e) => setSubcategory(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="visitor chair">Visitor Chair</option>
//                 <option value="study chair">Study Chair</option>
//                 <option value="computer chair">Computer Chair</option>
//                 <option value="office chair">Office Chair</option>
//               </Select>
//             </Box>
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Sort by Price</Text>
//               <Select
//                 placeholder="Select Price Order"
//                 onChange={(e) => setSortOption(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="priceAsc">Price: Low to High</option>
//                 <option value="priceDesc">Price: High to Low</option>
//               </Select>
//             </Box>
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Sort by Rating</Text>
//               <Select
//                 placeholder="Select Rating Order"
//                 onChange={(e) => setSortOption(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="ratingAsc">Rating: Low to High</option>
//                 <option value="ratingDesc">Rating: High to Low</option>
//               </Select>
//             </Box>
//           </VStack>
//         </Box>

//         {/* Main content */}
//         <Box w={{ base: '100%', md: '80%' }} p={4}>
//           <Heading as="h2" size="lg" mb={6}>Chairs</Heading>
//           <InfiniteScroll
//             dataLength={displayedChairs.length}
//             next={fetchMoreData}
//             hasMore={hasMore}
//             loader={<h4>Loading...</h4>}
//             endMessage={<p style={{ textAlign: 'center' }}>No more chairs to display</p>}
//           >
//             <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
//               {displayedChairs.map((chair) => (
//                 <GridItem key={chair.id}>
//                   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
//                     <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
//                     <Box p="6">
//                       <Box d="flex" alignItems="baseline">
//                         <Badge borderRadius="full" px="2" colorScheme="teal">
//                           {chair.subcategory}
//                         </Badge>
//                         <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
//                           {chair.category}
//                         </Box>
//                       </Box>
//                       <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
//                         {chair.title}
//                       </Text>
//                       <Text mt="2">₹ {chair.price}</Text>
//                       <Text mt="2" fontSize="sm">
//                         Rating: {chair.rating}
//                       </Text>
//                       <Button mt="2" colorScheme="teal" onClick={() => handleAddToCart(chair)}>Add to Cart</Button>
//                     </Box>
//                   </Box>
//                 </GridItem>
//               ))}
//             </Grid>
//           </InfiniteScroll>
//         </Box>
//       </Flex>
//       <Footer />
//     </>
//   );
// };

// export default Chairs;




// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Grid, GridItem, Box, Image, Badge, Text, Select, VStack, Flex, Heading, Button } from '@chakra-ui/react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import { setChairs, addToCart } from '../store';

// const Chairs = () => {
//   const dispatch = useDispatch();
//   const chairs = useSelector((state) => state.chairs);
//   const searchQuery = useSelector((state) => state.searchQuery);
//   const [filteredChairs, setFilteredChairs] = useState([]);
//   const [subcategory, setSubcategory] = useState('');
//   const [sortOption, setSortOption] = useState('');
//   const [displayedChairs, setDisplayedChairs] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const ITEMS_PER_PAGE = 10;

//   // Fetch chairs data
//   useEffect(() => {
//     const fetchChairs = async () => {
//       try {
//         const response = await fetch('https://furni-flex-4-yx74.onrender.com/chairs');
//         const data = await response.json();
//         dispatch(setChairs(data));
//       } catch (error) {
//         console.error('Error fetching chairs:', error);
//       }
//     };

//     fetchChairs();
//   }, [dispatch]);

//   // Filter and sort chairs based on user input
//   useEffect(() => {
//     let updatedChairs = [...chairs];

//     if (subcategory) {
//       updatedChairs = updatedChairs.filter(chair => chair.subcategory === subcategory);
//     }

//     if (sortOption === 'priceAsc') {
//       updatedChairs.sort((a, b) => a.price - b.price);
//     } else if (sortOption === 'priceDesc') {
//       updatedChairs.sort((a, b) => b.price - a.price);
//     } else if (sortOption === 'ratingAsc') {
//       updatedChairs.sort((a, b) => a.rating - b.rating);
//     } else if (sortOption === 'ratingDesc') {
//       updatedChairs.sort((a, b) => b.rating - a.rating);
//     }

//     // Apply search query filtering
//     if (searchQuery) {
//       updatedChairs = updatedChairs.filter(chair =>
//         chair.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Update filtered chairs and displayed chairs
//     setFilteredChairs(updatedChairs);
//     setDisplayedChairs(updatedChairs.slice(0, ITEMS_PER_PAGE));
//     setHasMore(updatedChairs.length > ITEMS_PER_PAGE);
//   }, [chairs, subcategory, sortOption, searchQuery]);

//   // Fetch more chairs data
//   const fetchMoreData = () => {
//     if (displayedChairs.length >= filteredChairs.length) {
//       setHasMore(false);
//       return;
//     }
//     const nextItems = filteredChairs.slice(displayedChairs.length, displayedChairs.length + ITEMS_PER_PAGE);
//     setDisplayedChairs([...displayedChairs, ...nextItems]);
//   };

//   // Add to Cart Handler
//   const handleAddToCart = (chair) => {
//     dispatch(addToCart(chair));
//   };

//   return (
//     <>
//       <Navbar />
//       <Flex direction={{ base: 'column', md: 'row' }} p={4}>
//         {/* Sidebar */}
//         <Box w={{ base: '100%', md: '20%' }} p={4} bg="gray.50" borderRadius="lg" shadow="md" mb={{ base: 4, md: 0 }}>
//           <Heading as="h3" size="md" mb={4}>Filter & Sort</Heading>
//           <VStack spacing={4} align="flex-start">
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Subcategory</Text>
//               <Select
//                 placeholder="Select Subcategory"
//                 onChange={(e) => setSubcategory(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="">All</option>
//                 <option value="visitor chair">Visitor Chair</option>
//                 <option value="study chair">Study Chair</option>
//                 <option value="computer chair">Computer Chair</option>
//                 <option value="office chair">Office Chair</option>
//               </Select>
//             </Box>
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Sort by Price</Text>
//               <Select
//                 placeholder="Select Price Order"
//                 onChange={(e) => setSortOption(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="">Default</option>
//                 <option value="priceAsc">Price: Low to High</option>
//                 <option value="priceDesc">Price: High to Low</option>
//               </Select>
//             </Box>
//             <Box w="100%">
//               <Text mb={2} fontWeight="bold">Sort by Rating</Text>
//               <Select
//                 placeholder="Select Rating Order"
//                 onChange={(e) => setSortOption(e.target.value)}
//                 bg="white"
//                 borderColor="gray.300"
//                 shadow="sm"
//               >
//                 <option value="">Default</option>
//                 <option value="ratingAsc">Rating: Low to High</option>
//                 <option value="ratingDesc">Rating: High to Low</option>
//               </Select>
//             </Box>
//           </VStack>
//         </Box>

//         {/* Main content */}
//         <Box w={{ base: '100%', md: '80%' }} p={4}>
//           <Heading as="h2" size="lg" mb={6}>Chairs</Heading>
//           <InfiniteScroll
//             dataLength={displayedChairs.length}
//             next={fetchMoreData}
//             hasMore={hasMore}
//             loader={<h4>Loading...</h4>}
//             endMessage={<p style={{ textAlign: 'center' }}>No more chairs to display</p>}
//           >
//             <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
//               {displayedChairs.map((chair) => (
//                 <GridItem key={chair.id}>
//                   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
//                     <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
//                     <Box p="6">
//                       <Box d="flex" alignItems="baseline">
//                         <Badge borderRadius="full" px="2" colorScheme="teal">
//                           {chair.subcategory}
//                         </Badge>
//                         <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
//                           {chair.category}
//                         </Box>
//                       </Box>
//                       <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
//                         {chair.title}
//                       </Text>
//                       <Text mt="2">₹ {chair.price}</Text>
//                       <Text mt="2" fontSize="sm">
//                         Rating: {chair.rating}
//                       </Text>
//                       <Button mt="2" colorScheme="teal" onClick={() => handleAddToCart(chair)}>Add to Cart</Button>
//                     </Box>
//                   </Box>
//                 </GridItem>
//               ))}
//             </Grid>
//           </InfiniteScroll>
//         </Box>
//       </Flex>
//       <Footer />
//     </>
//   );
// };

// export default Chairs;
