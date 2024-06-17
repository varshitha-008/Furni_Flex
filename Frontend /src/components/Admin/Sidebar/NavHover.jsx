import { Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'

const NavHover = ({title, icon, discription}) => {
  return (
    <>
   <Flex 
      pos="absolute"
      mt="cal(100px-7.5px)"
      ml="-10px"
      w={0}
      h={0}
      borderTop="10px solid transparent"
      borderBottom="10px solid transparent"
      borderRight="10px solid #82AAAD"
   
   
   />
   <Flex
     h={200}
     w={200}
     flexDir="column"
     alignItems="center"
     justify="center"
     backgroundColor="#82AAAD"
     borderRadius="10px"
     color="#fff"
     textAlign="center"
   >
    <Icon as={icon} fontSize="3xl" mb={4}/>
    <Heading size="md" fontWeight="normal">{title}</Heading>
    <Text>{discription}</Text>

   </Flex>
   </>
  )
}

export default NavHover
