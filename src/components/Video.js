import React from "react";
import ReactPlayer from "react-player";

const Player = () => {
  return (
    <ReactPlayer url='../images/hero.mp4' width='100%' height='100%' controls />
  );
};

export default Player;
