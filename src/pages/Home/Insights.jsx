import React, { useEffect, useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import W1 from "../../assets/images/kd_symbol1@2x.png";

const Insights = ({
  insightbg,
  insightpara1,
  insightpara,
  insightparadisplay,
  insightmain,
  insightmaindisplay,
  insightline,
  insightbtn,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const swiperRef = useRef(null);

  const changeSlideIndex = (step) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(
        (swiperRef.current.swiper.activeIndex + step) %
          (swiperRef.current.swiper.slides.length - 1)
      );
    }
  };

  const insights = [
    {
      title:
        "Australia's tight rental market forces tenants to make tough choices",
      author: "by Stella Qiu",
      image: "/HomeNew/0.jpg",
      createdAt: "October 30, 2023",
      url: "https://www.reuters.com/world/asia-pacific/australias-tight-rental-market-forces-tenants-make-tough-choices-2023-10-29",
    },
    {
      title:
        "Australian housing market 2023: Prices were supposed to go down but they went up. What will 2024 bring?",
      author: "By Ellen Lutt on and Allison Worrall",
      image: "/HomeNew/1.jpg",
      createdAt: "November 30, 2023",
      url: "https://www.dropbox.com/scl/fo/hp36hdm1ilm3t8rlq57s3/h?dl=0&preview=Australian+housing+market+2023_+Prices+were+supposed+to+go+down+but+they+went+up.+What+will+2024+bring_.pdf&rlkey=jhcb3prwkjmpuzmkh7pcvqida",
    },
    {
      title:
        "Minns to lift council bans on terraces, townhouses and low-rise apartments",
      author: "by Alexandra Smith and Michael McGowan",
      image: "/HomeNew/2.jpg",
      createdAt: "November 28, 2023",
      url: "https://www.smh.com.au/politics/nsw/minns-to-lift-council-bans-on-terraces-townhouses-and-low-rise-apartments-20231127-p5en4y.html",
    },
    {
      title: "Where property owners are selling at a Loss",
      author: "by Elizabeth Redman",
      image: "/HomeNew/3.jpg",
      createdAt: "December 21, 2023",
      url: "https://www.smh.com.au/property/news/where-property-owners-are-selling-at-a-loss-20231220-p5esv0.html",
    },
    {
      title: "Undersupply of new homes to trigger next boom, but not yet",
      author: "by Nila Sweeney",
      image: "/HomeNew/4.jpg",
      createdAt: "December 17, 2023",
      url: "https://www.afr.com/property/residential/undersupply-of-new-homes-to-trigger-next-boom-but-not-yet-20231215-p5ersm",
    },
    {
      title:
        "The collapse in US office tower values is creating a doom loop for banks",
      author: "by Karen Maley",
      image: "/HomeNew/5.jpg",
      createdAt: "July 9, 2023",
      url: "https://www.afr.com/companies/financial-services/the-collapse-in-us-office-tower-values-is-creating-a-doom-loop-for-banks-20230709-p5dmt1",
    },
    {
      title:
        "Private credit sees opportunity in Australia real estate as banks hesitate",
      author: "by Lewis Jackson and Rae Wee",
      image: "/HomeNew/6.jpg",
      createdAt: "November 6, 2023",
      url: "https://www.reuters.com/business/finance/private-credit-sees-opportunity-australia-real-estate-banks-hesitate-2023-11-05/",
    },
    {
      title: "Rising costs hit pipeline of cheaper apartments",
      author: "by Michael Bleby",
      image: "/HomeNew/7.jpg",
      createdAt: "September 7, 2023",
      url: "https://www.afr.com/property/residential/rising-costs-hit-pipeline-of-cheaper-apartments-20230907-p5e2oy",
    },
    {
      title:
        "Blackstone wants a bigger slice of Australia’s build-to-rent market",
      author: "by Nick Lenaghan",
      image: "/HomeNew/8.jpg",
      createdAt: "Febrary 6, 2023",
      url: "https://www.afr.com/property/commercial/blackstone-wants-a-bigger-slice-of-australia-s-build-to-rent-market-20230206-p5ci7t",
    },
    {
      title: "Housing targets at risk as building stalls at decade-low pace",
      author: "by Michael Bleby and Campbell Kwan",
      image: "/HomeNew/9.jpg",
      createdAt: "January 4, 2024",
      url: "https://www.afr.com/property/commercial/housing-targets-at-risk-as-building-stalls-at-decade-low-pace-20231207-p5eprv",
    },
  ];

  return (
    <>
      <div
        id="insights"
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className={`lg:py-36 py-24 2xl:pl-[180px] xl:pl-10 pl-4 relative ${insightbg}`}
      >
        <img src={W1} alt="w1" className="absolute right-0 top-0 w-[200px]" />
        <img
          src={W1}
          alt="w1"
          className="absolute right-0 bottom-0 w-[300px]"
        />
        <div className="lg:max-w-[1370px] w-full ">
          <div className="md:max-w-[500px] w-full">
            <div className="flex gap-4 items-center">
              <p
                className={`roboto-mono text-xs font-normal ${insightmaindisplay}`}
              >
                {insightmain}
              </p>
              <div className={`w-20 h-[1px] ${insightline}`}></div>
            </div>
            <p
              className={`lg:text-[56px] text-4xl mt-4 mb-8 font-light century leading-[50px] ${insightparadisplay}`}
            >
              {insightpara}
            </p>
            <p
              className={`lg:text-xl text-base text-[#3d4043] font-light century leading-[50px] ${insightpara1}`}
            >
              Stay on point with the latest relevant articles to the property
              and development industry
            </p>
          </div>
        </div>
        <div className="mt-6">
          <div className="items" style={{ position: "relative" }}>
            <div className="arrow-prev" onClick={() => changeSlideIndex(-1)}>
              &lt;
            </div>
            <ul className="flex gap-5 overflow-x-auto">
              <Swiper
                ref={swiperRef}
                className="myswiper home"
                modules={[Navigation, Autoplay]}
                spaceBetween={32}
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
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 4,
                  },
                }}
              >
                {insights
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((item, key) => (
                    <SwiperSlide key={key}>
                      <li
                        className="php-result-item item item-posttype-insights item-viewmode-grid"
                        style={{ cursor: "pointer" }}
                      >
                        <article>
                          <header className="thumbnail-insights h-full">
                            <img
                              width={2560}
                              height={1400}
                              src={item.image}
                              className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded h-full"
                              alt="Building an equity options market: The story of Brazil’s B3"
                              decoding="async"
                              data-lazy-srcset="https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3.png 2560w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-576x315.png 576w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-768x420.png 768w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-1536x840.png 1536w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-2048x1120.png 2048w"
                              data-lazy-sizes="(max-width: 2560px) 100vw, 2560px"
                              data-lazy-src="wp-content/uploads/2023/07/Insights_SSO_Article3_B3.png"
                              data-ll-status="loaded"
                              sizes="(max-width: 2560px) 100vw, 2560px"
                              srcSet={item.image}
                            />

                            <div className="badge-series absolute top-3 left-3 bg-white rounded-full w-[100px] flex gap-2 items-center py-2 px-2">
                              <svg
                                width={11}
                                height={11}
                                viewBox="0 0 11 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 1H7C7.55228 1 8 1.44772 8 2V7C8 7.55228 7.55228 8 7 8H2C1.44772 8 1 7.55228 1 7V2C1 1.44772 1.44772 1 2 1ZM0 2C0 0.89543 0.895431 0 2 0H7C8.10457 0 9 0.895431 9 2V7C9 8.10457 8.10457 9 7 9H2C0.89543 9 0 8.10457 0 7V2ZM4.00001 11C3.25973 11 2.61339 10.5978 2.26758 10H9.00001C9.5523 10 10 9.5523 10 9.00001V2.26758C10.5978 2.61339 11 3.25973 11 4.00001V9.00001C11 10.1046 10.1046 11 9.00001 11H4.00001Z"
                                  fill="#3D4043"
                                />
                              </svg>
                              <span className="btn3 text-term text-black">
                                EXTERNAL
                              </span>
                            </div>
                          </header>
                          <main>
                            <span>{item.createdAt}</span>
                            <h2 className="h4 ss bold">
                              <a target="_blank" href={item.url}>
                                {`${item.title} `}
                              </a>
                            </h2>
                            <p>
                              In this article, we trace how Brazil’s B3 built
                              one of the most successful global SSO markets
                              almost from scratch, providing an example for
                              exchanges around the globe.{" "}
                            </p>
                            <a
                              className="btn-animate"
                              target="_blank"
                              href={item.url}
                            >
                              <span className="sr-only">Learn more</span>
                              <span>
                                <svg
                                  width={5}
                                  height={8}
                                  viewBox="0 0 5 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.3382 0.146446L4.5202 3.32843C4.7155 3.52369 4.7155 3.84027 4.5202 4.03553L1.3382 7.21751C1.143 7.41278 0.826399 7.41278 0.631099 7.21751C0.435899 7.02225 0.435899 6.70567 0.631099 6.51041L2.9596 4.18198L2.9596 3.18198L0.631099 0.853553C0.435899 0.658291 0.435899 0.341709 0.631099 0.146446C0.826399 -0.0488155 1.143 -0.0488155 1.3382 0.146446Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                          </main>
                          <footer>
                            <span>{item.author}</span>
                          </footer>
                        </article>
                      </li>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </ul>
            <div className="arrow-next" onClick={() => changeSlideIndex(1)}>
              &gt;
            </div>
          </div>
        </div>
        <div className={`2xl:max-w-[1300px] w-full mt-4 ${insightbtn}`}>
          <div className="wp-block-buttons">
            {/* <a href="#" className="btn_new_24">
              All Insight
              <span>
                <svg>
                  <use xlink:href="#arrow" href="#arrow"></use>
                </svg>
              </span>
            </a> */}

            <a href="#" class="hover_btn_effect" data-attr=" All Insight">
              {" "}
              <span> All Insight </span>
              <span class="hover_design"> </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
