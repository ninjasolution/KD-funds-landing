import React, { useEffect } from "react";
import M1 from "../../assets/images/Manage/m1.jpg";
const ManageHero = () => {
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
        className="container mx-auto xl:px-10 px-4 lg:py-36 py-20 lg:mt-40"
      >
        <h1 className="text-center lg:text-[56px] text-4xl text-[#3d4043] century">
          Management
        </h1>
        <div className="lg:mt-36 mt-10">
          <img src={M1} alt="Image" className="w-full h-[550px] object-cover" />
        </div>
      </div>
    </>
  );
};

export default ManageHero;
