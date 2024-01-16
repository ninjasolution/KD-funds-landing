import React, { useEffect } from "react";
import Me from "../../assets/images/Mezz/mezz1.jpeg";
const MezzHero = () => {
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
        className="relative lg:h-[700px] h-[300px] flex justify-center items-center md:mt-20"
      >
        <img
          src={Me}
          alt="Image"
          className="w-full absolute -z-10 h-full object-cover"
        />
        <div className="relative z-20">
          <h1 className="text-center lg:text-[56px] md:text-5xl text-4xl text-white century">
            First Mortgage
          </h1>
        </div>
      </div>
    </>
  );
};

export default MezzHero;
