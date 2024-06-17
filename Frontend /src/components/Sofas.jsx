import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, GridItem, Box, Image, Badge, Text, Select, VStack, Flex, Heading, Button } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { setProducts, addToCart } from '../store';

const Sofas = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searchQuery = useSelector((state) => state.searchQuery);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [subcategory, setSubcategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [addedToCartMap, setAddedToCartMap] = useState({});
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://furni-flex-4-yx74.onrender.com/sofa');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    let updatedProducts = [...products];

    if (subcategory) {
      updatedProducts = updatedProducts.filter((product) => product.subcategory.toLowerCase() === subcategory.toLowerCase());
    }

    if (sortOption === 'priceAsc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'ratingAsc') {
      updatedProducts.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'ratingDesc') {
      updatedProducts.sort((a, b) => b.rating - a.rating);
    }

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
    setDisplayedProducts(updatedProducts.slice(0, ITEMS_PER_PAGE));
    setHasMore(updatedProducts.length > ITEMS_PER_PAGE);

    const initialAddedToCartState = updatedProducts.reduce((acc, product) => {
      acc[product.id] = false;
      return acc;
    }, {});
    setAddedToCartMap(initialAddedToCartState);
  }, [products, subcategory, sortOption, searchQuery]);

  const fetchMoreData = () => {
    if (displayedProducts.length >= filteredProducts.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredProducts.slice(displayedProducts.length, displayedProducts.length + ITEMS_PER_PAGE);
    setDisplayedProducts([...displayedProducts, ...nextItems]);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCartMap((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  return (
    <>
      {/* <Navbar /> */}
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
                <option value="sectional sofas">Sectional sofas</option>
                <option value="single seater sofas">Single seater sofas</option>
                <option value="two seater sofas">Two seater sofas</option>
                <option value="three seater sofas">Three seater sofas</option>
                <option value="sofa sets">Sofa sets</option>
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

        <Box w={{ base: '100%', md: '80%' }} p={4}>
          <Heading as="h2" size="lg" mb={6}>Sofas</Heading>
          <InfiniteScroll
            dataLength={displayedProducts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: 'center' }}>No more sofas to display</p>}
          >
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
              {displayedProducts.map((product) => (
                <GridItem key={product.id}>
                  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
                    <Link to={`/product/${product.id}`}>
                      <Image src={product.img} alt={product.title} h="200px" w="100%" objectFit="cover" />
                    </Link>
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {product.subcategory}
                        </Badge>
                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                          {product.category}
                        </Box>
                      </Box>
                      <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
                        {product.title}
                      </Text>
                      <Text mt="2">₹ {product.price}</Text>
                      <Text mt="2" fontSize="sm">
                        Rating: {product.rating}
                      </Text>
                      <Button
                        mt="2"
                        colorScheme="teal"
                        onClick={() => handleAddToCart(product)}
                        disabled={addedToCartMap[product.id]}
                      >
                        {addedToCartMap[product.id] ? 'Added to Cart' : 'Add to Cart'}
                      </Button>
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

export default Sofas;
