import React, { useState } from "react";
export default function FileUpoad() {
  const [company, setCompany] = useState([]);
  function fetchSearchHandler() {
    fetch("https://localhost:44383/api/Companies/search")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setCompany(data);
      });
  }
  return <></>;
}
