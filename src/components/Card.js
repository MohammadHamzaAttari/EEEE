import {
  Card,
  Box,
  Badge,
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
import { StarIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function CardFun(props) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [props]);
  const handleClick = () => {
    localStorage.removeItem("modelIdForDetails");
    localStorage.removeItem("modelImageForDetails");
    localStorage.removeItem("modelprice");
    localStorage.removeItem("modelname");
    localStorage.setItem("modelIdForDetails", props.id);
    localStorage.setItem("modelname", props.name);
    localStorage.setItem("modelImageForDetails", props.image);
    localStorage.setItem("modelprice", props.price);
    navigate("/models/Details");
  };

  return (
    <>
      {isLoading ? (
        <Spinner size={"xl"} color='red.500' />
      ) : (
        <Box
          maxW='sm'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          onClick={handleClick}>
          <Image
            src={`data:image/jpeg;base64,${props.image}`}
            alt={property.imageAlt}
          />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'>
                {property.beds} seats &bull; {property.baths} fronts
              </Box>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              color={"red.400"}
              lineHeight='tight'
              noOfLines={1}>
              {props.name}
            </Box>

            <Box>
              {props.price}
              <Box as='span' color='gray.600' fontSize='sm'>
                / dollars
              </Box>
            </Box>

            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default CardFun;
