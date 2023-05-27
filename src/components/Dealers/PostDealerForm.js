import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { GETCompanies, GETModels } from "../Constant/url";

export function PostDealerForm() {
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const [progress, setProgress] = useState(20);
  const [model, setModel] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState();
  const [fileu, setFile] = useState(null);
  const [company, setCompany] = useState();
  const [cData, setCData] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETCompanies);

      setCompany(request.data);
    }
    fetchData();
  }, []);
  const store = {
    name: model,
    companyId: cData,
    price: price,
    date: date,
    image: fileu,
  };
  console.log(store);
  const handleClick = () => setShow(!show);
  const jwt = localStorage.getItem("jwt");
  const handleSubmit = () => {
    fetch(GETModels, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      withCredentials: true,
      headers: {
        "content-type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify(store),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          // Success!
          toast({
            title: "Data Uploaded Successfully",
            description: "Please Upload More data.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (response.status === 401) {
          toast({
            title: "UnAuthorized",
            description: "You have no access to upload data",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          // Error!
          toast({
            title: "LoggedIn Error.",
            description: "Record Not Match.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };
  function handleFile(e) {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    setFile(formData);
  }

  return (
    <>
      <Box
        borderWidth='1px'
        rounded='lg'
        shadow='1px 1px 3px rgba(0,0,0,0.3)'
        maxWidth={800}
        p={6}
        m='10px auto'
        as='form'>
        <Progress
          hasStripe
          value={progress}
          mb='5%'
          mx='5%'
          isAnimated></Progress>

        <Flex>
          <FormControl mr='5%'>
            <FormLabel htmlFor='name' fontWeight={"normal"}>
              Name
            </FormLabel>
            <Input
              type='text'
              id='name'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder='Model name'
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='date' fontWeight={"normal"}>
              Company
            </FormLabel>
            <Select
              placeholder='Select option'
              value={cData}
              onChange={(e) => setCData(e.target.value)}>
              {company &&
                company.map((ex) => {
                  return (
                    <option key={ex.id} value={ex.id}>
                      {ex.name}
                    </option>
                  );
                })}
            </Select>
          </FormControl>
        </Flex>
        <FormControl mr='5%'>
          <FormLabel htmlFor='price' fontWeight={"normal"}>
            Price
          </FormLabel>
          <Input
            type='Number'
            id='price'
            placeholder='$'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormHelperText>Price will be verified</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='date' fontWeight={"normal"}>
            Manufacturing Date
          </FormLabel>
          <Input
            type='Date'
            id='price'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='file' fontWeight={"normal"} mt='2%'>
            Upload Picture
          </FormLabel>
          <InputGroup size='md'>
            <Input type='file' id='file' onChange={(e) => handleFile(e)} />
            <InputRightElement width='4.5rem'></InputRightElement>
          </InputGroup>
        </FormControl>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </>
  );
}
