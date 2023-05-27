import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
export default function ModelsDetailsCars(props) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:44383/api/Models/${props.data}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data.bodies[0].image);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image
        src={
          result.bodies &&
          result.bodies[0] &&
          `data:image/jpeg;base64,${result.bodies[0].image}`
        }
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
            {result.name} &bull; {result.date} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}>
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
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
  );
}
