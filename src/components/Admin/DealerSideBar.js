import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Center,
  Heading,
  Select,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IoLogoModelS } from "react-icons/io";
import { BsCarFront } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
const LinkItems = [
  { name: "Company", icon: IoLogoModelS },
  { name: "Model", icon: IoLogoModelS },
  { name: "Body", icon: BsCarFront },
  { name: "Trims", icon: FiCompass },
  { name: "Price", icon: AiOutlineDollarCircle },
];

export default function DealerSidebar({ data, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [data]);
  return (
    <Box minH='100vh' bg={useColorModeValue("gray.100", "gray.900")}>
      <Center mt={"20px"}>
        {isLoading ? (
          <Spinner color='red.500' size={"lg"} />
        ) : (
          <Heading>All</Heading>
        )}
      </Center>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        data={data}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {(data, children)}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ data, onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight='1px'
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      h='full'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} data={data} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ data, icon, children, ...rest }) => {
  const [selectValue, selectedValue] = React.useState("");
  const handleSelect = (e) => {
    const value = e.target.value;
    const num = parseInt(value);

    selectedValue(num);
    console.log(selectValue);
  };

  return (
    <Flex
      align='center'
      p='4'
      mx='4'
      borderRadius='lg'
      role='group'
      cursor='pointer'
      _hover={{
        color: "white",
      }}
      {...rest}>
      {icon && (
        <Icon
          mr='4'
          fontSize='16'
          _groupHover={{
            color: "red.500",
          }}
          as={icon}
        />
      )}

      <Select
        value={selectValue}
        onChange={handleSelect}
        border={"none"}
        color='red.400'>
        {data &&
          data.map((ex) => {
            return (
              <option key={ex.id} value={ex.id}>
                {children == "Company"
                  ? ex.name
                  : children == "Model"
                  ? ex.models.map((ex) => {
                      return (
                        <option key={ex.id} value={ex.id}>
                          {ex.name}
                        </option>
                      );
                    })
                  : null}
              </option>
            );
          })}
      </Select>
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent='flex-start'
      {...rest}>
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        fontSize='2xl'
        ml='8'
        fontFamily='monospace'
        fontWeight='bold'></Text>
    </Flex>
  );
};
