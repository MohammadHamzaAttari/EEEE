import React from "react";
import { SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import CardFun from "../Card";
import DealerCard from "./DealerCard";
export default function DealerContent(props) {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={4}>
        {props.data &&
          props.data.map((ex) => {
            return (
              <DealerCard key={ex.id} name={ex.name} modelObj={ex.models} />
            );
          })}
      </SimpleGrid>
    </>
  );
}
