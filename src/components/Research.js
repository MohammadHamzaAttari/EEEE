import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Selection from "./Select";

export default function Research() {
  return (
    <Box maxW={"7xl"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <FormControl>
            <FormLabel>Research</FormLabel>
            <Heading>Research. Compare. Find What's Right for You.</Heading>
            <Text>
              Use our extensive database to research and compare trims, photos,
              and reviews for every make and model, so you can find the car that
              fits your life.
            </Text>
            <Selection />
          </FormControl>
        </Box>
        <Box>
          <Image src='' alt='Cars'></Image>
        </Box>
      </Flex>
    </Box>
  );
}
