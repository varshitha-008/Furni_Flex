import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import TransactionRevenue from './TransactionRevenue';

const Transactions = () => {
  return (
    <Box bg="white" p={5} borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb={4}>
        Transaction and Revenue
      </Heading>
      <TransactionRevenue
        data_1={[300, 144, 433, 655, 237, 755, 190]}
        data_2={[400, 544, 433, 555, 137, 755, 490]}
        title_1="Revenue"
        title_2="Transaction"
        bgColor_1="rgb(0,155,255)"
        bgColor_2="rgba(53,162,235,0.8)"
      />
    </Box>
  );
};

export default Transactions;
