import React from 'react';
import { Box, Container, Flex, Text, VStack, Link as ChakraLink, Divider } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={8} mt={10}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" wrap="wrap">
          <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold" fontSize="lg">Furni Flex</Text>
            <Text>14 Block Sanjay Palace, Agra </Text>
            <Text>info@furniflex.com</Text>
            <Text>(123) 456-7890</Text>
          </VStack>
          <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold" fontSize="lg">Quick Links</Text>
            <ChakraLink href="#">Home</ChakraLink>
            <ChakraLink href="#">Products</ChakraLink>
            <ChakraLink href="#">About Us</ChakraLink>
            <ChakraLink href="#">Contact Us</ChakraLink>
          </VStack>
          <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold" fontSize="lg">Categories</Text>
            <ChakraLink href="#">Chairs</ChakraLink>
            <ChakraLink href="#">Wardrobes</ChakraLink>
            <ChakraLink href="#">Curtains</ChakraLink>
            <ChakraLink href="#">Sofas</ChakraLink>
          </VStack>
          <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold" fontSize="lg">Social Media</Text>
            <ChakraLink href="#" display="flex" alignItems="center" mr={2}>
              <FaFacebook size={24} />
              <Text ml={2}>Facebook</Text>
            </ChakraLink>
            <ChakraLink href="#" display="flex" alignItems="center" mr={2}>
              <FaTwitter size={24} />
              <Text ml={2}>Twitter</Text>
            </ChakraLink>
            <ChakraLink href="#" display="flex" alignItems="center" mr={2}>
              <FaInstagram size={24} />
              <Text ml={2}>Instagram</Text>
            </ChakraLink>
            <ChakraLink href="#" display="flex" alignItems="center">
              <FaLinkedin size={24} />
              <Text ml={2}>LinkedIn</Text>
            </ChakraLink>
          </VStack>
        </Flex>
        <Divider my={6} borderColor="gray.700" />
        <Text textAlign="center" fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Furni Flex. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
