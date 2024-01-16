import React, { useEffect } from "react";
import Land from "../../assets/images/Home/5th.jpeg";
const Landscape = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="container mx-auto w-full lg:py-36 py-24 xl:px-10 px-4 relative flex justify-start items-center h-full"
      >
        <img
          src={Land}
          alt="Image"
          className="lands absolute -z-10 top-0 h-full object-cover"
        />
        <div className="lands bg-black bg-opacity-30 h-full absolute -z-10 top-0"></div>
        <div className="relative z-20 h-full">
          <div className="lg:px-20 lg:py-20 px-4 py-10 h-full">
            <div className="flex gap-4 items-center mt-4">
              <p className="roboto-mono text-xs text-white">OUR FOUNDATION</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>
            <p className="lg:text-[34px] text-2xl text-white mt-4 mb-8 font-light century leading-[50px]">
              We created the Landscape to support meaningful, sustainable <br />{" "}
              change on a global scale.
            </p>
            <div>
              <div className="wp-block-buttons">
                <a className="btn btn2">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landscape;
