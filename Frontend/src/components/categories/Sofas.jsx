import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Image,
  Badge,
  Text,
  Select,
  VStack,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  fetchSofas, // Adjusted action import for sofas
  filterSofas, // Adjusted action import for sofas
  sortSofas, // Adjusted action import for sofas
} from "../../redux/actions/sofaActions"; // Adjust path as per your file structure
import { addToFavorites, addToCart } from "../../redux/actions/addActions"; // Adjust path as per your file structure

const Sofas = () => {
  const dispatch = useDispatch();
  const { filteredSofas, isLoading, isError, subcategories } = useSelector(
    (state) => state.sofas // Adjusted selector for sofas
  );
  const [displayedSofas, setDisplayedSofas] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    dispatch(fetchSofas()); // Adjusted action dispatch for sofas
  }, [dispatch]);

  useEffect(() => {
    if (filteredSofas && filteredSofas.length > 0) {
      setDisplayedSofas(filteredSofas.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredSofas.length > ITEMS_PER_PAGE);
    }
  }, [filteredSofas]);

  const fetchMoreData = () => {
    if (displayedSofas.length >= filteredSofas.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredSofas.slice(
      displayedSofas.length,
      displayedSofas.length + ITEMS_PER_PAGE
    );
    setDisplayedSofas([...displayedSofas, ...nextItems]);
  };

  const handleFilterChange = (e) => {
    dispatch(filterSofas(e.target.value)); // Adjusted action dispatch for sofas
  };

  const handleSortChange = (e) => {
    dispatch(sortSofas(e.target.value)); // Adjusted action dispatch for sofas
  };

  const handleAddToFavorites = (sofa) => {
    dispatch(addToFavorites(sofa)); // Dispatch action to add to favorites
  };

  const handleAddToCart = (sofa) => {
    dispatch(addToCart(sofa)); // Dispatch action to add to cart
  };

  return (
    <>
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Sidebar */}
        <Box
          w={{ base: "100%", md: "20%" }}
          p={4}
          bg="gray.50"
          borderRadius="lg"
          shadow="md"
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h3" size="md" mb={4}>
            Filter & Sort
          </Heading>
          <VStack spacing={4} align="flex-start">
            <Box w="100%">
              <Text mb={2} fontWeight="bold">
                Subcategory
              </Text>
              <Select
                placeholder="Select Subcategory"
                onChange={handleFilterChange}
                bg="white"
                borderColor="gray.300"
                shadow="sm"
              >
                <option value="">All</option>
                {subcategories &&
                  subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
              </Select>
            </Box>
            <Box w="100%">
              <Text mb={2} fontWeight="bold">
                Sort by Price
              </Text>
              <Select
                placeholder="Select Price Order"
                onChange={handleSortChange}
                bg="white"
                borderColor="gray.300"
                shadow="sm"
              >
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </Select>
            </Box>
            <Box w="100%">
              <Text mb={2} fontWeight="bold">
                Sort by Rating
              </Text>
              <Select
                placeholder="Select Rating Order"
                onChange={handleSortChange}
                bg="white"
                borderColor="gray.300"
                shadow="sm"
              >
                <option value="ratingAsc">Rating: Low to High</option>
                <option value="ratingDesc">Rating: High to Low</option>
              </Select>
            </Box>
          </VStack>
        </Box>

        <Box w={{ base: "100%", md: "80%" }} p={4}>
          <Heading as="h2" size="lg" mb={6}>
            Sofas
          </Heading>
          {isLoading && <h4>Loading...</h4>}
          {isError && <h4>Error loading sofas</h4>}
          {!isLoading && !isError && (
            <InfiniteScroll
              dataLength={displayedSofas.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>No more sofas to display</p>
              }
            >
              <Flex
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                {displayedSofas.map((sofa) => (
                  <Box
                    key={sofa.id}
                    w="30%"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="sm"
                    bg="white"
                    mb={6}
                  >
                    <Image
                      src={sofa.img}
                      alt={sofa.title}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {sofa.subcategory}
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {sofa.category}
                        </Box>
                      </Box>
                      <Text
                        mt="1"
                        fontWeight="semibold"
                        fontSize="lg"
                        lineHeight="tight"
                      >
                        {sofa.title}
                      </Text>
                      <Text mt="2">₹ {sofa.price}</Text>
                      <Text mt="2" fontSize="sm">
                        Rating: {sofa.rating}
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Button
                          colorScheme="blue"
                          variant="outline"
                          onClick={() => handleAddToFavorites(sofa)}
                        >
                          Add to Favorites
                        </Button>
                        <Button
                          colorScheme="green"
                          onClick={() => handleAddToCart(sofa)}
                        >
                          Add to Cart
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </InfiniteScroll>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Sofas;
