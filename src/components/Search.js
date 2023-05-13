import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  btnRef,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { SearchResultList } from "./SearchResultList";

export const Search = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [company, setCompany] = React.useState([]);
  const [result, setResult] = React.useState([]);

  const btnRef = React.useRef();

  const fetchHander = (value) => {
    fetch("https://localhost:44383/api/Companies/search")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const result = data.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  const handleModal = () => {
    onOpen();
  };

  const handleChange = (value) => {
    setCompany(value);
    fetchHander(value);
  };
  return (
    <>
      <InputGroup
        borderRadius={5}
        width={{ base: "100%", md: "100%", lg: "70%" }}>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='gray.600' />}
        />
        <Input
          focusBorderColor='red.300'
          type='text'
          onClick={handleModal}
          border='1px solid #949494'
          placeholder='Search Company, Model or Type'
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
      </InputGroup>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <InputGroup
              borderRadius={5}
              width={{ base: "100%", md: "100%", lg: "70%" }}>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.600' />}
              />
              <Input
                focusBorderColor='red.300'
                value={company}
                type='text'
                border='1px solid #949494'
                onChange={(e) => handleChange(e.target.value)}
                placeholder='Search Company, Model or Type'
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
            </InputGroup>
            <SearchResultList result={result} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
