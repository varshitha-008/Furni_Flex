
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Image, Text, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
// import { removeFromCart, clearCart } from '../store'; 
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom'; 

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 
//   const cart = useSelector((state) => state.cart);

//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const handleCheckout = () => {
//     navigate('/payment');
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <>
//       <Navbar />
//       <Box p={4}>
//         <Heading as="h2" size="lg" mb={6}>Cart</Heading>
//         {cart.length === 0 ? (
//           <Text>Your cart is empty.</Text>
//         ) : (
//           <>
//             <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
//               {cart.map((item) => (
//                 <GridItem key={item.id}>
//                   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
//                     <Image src={item.img} alt={item.title} h="200px" w="100%" objectFit="cover" />
//                     <Box p="6">
//                       <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
//                         {item.title}
//                       </Text>
//                       <Text mt="2">₹ {item.price}</Text>
//                       <Button mt="2" colorScheme="red" onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</Button>
//                     </Box>
//                   </Box>
//                 </GridItem>
//               ))}
//             </Grid>
//             <Box mt={6}>
//               <Text fontSize="xl" fontWeight="semibold">Total: ₹ {totalPrice}</Text>
//               <Button mt="4" colorScheme="blue" size="lg" onClick={handleCheckout}>Checkout</Button>
//               <Button mt="4" colorScheme="red" size="lg" onClick={handleClearCart}>Clear Cart</Button>
//             </Box>
//           </>
//         )}
//       </Box>
//       <Footer />
//     </>
    
//   );
// };

// export default Cart;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Image, Text, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { removeFromCart, clearCart } from '../store'; 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom'; 

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box p={4} minHeight="calc(100vh - 80px)">
        <Heading as="h2" size="lg" mb={6}>Cart</Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <>
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
              {cart.map((item) => (
                <GridItem key={item.id}>
                  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
                    <Image src={item.img} alt={item.title} h="200px" w="100%" objectFit="cover" />
                    <Box p="6">
                      <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
                        {item.title}
                      </Text>
                      <Text mt="2">₹ {item.price}</Text>
                      <Button mt="2" colorScheme="red" onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</Button>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
            <Box mt={6}>
              <Text fontSize="xl" fontWeight="semibold">Total: ₹ {totalPrice}</Text>
              <Button mt="4" colorScheme="blue" size="lg" onClick={handleCheckout}>Checkout</Button>
              <Button mt="4" colorScheme="red" size="lg" onClick={handleClearCart}>Clear Cart</Button>
            </Box>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
