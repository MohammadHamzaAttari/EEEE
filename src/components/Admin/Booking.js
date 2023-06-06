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
  IconButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import { DeleteUser, GETBooking, GETUSERS } from "../Constant/url";
function Booking(props) {
  const [book, setBook] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");
  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETBooking);
      setBook(request.data);
    }
    fetchData();
  }, []);
  const handleDelete = (e) => {
    setDeleteId(e);
    axios
      .delete(DeleteUser + e, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: jwt,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          // Success!
          toast({
            title: "Successfully",
            description: "User Deleted",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else if (response.status == 401 || response.status == 403) {
          toast({
            title: "UnAuthorized",
            description: "You have no access to upload data",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          // Error!
          toast({
            title: "LoggedIn Error.",
            description: "Record Not Match.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <div>
      <TableContainer>
        <Table
          variant='striped'
          colorScheme='teal'
          size={{ base: "sm", md: "sm", lg: "sm" }}>
          <TableCaption>Booking List</TableCaption>
          <Thead>
            <Tr>
              <Th>UserId</Th>
              <Th>FirstName</Th>
              <Th>Address</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>Country</Th>
              <Th>ModelName</Th>
              <Th>Price</Th>
              <Th>TrimName</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {book &&
              book.map((ex) => {
                return (
                  <Tr>
                    <Td>{ex.userId}</Td>
                    <Td>{ex.firstName}</Td>
                    <Td>{ex.address}</Td>
                    <Td>{ex.city}</Td>
                    <Td>{ex.state}</Td>
                    <Td>{ex.country}</Td>
                    <Td>{ex.modelName}</Td>
                    <Td>{ex.price}</Td>
                    <Td>{ex.trimName}</Td>
                    <Td>{ex.trimPrice}</Td>
                    <Td>
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
    </div>
  );
}
export default Booking;
