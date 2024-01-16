import React, { useEffect } from "react";
import D1 from "../../assets/images/About/d1.webp";
import D2 from "../../assets/images/About/d2.webp";
import D3 from "../../assets/images/About/3.webp";
import D4 from "../../assets/images/About/d4.webp";
const Driven = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#F0F6FC]">
        <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[520px] w-full mx-auto"
          >
            <div className="flex gap-4 items-center justify-center">
              <p className="roboto-mono text-xs text-[#3d4043] font-normal">
                OUR PEOPLE
              </p>
              <div className="w-20 h-[1px] bg-[#3d4043]"></div>
            </div>
            <h1 className="text-center lg:text-[56px] text-4xl text-[#3d4043] mt-6 mb-10 leading-[60px]">
              Driven by <br /> technology, powered <br /> by people
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] century leading-[50px] text-center">
              At SBS, we seek individuals who thrive at the intersection of
              IQ and EQ. Our people are not just academic stars – they’re also
              self-aware and open to feedback.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex lg:gap-10 gap-5 lg:justify-between justify-center xl:flex-nowrap flex-wrap mt-10 items-end"
          >
            <div className="md:max-w-[460px] w-full">
              <img src={D1} alt="Image" />
            </div>
            <div className="md:max-w-[460px] w-full">
              <img src={D1} alt="Image" className="h-full" />
            </div>
            <div className="md:max-w-[460px] w-full flex flex-col gap-5">
              <img src={D3} alt="Image" className="h-[315px]" />
              <img src={D4} alt="Image" className="h-[315px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Driven;
