import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import React from "react";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { GETContact } from "./Constant/url";

export default function About() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const toast = useToast();
  const jwt = localStorage.getItem("jwt");
  const handleSend = (e) => {
    e.preventDefault();
    const store = {
      name: name,
      email: email,
      message: message,
    };
    fetch(GETContact, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(store),
    }).then((response) => {
      if (response.status == 204) {
        // Success!
        toast({
          title: "Successful",
          description: "Submitted Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Error!
        toast({
          title: "LoggedIn Error.",
          description: "Record Not Match.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <Container
      bg='blackAlpha.300'
      maxW='full'
      mt={0}
      centerContent
      overflow='hidden'>
      <Flex>
        <Box
          bg='whiteAlpha.200'
          color='white'
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color='#1970F1' size='20px' />}>
                        +92-3227415157
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color='#1970F1' size='20px' />}>
                        finalyearproject@ads.com
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color='#1970F1' size='20px' />}>
                        Pugc, Pakistan
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems='flex-start'>
                    <IconButton
                      aria-label='facebook'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size='28px' />}
                    />
                    <IconButton
                      aria-label='github'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size='28px' />}
                    />
                    <IconButton
                      aria-label='discord'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size='28px' />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<BsPerson color='gray.800' />}
                          />
                          <Input
                            type='text'
                            value={name}
                            size='md'
                            onChange={(e) => setName(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<MdOutlineEmail color='gray.800' />}
                          />
                          <Input
                            type='text'
                            size='md'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor='gray.300'
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder='message'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id='name' float='right'>
                        <Button
                          variant='solid'
                          bg='red.400'
                          color='white'
                          _hover={{}}
                          onClick={handleSend}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
