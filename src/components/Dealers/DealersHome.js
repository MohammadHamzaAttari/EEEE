import WithSubnavigation from "../navbar";
//import CallToActionWithVideo from "./Hero";
import DealersHero from "./DealersHero";
import LargeWithLogoCentered from "../Footer";
import React from "react";
import { Box, Container } from "@chakra-ui/react";

export default function DealersHome() {
  return (
    <Box>
      <WithSubnavigation />
      <DealersHero />

      <LargeWithLogoCentered />
    </Box>
  );
}
