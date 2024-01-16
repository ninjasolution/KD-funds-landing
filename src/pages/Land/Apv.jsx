import React, { useEffect } from "react";
import A1 from "../../assets/images/Land/land2.svg";
import A2 from "../../assets/images/Land/land3.svg";
const Apv = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#F0F6FC] lg:py-36 py-20 xl:px-10 px-4">
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="container mx-auto w-full xl:px-10 px-4"
        >
          <div className="flex gap-4 items-center">
            <p className="roboto-mono text-xs text-[#3d4043] font-normal">
              OUR PROJECTS
            </p>
            <div className="w-20 h-[1px] bg-[#3d4043]"></div>
          </div>
          <h1 className="lg:text-[56px] md:text-5xl text-4xl text-[#3d4043] century mt-5">
            Australia’s Property Valuation
          </h1>
          <p className="lg:text-xl text-base text-[#3d4043] mt-10 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id quam tortor. Aenean et quam non nunc mattis. In maximus viverra
            aliquam. Cras suscipit mi vel finibus sollicitudin. Maecenas
            convallis sem vel massa consequat tristique.
          </p>
          <img src={A1} alt="Image" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="container mx-auto w-full xl:px-10 px-4 lg:pt-48 pt-20"
        >
          <div className="flex gap-4 items-center">
            <p className="roboto-mono text-xs text-[#3d4043] font-normal">
              OUR PROJECTS
            </p>
            <div className="w-20 h-[1px] bg-[#3d4043]"></div>
          </div>
          <h1 className="lg:text-[56px] md:text-5xl text-4xl text-[#3d4043] century mt-5">
            Credit vs Equity Rationale
          </h1>
          <p className="lg:text-xl text-base text-[#3d4043] mt-10 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id quam tortor. Aenean et quam non nunc mattis. In maximus viverra
            aliquam. Cras suscipit mi vel finibus sollicitudin. Maecenas
            convallis sem vel massa consequat tristique.
          </p>
          <img src={A2} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Apv;
