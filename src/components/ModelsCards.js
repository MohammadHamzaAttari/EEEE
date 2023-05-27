import React from "react";

import CardFun from "./Card";
export default function ModelsCards(props) {
  console.log(props.data && props.data.models);
  return (
    <>
      {props.data &&
        props.data.models.map((ex) => {
          return <CardFun name={ex.id} price={ex.price} image={props.image} />;
        })}
    </>
  );
}
