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
  Link,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const initialFieldValues = {
  id: "1",
  firstName: "",
  lastName: "",
  role: "",
  companyName: "",
  email: "",
  password: "",
  phoneNumber: "",
  image: "",
  city: "",
  zipCode: "",
  imageName: "",
  imageSrc: "https://bit.ly/dan-abramov",
  imageFile: null,
};

export default function DealersSignUp(props) {
  const { AddorEdit } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const [name, value] = e.target;
    setValues({
      ...value,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...value,
          imageFile: imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...value,
        imageFile: null,
        imageSrc: "https://bit.ly/dan-abramov",
      });
    }
  };

  const resetForm = (e) => {
    setValues(initialFieldValues);
    document.getElementById("imageUploader").value = null;
  };

  const handleFormSubmit = (e) => {
    e.preventDefualt();
    const formData = new FormData();
    formData.append("id", value.id);
    formData.append("firstName", value.firstName);
    formData.append("lastName", value.lastName);
    formData.append("role", value.role);
    formData.append("email", value.email);
    formData.append("password", value.password);
    formData.append("phoneNumber", value.phoneNumber);
    formData.append("imageName", value.imageName);
    formData.append("imageFile", value.imageFile);
    AddorEdit(formData, resetForm);
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
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleFormSubmit}>
              <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type='text'
                      name='firstName'
                      value={value.firstName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' name='lastName' value={value.lastName} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id='role' isRequired>
                <FormLabel>Position in Company</FormLabel>
                <Input type='text' name='role' value={value.role} />
              </FormControl>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input type='email' value={value.email} />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={value.password}
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
              <FormControl id='image'>
                <Image
                  borderRadius='full'
                  boxSize='150px'
                  src={value.imageSrc}
                  alt='Dan Abramov'
                />
                <FormLabel>Image</FormLabel>
                <Input
                  type='file'
                  value={value.image}
                  id='imageUploader'
                  accept='image/*'
                  onChange={showPreview}
                />
              </FormControl>
              <FormControl id='email'>
                <FormLabel>City</FormLabel>
                <Input type='text' value={value.city} />
              </FormControl>
              <FormControl id='email'>
                <FormLabel>ZipCode</FormLabel>
                <Input type='number' value={value.zipCode} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
