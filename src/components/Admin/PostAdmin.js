import {
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
export default function PostAdmin() {
  const [company, setCompany] = useState();
  const store = { Name: company };
  const toast = useToast();
  const jwt = localStorage.getItem("jwt");
  const handleSubmit = () => {
    fetch("http://localhost:5200/api/Companies", {
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
            description: "Record Not Found.",
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
      <form>
        <FormLabel>Enter Companies Name For Registeration</FormLabel>
        <Input
          type='text'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Button
          colorScheme={"blue"}
          variant={"solid"}
          onClick={handleSubmit}
          mt='14px'>
          Submit
        </Button>
      </form>
    </>
  );
}
