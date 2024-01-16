import React, { useEffect } from "react";
import Auss from "../../assets/images/Land/land1.svg";
const Aus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24">
        <div className="flex gap-4 justify-center xl:flex-nowrap flex-wrap">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <div className="flex gap-4 items-center">
              <p className="roboto-mono text-xs text-[#3d4043] font-normal">
                OUR AREAS OF FOCUS
              </p>
              <div className="w-20 h-[1px] bg-[#3d4043]"></div>
            </div>
            <h1 className="century text-[#3d4043] lg:text-[56px] text-4xl leading-[70px]">
              Australia’s Property <br /> Landscape
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] my-8 font-light lg:leading-[50px]">
              Stable economic, political environment with good real estate
              liquidity
            </p>
            <p className="lg:text-xl text-base text-[#3d4043] lg:leading-[50px] font-light">
              The value of{" "}
              <span className="text-[#ff3000]">
                Australian housing sits at $7.4 trillion
              </span>{" "}
              and continues to be the backbone to our national economy over
              commercial, stocks and superannuation Australia still needs to
              <span className="text-[#ff3000]">
                construct 250,000 homes per year
              </span>{" "}
              to meet future needs National approvals for{" "}
              <span className="text-[#ff3000]">new dwellings</span> are running
              at <span className="text-[#ff3000]"> 200,000 per year</span> and
              that is after a recent uplift in approvals Sydney and Melbourne
              equate for{" "}
              <span className="text-[#ff3000]">58.3% of the national</span>{" "}
              value in property
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <img src={Auss} alt="Image" className="w-full rounded-[2rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aus;
