import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiBarChart, FiDatabase, FiHome, FiMenu, FiPhone, FiPieChart, FiUsers } from 'react-icons/fi';
import Navbar from './Navbar';

const Sidebar = () => {
  const [navSize, setNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      mt="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      bg="white"  // Set background color to white
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems="flex-start"
        as="nav"
         bg="tranparent"
          border="none"
      >
        <IconButton
          background="none"
          mt={10}
          _hover={{ background: "#AEC8CA" }}
          w={30}
          h={30}
          borderRadius="50%"
          icon={<FiMenu  />}
          onClick={() => setNavSize(navSize === "small" ? "large" : "small")}
          backgroundColor="transparent"
          border="none"

         
        />
        <Navbar backgroundColor="none" navSize={navSize} icon={FiHome} title="Dashboard" discription=""/>
        <Navbar navSize={navSize} icon={FiUsers} title="User" discription=""/>
        <Navbar navSize={navSize} icon={FiDatabase} title="Products"  discription=""/>
        <Navbar navSize={navSize} icon={FiBarChart} title="Bar-chart" discription=""/>
        <Navbar navSize={navSize} icon={FiPieChart} title="Pie-chart" discription=""/>
        <Navbar navSize={navSize} icon={FiPhone} title="Contact" discription="" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar
            size="sm"
            w="30px"
            h="30px"
            borderRadius="50%"
            border="none"  // Remove border from avatar
            src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
          />
          <Flex
            flexDir="column"
            ml={navSize === "small" ? "0" : "4"}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">Madhu Mishra</Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
