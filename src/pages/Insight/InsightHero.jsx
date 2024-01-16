import React, { useEffect } from "react";
import I1 from "../../assets/images/Insight/i1.jpeg";
import I2 from "../../assets/images/Insight/i2.jpg";
import I3 from "../../assets/images/Insight/i3.jpeg";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const InsightHero = () => {
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
        className="container mx-auto xl:px-10 px-4 lg:pt-36 pt-20 pb-5 lg:mt-40"
      >
        <div className="flex gap-4 items-center mx-auto justify-center">
          <p className="roboto-mono text-xs text-[#3d4043] font-normal">
            OUR PERSPECTIVES
          </p>
          <div className="w-20 h-[1px] bg-[#3d4043]"></div>
        </div>
        <h1 className="text-center lg:text-[56px] text-4xl text-[#3d4043] century mt-8 md:ml-4">
          Insights
        </h1>
        <div className="lg:mt-36 mt-10 mb-40">
          <Swiper
            className="myswiper insight"
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src={I1}
                  alt="Image"
                  className="w-full absolute -z-10 md:h-[800px] h-[400px]"
                />
                <div className="relative z-50 md:h-[800px] h-[400px] flex justify-center items-center">
                  <div className="md:max-w-[1210px] w-full mx-auto md:px-0 px-4">
                    <div className="flex gap-4 items-center">
                      <p className="roboto-mono text-xs text-white font-normal">
                        MARCH 25, 2021
                      </p>
                      <div className="w-20 h-[1px] bg-white"></div>
                    </div>
                    <p className="lg:text-[56px] md:text-4xl text-2xl text-white mt-4 mb-8 century leading-[50px]">
                      Consectatur dolor
                    </p>
                    <div className="wp-block-buttons">
                      <a className="btn btn btn-primary btn2">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src={I2}
                  alt="Image"
                  className="w-full absolute -z-10 md:h-[800px] h-[400px]"
                />
                <div className="relative z-50 md:h-[800px] h-[400px] flex justify-center items-center">
                  <div className="md:max-w-[1210px] w-full mx-auto">
                    <div className="flex gap-4 items-center">
                      <p className="roboto-mono text-xs text-white font-normal">
                        MARCH 25, 2021
                      </p>
                      <div className="w-20 h-[1px] bg-white"></div>
                    </div>
                    <p className="lg:text-[56px] md:text-4xl text-2xl text-white mt-4 mb-8 century leading-[70px]">
                      The evolving equity trading  <br /> <br /> landscape: Q&A
                    </p>
                    <div className="wp-block-buttons">
                      <a className="btn btn btn-primary btn2">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src={I3}
                  alt="Image"
                  className="w-full absolute -z-10 md:h-[800px] h-[400px]"
                />
                <div className="relative z-50 md:h-[800px] h-[400px] flex justify-center items-center">
                  <div className="md:max-w-[1210px] w-full mx-auto">
                    <div className="flex gap-4 items-center">
                      <p className="roboto-mono text-xs text-white font-normal">
                        MARCH 25, 2021
                      </p>
                      <div className="w-20 h-[1px] bg-white"></div>
                    </div>
                    <p className="lg:text-[56px] md:text-4xl text-2xl text-white mt-4 mb-8 century leading-[70px]">
                      A new playbook for Europe’s  <br /> <br /> capital markets
                    </p>
                    <div className="wp-block-buttons">
                      <a className="btn btn btn-primary btn2">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <nav className="flex justify-end md:-mt-20 -mt-5 pb-5 px-10">
              <a className="btn btn-prev btn-icon btn-icon-arrow-left">Prev</a>
              <a className="btn btn-next btn-icon btn-icon-arrow-right">Next</a>
              <p className="text-white relative z-50">01</p>
              <p className="text-white relative z-50">02</p>
              <p className="text-white relative z-50">03</p>
            </nav>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default InsightHero;
