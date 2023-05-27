import React from "react";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";
import Modelshero from "../Modelshero";

export default function ModelDetails(props) {
  const data = props.dataId;

  return (
    <Box>
      <WithSubnavigation />
      <Modelshero fetch={data} />
      <LargeWithLogoCentered />
    </Box>
  );
}
