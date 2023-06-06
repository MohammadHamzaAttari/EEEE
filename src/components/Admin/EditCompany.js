import React, { useEffect } from "react";
import { Form } from "react-router-dom";
import {
  FormControl,
  Button,
  Input,
  FormLabel,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { GETModels, GETBodies, CrudCompanies } from "../Constant/url";
function EditCompany(props) {
  const [name, setName] = React.useState("");

  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  const handleSubmit = (e) => {
    const store = {
      id: props.id,
      name: name,
    };
    axios
      .put(CrudCompanies + props.id, {
        headers: {
          "content-type": "application/json",
          Authorization: jwt,
        },

        body: JSON.stringify(store),
      })
      .then((response) => {
        if (response.status == 204) {
          // Success!
          toast({
            title: "Successfull",
            description: "Data Updated Successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else if (response.status == 401 || response.status == 403) {
          toast({
            title: "UnAuthorized",
            description: "You have no access to update data",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          // Error!
          toast({
            title: "LoggedIn Error.",
            description: "Record Not Match.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <>
      <FormControl mr='5%'>
        <FormLabel htmlFor='name' fontWeight={"normal"}>
          Body Name
        </FormLabel>
        <Input
          id='name'
          placeholder='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <Button type='submit' onClick={handleSubmit}>
        Update
      </Button>
    </>
  );
}

export default EditCompany;
