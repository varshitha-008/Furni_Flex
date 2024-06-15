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
  Button, // Added Button component from Chakra UI
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  fetchCurtains, // Adjusted to use fetchCurtains action
  filterCurtains, // Adjusted to use filterCurtains action
  sortCurtains, // Adjusted to use sortCurtains action
} from "../../redux/actions/curtainActions"; // Adjust path as per your file structure
import { addToFavorites, addToCart } from "../../redux/actions/addActions"; // Adjust path as per your file structure

const Curtains = () => {
  const dispatch = useDispatch();
  const { filteredCurtains, isLoading, isError, subcategories } = useSelector(
    (state) => state.curtains
  );
  const [displayedCurtains, setDisplayedCurtains] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    dispatch(fetchCurtains());
  }, [dispatch]);

  useEffect(() => {
    if (filteredCurtains && filteredCurtains.length > 0) {
      setDisplayedCurtains(filteredCurtains.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredCurtains.length > ITEMS_PER_PAGE);
    }
  }, [filteredCurtains]);

  const fetchMoreData = () => {
    if (displayedCurtains.length >= filteredCurtains.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredCurtains.slice(
      displayedCurtains.length,
      displayedCurtains.length + ITEMS_PER_PAGE
    );
    setDisplayedCurtains([...displayedCurtains, ...nextItems]);
  };

  const handleFilterChange = (e) => {
    dispatch(filterCurtains(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(sortCurtains(e.target.value));
  };

  const handleAddToFavorites = (curtain) => {
    dispatch(addToFavorites(curtain)); // Dispatch action to add to favorites
  };

  const handleAddToCart = (curtain) => {
    dispatch(addToCart(curtain)); // Dispatch action to add to cart
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
            Curtains
          </Heading>
          {isLoading && <h4>Loading...</h4>}
          {isError && <h4>Error loading curtains</h4>}
          {!isLoading && !isError && (
            <InfiniteScroll
              dataLength={displayedCurtains.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>No more curtains to display</p>
              }
            >
              <Flex
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                {displayedCurtains.map((curtain) => (
                  <Box
                    key={curtain.id}
                    w="30%"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="sm"
                    bg="white"
                    mb={6}
                  >
                    <Image
                      src={curtain.img}
                      alt={curtain.title}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {curtain.subcategory}
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {curtain.category}
                        </Box>
                      </Box>
                      <Text
                        mt="1"
                        fontWeight="semibold"
                        fontSize="lg"
                        lineHeight="tight"
                      >
                        {curtain.title}
                      </Text>
                      <Text mt="2">₹ {curtain.price}</Text>
                      <Text mt="2" fontSize="sm">
                        Rating: {curtain.rating}
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Button
                          colorScheme="blue"
                          variant="outline"
                          onClick={() => handleAddToFavorites(curtain)}
                        >
                          Add to Favorites
                        </Button>
                        <Button
                          colorScheme="green"
                          onClick={() => handleAddToCart(curtain)}
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

export default Curtains;
