import React, { useState, useEffect } from "react";
import Compass from "../../assets/images/Home/SBS_COMPASS.svg";

const Experience = () => {
  const marqueeData = [
    {
      id: 1,
      category: "E",
      type: "FX",
      description: "Bondi",
    },
    {
      id: 2,
      category: "E",
      type: "FX",
      description: "North Bondi",
    },
    {
      id: 3,
      category: "E",
      type: "FX",
      description: "Bellevue Hill",
    },
    {
      id: 4,
      category: "E",
      type: "FX",
      description: "Potts Point",
    },
    {
      id: 5,
      category: "E",
      type: "FX",
      description: "Vaucluse",
    },
    {
      id: 6,
      category: "E",
      type: "FX",
      description: "Tamarama",
    },
    // Add more data objects as needed
  ];
  const marqueeData1 = [
    {
      id: 1,
      category: "N",
      type: "COMMODITIES",
      description: "Pymble",
    },
    {
      id: 2,
      category: "N",
      type: "COMMODITIES",
      description: "Neutral Bay",
    },
    {
      id: 3,
      category: "N",
      type: "COMMODITIES",
      description: "Cammeray",
    },
    {
      id: 4,
      category: "N",
      type: "COMMODITIES",
      description: "Greenwich",
    },
    {
      id: 5,
      category: "N",
      type: "COMMODITIES",
      description: "Narrabeen",
    },
    {
      id: 6,
      category: "N",
      type: "COMMODITIES",
      description: "Cromer",
    },
    {
      id: 7,
      category: "N",
      type: "COMMODITIES",
      description: "Cromer",
    },
    {
      id: 8,
      category: "N",
      type: "COMMODITIES",
      description: "Palm Beach",
    },
    // Add more data objects as needed
  ];
  const marqueeData2 = [
    {
      id: 1,
      category: "W",
      type: "EQUITIES",
      description: "Strathfield",
    },
    {
      id: 2,
      category: "W",
      type: "EQUITIES",
      description: "Hurstville",
    },
    {
      id: 3,
      category: "W",
      type: "EQUITIES",
      description: "Wetherill Park",
    },
    {
      id: 4,
      category: "W",
      type: "EQUITIES",
      description: "Prairiewood",
    },
    {
      id: 5,
      category: "W",
      type: "EQUITIES",
      description: "Austral",
    },
    {
      id: 6,
      category: "W",
      type: "EQUITIES",
      description: "Leppington",
    },
    // Add more data objects as needed
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#512b00f5] lg:py-36 py-24">
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="container mx-auto xl:px-10 px-4 w-full"
        >
          <div className="flex gap-4 items-center mt-4">
            <p className="roboto-mono text-xs text-white">LOCATIONS</p>
            <div className="w-20 h-[1px] bg-white"></div>
          </div>
          <div className="flex w-full justify-between">
            <p className="lg:text-[34px] text-2xl text-white mt-4 mb-8 font-light century leading-[50px] md:max-w-[800px] w-full">
              We provide finance to a range of supply & demand balanced suburbs
              throughout Sydney and are active across all density and class
              types. Location is key.
            </p>
            <div className="items-center justify-end">
              <img
                src={Compass}
                width={200}
                alt="Compass"
                className="w-25 h-auto"
              />
            </div>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <defs>
                <symbol id="arrow" viewBox="0 0 100 100">
                  <path d="M12.5 45.83h64.58v8.33H12.5z" />
                  <path d="M59.17 77.92l-5.84-5.84L75.43 50l-22.1-22.08 5.84-5.84L87.07 50z" />
                </symbol>
              </defs>
            </svg>
            <a href="#" className="btn_new_24">
              Learn more
              <span>
                <svg>
                  <use xlink:href="#arrow" href="#arrow"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="marquee mt-10"
        >
          {marqueeData.map((item) => (
            <div key={item.id} className="marquee__item">
              <div className="w-[320px] h-[79px] flex gap-2 rounded c-s px-4 items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-[#C8C8C8] text-[.8rem]">
                  {item.category}
                </div>
                <div>
                  {/* <p className="text-sm roboto-mono text-white">{item.type}</p> */}
                  <p className="text-base text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="marquee1 my-8"
        >
          {marqueeData1.map((item) => (
            <div key={item.id} className="marquee__item1">
              <div className="w-[320px] h-[79px] flex gap-2 rounded c-s px-4 items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-[#55889B] text-[.8rem]">
                  {item.category}
                </div>
                <div>
                  {/* <p className="text-sm roboto-mono text-white">{item.type}</p> */}
                  <p className="text-base text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="marquee2"
        >
          {marqueeData2.map((item) => (
            <div key={item.id} className="marquee__item2">
              <div className="w-[320px] h-[79px] flex gap-2 rounded c-s px-4 items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-[#94ADBF] text-[.8rem]">
                  {item.category}
                </div>
                <div>
                  {/* <p className="text-sm roboto-mono text-white">{item.type}</p> */}
                  <p className="text-base text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
