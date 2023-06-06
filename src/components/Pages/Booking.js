import React from "react";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";
import CreditCardForm from "../CreditCard";
function Booking(props) {
  return (
    <Box>
      <WithSubnavigation />
      <CreditCardForm />
      <LargeWithLogoCentered />
    </Box>
  );
}

export default Booking;
