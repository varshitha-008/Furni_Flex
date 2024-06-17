import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Stack, Heading, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

const Coupon = () => {
  const [generated, setGenerated] = useState([]);
  const [length, setLength] = useState(5); // State for coupon length
  const [count, setCount] = useState(5); // State for number of codes
  const [possible, setPossible] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  );
  const [showThumbsUp, setShowThumbsUp] = useState(false);

  const generateCodes = () => {
    const codes = [];
    for (let i = 0; i < count; i++) {
      codes.push(generateCode());
    }
    setGenerated(codes);
    setShowThumbsUp(true); // Show thumbs-up animation on generating new codes
    setTimeout(() => {
      setShowThumbsUp(false); // Hide thumbs-up animation after 2 seconds
    }, 2000);
  };

  const generateCode = () => {
    let text = "";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    generateCodes();
  };

  const scratchCoupon = (index) => {
    const newGenerated = [...generated];
    newGenerated[index] = "You get extra 20% discount";
    setGenerated(newGenerated);
  };

  return (
    
    <Box className="coupon-generator" maxW="md" mx="auto" mt="6">
      <Flex>
        <Box>
          <Sidebar/>
        </Box>
        <Stack spacing="6">
        <Heading as="h1"size="xl" ml="400px" >
          Coupon Generator
        </Heading>
        <form onSubmit={handleGenerate}>
          <Stack spacing="4" ml="200px">
            <FormControl>
              <FormLabel>How long should each code be?</FormLabel>
              <Input
                type="number"
                min="2"
                placeholder="Length of each code"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>How many codes do you want?</FormLabel>
              <Input
                type="number"
                min="1"
                placeholder="Number of codes"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Possible characters</FormLabel>
              <Input
                type="text"
                placeholder="Possible characters"
                defaultValue={possible}
                onChange={(e) => setPossible(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Generate
            </Button>
          </Stack>
        </form>
        <Stack spacing="4">
          <AnimatePresence>
            {showThumbsUp && (
              <motion.div
                key="thumbs-up"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '30%',
                  transform: 'translate(-50%, -100%)',
                  fontSize: '10rem',
                }}
              >
                👍
              </motion.div>
            )}
          </AnimatePresence>
          {generated.map((coupon, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="4"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              w="400px"
              ml="200px"
            >
              <Box>{coupon}</Box>
              <Button onClick={() => scratchCoupon(index)}>Scratch</Button>
            </Box>
          ))}
        </Stack>
      </Stack>
      </Flex>
     
    </Box>
  
  
  );
};

export default Coupon;
