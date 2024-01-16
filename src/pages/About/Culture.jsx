import React, { useEffect } from "react";
import O1 from "../../assets/images/About/o1.webp";
import O2 from "../../assets/images/About/02.webp";
import O3 from "../../assets/images/About/o3.webp";
import O4 from "../../assets/images/About/o4.webp";
import O5 from "../../assets/images/About/o5.webp";
const Culture = () => {
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
        className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-20"
      >
        <h2
          className="wp-block-heading aos-init aos-animate lg:text-[52px] text-4xl mb-11"
          data-aos="fade-up"
        >
          Our culture is underpinned by our <span className="has-inline-color has-orange-color text-[#ff3300]">values
          </span>
        </h2>
        <div className="flex xl:flex-nowrap flex-wrap gap-6">
          <div className="md:max-w-[260px] w-full">
            <img src={O1} alt="Image" className="w-10" />
            <h1 className="lg:text-[24px] text-lg text-[#3d4043] mt-5">
              We are committed to doing the right thing
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              Commercial and Wholesale Lending Solutions
            </p>
          </div>
          <div className="md:max-w-[260px] w-full">
            <img src={O2} alt="Image" className="w-10" />
            <h1 className="lg:text-[24px] text-lg text-[#3d4043] mt-5">
              We aim for <br/> excellence
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              Our belief in continuous improvement pushes us to be our best
            </p>
          </div>
          <div className="md:max-w-[260px] w-full">
            <img src={O3} alt="Image" className="w-10" />
            <h1 className="lg:text-[24px] text-lg text-[#3d4043] mt-5">
              We do our best work together
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              Collaboration drives our success
            </p>
          </div>
          <div className="md:max-w-[260px] w-full">
            <img src={O4} alt="Image" className="w-10" />
            <h1 className="lg:text-[24px] text-lg text-[#3d4043] mt-5">
              We challenge the status quo
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              We embrace critical thought, diverse thinking, self-reflection and
              open feedback
            </p>
          </div>
          <div className="md:max-w-[260px] w-full">
            <img src={O5} alt="Image" className="w-10" />
            <h1 className="lg:text-[24px] text-lg text-[#3d4043] mt-5">
              We take <br/> ownership
            </h1>
            <p className="lg:text-xl text-base text-[#3d4043] mt-8">
              Owners, entrepreneurs and initiative takers make the difference
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Culture;
