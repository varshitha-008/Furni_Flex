




import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Heading, Text, Image, Flex, Badge, Button } from '@chakra-ui/react';
import { addToCart, setAddedToCart } from '../store'; 
import Footer from './Footer';
import Navbar from './Navbar';

const ProductCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Box>Loading...</Box>;
  }

  const handleAddToCart = () => {
    if (!product.addedToCart) {
      dispatch(addToCart(product)); 
      dispatch(setAddedToCart(product.id, true)); 
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Flex justify="center" align="center" h="70vh" padding={"8"}> 
        <Box p={4} maxW="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="lg">
          <Box h="300px" pos="relative">
            <Image
              src={product.img}
              alt={product.title}
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              maxH="100%"
              maxW="100%"
              objectFit="contain"
            />
          </Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {product.subcategory}
              </Badge>
              <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                {product.category}
              </Box>
            </Box>
            <Heading as="h2" size="lg" my="2">
              {product.title}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" mb="2">
              ₹ {product.price}
            </Text>
            <Text fontSize="sm" color="gray.600" mb="4">
              Rating: {product.rating}
            </Text>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={handleAddToCart}
              disabled={product.addedToCart} 
            >
              {product.addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </Button>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default ProductCard;
