import React, { useEffect } from "react";
import ClockVideo from "../../assets/images/Home/sbs-1.mp4";
import Analoge from "./Analog";
import W1 from '../../assets/images/kd_symbol1@2x.png';

// import Chicago from "./Chicago";
const Clock = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const clocks = [
    {
      timezone: "Australia/Sydney",
      location: "Sydney"
    },
    {
      timezone: "Australia/Perth",
      location: "Perth"
    },
    {
      timezone: "Asia/Hong_Kong",
      location: "Hong Kong"
    },
    {
      timezone: "Asia/Singapore",
      location: "Singapore"
    },
    {
      timezone: "Asia/Tokyo",
      location: "Tokyo"
    },
    {
      timezone: "Europe/London",
      location: "London"
    },
    {
      timezone: "America/New_York",
      location: "New York"
    },
    {
      timezone: "America/Los_Angeles",
      location: "Los Angeles"
    },
    {
      timezone: "Europe/Luxembourg",
      location: "Luxembourg"
    },
  ]
  return (
    <>
      <div className="relative bgclock h-full">
      <img src={W1} alt="w1" className="absolute top-0 right-0 w-[300px]" />
      <img src={W1} alt="w1" className="absolute top-0 bottom-0 my-auto md:hidden block right-0 w-[300px]" />
      <img src={W1} alt="w1" className="absolute right-0 bottom-0 w-[300px]" />
        <figure className="w-full absolute top-0 -z-10 h-full">
          <video
            className="w-full lg:object-cover xl:h-[920px] lg:block hidden h-full"
            autoPlay
            loop
            muted
            preload="auto"
            src={ClockVideo}
            playsInline
          />
        </figure>
        <div className="bg-opacity-40 bg-black">
          <div className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24 xl:h-[920px] h-full relative z-50">
            <div className="flex gap-4 md:justify-between justify-center xl:flex-nowrap flex-wrap">
              <div
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="md:max-w-[710px] w-full mx-auto"
              >
                <div className="flex gap-4 items-center">
                  <p className="roboto-mono text-xs text-white font-normal">
                    GLOBAL
                  </p>
                  <div className="w-20 h-[1px] bg-white"></div>
                </div>
                <p className="lg:text-[56px] text-4xl text-white mt-4 mb-8 font-light century leading-[70px]">
                Leverage All Capital Sources
                </p>
                <p className="lg:text-xl text-base text-white font-light leading-[50px]">
                We help you to access a diverse range of both local and international institutional funding sources that are focused on Sydney property, to leave no stone unturned in the search to bring your commercial projects to reality
                </p>
                <div className="flex md:justify-between gap-5 items-center lg:flex-nowrap flex-wrap md:mt-20 mt-10">
                  <div className="md:max-w-[210px] w-full">
                    <h1 className="lg:text-[56px] text-4xl century text-white text-center">
                    $70B+
                    </h1>
                    <p className="text-sm text-center mt-4 text-white roboto-mono">
                    AUM
                    </p>
                  </div>
                  <div className="md:max-w-[210px] w-full">
                    <h1 className="lg:text-[56px] text-4xl century text-white text-center">
                    41+
                    </h1>
                    <p className="text-sm text-center mt-4 text-white roboto-mono">
                      Lenders
                    </p>
                  </div>
                  <div className="md:max-w-[210px] w-full">
                    <h1 className="lg:text-[56px] text-4xl century text-white text-center">
                      9
                    </h1>
                    <p className="text-sm text-center mt-4 text-white roboto-mono">
                    Capital Centres
                    </p>
                  </div>
                </div>
                {/* <div className="wp-block-buttons mt-4 flex md:justify-start justify-center">
                  <a className="btn btn btn-primary btn2">Our offices</a>
                </div> */}
              </div>
              <div className="flex xl:gap-x-10 gap-x-5 gap-y-[15rem] flex-wrap lg:justify-end justify-center mt-20">

                {
                  clocks.map((item, key) => (
                    <div key={key} className="w-[200px] xl:mt-0 mt-10 relative z-50">
                      <Analoge timezone={item.timezone} locationName={item.location} />
                    </div>
                  ))
                }




              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
