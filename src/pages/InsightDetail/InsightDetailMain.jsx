import React, { useEffect } from "react";
import Detail from "./Detail";
import Insights from "../Home/Insights";
const InsightDetailMain = () => {
  return (
    <>
      <Detail />
      <Insights
        insightpara1="hidden"
        insightbtn="hidden"
        insightbg="bg-[#EDEDED]"
        insightpara="Related Articles"
        insightparadisplay="text-[#3d4043]"
        insightmain="INSIGHTS"
        insightmaindisplay="text-[#3d4043]"
        insightline="bg-[#3d4043]"
      />
    </>
  );
};

export default InsightDetailMain;
