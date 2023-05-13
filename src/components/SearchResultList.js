import React from "react";
import {
  VStack,
  Divider,
  Text,
  Box,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

export function SearchResultList({ result }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack direction='row' p={0}>
        {result.map((results) => {
          const title = results.name;
          var Models = results.models.map((model) => {
            return model.name;
          });
          return (
            <>
              <Box>
                <Text key={results.name.id} color={"white"}>
                  {title}
                </Text>

                <Text key={results.models.id}>{Models}</Text>
              </Box>
            </>
          );
        })}
      </VStack>
    </>
  );
}
