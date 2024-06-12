import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory, filterByPriceLowToHigh, filterByPriceHighToLow } from '../redux/actions/sofaActions';
import { Box, Button, Grid, List, ListItem, Select } from '@chakra-ui/react';

const SofaList = () => {
  const sofas = useSelector(state => state.sofas.filteredSofas);
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    dispatch(filterByCategory(event.target.value));
  };

  const handlePriceLowToHigh = () => {
    dispatch(filterByPriceLowToHigh());
  };

  const handlePriceHighToLow = () => {
    dispatch(filterByPriceHighToLow());
  };

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Box width="20%" p="4">
        <List spacing={3}>
          <ListItem>
            <Select placeholder="Select category" onChange={handleCategoryChange}>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              {/* Add more categories here */}
            </Select>
          </ListItem>
          <ListItem>
            <Button onClick={handlePriceLowToHigh}>Low to High Price</Button>
          </ListItem>
          <ListItem>
            <Button onClick={handlePriceHighToLow}>High to Low Price</Button>
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box width="80%" p="4">
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {sofas.map((sofa) => (
            <Box key={sofa.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
              <Box fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
                {sofa.name}
              </Box>
              <Box>
                Category: {sofa.category}
              </Box>
              <Box>
                Price: ${sofa.price}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SofaList;
