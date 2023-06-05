import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardHolder":
        setCardHolder(value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here
    // You can access the form values using the state variables (cardNumber, cardHolder, expiryDate, cvv)

    setIsSubmitting(true);

    // Simulating form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setCardNumber("");
      setCardHolder("");
      setExpiryDate("");
      setCvv("");
    }, 2000);
  };

  return (
    <Box p={4} maxW='400px' mx='auto'>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id='cardNumber' isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input
              type='text'
              name='cardNumber'
              value={cardNumber}
              onChange={handleInputChange}
              placeholder='Card Number'
            />
          </FormControl>
          <FormControl id='cardHolder' isRequired>
            <FormLabel>Card Holder</FormLabel>
            <Input
              type='text'
              name='cardHolder'
              value={cardHolder}
              onChange={handleInputChange}
              placeholder='Card Holder'
            />
          </FormControl>
          <FormControl id='expiryDate' isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type='text'
              name='expiryDate'
              value={expiryDate}
              onChange={handleInputChange}
              placeholder='Expiry Date'
            />
          </FormControl>
          <FormControl id='cvv' isRequired>
            <FormLabel>CVV</FormLabel>
            <Input
              type='text'
              name='cvv'
              value={cvv}
              onChange={handleInputChange}
              placeholder='CVV'
            />
          </FormControl>
          <Button
            type='submit'
            isLoading={isSubmitting}
            loadingText='Submitting'>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreditCardForm;
