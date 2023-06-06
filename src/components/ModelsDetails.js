import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  SimpleGrid,
  Td,
  TableCaption,
  TableContainer,
  Highlight,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";
import WithSubnavigation from "./navbar";
import BodyCard from "./Dealers/BodyCard";
import axios from "axios";
import { GETAll, UpdateModels } from "./Constant/url";
import PriceTable from "./PriceTable";
const ModelsDetails = () => {
  const toast = useToast();
  const image = localStorage.getItem("modelImageForDetails");
  const modelName = localStorage.getItem("modelname");
  const modelId = localStorage.getItem("modelIdForDetails");
  const modelPrice = localStorage.getItem("modelprice");
  const [selectValue, selectedValue] = React.useState("");
  const [selectBodyImage, setSelectBodyImage] = React.useState("");
  const [selectBodyName, setSelectBodyName] = React.useState("");
  const [selectTrim, selectedTrim] = React.useState("");
  const [trimName, setTrimName] = React.useState("");
  const [models, setModels] = React.useState("");
  const [trimPrice, setTrimPrice] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(UpdateModels + modelId);
      setModels(request.data);
    }
    fetchData();
  }, []);

  const handleSelect = (e) => {
    const value = e.target.value;
    const num = parseInt(value);
    const bodies = models.bodies && models.bodies.find((e) => e.id === num);
    localStorage.setItem("selectBodyName", bodies.name);
    localStorage.setItem("selectBodyImage", bodies.image);
    selectedValue(num);
    console.log(bodies.name);
  };
  const handleSelectTrim = (e) => {
    const value = e.target.value;
    const num = parseInt(value);
    const trim = models.trims && models.trims.find((e) => e.id === num);
    setTrimPrice(trim.price);
    setTrimName(trim.name);
    selectedTrim(num);
    localStorage.removeItem("selectTrimPrice");
    localStorage.setItem("selectTrimPrice", trim.price);
    localStorage.removeItem("selectTrimName");
    localStorage.setItem("selectTrimName", trim.name);
  };
  const handleBtnClick = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt == null) {
      toast({
        title: "Account",
        description: "Please Create Account",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      navigate("/models/Details/creditCard");
    }
  };
  return (
    <Container maxW={"7xl"} p='12'>
      <Heading as='h1'>{modelName}</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display='flex'
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent='space-between'>
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'>
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex='2'
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop='5%'>
            <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius='lg'
                src={`data:image/jpeg;base64,${image}`}
                alt='some good alt text'
                objectFit='contain'
              />
            </Link>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: "3", sm: "0" }}>
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
              Overview
            </Link>
          </Heading>
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize='lg'>
            One of the most popular cars in the Pakistan, the {modelName}{" "}
            delivers economy, reliability, comfort, and safety among its many
            virtues. But the "secret sauce" that separates it from most other
            compact cars is that it provides more driving enjoyment than basic
            low-cost transportation. That fun-to-drive character is exemplified
            this year by a new Type R variant. The good news, though, is you
            don't have to buy the Type R to get a high level of entertainment.
            One reason the Civic is fun to drive is its compact size. Both the
            sedan and hatchback models have reasonably small footprints, but
            also deliver a lot of interior space. The current-generation Civic
            sedan is exactly the same height and less than 2 inches longer than
            the previous generation.
          </Text>
        </Box>
      </Box>
      <Heading as='h1' pt='12' pb='12'>
        Available Types
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={10}>
        {models.bodies &&
          models.bodies.map((ex) => {
            return (
              <Card>
                <CardHeader p={0} h={"80%"}>
                  <Image src={`data:image/jpeg;Base64,${ex.image}`} />
                </CardHeader>
                <CardFooter h={"20%"}>{ex.name}</CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
      <Heading as='h1' pt='12' pb='12'>
        Select Body or Type
      </Heading>
      <Select
        placeholder='Select option'
        name='body'
        value={selectValue}
        onChange={handleSelect}>
        {models &&
          models.bodies &&
          models.bodies.map((ex) => {
            return (
              <option key={ex.id} value={ex.id}>
                {ex.name}
              </option>
            );
          })}
      </Select>
      <Heading as='h1' pt='12' pb='12'>
        Select Trim
      </Heading>
      <Select
        placeholder='Select option'
        name='body'
        value={selectTrim}
        onChange={handleSelectTrim}>
        {models &&
          models.trims &&
          models.trims.map((ex) => {
            return (
              <option key={ex.id} value={ex.id}>
                {ex.name}
              </option>
            );
          })}
      </Select>
      <Heading as='h1' pt='12' pb='12'>
        Estimated Price
      </Heading>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption color='red.500' fontWeight={"bold"}>
            Price Calculation By ADS
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Model</Th>
              <Th>Price</Th>
              <Th>Trim</Th>
              <Th>Price</Th>
              <Th isNumeric>Sum</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{modelName}</Td>
              <Td>{modelPrice}</Td>
              <Td>{trimName}</Td>
              <Td>{trimPrice}</Td>
              <Td isNumeric>{parseInt(trimPrice) + parseInt(modelPrice)}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Model</Th>
              <Th>Price</Th>
              <Th>Trim</Th>
              <Th>Price</Th>
              <Th isNumeric>GrandTotal*(excludedTax)</Th>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>

              <Td color='green.500' fontWeight={"bold"}>
                Dealer Discount 500
              </Td>

              <Td isNumeric color={"green.500"} fontWeight={"bold"}>
                {parseInt(trimPrice) + parseInt(modelPrice) - 500}
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        onClick={handleBtnClick}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}>
        Book now!
      </Button>
      <Divider marginTop='5' />
    </Container>
  );
};

export default ModelsDetails;
