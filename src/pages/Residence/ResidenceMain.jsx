import React from "react";
import ResidenceHero from "./ResidenceHero";
import Residence1 from "./Residence1";
import Capabilities from "../Home/Capabilities";
import Related from "./Related"
const ResidenceMain = () => {
  return (
    <>
      <ResidenceHero />
      <Residence1 />
      <Capabilities />
      <Related/>
    </>
  );
};

export default ResidenceMain;
