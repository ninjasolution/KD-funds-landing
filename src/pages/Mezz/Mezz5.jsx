import React, { useEffect } from "react";
import Me from "../../assets/images/Mezz/mezz2.jpg";
const Mezz3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-20">
        <div className="flex gap-4 justify-center xl:flex-nowrap flex-wrap">
          <div
            data-aos="fade-rigth"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <h1 className="century text-[#3d4043] lg:text-[56px] text-4xl md:leading-[90px]">
              The Archwood Residences
            </h1>
            <p className="text-xl text-[#3d4043] mt-10 font-light mb-8">
              Set in Roseville’s green, heritage heart, The Archwood is a
              perfectly balanced community of four-bedroom townhouses. One that
              blends the best of luxury living with a private and spacious
              family home.
            </p>
            <a className="btn btn-explore">Explore</a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <img src={Me} alt="Image" className="rounded-[2rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mezz3;
