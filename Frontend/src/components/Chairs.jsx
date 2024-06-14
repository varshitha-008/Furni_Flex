
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem, Box, Image, Badge, Text } from '@chakra-ui/react';

const Chairs = () => {
  const chairs = useSelector((state) => state.chairs);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
      {chairs.map((chair) => (
        <Link to={`/chairs`} key={chairs.id}>
        <GridItem key={chair.id}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={chair.img} alt={chair.title} h="200px" w="100%" objectFit="cover" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {chair.subcategory}
                </Badge>
                <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                  {chair.category}
                </Box>
              </Box>

              <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
                {chair.title}
              </Text>

              <Text mt="2">₹ {chair.price}</Text>
              <Text mt="2" fontSize="sm">
                Rating: {chair.rating}
              </Text>
            </Box>
          </Box>
        </GridItem>
        </Link>
      ))}
      
    </Grid>
  );
};

export default Chairs;
