import React, { useEffect } from "react";
import Mis from "../../assets/images/Mezz/mezz2.jpg";
const Residence1 = () => {
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
            <h1 className="century text-[#3d4043] lg:text-[56px] text-4xl md:leading-[90px]">
              The Nines Residences
            </h1>
            <p className="text-xl text-[#3d4043] font-light mb-2">
              A nod to heritage. An ode to tomorrow. Welcome to The Nines —
              where the ordinary becomes extraordinary, and everyday life is
              richer than ever.
            </p>
            <p className="text-xl font-medium text-[#3d4043] mb-2">Client</p>
            <p className="text-xl text-[#3d4043] font-light mb-5">
              Client name here
            </p>
            <p className="text-xl text-[#3d4043] font-medium mb-2">
              Date Listed:
            </p>
            <p className="text-xl text-[#3d4043] font-light mb-5">
              March 24, 2021
            </p>
            <p className="text-xl text-[#3d4043] font-medium mb-2">
              Property Type:
            </p>
            <p className="text-xl text-[#3d4043] font-light mb-5">
              First Mortgage
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
            <img src={Mis} alt="Image" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Residence1;
