import React, { useEffect } from "react";
import Liq from "../../assets/images/About/liq.webp";
import Glob from "../../assets/images/About/glob.webp";
import Force from "../../assets/images/About/force.webp";
const Improve = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container mx-auto w-full xl:px-10 px-4 lg:pb-36 pb-20">
        <h2
          className="wp-block-heading aos-init aos-animate lg:text-[52px] text-4xl mb-11 leading-normal"
          data-aos="fade-up"
        >
          <span className="has-inline-color has-orange-color text-[#ff3300]">
            Improving the market
          </span>{" "}
          is a responsibility we don’t take <br /> lightly
        </h2>
        <div className="flex xl:flex-nowrap flex-wrap gap-4">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[460px] w-full"
          >
            <img src={Liq} alt="Image" className="w-10" />
            <h1 className="lg:text-[32px] text-xl text-[#3d4043] mt-5">
              Consistent liquidity
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              Markets need liquidity to function effectively. We trade our own
              capital at our own risk to provide just that.
            </p>
          </div>
          <div className="md:max-w-[460px] w-full">
            <img src={Glob} alt="Image" className="w-10" />
            <h1 className="lg:text-[32px] text-xl text-[#3d4043] mt-5">
              Globally trusted
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              Working with exchanges across the globe, we provide continuous
              prices for thousands of financial instruments.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[460px] w-full"
          >
            <img src={Force} alt="Image" className="w-10" />
            <h1 className="lg:text-[32px] text-xl text-[#3d4043] mt-5">
              A stabilising force
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              No matter the market conditions, we stay the course – even during
              times of volatility.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Improve;
