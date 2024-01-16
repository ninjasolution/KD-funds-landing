import React from "react";
import Hero from "./Hero";
import SBS from "./Optiver";
import Domains from "./Domains";
import Capabilities from "./Capabilities";
import Experience from "./Experience";
import Landscape from "./Landscape";
import News from "./News";
import Insights from "./Insights";
import Journey from "./Journey";
import Clock from "./Clock";
import Alignment from "./Alignment";
import Fluid from "./Fluid";
import Onb from "../Loan/Onb";
const Main = () => {
  return (
    <>
      <Hero />
      <SBS />
      <Onb/>
      {/* <News /> */}
      <Fluid/>
      <Domains />
      <Capabilities />
      {/* <Landscape /> */}
      <Experience />
      <Insights
      insightbg="bg-[#EDEDED]"
      insightpara="Latest Insights"
      insightparadisplay="text-[#3d4043]"
      insightmain="INSIGHTS"
      insightmaindisplay="text-[#3d4043]"
      insightline="bg-[#3d4043]"
      />
      <Journey />
      <Clock />
    </>
  );
};

export default Main;
