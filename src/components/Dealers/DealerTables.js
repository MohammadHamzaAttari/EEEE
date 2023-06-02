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
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import BodyCard from "./BodyCard";
import { GETBodies, GETModels, GETTrims } from "../Constant/url";
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import BodyDelete from "./BodyDelete";
import BodyEdit from "./BodyEdit";
import TrimEdit from "./TrimEdit";
import TrimDelete from "./TrimDelete";
import BodyCrud from "./BodyCrud";

function DealerTables(props) {
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
      <Accordion defaultIndex={[0]} allowMultiple bg='blackAlpha.200'>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "red.400", color: "white" }}>
              <Box as='span' flex='1' textAlign='left'>
                Management
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion defaultIndex={[0]} allowMultiple bg='blackAlpha.200'>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "red.400", color: "white" }}>
                    <Box as='span' flex='1' textAlign='left'>
                      Manage Models
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table variant='striped' colorScheme='white'>
                      <Thead>
                        <Tr>
                          <Th>ModelID</Th>
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
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "red.400", color: "white" }}>
                    <Box as='span' flex='1' textAlign='left'>
                      Manage Bodies
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <BodyCrud />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "red.400", color: "white" }}>
                    <Box as='span' flex='1' textAlign='left'>
                      Manage Trims
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table variant='striped' colorScheme='white'>
                      <TableCaption placement='top' fontSize={"lg"}>
                        Trims with Name and Price
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
                        {trims &&
                          trims.map((ex) => {
                            return (
                              <Tr key={ex.id}>
                                <Td>{ex.modelId}</Td>
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
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
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
