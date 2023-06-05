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
  SimpleGrid,
  Center,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UpdateModels } from "../Constant/url";
function BodyCard(props) {
  useEffect(() => {}, [props]);
  return (
    <div>
      <Card maxW='sm' maxH={"md"} m={"4px"} mt={"10px"}>
        <CardHeader padding={0}>
          <Image
            src={`data:image/jpeg;base64,${props.image}`}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
        </CardHeader>
        <CardBody>
          <Stack mt='2' spacing='3'>
            <Heading size='md'>Type : {props.name}</Heading>
          </Stack>
        </CardBody>
        <Center></Center>
      </Card>
    </div>
  );
}

export default BodyCard;
