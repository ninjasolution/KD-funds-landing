import React, { useEffect } from "react";
import Peoples from "../../assets/images/Home/6th.webp";
const Related = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#F0F6FC]">
        <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24">
          <div className="md:max-w-[715px] w-full">
            <h1 className="text-left lg:text-[56px] text-4xl text-[#3d4043] mt-6 mb-10">
              Related projects
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex lg:gap-10 gap-4 justify-center xl:flex-nowrap flex-wrap md:mt-20 mt-10 items-end"
          >
            <div className="md:max-w-[350px] w-full relative">
              <p className="text-white text-2xl absolute bottom-4 left-4">
                Kaylina Gardens{" "}
              </p>
              <img src={Peoples} alt="Images" className="w-full" />
            </div>
            <div className="md:max-w-[350px] w-full relative">
              <p className="text-white text-2xl absolute bottom-4 left-4">
                Kaylina Gardens{" "}
              </p>
              <img src={Peoples} alt="Images" className="w-full" />
            </div>
            <div className="md:max-w-[350px] w-full relative">
              <p className="text-white text-2xl absolute bottom-4 left-4">
                Kaylina Gardens{" "}
              </p>
              <img src={Peoples} alt="Images" className="w-full" />
            </div>
            <div className="md:max-w-[350px] w-full relative">
              <p className="text-white text-2xl absolute bottom-4 left-4">
                Kaylina Gardens{" "}
              </p>
              <img src={Peoples} alt="Images" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Related;
