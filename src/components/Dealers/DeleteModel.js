import React from "react";
import { DeleteModels } from "../Constant/url";
import { Button, ButtonGroup, Box, Text } from "@chakra-ui/react";
function DeleteModel(props) {
  const jwt = localStorage.getItem("jwt");
  const handleClick = () => {
    fetch(DeleteModels + props.id).then((res) => console.log(res));
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
