import React, { useState, useEffect } from "react";
import axios from "axios";

import { Flex } from "@chakra-ui/react";
import DealerSidebar from "./DealerSideBar";
import DealerContent from "./DealerContent";
import { GETAll } from "../Constant/url";
function DealerDreawer(props) {
  const data = props.fetch;
  const [result, setResult] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETAll);
      setCompany(request.data);

      setResult(request.data.name);
    }
    fetchData();
  }, []);
  console.log(company && company);
  return (
    <Flex>
      <DealerSidebar data={result} />
      <DealerContent data={company} />
    </Flex>
  );
}

export default DealerDreawer;
