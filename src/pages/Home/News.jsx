import React, { useEffect } from "react";
import New from "../../assets/images/Home/6th.webp";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const News = () => {
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
        className="container mx-auto w-full xl:px-10 px-4 lg:py-36 py-24"
      >
        <Swiper
          className="myswiper news"
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
            <div className="flex gap-4 justify-center xl:flex-nowrap flex-wrap">
              <div className="md:max-w-[710px] w-full">
                <div className="flex gap-4 items-center">
                  <p className="roboto-mono text-xs text-[#3d4043] font-normal">
                    OUR NEWSLETTER
                  </p>
                  <div className="w-20 h-[1px] bg-[#3d4043]"></div>
                </div>
                <p className="lg:text-[56px] text-4xl text-[#3d4043] mt-4 mb-8 font-light century leading-[50px]">
                  Subscribe to receive our latest insights
                </p>
                <p className="lg:text-xl text-base text-[#3d4043] font-light century leading-[50px]">
                  Find out more about our open roles, how we recruit and
                  upcoming events.
                </p>
                <div className="lg:flex hidden gap-3 items-center  w-[120px] mt-[77%]">
                  <nav className="flex gap-4 items-center">
                    <a className="btn btn-prev"></a>
                    <a className="btn btn-next"></a>
                  </nav>
                  <div className="flex gap-3 items-center">
                    <p className="text-xl text-[#c8c8c8]">01</p>
                    <p className="text-xl text-[#3d4043]">02</p>
                  </div>
                </div>
              </div>
              <div className="md:max-w-[710px] w-full">
                <img src={New} alt="Image" className="w-full rounded-[2rem]" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4 justify-center xl:flex-nowrap flex-wrap">
              <div className="md:max-w-[710px] w-full">
                <div className="flex gap-4 items-center">
                  <p className="roboto-mono text-xs text-[#3d4043] font-normal">
                    OUR NEWSLETTER
                  </p>
                  <div className="w-20 h-[1px] bg-[#3d4043]"></div>
                </div>
                <p className="lg:text-[56px] text-4xl text-[#3d4043] mt-4 mb-8 font-light century leading-[50px]">
                  Subscribe to receive our latest insights
                </p>
                <p className="lg:text-xl text-base text-[#3d4043] font-light century leading-[50px]">
                  Find out more about our open roles, how we recruit and
                  upcoming events.
                </p>
                <div className="lg:flex gap-3 items-center hidden w-[120px] mt-[77%]">
                  <nav className="flex gap-4 items-center">
                    <a className="btn btn-prev"></a>
                    <a className="btn btn-next"></a>
                  </nav>
                  <div className="flex gap-3 items-center">
                    <p className="text-xl text-[#c8c8c8]">01</p>
                    <p className="text-xl text-[#3d4043]">02</p>
                  </div>
                </div>
              </div>
              <div className="md:max-w-[710px] w-full">
                <img src={New} alt="Image" className="w-full rounded-[2rem]" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default News;
