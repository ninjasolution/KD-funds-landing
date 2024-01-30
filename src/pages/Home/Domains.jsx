import React, { useEffect, useState } from "react";
import FLogo from "../../assets/icons/logo.svg";

const Domains = () => {
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const capabilities = [
    {
      key: "01",
      title: "Bridging",
      content: `Full Case Studies are available on Request`
    },
    {
      key: "02",
      title: "Acquisition",
      content: `We understand how the 
      macroeconomic system works and 
      consider both macroeconomic 
      and microeconomic factors in 
      assessing deals`
    },
    {
      key: "03",
      title: "Restructuring & Disputes",
      content: `We intimately understand financial
      security instruments, mortgages,
      caveats and environmental
      planning legal frameworks`
    },
    {
      key: "04",
      title: "Early or Partial Works ",
      content: `The Fund Manager is one of the 
      single largest investor in the Fund 
      and equally invested in every 
      transaction alongside investors`
    },
    {
      key: "05",
      title: "Full Construction",
      content: `We are diverse in age, experience, 
      language and business culture.
      We are Australian, we are competent 
      and we are open-minded`
    },
    {
      key: "06",
      title: "Cost Over-runs",
      content: `Our Asset Management team 
      have full of lifecycle Building, 
      Construction, Lending and 
      Developer backgrounds, to give us 
      the edge in dealing`
    },
    {
      key: "07",
      title: "Builder Insolvencies",
      content: `We are focused on the Sydney real 
      estate market above all else and 
      focus on understanding the market 
      participants ranging from developers, 
      builders and subcontractors`
    },
    {
      key: "08",
      title: "Equity Cash-out",
      content: `Our principles drive our 
      engagement and actions 
      towards both borrowers and 
      investors daily Ethical is very 
      profitable for all parties`
    },
  ]

  return (
    <>
      <div id="studies" className="bg-[#5d5d5d]">
        <div className="container mx-auto xl:px-10 px-4 w-full lg:py-36 py-24">
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex gap-4 justify-center xl:flex-nowrap flex-wrap"
          >
            <div className="md:max-w-[710px] w-full">
              <div className="flex gap-4 items-center">
                <p className="roboto-mono text-xs text-white">Capabilities</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              <h1 className="century text-white lg:text-[46px] text-4xl leading-[70px] mt-4">
              Case Studies & Solutions
              </h1>
              {
                capabilities.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => setVisibility(key)}
                    className={`pl-5 mt-2 cursor-pointer ${visibility == key
                      ? "border-l-2 border-[#e53b16]"
                      : "border-l-2 border-white"
                      }`}
                  >
                    <p className="roboto-mono text-[18px] pt-1 text-white">
                      {item.key}
                    </p>
                    <p className="text-[22px] text-white mt-1 font-light">
                      {item.title}
                    </p>
                  </div>
                ))
              }
            </div>

            {
              capabilities.map((item, key) => (
                <div
                  key={key}
                  className={`md:max-w-[710px] w-full ${visibility == key ? "" : "hidden"
                    }`}
                >
                  {/* <img src={FLogo} alt="Image" className="w-full" /> */}
                  <div className="flex gap-4 items-center mt-10">
                    <p className="roboto-mono text-xs text-white">
                      {item.title}
                    </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                  <p className="text-xl text-white font-light my-4">
                    {
                      item.content
                    }
                  </p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Domains;
