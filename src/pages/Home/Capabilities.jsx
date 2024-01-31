import React, { useEffect } from "react";
import W1 from "../../assets/images/kd_symbol1@2x.png";

const People = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const capabilities = [
    {
      key: "01",
      title: "Construction",
      content: `We understand building and 
      construction from real costs and 
      quantities, to site establishment, 
      contract management and 
      handover processes`,
    },
    {
      key: "02",
      title: "Economics",
      content: `We understand how the 
      macroeconomic system works and 
      consider both macroeconomic 
      and microeconomic factors in 
      assessing deals`,
    },
    {
      key: "03",
      title: "Legal",
      content: `We intimately understand financial
      security instruments, mortgages,
      caveats and environmental
      planning legal frameworks`,
    },
    {
      key: "04",
      title: "Alignment",
      content: `The Management team is one of the 
      single largest investor in the Fund 
      and equally invested in every 
      transaction alongside investors`,
    },
    {
      key: "05",
      title: "Diversity",
      content: `We are diverse in age, experience, 
      language and business culture.
      We are Australian, we are competent 
      and we are open-minded`,
    },
    {
      key: "06",
      title: "Experience",
      content: `Our Asset Management team 
      have full of lifecycle Building, 
      Construction, Lending and 
      Developer backgrounds, to give us 
      the edge in dealing`,
    },
    {
      key: "07",
      title: "Experience",
      content: `We are focused on the Sydney real 
      estate market above all else and 
      focus on understanding the market 
      participants ranging from developers, 
      builders and subcontractors`,
    },
    {
      key: "08",
      title: "Ethics",
      content: `Our principles drive our 
      engagement and actions 
      towards both borrowers and 
      investors daily Ethical is very 
      profitable for all parties`,
    },
  ];

  return (
    <div id="key-difference" className="bg-[#EDEDED] relative">
      <img src={W1} alt="w1" className="absolute right-0 bottom-0 w-[200px] md:hidden block" />
      <img src={W1} alt="w1" className="absolute top-0 bottom-0 my-auto right-0 w-[400px]" />
      <img src={W1} alt="w1" className="absolute right-0 top-[-5%] w-[200px] md:hidden block" />
      <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24">
        <div className="flex gap-4 items-center">
          <p className="century lg:text-[46px] text-4xl leading-[70px]  text-[#3d4043] font-normal">
            Key Difference - Capabilities
          </p>
        </div>
        <div className="flex mt-4 gap-4 justify-center xl:flex-nowrap flex-wrap">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className=" w-full"
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-10">
                {capabilities.map((item, key) => (
                  <div
                    className={`text-center ${
                      key === 0 || key === 3 || key === 4 || key === 7
                        ? "bg-[#CBEBF4]"
                        : "bg-[#E2E3E5]"
                    }  relative p-3 rounded`}
                  >
                    <div className="text-3xl flex items-center justify-center top-[-32px] text-white font-bold absolute start-[50%] bg-[#707070] rounded-full translate-x-[-50%] w-[60px] h-[60px]">
                      {`${item.key}`}
                    </div>
                    <div className="text-lg my-4 mt-7 font-bold">
                      {item.title}
                    </div>
                    {/* <div className="text-xs uppercase mt-1 mb-2">2022</div> */}
                    <div className="text-lg">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
