import React from "react";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";
import ModelsDetailsCars from "../ModelsDetailsCars";

export default function ModelDetails(props) {
  console.log(props.data);
  return (
    <Box>
      <WithSubnavigation />
      <ModelsDetailsCars />
      <LargeWithLogoCentered />
    </Box>
  );
}
