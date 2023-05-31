import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import { GETModels } from "../Constant/url";
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
import Upload from "./UpdateModel";

function DealerTables(props) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [models, setModels] = React.useState();
  const [editId, setEditId] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");
  console.log("editId " + editId);
  console.log("deleteId " + deleteId);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETModels);
      setModels(request.data);
    }
    fetchData();
  }, []);
  const handleEdit = (e) => {
    setEditId(e);
    onOpen();
  };
  const handleDelete = (e) => {
    setDeleteId(e);
    onOpen();
  };
  return (
    <div>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption placement='top' fontSize={"lg"}>
            Models with Name and Price
          </TableCaption>
          <Thead>
            <Tr>
              <Th>ModelID</Th>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {models &&
              models.map((ex) => {
                return (
                  <Tr key={ex.id}>
                    <Td>{ex.id}</Td>
                    <Td>{ex.name}</Td>
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
          <Tfoot>
            <Tr>
              <Th>Serial Number</Th>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Tfoot>
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
    </div>
  );
}

export default DealerTables;
