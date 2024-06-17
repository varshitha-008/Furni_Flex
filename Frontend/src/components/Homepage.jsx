
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Button, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Homepage = () => {
  
  const carouselImages = [
    { id: 1, imageUrl: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI01_MGSL_HSSACCS_D_310524.jpg", altText: 'Carousel Image 1' },
    { id: 2, imageUrl: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI03_SL_HSSACCS_D_310524.jpg", altText: 'Carousel Image 2' },
    { id: 3, imageUrl: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI05_MK_HSSACCS_D_310524.jpg", altText: 'Carousel Image 3' },
    { id: 4, imageUrl: "https://www.godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/HI02_B_HSSACCS_D_310524.jpg", altText: 'Carousel Image 4' },
  ];

  return (
    <>
    
      <Box p={4}>
        {/* Carousel */}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay style={{ maxWidth: '800px', margin: '0 auto' }}>
          {carouselImages.map((image) => (
            <div key={image.id}>
              <img src={image.imageUrl} alt={image.altText} style={{ maxWidth: '100%' }} />
            </div>
          ))}
        </Carousel>

        {/* Cards */}
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} mt={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
              <Image src={"https://cdn.shopify.com/s/files/1/0096/4594/9013/files/800_Latest_Chairs_Design_Stylish_Chairs_Design_For_Living_Room_Bedroom_In_2022-2.jpg?v=1651309942"} alt="Chair" h="200px" w="100%" objectFit="cover" />
              <Box p="6">
                <Heading as="h2" size="lg" mb={2} textAlign="center">Chairs</Heading>
                <Button as={Link} to="/chairs" colorScheme="teal" mt={4} w="100%">
                  View Chairs
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
              <Image src={"https://www.at-home.co.in/cdn/shop/products/Somerville3str_45.jpg?v=1657281898"} alt="Sofa" h="200px" w="100%" objectFit="cover" />
              <Box p="6">
                <Heading as="h2" size="lg" mb={2} textAlign="center">Sofas</Heading>
                <Button as={Link} to="/sofas" colorScheme="teal" mt={4} w="100%">
                  View Sofas
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
              <Image src={"https://ii1.pepperfry.com/media/catalog/product/d/a/494x544/daist-coffee-table-in-exotic-teak-finish-by-a-globia-creations-daist-coffee-table-in-exotic-teak-fin-wspcms.jpg"} alt="Tables" h="200px" w="100%" objectFit="cover" />
              <Box p="6">
                <Heading as="h2" size="lg" mb={2} textAlign="center">Tables</Heading>
                <Button as={Link} to="/tables" colorScheme="teal" mt={4} w="100%">
                  View Tables
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
              <Image src={"https://m.media-amazon.com/images/I/71ign7Zp18L._AC_UF894,1000_QL80_.jpg"} alt="Curtains" h="200px" w="100%" objectFit="cover" />
              <Box p="6">
                <Heading as="h2" size="lg" mb={2} textAlign="center">Curtains</Heading>
                <Button as={Link} to="/curtains" colorScheme="teal" mt={4} w="100%">
                  View Curtains
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="sm" bg="white">
              <Image src={"https://spacewood.in/wp-content/uploads/2017/08/swing.jpg"} alt="Wardrobes" h="200px" w="100%" objectFit="cover" />
              <Box p="6">
                <Heading as="h2" size="lg" mb={2} textAlign="center">Wardrobes</Heading>
                <Button as={Link} to="/wardrobes" colorScheme="teal" mt={4} w="100%">
                  View Wardrobes
                </Button>
              </Box>
            </Box>
          </GridItem>
          
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
