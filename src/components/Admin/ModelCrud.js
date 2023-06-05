import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Box,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import DeleteModel from "./DeleteModel";
import { GETModels } from "../Constant/url";
import Upload from "./UpdateModel";

function ModelCrud(props) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [models, setModels] = React.useState();
  const [bodies, setBodies] = React.useState();
  const [trims, setTrims] = React.useState();
  const [editId, setEditId] = React.useState("");

  const [deleteId, setDeleteId] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETModels);
      setModels(request.data);
    }
    fetchData();
  }, []);
  const handleEdit = (e) => {
    setEditId(e);

    setDeleteId("");

    onOpen();
  };
  const handleDelete = (e) => {
    setDeleteId(e);

    setEditId("");

    onOpen();
  };

  return (
    <>
      <TableContainer>
        <Table variant='striped' colorScheme='white'>
          <Thead>
            <Tr>
              <Th>CompanyId</Th>
              <Th>ModelId</Th>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th isNumeric>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {models &&
              models.map((ex) => {
                return (
                  <Tr key={ex.id}>
                    <Td>{ex.companyId}</Td>
                    <Td>{ex.id}</Td>
                    <Td>{ex.name}</Td>
                    <Td>
                      <Image
                        width='70px'
                        height='80px'
                        src={`data:image/jpeg;base64,${ex.image}`}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                      />
                    </Td>
                    <Td isNumeric>{ex.price}</Td>
                    <Td>
                      <IconButton
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        onClick={() => handleEdit(ex.id)}
                        icon={<EditIcon />}
                      />
                      <IconButton
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        onClick={() => handleDelete(ex.id)}
                        icon={<DeleteIcon />}
                      />
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        colorScheme='whiteAlpha'
        scrollBehavior
        size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {editId == "" ? (
              <DeleteModel id={deleteId} />
            ) : (
              <Upload id={editId} />
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModelCrud;
