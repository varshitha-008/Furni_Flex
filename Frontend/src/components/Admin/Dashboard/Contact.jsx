import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  IconButton,
  StackDivider,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { MdAdd, MdDelete } from 'react-icons/md';

const Contact = () => {
  const [contacts, setContacts] = useState([
    { type: 'Phone', value: '+1234567890' },
    { type: 'Email', value: 'example@example.com' },
  ]);
  const [newContactType, setNewContactType] = useState('');
  const [newContactValue, setNewContactValue] = useState('');

  const addContact = () => {
    if (newContactType && newContactValue) {
      setContacts([
        ...contacts,
        { type: newContactType, value: newContactValue },
      ]);
      setNewContactType('');
      setNewContactValue('');
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Contact Information
      </Text>
      
      {/* Default Contacts */}
      <VStack spacing={4} align="flex-start" divider={<StackDivider />} mb={4}>
        {contacts.map((contact, index) => (
          <HStack key={index} spacing={4}>
            <Text fontWeight="bold">{contact.type}:</Text>
            <Text>{contact.value}</Text>
            <IconButton
              icon={<MdDelete />}
              aria-label="Delete Contact"
              onClick={() => deleteContact(index)}
              variant="ghost"
              colorScheme="red"
            />
          </HStack>
        ))}
      </VStack>
      
      {/* Add New Contact Section */}
      <FormControl>
        <FormLabel>Add New Contact:</FormLabel>
        <HStack spacing={4}>
          <Input
            placeholder="Type (e.g., Phone, Email)"
            value={newContactType}
            onChange={(e) => setNewContactType(e.target.value)}
          />
          <Input
            placeholder="Value (e.g., +1234567890, example@example.com)"
            value={newContactValue}
            onChange={(e) => setNewContactValue(e.target.value)}
          />
          <Button
            leftIcon={<MdAdd />}
            colorScheme="blue"
            onClick={addContact}
          >
            Add
          </Button>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default Contact;
