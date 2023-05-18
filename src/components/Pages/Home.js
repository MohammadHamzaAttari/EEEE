import WithSubnavigation from "../navbar";
import CallToActionWithVideo from "../Hero";
import LargeWithLogoCentered from "../Footer";
import Research from "../Research";
import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { FileUpload } from "../FileUpload";

export default function Home(props) {
  console.log(props.data + "Home");
  return (
    <Box>
      <WithSubnavigation />
      <CallToActionWithVideo data={props.data} />

      <LargeWithLogoCentered />
    </Box>
  );
}
