import React from "react";
import NDetail from "./NDetail";
import Insights from "../Home/Insights";
const NewsDetailMain = () => {
  return (
    <>
      <NDetail />
      <Insights
        insightpara1="hidden"
        insightbtn="hidden"
        insightbg="bg-[#EDEDED]"
        insightpara="Related Articles"
        insightparadisplay="text-[#3d4043]"
        insightmain="NEWS"
        insightmaindisplay="text-[#3d4043]"
        insightline="bg-[#3d4043]"
      />
    </>
  );
};

export default NewsDetailMain;
