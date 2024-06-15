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
  fetchTables,
  filterTables,
  sortTables,
} from "../../redux/actions/tableActions"; // Adjust import for table actions
import { addToFavorites, addToCart } from "../../redux/actions/addActions"; // Adjust import for add actions

const Tables = () => {
  const dispatch = useDispatch();
  const { filteredTables, isLoading, isError, subcategories } = useSelector(
    (state) => state.tables
  );
  const [displayedTables, setDisplayedTables] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  useEffect(() => {
    if (filteredTables && filteredTables.length > 0) {
      setDisplayedTables(filteredTables.slice(0, ITEMS_PER_PAGE));
      setHasMore(filteredTables.length > ITEMS_PER_PAGE);
    }
  }, [filteredTables]);

  const fetchMoreData = () => {
    if (displayedTables.length >= filteredTables.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredTables.slice(
      displayedTables.length,
      displayedTables.length + ITEMS_PER_PAGE
    );
    setDisplayedTables([...displayedTables, ...nextItems]);
  };

  const handleFilterChange = (e) => {
    dispatch(filterTables(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(sortTables(e.target.value));
  };

  const handleAddToFavorites = (table) => {
    dispatch(addToFavorites(table)); // Dispatch action to add to favorites
  };

  const handleAddToCart = (table) => {
    dispatch(addToCart(table)); // Dispatch action to add to cart
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
            Tables
          </Heading>
          {isLoading && <h4>Loading...</h4>}
          {isError && <h4>Error loading tables</h4>}
          {!isLoading && !isError && (
            <InfiniteScroll
              dataLength={displayedTables.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>No more tables to display</p>
              }
            >
              <Flex
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                {displayedTables.map((table) => (
                  <Box
                    key={table.id}
                    w="30%"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="sm"
                    bg="white"
                    mb={6}
                  >
                    <Image
                      src={table.img}
                      alt={table.title}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {table.subcategory}
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {table.category}
                        </Box>
                      </Box>
                      <Text
                        mt="1"
                        fontWeight="semibold"
                        fontSize="lg"
                        lineHeight="tight"
                      >
                        {table.title}
                      </Text>
                      <Text mt="2">₹ {table.price}</Text>
                      <Text mt="2" fontSize="sm">
                        Rating: {table.rating}
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Button
                          colorScheme="blue"
                          variant="outline"
                          onClick={() => handleAddToFavorites(table)}
                        >
                          Add to Favorites
                        </Button>
                        <Button
                          colorScheme="green"
                          onClick={() => handleAddToCart(table)}
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

export default Tables;
