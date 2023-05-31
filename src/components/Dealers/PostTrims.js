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
import { GETModels, CreateTrims } from "../Constant/url";
function PostTrims() {
  const [name, setName] = React.useState("");
  const [selectValue, selectedValue] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [modelId, setModelId] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const request = await axios.get(GETModels);

        setModelId(request.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  const form = new FormData();
  form.append("Name", name);
  form.append("ModelId", selectValue);
  form.append("Price", price);
  const handleSubmit = (e) => {
    axios
      .post(CreateTrims, form, {
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

  const handleSelect = (e) => {
    const value = e.target.value;
    const num = parseInt(value);

    selectedValue(num);
  };
  return (
    <>
      <FormControl mr='5%'>
        <FormLabel htmlFor='name' fontWeight={"normal"}>
          Trim Name
        </FormLabel>
        <Input
          id='name'
          placeholder='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='id' fontWeight={"normal"}>
          Model Id
        </FormLabel>
        <Select
          placeholder='Select option'
          name='ModelId'
          value={selectValue}
          onChange={handleSelect}>
          {modelId &&
            modelId.map((ex) => {
              return (
                <option key={ex.id} value={ex.id}>
                  {ex.name}
                </option>
              );
            })}
        </Select>
      </FormControl>
      <FormControl mt='2%'>
        <FormLabel htmlFor='number' fontWeight={"normal"}>
          Price
        </FormLabel>
        <Input
          id='number'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormControl>
      <Button type='submit' onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}

export default PostTrims;
