import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, SimpleGrid, Text, Card, CardBody } from '@chakra-ui/react';

const Category = () => {
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.homepage.categories);
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <Text>Category not found</Text>;
  }

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>{category.title}</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {category.items.map((item) => (
          <Card key={item.id}>
            <CardBody>
              <Text fontSize="2xl" fontWeight="bold">{item.title}</Text>
              <Text mt={4}>{item.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Category;
