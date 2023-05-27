import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function RegisterAdmin() {
  const { isLoading, setIsLoading } = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let store = {
      FirstName: firstName,
      LastName: lastName,
      Password: password,
      Email: email,
      PhoneNumber: phoneNumber,
    };
    fetch("http://localhost:5200/api/Account/registerAdmin", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(store),
    })
      .then((response) => {
        if (response.status === 200) {
          // Success!
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/registerAdmin/loginAdmin");
        } else {
          // Error!
          toast({
            title: "Account not created.",
            description: "We can not created your account for you.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Admin
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to see all project
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <form>
              <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type='text'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type='text'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`form-control ${!validEmail ? "is-invalid" : ""}`}
                />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id='phone' isRequired>
                <FormLabel>PhoneNumber</FormLabel>
                <Input
                  type='phone'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                  isLoading={isLoading}>
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to={"/registerAdmin/loginAdmin"} color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
