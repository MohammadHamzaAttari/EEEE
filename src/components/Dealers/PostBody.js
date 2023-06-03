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
import { GETModels } from "../Constant/url";
function PostBody() {
  const [name, setName] = React.useState("");
  const [selectValue, selectedValue] = React.useState("");
  const [upload, setUpload] = React.useState("");
  const [modelId, setModelId] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETModels);

      setModelId(request.data);
    }
    fetchData();
  }, []);
  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  const form = new FormData();
  form.append("Name", name);
  form.append("ModelId", selectValue);
  form.append("FileUpload", upload);
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5200/api/Bodies", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: jwt,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          // Success!
          toast({
            title: "Data Uploaded Successfully",
            description: "Please Upload More data.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else if (response.status == 401 || response.status == 403) {
          toast({
            title: "UnAuthorized",
            description: "You have no access to upload data",
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
  const handleFile = (e) => {
    console.log(e.target.files);
    setUpload(e.target.files[0]);
  };
  const handleSelect = (e) => {
    const value = e.target.value;
    const num = parseInt(value);
    console.log(num);
    selectedValue(num);
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
        <FormLabel htmlFor='file' fontWeight={"normal"}>
          Image Upload
        </FormLabel>
        <Input id='file' type='file' onChange={handleFile} />
      </FormControl>
      <Button type='submit' onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}

export default PostBody;
