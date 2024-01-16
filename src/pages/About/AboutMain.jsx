import React from "react";
import Mission from "./Mission";
import Making from "./Making";
import Improve from "./Improve";
import Clock from "../Home/Clock";
import Journey from "../Home/Journey";
import Driven from "./Driven";
import Culture from "./Culture";
import History from "./History";
const AboutMain = () => {
  return (
    <>
      <Mission />
      <Making />
      <Improve />
      <History/>
      <Driven />
      <Culture/>
      <Journey />
      <Clock />
    </>
  );
};

export default AboutMain;
