// // components/Payment.jsx
// import React from 'react';
// import { Box, Text, Button } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const Payment = () => {
//   const navigate = useNavigate(); // useNavigate hook from react-router-dom

//   const handlePaymentSuccess = () => {
//     // Simulate a successful payment
//     alert('Payment successful!');
//     // Redirect back to home after payment
//     navigate('/');
//   };

//   const handleCancelPayment = () => {
//     // Simulate cancellation of payment
//     alert('Payment cancelled.');
//     // Navigate back to cart page
//     navigate('/cart');
//   };

//   return (
//     <Box p={4}>
//       <Text fontSize="xl" mb={4}>Payment Page</Text>
//       <Box borderWidth="1px" p={4} borderRadius="lg" shadow="sm" bg="white">
//         <Text mb={4}>Select Payment Method:</Text>
//         {/* Mock payment methods */}
//         <Button colorScheme="blue" mr={4} onClick={handlePaymentSuccess}>Pay Now</Button>
//         <Button colorScheme="red" onClick={handleCancelPayment}>Cancel</Button>
//       </Box>
//     </Box>
//   );
// };

// export default Payment;
import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store'; // Import clearCart action

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook from react-router-dom

  const handlePaymentSuccess = () => {
    // Simulate a successful payment
    alert('Payment successful!');
    // Clear the cart
    dispatch(clearCart());
    // Redirect back to home after payment
    navigate('/');
  };

  const handleCancelPayment = () => {
    // Simulate cancellation of payment
    alert('Payment cancelled.');
    // Navigate back to cart page
    navigate('/cart');
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Payment Page</Text>
      <Box borderWidth="1px" p={4} borderRadius="lg" shadow="sm" bg="white">
        <Text mb={4}>Select Payment Method:</Text>
        {/* Mock payment methods */}
        <Button colorScheme="blue" mr={4} onClick={handlePaymentSuccess}>Pay Now</Button>
        <Button colorScheme="red" onClick={handleCancelPayment}>Cancel</Button>
      </Box>
    </Box>
  );
};

export default Payment;
