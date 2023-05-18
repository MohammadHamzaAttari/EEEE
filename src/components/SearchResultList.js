import React from "react";
import { Button, Link, SimpleGrid, VStack } from "@chakra-ui/react";
import { Divider, Box } from "@chakra-ui/react";
import ModelDetails from "./Pages/ModelDetails";
import { Search2Icon } from "@chakra-ui/icons";

import {
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Text,
} from "@chakra-ui/react";

export function SearchResultList(props) {
  const [result, setResult] = React.useState([]);
  const [company, setCompany] = React.useState([]);
  //value send to modelDetails
  const [value, setValue] = React.useState("");

  const fetchHander = (value) => {
    fetch("https://localhost:44383/api/Companies/search")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log("Create Account");
        }
      })
      .then((data) => {
        const result = data.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };
  const handleChange = (value) => {
    setCompany(value);
    fetchHander(value.toLowerCase());
  };

  const handleFetch = (value) => {
    setValue(value);
  };
  return (
    <>
      <InputGroup
        borderRadius={5}
        width={{ base: "100%", md: "100%", lg: "70%" }}>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='gray.600' />}
        />
        <Input
          focusBorderColor='red.300'
          value={company}
          type='text'
          border='1px solid #949494'
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search Company, Model or Type'
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
      </InputGroup>

      <VStack direction='row' p={0} alignItem='left'>
        {result.map((results) => {
          const title = results.name;
          var Models = results.models.map((model) => {
            return (
              <Link
                key={model.id}
                href='/modelDetails'
                onClick={() => handleFetch(model.id)}>
                {model.name}
              </Link>
            );
          });
          return (
            <>
              <SimpleGrid color='blackAlpha.700' fontWeight='bold'>
                <Box pl='2' area={"header"}>
                  <Button colorScheme={"telegram"}> {title}</Button>
                </Box>
                <Divider orientation='horizontal' />
                <SimpleGrid>
                  {Models.map((ex) => {
                    return <Button colorScheme={"teal"}>{ex} </Button>;
                  })}
                </SimpleGrid>
              </SimpleGrid>
            </>
          );
        })}
      </VStack>
    </>
  );
}
