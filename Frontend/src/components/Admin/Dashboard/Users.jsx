import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem, Spinner, useColorMode } from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';

const Users = () => {
  const { colorMode } = useColorMode(); // Accessing colorMode from useColorMode
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://furni-flex-4-yx74.onrender.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box p={4} bg={colorMode === 'light' ? 'white' : '#2d3748'} color={colorMode === 'light' ? 'black' : 'white'}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        User List
      </Text>
      {loading ? (
        <Spinner size="xl" color="blue.500" />
      ) : (
        <Grid templateColumns="repeat(1, 1fr)" gap={4}>
          {users.map((user) => (
            <GridItem key={user.id} p={4} bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} borderRadius="md" boxShadow="md">
              <FiUser />
              <Text fontWeight="bold">{user.username}</Text>
              <Text>{user.email}</Text>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Users;
