import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
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

import { useDisclosure } from "@chakra-ui/react";
import { SearchResultList } from "./SearchResultList";

export function Search(props) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function handleModal() {
    onOpen();
  }
  const handleData = (v) => {
    props.fetch(v);
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
        colorScheme='whiteAlpha'
        scrollBehavior
        size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SearchResultList fetch={handleData} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
