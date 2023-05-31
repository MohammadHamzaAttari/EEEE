import React from "react";
import { AspectRatio } from "@chakra-ui/react";

export default function AspectRatiofun() {
  return (
    <AspectRatio maxW='full' ratio={1} h='full'>
      <iframe title='naruto' src='../../images/hero.mp4' allowFullScreen />
    </AspectRatio>
  );
}
