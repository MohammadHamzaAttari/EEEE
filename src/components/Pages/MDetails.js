import React from "react";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";
import ModelsDetails from "../ModelsDetails";

export default function MDetails(props) {
  const data = props.dataId;

  return (
    <Box>
      <WithSubnavigation />
      <ModelsDetails />
      <LargeWithLogoCentered />
    </Box>
  );
}
