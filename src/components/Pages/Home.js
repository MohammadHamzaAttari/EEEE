import WithSubnavigation from "../navbar";
import CallToActionWithVideo from "../Hero";
import LargeWithLogoCentered from "../Footer";
import Research from "../Research";
import React from "react";
import { Box, Container } from "@chakra-ui/react";

export default function Home(props) {
  const handleData = (v) => {
    props.fetch(v);
  };
  return (
    <Box>
      <WithSubnavigation />
      <CallToActionWithVideo fetch={handleData} />

      <LargeWithLogoCentered />
    </Box>
  );
}
