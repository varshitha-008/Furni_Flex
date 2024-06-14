import { Flex, Icon, Link, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import NavHover from './NavHover';

const Navbar = ({ navSize, title, icon, active, discription }) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      
      
    >
      <Menu placement='right'>
        <Link
          backgroundColor={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={navSize === "large" ? "100%" : "auto"}
        
      border="none"
        >
          <MenuButton w="100%" backgroundColor="transparent" border="none">
            <Flex align="center">
              <Icon as={icon} fontSize="xl"  color={active?"#82AAAD":"gray.500"}/>
              <Text ml={navSize === "small" ? "0" : "10px"} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList 
           py={0}
           border="none"
           w={200}
           h={200}
           ml={5}
        
        >
            <NavHover title={title} icon={icon} discription={discription} />
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
