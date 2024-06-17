import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem, Spinner, useColorMode, Flex, Stack } from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import Sidebar from '../Sidebar/Sidebar';

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
      <Flex>
        <Box w='250px'>
          <Sidebar />
        </Box>

        <Box flex="1" ml={4}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            User List
          </Text>
          {loading ? (
            <Spinner size="xl" color="blue.500" />
          ) : (
            <Grid templateColumns="repeat(auto-fill, minmax(500px, 1fr))" gap={6}>
              {users.map((user) => (
                <GridItem
                  key={user.id}
                  p={4}
                  bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                  borderRadius="md"
                  boxShadow="md"
                  _hover={{ boxShadow: 'lg', transform: 'scale(1.02)', transition: 'all 0.2s' }}
                >
                  <Stack direction="row" align="center" spacing={4}>
                    <FiUser size={24} />
                    <Box>
                      <Text fontWeight="bold" fontSize="lg">{user.username}</Text>
                      <Text fontSize="sm">{user.email}</Text>
                    </Box>
                  </Stack>
                </GridItem>
              ))}
            </Grid>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Users;
