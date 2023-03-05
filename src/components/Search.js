import React from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <InputGroup width={{ base: "100%", md: "100%", lg: "70%" }}>
        <InputLeftAddon children={<SearchIcon />} />
        <Input
          focusBorderColor="red.300"
          value={value}
          onChange={handleChange}
          placeholder="Search Make, Model or Type"
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
      </InputGroup>
    </>
  );
}
