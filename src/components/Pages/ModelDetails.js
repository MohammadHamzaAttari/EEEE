import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";

export default function ModelDetails() {
  return (
    <Box>
      <WithSubnavigation />

      <LargeWithLogoCentered />
    </Box>
  );
}
