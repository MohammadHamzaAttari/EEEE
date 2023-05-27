import React, { useState, useEffect } from "react";
import axios from "axios";
import ModelsSideBar from "./ModelsSidebar";
import ModelsCards from "./ModelsCards";
import { Flex } from "@chakra-ui/react";
function Modelshero(props) {
  const data = props.fetch;
  const [result, setResult] = useState();
  const [company, setCompany] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `http://localhost:5200/api/Companies/${data}`
      );
      setCompany(request.data);
      setResult(request.data.name);
    }
    fetchData();
  }, []);
  console.log(result);
  return (
    <Flex>
      <ModelsSideBar data={result} />
      <ModelsCards data={company} />
    </Flex>
  );
}

export default Modelshero;
