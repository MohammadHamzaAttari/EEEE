import React, { useEffect } from "react";
import BodyCard from "./BodyCard";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Box,
  Th,
  Td,
  Image,
  TableCaption,
  TableContainer,
  SimpleGrid,
  IconButton,
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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { GETBodies, GETTrims } from "../Constant/url";
import BodyDelete from "./BodyDelete";
import BodyEdit from "./BodyEdit";
import TrimDelete from "./TrimDelete";
import TrimEdit from "./TrimEdit";
function TrimCrud(props) {
  const [trims, setTrims] = React.useState();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [editId, setEditId] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETTrims);
      setTrims(request.data);
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
    <div>
      <TableContainer>
        <Table variant='striped' colorScheme='white'>
          <Thead>
            <Tr>
              <Th>ModelId</Th>
              <Th>TrimId</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {trims &&
              trims.map((ex) => {
                return (
                  <Tr key={ex.id}>
                    <Td>{ex.modelId}</Td>
                    <Td>{ex.id}</Td>
                    <Td>{ex.name}</Td>
                    <Td>{ex.price}</Td>
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
              <TrimDelete id={deleteId} />
            ) : (
              <TrimEdit id={editId} />
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default TrimCrud;
