import { Flex, Icon, Link as ChakraLink, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import NavHover from './NavHover';

const Navbar1 = ({ navSize, title, icon, active, discription, to }) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <ChakraLink
          as={Link}
          to={to}
          backgroundColor={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={navSize === "large" ? "100%" : "auto"}
          border="none"
        >
          <MenuButton w="100%" backgroundColor="transparent" border="none">
            <Flex align="center">
              <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
              <Text ml={navSize === "small" ? "0" : "10px"} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </ChakraLink>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHover title={title} icon={icon} discription={discription} />
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar1;
