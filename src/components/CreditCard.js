import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  Text,
  Image,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import {
  useToast,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { Booking } from "./Constant/url";
import { json } from "react-router-dom";
const CreditCardForm = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modelName = localStorage.getItem("modelname");
  const bodyName = localStorage.getItem("selectBodyName");
  const price = localStorage.getItem("modelprice");
  const trimName = localStorage.getItem("selectTrimName");
  const trimPrice = localStorage.getItem("selectTrimPrice");
  const jwt = localStorage.getItem("jwt");
  const userId = localStorage.getItem("userId");
  const firstName = localStorage.getItem("firstName");
  const toast = useToast();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "state":
        setState(value);
        break;
      default:
        break;
    }
  };
  var total = parseInt(price) + parseInt(trimPrice);
  var Price = parseInt(total) - 500;
  const store = {
    userId: userId,
    firstName: firstName,
    address: address,
    city: city,
    body: bodyName,
    state: state,
    country: Country,
    modelName: modelName,
    price: price,
    trimName: trimName,
    trimPrice: trimPrice,
    totalPrice: Price,
  };
  // Handle form submission here
  // You can access the form values using the state variables (cardNumber, cardHolder, state, cvv)

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(Booking, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      withCredentials: true,
      headers: {
        "content-type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify(store),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          // Success!
          toast({
            title: "Data Uploaded Successfully",
            description: "Please Upload More data.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (response.status === 401) {
          toast({
            title: "UnAuthorized",
            description: "You have no access to upload data",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          // Error!
          toast({
            title: "LoggedIn Error.",
            description: "Record Not Found.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
      <Box p={4} maxW='auto' mx='auto'>
        <Heading>
          Booking System By <Heading color={"red.400"}>ADS</Heading>
        </Heading>
        <Heading>
          Selected Type{" "}
          <Heading color={"red.400"}>
            {localStorage.getItem("selectBodyName")}
          </Heading>
        </Heading>
        <Image
          src={`data:image/jpeg;base64,${localStorage.getItem(
            "selectBodyImage"
          )}`}
        />
      </Box>
      <Box p={4} maxW='auto' mx='auto'>
        <Heading p={25}>Please Provide Booking Details</Heading>
        <Box>
          <form>
            <VStack spacing={4}>
              <FormControl id='address' isRequired>
                <FormLabel>Enter Address</FormLabel>
                <Input
                  type='text'
                  name='address'
                  value={address}
                  onChange={handleInputChange}
                  placeholder='Address'
                />
              </FormControl>
              <FormControl id='city' isRequired>
                <FormLabel>City</FormLabel>
                <Input
                  type='text'
                  name='city'
                  value={city}
                  onChange={handleInputChange}
                  placeholder='City'
                />
              </FormControl>
              <FormControl id='state' isRequired>
                <FormLabel>State</FormLabel>
                <Input
                  type='text'
                  name='state'
                  value={state}
                  onChange={handleInputChange}
                  placeholder='Expiry Date'
                />
              </FormControl>
              <FormControl id='country' isRequired>
                <FormLabel>Country</FormLabel>
                <Input
                  type='text'
                  name='country'
                  value={Country}
                  onChange={handleInputChange}
                  placeholder='Country'
                />
              </FormControl>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>Model-Name</Th>
                      <Th isNumeric>Model-Price</Th>
                      <Th>Trim-Name</Th>
                      <Th isNumeric>Trim-Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{modelName}</Td>
                      <Td>{price}</Td>
                      <Td>{trimName}</Td>
                      <Td isNumeric>{trimPrice}</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
              <Button
                type='submit'
                isLoading={isSubmitting}
                loadingText='Submitting'
                onClick={handleSubmit}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default CreditCardForm;
