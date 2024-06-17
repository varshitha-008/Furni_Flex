import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  ChakraProvider,
  ColorModeScript,
  Box,
  Text,
  Image,
  Input,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorMode,
  useDisclosure,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Sidebar from '../Sidebar/Sidebar';

// Theme context
const ThemeContext = createContext();

const Product = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure(); // useDisclosure hook for modal state
  const [products, setProducts] = useState({
    sofa: [],
    chairs: [],
    tables: [],
    curtains: [],
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    rating: '',
    img: '',
  });

  // Fetch products from API for each category on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = [
          'https://furni-flex-4-yx74.onrender.com/sofa',
          'https://furni-flex-4-yx74.onrender.com/chairs',
          'https://furni-flex-4-yx74.onrender.com/tables',
          'https://furni-flex-4-yx74.onrender.com/curtains',
        ];

        const requests = endpoints.map(endpoint => fetch(endpoint));

        const responses = await Promise.all(requests);

        const data = await Promise.all(responses.map(response => response.json()));

        setProducts({
          sofa: data[0],
          chairs: data[1],
          tables: data[2],
          curtains: data[3],
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const theme = {
    colorMode: colorMode,
    toggleTheme: toggleColorMode,
  };

  const filteredProducts = Object.keys(products).reduce((acc, key) => {
    const filtered = products[key].filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...acc, [key]: filtered };
  }, {});

  const handleOpenModal = (product) => {
    if (product) {
      setSelectedProduct(product);
      setFormData({
        title: product.title,
        price: product.price,
        rating: product.rating,
        img: product.img,
      });
    } else {
      setSelectedProduct(null);
      setFormData({
        title: '',
        price: '',
        rating: '',
        img: '',
      });
    }
    onOpen(); // Open the modal
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setFormData({
      title: '',
      price: '',
      rating: '',
      img: '',
    });
    onClose(); // Close the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveProduct = () => {
    // Assuming you have a save API endpoint for adding products
    // Here's a basic example of adding a new product to state
    const newProduct = {
      title: formData.title,
      price: formData.price,
      rating: formData.rating,
      img: formData.img,
      category: 'sofa', // Assuming you're adding a product to the 'sofa' category
    };

    const updatedProducts = {
      ...products,
      sofa: [newProduct, ...products.sofa], // Prepend the new product to the 'sofa' category
    };
    setProducts(updatedProducts);

    handleCloseModal();
  };

  const handleUpdateProduct = () => {
    // Assuming you have an update API endpoint for products
    // Here's a basic example of updating the product in state
    const updatedProduct = {
      ...selectedProduct,
      title: formData.title,
      price: formData.price,
      rating: formData.rating,
      img: formData.img,
    };

    const updatedProducts = {
      ...products,
      [selectedProduct.category]: products[selectedProduct.category].map(product =>
        product.title === selectedProduct.title ? updatedProduct : product
      ),
    };
    setProducts(updatedProducts);

    handleCloseModal();
  };
  const handleDeleteProduct = (product) => {
    if (!product) return;
  
    const updatedProducts = {
      ...products,
      [product.category]: products[product.category].filter(p =>
        p.title !== product.title
      ),
    };
    setProducts(updatedProducts);
  
    onClose(); // Close the modal
  };
  

  return (
    <ChakraProvider>
    <Box>
      <Flex>
        <Box>
           <Sidebar/>
        </Box>
        <Box>
        <ThemeContext.Provider value={theme}>
      <ColorModeScript initialColorMode="light" />
      <Box p={4} bg={colorMode === 'light' ? '#fff' : '#1a202c'} minHeight="100vh">
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="2xl">Products</Text>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={4}
          
        />
        <Grid templateColumns="repeat(auto-fill, minmax(1200px, 1fr))" gap={4}>
          {Object.keys(filteredProducts).map((category) => (
            <GridItem key={category}>
              <Text fontSize="xl" mb={2}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Text>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {filteredProducts[category].map((product) => (
                  <GridItem key={product.title}>
                    <Box
                      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                      boxShadow="md"
                      rounded="md"
                      p={4}
                      textAlign="center"
                      position="relative"
                      zIndex={1} // Ensure the cards have lower z-index than the modal
                      minW="250px" // Adjust minimum width of the card
                      maxW="300px" // Adjust maximum width of the card
                    >
                      <Image src={product.img} alt={product.title} />
                      <Text fontSize="xl" mt={2}>
                        {product.title}
                      </Text>
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color={colorMode === 'dark' ? 'gray.300' : 'black'}
                      >
                        ₹ {product.price}
                      </Text>
                      <Text
                        fontSize="md"
                        color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                      >
                        Rating: {product.rating}
                      </Text>
                      <Flex justify="center" mt={4} gap={5}>
                        <IconButton
                          icon={<EditIcon />}
                          onClick={() => handleOpenModal(product)}
                          mr={2}
                        />
                        <IconButton
                          icon={<AddIcon />}
                          onClick={() => handleOpenModal(null)} // Open modal for adding new product
                        />
                        <IconButton
                          icon={<DeleteIcon />}
                          onClick={() => handleDeleteProduct(product)}
                        />
                      </Flex>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="lg">
        <ModalOverlay />
        <ModalContent zIndex={10}>
          <ModalHeader>
            {selectedProduct ? 'Edit Product' : 'Add New Product'}
          </ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Rating</FormLabel>
              <Input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  name="img"
                  value={formData.img}
                  onChange={handleInputChange}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() =>
                      window.open(formData.img, '_blank')
                    }
                  >
                    View
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={
                selectedProduct
                  ? handleUpdateProduct
                  : handleSaveProduct
              }
            >
              {selectedProduct ? 'Update' : 'Add'}
            </Button>
            <Button colorScheme="gray" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ThemeContext.Provider>
        </Box>
      </Flex>
    </Box>
    
    
  </ChakraProvider>
  
  );
};

export default Product;
