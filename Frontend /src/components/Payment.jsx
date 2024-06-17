

import React from 'react';
import { Box, Text, Button, Grid, GridItem, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa'; // Import payment method icons

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    alert('Payment successful!');
    dispatch(clearCart());
    navigate('/');
  };

  const handleCancelPayment = () => {
    alert('Payment cancelled.');
    navigate('/cart');
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Payment Page</Text>
      <Box borderWidth="1px" p={4} borderRadius="lg" shadow="sm" bg="white">
        <Text mb={4}>Select Payment Method:</Text>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {/* Payment Method Buttons */}
          <PaymentMethodButton icon={FaCreditCard} label="Credit Card" onClick={handlePaymentSuccess} />
          <PaymentMethodButton icon={FaPaypal} label="PayPal" onClick={handlePaymentSuccess} />
          <PaymentMethodButton icon={FaApplePay} label="Apple Pay" onClick={handlePaymentSuccess} />
          <PaymentMethodButton icon={FaGooglePay} label="Google Pay" onClick={handlePaymentSuccess} />
        </Grid>
        <Button mt={4} colorScheme="red" onClick={handleCancelPayment}>Cancel</Button>
      </Box>
    </Box>
  );
};

const PaymentMethodButton = ({ icon, label, onClick }) => (
  <Button variant="outline" borderWidth="1px" borderRadius="lg" p={4} onClick={onClick} _hover={{ bg: 'gray.100' }}>
    <Icon as={icon} boxSize={6} mr={2} />
    {label}
  </Button>
);

export default Payment;
