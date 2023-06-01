import React from "react";
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
} from "@chakra-ui/react";
import WithSubnavigation from "./navbar";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
      <Image
        borderRadius='full'
        boxSize='40px'
        src='https://100k-faces.glitch.me/random-image'
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight='medium'>{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ModelsDetails = () => {
  const image = localStorage.getItem("modelImageForDetails");
  return (
    <Container maxW={"7xl"} p='12'>
      <Heading as='h1'>Select Body And Trim</Heading>
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
          <BlogTags tags={["Engineering", "Product"]} />
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
              Blog article title
            </Link>
          </Heading>
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize='lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <BlogAuthor name='John Doe' date={new Date("2021-04-06T19:01:27Z")} />
        </Box>
      </Box>
      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}>
        <a
          href='https://secure.2checkout.com/order/checkout.php?PRODS=40863354&QTY=1&CART=1&CARD=2'
          class='avangate_button'
          product-code='WL6EEUFCY6'
          product-quantity='1'>
          Buy now!
        </a>
      </Button>
      <Divider marginTop='5' />
    </Container>
  );
};

export default ModelsDetails;
