import React, { useEffect } from "react";
import Mis from "../../assets/images/Home/sbs-1.mp4";
const Mission = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container mx-auto w-full xl:px-10 px-4 lg:pt-72 lg:pb-36 pt-24 pb-24">
        <div className="flex gap-4 lg:justify-between justify-center xl:flex-nowrap flex-wrap">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <h1 className="century text-[#3d4043] lg:text-[76px] text-4xl md:leading-[90px]">
              Our mission:
              <span className="text-[#F1870F]">
                {" "}
                Commercial and Wholesale Lending Solutions{" "}
              </span>{" "}
            </h1>
            <p className="text-xl text-[#3d4043] mt-10 font-light mb-8">
              As a leading proprietary trading firm, SBS works to make
              markets more efficient, transparent and stable for all. We have
              over 1,600 employees in offices around the world, united in their
              commitment to providing liquidity, competitive pricing and
              reliable risk management.
            </p>
            <a className="btn btn-explore">Explore</a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[550px] w-full"
          >
            <figure className="w-full">
              <video
                className="w-full object-cover"
                autoPlay
                loop
                muted
                preload="auto"
                src={Mis}
                playsInline
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
