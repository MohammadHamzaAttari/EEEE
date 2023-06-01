import React from "react";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";

import Companies from "../Companies";

export default function Company() {
  return (
    <Box>
      <WithSubnavigation />
      <Companies />
      <LargeWithLogoCentered />
    </Box>
  );
}
