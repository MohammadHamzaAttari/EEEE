import React, { useEffect } from "react";
import axios from "axios";
import {
  SimpleGrid,
  Stat,
  Flex,
  Box,
  chakra,
  StatLabel,
  useColorModeValue,
  StatNumber,
} from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";
import { GETCompanies } from "./Constant/url";
function Companies(props) {
  const [company, setCompany] = React.useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETCompanies);
      setCompany(request.data);
    }
    fetchData();
  }, []);
  return (
    <Box
      maxW='7xl'
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      my={{ base: "auto", md: 70, lg: 90 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}>
        List of Companies, Contract Signed
      </chakra.h1>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {company &&
          company.map((ex) => {
            return (
              <StatsCard
                key={ex.id}
                title={ex.name}
                stat={"5,000"}
                icon={<AiFillCar size={"3em"} />}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
}
function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default Companies;
