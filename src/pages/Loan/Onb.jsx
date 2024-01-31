import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import W1 from '../../assets/images/kd_symbol1@2x.png';

import "swiper/css";
import "swiper/css/navigation";

const Onb = () => {
  const [visibility, setVisibility] = useState(0);

  const swiperRef = useRef(null);
  const [swiperCount, setSwiperCount] = useState(0);

  const changeSlideIndex = (step) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(step);
      setSwiperCount(step)
    }
  };

  const slideChangeHandle = function(data){
    setSwiperCount(data.realIndex);
    // console.log(data.realIndex)
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="expertise" className="bg-[#5d5d5d] relative z-50">
      {/* <img src={W1} alt="w1" className="absolute top-0 right-0 w-[150px]" /> */}
      {/* <img src={W1} alt="w1" className="absolute top-0 bottom-0 my-auto right-0 w-[350px]" /> */}
      <img src={W1} alt="w1" className="absolute right-0 bottom-0 w-[150px]" />
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="container mx-auto xl:px-10 px-4 w-full lg:py-36 py-24"
        >
          <div className="flex gap-4 lg:justify-between justify-center xl:flex-nowrap flex-wrap">
            <div className="md:max-w-[710px] w-full">
              <div className="flex gap-4 items-center">
                <p className="roboto-mono text-xs text-white">OUR VALUES</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              <h1 className="century text-white lg:text-[56px] text-4xl leading-[70px] mt-4">
                Our Expertise
              </h1>
              <div
                onClick={() => changeSlideIndex(0)}
                className={`pl-5 cursor-pointer ${
                  swiperCount == 0
                    ? "border-l-2 border-[#F1870F]"
                    : "border-l-2 border-white"
                }`}
              >
                <p className="roboto-mono text-xs pt-2 text-white">01</p>
                <p className="text-[32px] text-white mt-1 font-light">
                  First Mortgage
                </p>
              </div>
              <div
                onClick={() => changeSlideIndex(1)}
                className={`pl-5 mt-6 cursor-pointer ${
                  swiperCount == 1
                    ? "border-l-2 border-[#F1870F]"
                    : "border-l-2 border-white"
                }`}
              >
                <p className="roboto-mono text-xs pt-2 text-white">02</p>
                <p className="text-[32px] text-white mt-1 font-light">
                  Second Mortgages
                </p>
              </div>
              <div
                onClick={() => changeSlideIndex(2)}
                className={`pl-5 mt-6 cursor-pointer ${
                  swiperCount == 2
                    ? "border-l-2 border-[#F1870F]"
                    : "border-l-2 border-white"
                }`}
              >
                <p className="roboto-mono text-xs pt-2 text-white">03</p>
                <p className="text-[32px] text-white mt-1 font-light">
                  Preferred Equity Mortgages
                </p>
              </div>
              <div
                onClick={() => changeSlideIndex(3)}
                className={`pl-5 mt-6 cursor-pointer ${
                  swiperCount == 3
                    ? "border-l-2 border-[#F1870F]"
                    : "border-l-2 border-white"
                }`}
              >
                <p className="roboto-mono text-xs pt-2 text-white">04</p>
                <p className="text-[32px] text-white mt-1 font-light">
                  Development Structuring
                </p>
              </div>
              <div
                onClick={() => changeSlideIndex(4)}
                className={`pl-5 mt-6 cursor-pointer ${
                  swiperCount == 4
                    ? "border-l-2 border-[#F1870F]"
                    : "border-l-2 border-white"
                }`}
              >
                <p className="roboto-mono text-xs pt-2 text-white">05</p>
                <p className="text-[32px] text-white mt-1 font-light">
                  Mandates & Managed Account
                </p>
              </div>
            </div>

            <div className="md:max-w-[710px] w-full">

            <Swiper
              ref={swiperRef}
              className="myswiper home"
              modules={[Navigation, Autoplay]}
              spaceBetween={32}
              direction = 'horizontal'
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              onSlideChange={(swiper) =>  slideChangeHandle(swiper)}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1400: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className={`md:max-w-[710px]`}>
                  <div className="flex gap-4 items-center mt-4">
                    <p className="roboto-mono text-xs text-white">
                      FIRST MORTGAGE
                    </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                  <p className="text-lg text-white font-light my-4">
                    We provide the full breadth of first mortgages for
                    commercial property acquisitions, vacant land, development
                    site acquisitions and bridging loans. As a specialist
                    property and development lender, we are able to see the
                    risks and opportunities that a traditional bank or private
                    lender does not or chooses not to understand or resolve.
                  </p>
                  <p className="text-lg text-white font-light my-4">
                    Terms are consistent with the general commercial debt market
                    but we offer certainty of: LVR; funding; interest
                    capitalisation and reasonable fees and personal service. As
                    we are a direct lender, we are able to guarantee an LVR and
                    valuation that remains consistent through the loan process
                    to guarantee a net proceeds figure to allow you to properly
                    negotiate and settle your transactions with certainty.
                  </p>
                  <p className="text-lg text-white font-light my-4">
                    Legal preparations are fair and reasonable and we can
                    understand complex structures ranging from trusts, listed
                    entities and distressed situations and workouts. We do not
                    charge excessive mandate fees or work fees, and all fees can
                    be held in trust accounts until milestones are achieved.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Terms are a maximum of 18 months but we will consider 60 day
                    loan terms. Interest rates are market.
                  </p>

                  <p className="text-sm text-white font-light my-4">
                    Note: We can only review loans to wholesale, corporations,
                    business sole traders and other non-consumer borrowers for
                    business purposes that are secured by primary real estate
                    located in Sydney, NSW Australia.
                  </p>

                  {/* <div className="wp-block-buttons">
                <a className="btn btn btn-primary btn2">View More </a>
              </div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`md:max-w-[710px]`}>
                  {/* <img src={Loan1} alt="Image" className="w-full" /> */}
                  <div className="flex gap-4 items-center mt-4">
                    <p className="roboto-mono text-xs text-white">
                      Second Mortgages
                    </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                  <p className="text-lg text-white font-light my-4">
                    The management team is able to lend its own funds to assist
                    second mortgages in selective circumstances for established,
                    experienced and existing clients for property acquisitions,
                    vacant land, development site acquisitions and bridging
                    loans. As a specialist property and development lender, our
                    difference is that we are able to quickly see the risks and
                    opportunities that a traditional bank or private lender does
                    not or chooses not to understand or resolve and we will
                    remain a patient, consistent and supportive partner
                    throughout the course of a loan.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Terms are consistent with the general commercial debt market
                    but we offer certainty of: LVR; funding; interest
                    capitalisation and reasonable fees and personal service. As
                    we are a direct lender, we are able to guarantee an LVR and
                    valuation that remains consistent through the loan process
                    to guarantee a net proceeds figure to allow you to properly
                    negotiate and settle your transactions with certainty
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Legal preparations are fair and reasonable and we can
                    understand complex structures ranging from trusts, listed
                    entities, multiple stakeholders in the capital stack and
                    distressed situations including workouts. We do not charge
                    excessive mandate fees or work fees, and all fees can be
                    held in trust accounts until agreed milestones are achieved.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Terms are a maximum of 12 months and a minimum of 60 days.
                    Interest rates are market.
                  </p>

                  <p className="text-sm text-white font-light my-4">
                    Note: We can only review loans to wholesale, corporations,
                    business sole traders and other non-consumer borrowers for
                    business purposes that are secured by primary real estate
                    located in Sydney, NSW Australia.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`md:max-w-[710px]`}>
                  {/* <img src={Loan2} alt="Image" className="w-full" /> */}
                  <div className="flex gap-4 items-center mt-4">
                    <p className="roboto-mono text-xs text-white">
                      Preferred Equity Mortgages
                    </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                  <p className="text-lg text-white font-light my-4">
                    The management team is able to lend its own funds to assist
                    preferred equity mortgages in selective circumstances for
                    established, experienced and existing clients clients for
                    property acquisitions, vacant land, development site
                    acquisitions and bridging loans. As a specialist property
                    and development lender, our difference is that we are able
                    to quickly see the risks and opportunities that a
                    traditional bank or private lender does not or chooses not
                    to understand or resolve and we will remain a patient,
                    consistent and supportive partner throughout the course of a
                    loan.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Terms are consistent with the general commercial debt market
                    but we offer certainty of: LVR; funding; interest
                    capitalisation and reasonable fees and personal service. As
                    we are a direct lender, we are able to guarantee an LVR and
                    valuation that remains consistent through the loan process
                    to guarantee a net proceeds figure to allow you to properly
                    negotiate and settle your transactions with certainty.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Legal preparations are fair and reasonable and we can
                    understand complex structures ranging from trusts, listed
                    entities, multiple stakeholders in the capital stack and
                    distressed situations including workouts. We do not charge
                    excessive mandate fees or work fees, and all fees can be
                    held in trust accounts until agreed milestones are achieved.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Terms are a maximum of 12 months and a minimum of 60 days.
                    Interest rates are market.
                  </p>

                  <p className="text-sm text-white font-light my-4">
                    Note: We can only review loans to wholesale, corporations,
                    business sole traders and other non-consumer borrowers for
                    business purposes that are secured by primary real estate
                    located in Sydney, NSW Australia.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`md:max-w-[710px]`}>
                  {/* <img src={Loan2} alt="Image" className="w-full" /> */}
                  <div className="flex gap-4 items-center mt-4">
                    <p className="roboto-mono text-xs text-white">
                      Development Structuring
                    </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                  <p className="text-lg text-white font-light my-4">
                    As a specialist property and development lender, we are able
                    to see the risks and opportunities that a traditional bank
                    or private lender does not or chooses not to understand or
                    resolve.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    With an unbroken track record in development and
                    construction comprising of more than 650 dwellings and 15
                    projects in the last 6 years alone, the management team are
                    able to assist you with across the full breadth of advisory
                    work on:
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Site acquisitions, Feasibilities, quantity and cost
                    assessments, AS4902/AS4000 construction contracts and
                    negotiations, subcontractor selection, procurement, trade
                    tendering, legal contracts, development site acquisitions
                    and feasibility studies.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    We are able to either advise, procure or finance the
                    appropriate quality consultants and contractors across the
                    entire development lifecycle. The sharing of detailed
                    knowledge is rare in the development and construction space.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Our approach saves client’s valuable time, cost,
                    inconvenience and disputes by leveraging our extensive real
                    world experience. Clients retain the freedom to make their
                    own decisions, but by being presented a wide landscape of
                    options and possibilities, we believe better outcomes can be
                    achieved without unnecessarily painful trial and error.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={`md:max-w-[710px]`}>
                  {/* <img src={Loan2} alt="Image" className="w-full" /> */}
                  <div className="flex gap-4 items-center mt-4">
                    <p className="roboto-mono text-xs text-white">
                      Mandates & Managed Account
                    </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                  </div>
                  <p className="text-lg text-white font-light my-4">
                    We act under mandate for qualified wholesale investors where
                    the loan note meets minimum hurdle rates (typically A$2
                    million+) and the investor requires a focused manager to act
                    on and for their behalf, particularly in distressed and
                    non-conforming scenarios.
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Under such mandates, we would provide a trustee service and
                    act as your representative and agent in all matters relating
                    to structuring and administering the loan including but not
                    limited to:
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Due Diligence and Reviews <br />
                    Engagement of Legal and Accounting Specialists <br />
                    Documentation, Recommendation and Reporting <br />
                    Security structures including PPSR, mortgages, caveats and
                    guarantees <br />
                    Litigation, Enforcement and Asset Possessions
                  </p>

                  <p className="text-lg text-white font-light my-4">
                    Our mandates have ranged from workout, distressed and
                    opportunistic loans and investments across property,
                    construction, manufacturing, FMCG and corporate commercial
                    loans.
                  </p>

                  <p className="text-sm text-white font-light my-4">
                    Note: We can act on loans to wholesale investors,
                    corporations, business sole traders and other nonconsumer
                    borrowers for business or commercial purposes only.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

            </div>

         
          </div>
        </div>
      </div>
    </>
  );
};

export default Onb;
