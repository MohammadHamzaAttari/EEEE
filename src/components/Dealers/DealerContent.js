import React from "react";
import { SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import CardFun from "../Card";
export default function DealerContent(props) {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={4}>
        {props.data &&
          props.data.models &&
          props.data.models.map((ex) => {
            return (
              <CardFun
                key={ex.id}
                name={ex.name}
                price={ex.price}
                image={ex.image}
                id={ex.id}
              />
            );
          })}
      </SimpleGrid>
    </>
  );
}
