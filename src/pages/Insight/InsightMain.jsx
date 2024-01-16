import React from "react";
import Insight from "./InsightHero";
import Market from "./Market";
import Insights from "../Home/Insights";
import Allinsight from "./Allinsight";
const InsightMain = () => {
  return (
    <>
      <Insight />
      <Market />
      <Insights
        insightbg="bg-[#512b00f5]"
        insightpara1="hidden"
        insightpara="Regulation"
        insightparadisplay="text-white"
        insightmain="LATEST"
        insightmaindisplay="text-white"
        insightline="bg-white"
        insightbtn="hidden"
      />
      <div className="md:py-36 py-20">
        <Market />
      </div>
      <Insights
        insightbg="bg-[#512b00f5]"
        insightpara1="text-white"
        insightpara="Explainers"
        insightparadisplay="text-white"
        insightmain="LATEST"
        insightmaindisplay="text-white"
        insightline="bg-white"
        insightbtn="hidden"
      />
      <Allinsight />
    </>
  );
};

export default InsightMain;
