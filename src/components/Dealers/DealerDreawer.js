import React, { useState, useEffect } from "react";
import axios from "axios";

import { Flex } from "@chakra-ui/react";
import DealerSidebar from "./DealerSideBar";
import DealerContent from "./DealerContent";
import { GETAll } from "../Constant/url";
function DealerDreawer() {
  const [result, setResult] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETAll);
      setCompany(request.data);

      setResult(request.data);
    }
    fetchData();
  }, []);
  console.log(result && result);
  return (
    <Flex>
      <DealerSidebar data={result} />
      <DealerContent data={company} />
    </Flex>
  );
}

export default DealerDreawer;
