import React, { useEffect } from "react";
import Sbsv from "../../assets/images/Home/Sydney_rainbow_flight.mp4";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="relative md:h-[800px] h-[400px] flex justify-center items-center -mt-24">
        <figure className="w-full absolute -top-8 -z-10">
          <video
            className="md:h-[800px] h-[400px] w-full object-cover"
            autoPlay
            loop
            muted
            preload="auto"
            src={Sbsv}
            playsInline
          />
        </figure>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="flex justify-center items-center py-10 px-4 container mx-auto lg:mt-0 mt-12"
        >
          <h1 className="lg:text-[76px] md:text-5xl text-4xl century text-white text-center">
            Focused Mortgage Opportunities
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
