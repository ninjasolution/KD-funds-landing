import React, { useEffect } from "react";

const PrivacyMain = () => {
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
        <h1 className="lg:text-[56px] text-4xl text-[#3d4043] text-center mb-10 century">
          Privacy Policy and Disclaimers
        </h1>
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/pdview23e4r.png"
          alt="Image"
        />
        <div className="wp-block-buttons mt-5">
          <a className="btn btn btn-info">Download</a>
        </div>
      </div>
    </>
  );
};

export default PrivacyMain;
