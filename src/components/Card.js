import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Button,
  Heading,
  Divider,
} from "@chakra-ui/react";
import React from "react";

function CardFun(props) {
  return (
    <Card maxW='sm' maxH={"md"} m={"4px"} mt={"10px"}>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {props.price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardFun;
