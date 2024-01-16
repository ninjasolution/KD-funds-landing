import React, { useEffect } from "react";

const DisclosuresMain = () => {
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
            <div className="flex gap-4 items-center">
              <p className="roboto-mono text-xs text-[#3d4043] font-normal">
                SBS
              </p>
              <div className="w-20 h-[1px] bg-[#3d4043]"></div>
            </div>
            <h1 className="lg:text-[56px] text-4xl text-[#3d4043] century mt-5">
              Disclosures
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <h1 className="lg:text-[33px] text-2xl text-[#3d4043] century">
              Pillar III disclosures
            </h1>
            <p className="text-xl text-[#3d4043] font-light my-5">
              SBS Holding BV and SBS VOF are subject to the European CRD
              IV/ CRR regulations. A copy of the Pillar III disclosures is
              available upon request.
            </p>
            <div className="wp-block-buttons">
              <a className="btn btn btn-primary">Transparency in coverage</a>
            </div>
            <h1 className="lg:text-[33px] text-2xl text-[#3d4043] century mt-6">
              Transparency in coverage
            </h1>
            <p className="text-xl text-[#3d4043] font-light my-5">
              Below link leads to the machine readable files that are made
              available in response to the federal Transparency in Coverage Rule
              and includes negotiated service rates and out-of-network allowed
              amounts between health plans and healthcare providers. The
              machine-readable files are formatted to allow researchers,
              regulators, and application developers to more easily access and
              analyze data.
            </p>
            <div className="wp-block-buttons">
              <a className="btn btn btn-primary">Machine readable files </a>
            </div>
            <h1 className="lg:text-[33px] text-2xl text-[#3d4043] century mt-6">
              SBS Execution Services disclosures
            </h1>
            <div className="wp-block-buttons mt-5">
              <a className="btn btn btn-primary">Read More </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisclosuresMain;
