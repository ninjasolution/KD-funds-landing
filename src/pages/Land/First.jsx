import React, { useEffect } from "react";
const First = () => {
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
          <h1 className="lg:text-[56px] md:text-5xl text-4xl text-[#3d4043] century">
            1st and 2nd mortgages and mezzanine finance investments <br /> are
            available across a variety of projects
          </h1>
          <p className="lg:text-xl text-base text-[#3d4043] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            id quam tortor. Aenean et quam non nunc mattis. In maximus viverra
            aliquam. Cras suscipit mi vel finibus sollicitudin. Maecenas
            convallis sem vel massa consequat tristique.
          </p>
        </div>
      </div>
    </>
  );
};

export default First;
