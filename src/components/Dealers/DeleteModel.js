import React from "react";
import { DeleteModels } from "../Constant/url";
import { Button, ButtonGroup, Box, Text, useToast } from "@chakra-ui/react";
function DeleteModel(props) {
  const toast = useToast();
  const jwt = localStorage.getItem("jwt");
  const handleClick = () => {
    fetch(DeleteModels + props.id, {
      method: "DELETE",

      headers: { Authorization: jwt },
    }).then((response) => {
      if (response.status === 204) {
        // Success!
        toast({
          title: "Success",
          description: "Deleted Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed",
          description: "You are not authorized to delete data",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <Box>
      <Text>Are you sure to continue with your action</Text>
      <Button onClick={handleClick}>Apply</Button>
      <Button>Cancel</Button>
    </Box>
  );
}

export default DeleteModel;
