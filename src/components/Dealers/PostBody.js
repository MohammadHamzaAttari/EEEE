import React from "react";
import { Form } from "react-router-dom";
import { FormControl, Button, Input, FormLabel } from "@chakra-ui/react";
import axios from "axios";
function PostBody() {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [upload, setUpload] = React.useState("");

  const jwt = localStorage.getItem("jwt");
  const form = new FormData();
  form.append("Name", name);
  form.append("ModelId", id);
  form.append("FileUpload", upload);
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5200/api/Bodies", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: jwt,
        },
      })
      .then((res) => {
        console.log(res);
      });
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
        <FormLabel htmlFor='id' fontWeight={"normal"}>
          Model Id
        </FormLabel>
        <Input
          type='number'
          id='id'
          placeholder='companyId'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
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
