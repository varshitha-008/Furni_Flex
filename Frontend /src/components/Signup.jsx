

import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Avatar,
  FormControl,
  Alert,
  AlertIcon,
  Link
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'; 

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('https://furni-flex-4-yx74.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to create account');
      }
      const newUser = await response.json();
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setError('');

      
      navigate('/login');


      alert('Signup successful! Redirecting to login Page.');

    } catch (error) {
      console.error(error);
      setError('Error creating account');
    }
  };

  return (
    <div className='signup-page'>
      <Flex gap="20px"
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack className='stack' 
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="blue.500" />
          <Heading color="blue.500">Sign Up</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSignUp}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <Input type="text" placeholder="User Name"
                      value={username} onChange={e => setUsername(e.target.value)} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password} onChange={e => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Sign Up
                </Button>
                {error && (
                  <Alert status="error" borderRadius={4}>
                    <AlertIcon />
                    {error}
                  </Alert>
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          Already have an account?{" "}
          <Link href="/login" color="teal.500">
            Login
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Signup;
