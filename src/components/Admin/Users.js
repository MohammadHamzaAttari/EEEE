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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import { DeleteUser, GETUSERS } from "../Constant/url";
function Users(props) {
  const [user, setUser] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");
  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETUSERS);
      setUser(request.data);
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
          size={{ base: "sm", md: "lg", lg: "lg" }}>
          <TableCaption>Register Users Lists</TableCaption>
          <Thead>
            <Tr>
              <Th>UserId</Th>
              <Th>FirstName</Th>
              <Th>LastName</Th>
              <Th>Email</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {user &&
              user.map((ex) => {
                return (
                  <Tr>
                    <Td>{ex.id}</Td>
                    <Td>{ex.firstName}</Td>
                    <Td>{ex.lastName}</Td>
                    <Td>{ex.email}</Td>
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
          <Tfoot>
            <Tr>
              <Th>UserId</Th>
              <Th>FirstName</Th>
              <Th>LastName</Th>
              <Th>Email</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Users;
