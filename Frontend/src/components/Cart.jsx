
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Image, Text, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
// import { removeFromCart } from '../store';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // useNavigate hook from react-router-dom
//   const cart = useSelector((state) => state.cart);

//   // Calculate total price
//   const totalPrice = cart.reduce((acc, chair) => acc + chair.price, 0);

//   const handleRemoveFromCart = (chairId) => {
//     dispatch(removeFromCart(chairId));
//   };

//   const handleCheckout = () => {
//     // Redirect to payment page
//     navigate('/payment');
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
//               {cart.map((chair) => (
//                 <GridItem key={chair.id}>
//                   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
//                     <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
//                     <Box p="6">
//                       <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
//                         {chair.title}
//                       </Text>
//                       <Text mt="2">₹ {chair.price}</Text>
//                       <Button mt="2" colorScheme="red" onClick={() => handleRemoveFromCart(chair.id)}>Remove from Cart</Button>
//                     </Box>
//                   </Box>
//                 </GridItem>
//               ))}
//             </Grid>
//             <Box mt={6}>
//               <Text fontSize="xl" fontWeight="semibold">Total: ₹ {totalPrice}</Text>
//               <Button mt="4" colorScheme="blue" size="lg" onClick={handleCheckout}>Checkout</Button>
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
import { removeFromCart, clearCart } from '../store'; // Import removeFromCart and clearCart actions
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook from react-router-dom
  const cart = useSelector((state) => state.cart);

  // Calculate total price
  const totalPrice = cart.reduce((acc, chair) => acc + chair.price, 0);

  const handleRemoveFromCart = (chairId) => {
    dispatch(removeFromCart(chairId));
  };

  const handleCheckout = () => {
    // Redirect to payment page
    navigate('/payment');
  };

  const handleClearCart = () => {
    // Clear the cart
    dispatch(clearCart());
  };

  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading as="h2" size="lg" mb={6}>Cart</Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <>
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
              {cart.map((chair) => (
                <GridItem key={chair.id}>
                  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
                    <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
                    <Box p="6">
                      <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
                        {chair.title}
                      </Text>
                      <Text mt="2">₹ {chair.price}</Text>
                      <Button mt="2" colorScheme="red" onClick={() => handleRemoveFromCart(chair.id)}>Remove from Cart</Button>
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
