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
  fetchWardrobes,
  filterWardrobes,
  sortWardrobes,
} from '../../redux/actions/wardrobeActions';
import { addToFavorites, addToCart } from "../../redux/actions/addActions"; 

const Wardrobes = () => {
  const dispatch = useDispatch();
  const { filteredWardrobes, isLoading, isError, subcategories } = useSelector(
    (state) => state.wardrobes
  );
  const [displayedWardrobes, setDisplayedWardrobes] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    dispatch(fetchWardrobes());
  }, [dispatch]);

  useEffect(() => {
    if (filteredWardrobes && filteredWardrobes.length > 0) {
      setDisplayedWardrobes(filteredWardrobes.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredWardrobes.length > ITEMS_PER_PAGE);
    }
  }, [filteredWardrobes]);

  const fetchMoreData = () => {
    if (displayedWardrobes.length >= filteredWardrobes.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredWardrobes.slice(
      displayedWardrobes.length,
      displayedWardrobes.length + ITEMS_PER_PAGE
    );
    setDisplayedWardrobes([...displayedWardrobes, ...nextItems]);
  };

  const handleFilterChange = (e) => {
    dispatch(filterWardrobes(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(sortWardrobes(e.target.value));
  };

  const handleAddToFavorites = (wardrobe) => {
    dispatch(addToFavorites(wardrobe)); 
  };

  const handleAddToCart = (wardrobe) => {
    dispatch(addToCart(wardrobe)); 
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
            Wardrobes
          </Heading>
          {isLoading && <h4>Loading...</h4>}
          {isError && <h4>Error loading wardrobes</h4>}
          {!isLoading && !isError && (
            <InfiniteScroll
              dataLength={displayedWardrobes.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>No more wardrobes to display</p>
              }
            >
              <Flex
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                {displayedWardrobes.map((wardrobe) => (
                  <Box
                    key={wardrobe.id}
                    w="30%"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="sm"
                    bg="white"
                    mb={6}
                  >
                    <Image
                      src={wardrobe.img}
                      alt={wardrobe.title}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {wardrobe.subcategory}
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {wardrobe.category}
                        </Box>
                      </Box>
                      <Text
                        mt="1"
                        fontWeight="semibold"
                        fontSize="lg"
                        lineHeight="tight"
                      >
                        {wardrobe.title}
                      </Text>
                      <Text mt="2">₹ {wardrobe.price}</Text>
                      <Text mt="2" fontSize="sm">
                        Rating: {wardrobe.rating}
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Button
                          colorScheme="blue"
                          variant="outline"
                          onClick={() => handleAddToFavorites(wardrobe)}
                        >
                          Add to Favorites
                        </Button>
                        <Button
                          colorScheme="green"
                          onClick={() => handleAddToCart(wardrobe)}
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

export default Wardrobes;
