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
import { GETModels, GETBodies } from "../Constant/url";
function BodyEdit(props) {
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
  form.append("Id", props.id);
  form.append("Name", name);
  form.append("ModelId", selectValue);
  form.append("FileUpload", upload);
  const handleSubmit = (e) => {
    axios
      .put(GETBodies + props.id, form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: jwt,
        },
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
  const handleFile = (e) => {
    console.log(e.target.files);
    setUpload(e.target.files[0]);
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
        <FormLabel htmlFor='ModelId' fontWeight={"normal"}>
          Model Id
        </FormLabel>
        <Select
          placeholder='Select option'
          name='ModelId'
          value={selectValue}
          onChange={(e) => {
            selectedValue(parseInt(e.target.value));
          }}>
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
        Update
      </Button>
    </>
  );
}

export default BodyEdit;
