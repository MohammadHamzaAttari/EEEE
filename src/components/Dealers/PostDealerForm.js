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
  const [company, setCompany] = useState();
  const [formData, setFormData] = useState({
    Name: "",
    Price: "",
    CompanyId: "",

    Date: "",
    FileUpload: "",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETCompanies);

      setCompany(request.data);
    }
    fetchData();
  }, []);
  const form = new FormData();
  form.append("Name", formData.Name);
  form.append("Price", formData.Price);
  form.append("CompanyId", formData.CompanyId);
  form.append("Date", formData.Date);
  form.append("FileUpload", formData.FileUpload);
  const jwt = localStorage.getItem("jwt");
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5200/api/Models", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: jwt,
        },
      })
      .then((response) => {
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
        <form>
          <Flex>
            <FormControl mr='5%'>
              <FormLabel htmlFor='name' fontWeight={"normal"}>
                Name
              </FormLabel>
              <Input
                type='text'
                id='name'
                name='Name'
                value={formData.Name}
                onChange={handleInputChange}
                placeholder='Model name'
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor='date' fontWeight={"normal"}>
                Company
              </FormLabel>
              <Select
                placeholder='Select option'
                name='CompanyId'
                value={formData.CompanyId}
                onChange={handleInputChange}>
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
              name='Price'
              id='price'
              placeholder='$'
              value={formData.Price}
              onChange={handleInputChange}
            />
            <FormHelperText>Price will be verified</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='date' fontWeight={"normal"}>
              Manufacturing Date
            </FormLabel>
            <Input
              type='Date'
              name='Date'
              id='price'
              value={formData.Date}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='file' fontWeight={"normal"} mt='2%'>
              Upload Picture
            </FormLabel>
            <InputGroup size='md'>
              <Input
                type='file'
                name='FileUpload'
                value={formData.FileUpload}
                id='file'
                onChange={handleInputChange}
              />
              <InputRightElement width='4.5rem'></InputRightElement>
            </InputGroup>
          </FormControl>

          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </Box>
    </>
  );
}
