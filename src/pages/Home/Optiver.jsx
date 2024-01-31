import React, { useEffect } from "react";
import Opt from "../../assets/images/Home/2nd.jpg";
import W1 from '../../assets/images/kd_symbol1@2x.png';
const SBS = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <img src={W1} alt="w1" className="absolute right-0 w-[200px] md:top-[-20%] -top-10" />
      <img src={W1} alt="w1" className="absolute right-0 bottom-0 w-[200px]" />

      <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24 xl:mt-0 md:mt-12">
        <div className="flex gap-4 justify-center xl:flex-nowrap flex-wrap">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <h1 className="century text-[#3d4043] lg:text-[56px] text-4xl leading-[70px]">
              Sydney Specialist
              <p className="lg:text-[40px] text-3xl text-[#F1870F]">
                Property & Building Financier
              </p>
            </h1>
            <p className="text-xl text-[#3d4043] mt-10 pr-[45px] font-light">
            As one of the most experienced lenders in Sydney’s private commercial mortgage markets, we have proprietary abilities to originate, arrange and participate in the entire capital stack, focusing primarily on First Mortgages and further secured with second mortgage and preferred equity securities backed by significant Manager’s equity co-investment. 
            </p>
            <p className="text-xl text-[#3d4043] mt-4 pr-[45px] font-light mb-8">
            Our unique ability and experience to understand wide elements of development risk, remediation, construction and dispute resolutions sets us apart. This means we are equally comfortable with a land subdivision acquisition, established unit portfolio refinance or a Class 2 Residential construction programme.
            </p>
            {/* <div className="wp-block-buttons">
              <a className="btn btn btn-info">Load more</a>
            </div> */}
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <img src={'/HomeNew/2.jpg'} alt="Image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBS;
