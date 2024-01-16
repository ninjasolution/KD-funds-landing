import React from "react";
import NewsHero from "./NewsHero";
import NewsMarket from "./NewsMarket";
import Insights from "../Home/Insights";
import AllNews from "./AllNews";
const NewsMain = () => {
  return (
    <>
      <NewsHero />
      <NewsMarket />
      <Insights
        insightbg="bg-[#512b00f5]"
        insightpara1="hidden"
        insightpara="Regulation"
        insightparadisplay="text-white"
        insightmain="NEWS"
        insightmaindisplay="text-white"
        insightline="bg-white"
        insightbtn="hidden"
      />
      <div className="md:py-36 py-20">
        <NewsMarket />
      </div>
      <Insights
        insightbg="bg-[#512b00f5]"
        insightpara1="text-white"
        insightpara="Explainers"
        insightparadisplay="text-white"
        insightmain="NEWS"
        insightmaindisplay="text-white"
        insightline="bg-white"
        insightbtn="hidden"
      />
      <AllNews />
    </>
  );
};

export default NewsMain;
