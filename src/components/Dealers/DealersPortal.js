import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Button,
  FormLabel,
  Spacer,
} from "@chakra-ui/react";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { PostDealerForm } from "./PostDealerForm";
import { useNavigate } from "react-router-dom";

const LinkItems = [
  { name: "Dashboard", icon: FiHome },
  { name: "Upload", icon: FiTrendingUp },
  { name: "Update", icon: FiCompass },
  { name: "All Models", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function Admin({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH='100vh' bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />

        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size='full'>
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p='4'>
          {children}
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue("white", "gray.900")}
      borderRight='1px'
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Image src='../../images/index1.png' maxH={"70px"} maxWidth={"100px"} />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        w={"100%"}
        onClick={children == "Upload" ? () => onOpen() : () => onClose()}>
        <Flex
          align='center'
          p='4'
          mx='4'
          w={"100%"}
          borderRadius='lg'
          role='group'
          cursor='pointer'
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}>
          {console.log("rest " + rest)}
          {icon && (
            <Icon
              mr='4'
              fontSize='16'
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
          {console.log("this is from childern" + children)}
        </Flex>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post Model Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <PostDealerForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const history = useNavigate();
  function handleSignOut() {
    localStorage.clear();
    history("/dealerHome/registerDealer/loginDealer");
  }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'>
        <Image src='../../images/index1.png' maxH={"70px"} maxWidth={"100px"} />
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size='lg'
          variant='ghost'
          aria-label='open menu'
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition='all 0.3s'
              _focus={{ boxShadow: "none" }}>
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'>
                  <Text fontSize='sm'>{localStorage.getItem("firstName")}</Text>
                  <Text fontSize='xs' color='gray.600'>
                    Dealer
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>
                <Button onClick={handleSignOut}>Sign out</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
