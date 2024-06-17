import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { BiStar } from 'react-icons/bi';

const Rating = ({ rating }) => {
  const stars = Array(5)
    .fill('')
    .map((_, i) => (
      <Icon
        key={i}
        as={BiStar}
        color={i < rating ? 'yellow.400' : 'gray.300'}
        boxSize={5}
      />
    ));

  return <Box d="flex">{stars}</Box>;
};

export default Rating;
