import React from 'react';
import { useSelector } from 'react-redux';
import { Box, SimpleGrid, Text, Card, CardBody, Container, Flex, Link as ChakraLink, VStack, Divider } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const categories = useSelector((state) => state.homepage.categories);

  return (
    <Box>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI01_MGSL_HSSACCS_D_310524.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI03_SL_HSSACCS_D_310524.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI05_MK_HSSACCS_D_310524.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI02_B_HSSACCS_D_310524.jpg" alt="Slide 4" />
        </div>
      </Carousel>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10}>
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            <Card>
              <CardBody>
                <Text fontSize="2xl" fontWeight="bold">{category.title}</Text>
                <Text mt={4}>{category.description}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
      <Box bg="black" color="white" py={8} marginTop={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" wrap="wrap">
            <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
              <Text fontWeight="bold" fontSize="lg">Furni Flex</Text>
              <Text>123 Furniture Street, City</Text>
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
              <ChakraLink href="#">Living Room</ChakraLink>
              <ChakraLink href="#">Bedroom</ChakraLink>
              <ChakraLink href="#">Dining Room</ChakraLink>
              <ChakraLink href="#">Office</ChakraLink>
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
    </Box>
  );
};

export default Home;
