import React, { useContext } from "react";
import { Button, SimpleGrid, VStack, Spinner } from "@chakra-ui/react";
import { Divider, Box } from "@chakra-ui/react";
import ModelDetails from "./Pages/Models";
import { Search2Icon } from "@chakra-ui/icons";
import { ModelId } from "../App";
import { Link } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  Text,
} from "@chakra-ui/react";

export function SearchResultList(props) {
  const [result, setResult] = React.useState([]);
  const [company, setCompany] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  //value send to modelDetails

  const fetchHander = (value) => {
    fetch("http://localhost:5200/api/Companies/search")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
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
        setLoading(false);
      });
  };
  const handleChange = (value) => {
    setLoading(true);
    setCompany(value);
    fetchHander(value.toLowerCase());
  };

  function handleFetch(value) {
    props.fetch(value);
  }
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
          w='100%'
          border='1px solid #949494'
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search Company, Model or Type'
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
        <InputRightElement
          pointerEvents='none'
          children={loading && <Spinner size='lg' color='red.400' />}
        />
      </InputGroup>

      <VStack direction='row' p={0}>
        {result.map((results) => {
          return (
            <>
              <Link
                key={results.id}
                to='/models'
                onClick={() => handleFetch(results.id)}>
                {!loading && results.name}
              </Link>
            </>
          );
        })}
      </VStack>
    </>
  );
}
