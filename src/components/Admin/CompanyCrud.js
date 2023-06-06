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
import { GETBodies, GETCompanies } from "../Constant/url";
import BodyDelete from "./BodyDelete";
import BodyEdit from "./BodyEdit";
import DeleteCompany from "./DeleteCompany";
import EditCompany from "./EditCompany";
function CompanyCrud(props) {
  const [companies, setCompanies] = React.useState();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [editId, setEditId] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETCompanies);
      setCompanies(request.data);
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
              <Th>CompanyId</Th>

              <Th>Name</Th>

              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {companies &&
              companies.map((ex) => {
                return (
                  <Tr key={ex.id}>
                    <Td>{ex.id}</Td>

                    <Td>{ex.name}</Td>
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
              <DeleteCompany id={deleteId} />
            ) : (
              <EditCompany id={editId} />
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CompanyCrud;
