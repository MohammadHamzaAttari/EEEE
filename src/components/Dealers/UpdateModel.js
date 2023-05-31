import React from "react";
import { UpdateModels } from "../Constant/url";

function Upload(props) {
  const jwt = localStorage.getItem("jwt");
  const handleClick = () => {
    fetch(UpdateModels + props.id).then((res) => console.log(res));
  };
  return <div></div>;
}

export default Upload;
