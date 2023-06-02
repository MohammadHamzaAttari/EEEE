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

function BodyCard(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [props]);
  return (
    <div>
      {isLoading ? (
        <Spinner size={"xl"} color='red.500' />
      ) : (
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
              <Heading size='md'>{props.name}</Heading>

              <Text color='red.400' fontSize='2xl'>
                $ {props.price}
              </Text>
            </Stack>
          </CardBody>
          <Center>
            <CardFooter padding={2}>
              <Button bgColor='red.300'>See Details</Button>
            </CardFooter>
          </Center>
        </Card>
      )}
    </div>
  );
}

export default BodyCard;
