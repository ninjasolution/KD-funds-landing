import React, { useEffect } from "react";

const LoanHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="w-full relative lg:mt-28 mt-14 lg:py-56 py-20 bgloan"
      >
        <div className="wp-block-cover is-light">
          <span />
          <img
            className="absolute right-0 top-0"
            data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/10/website_header_V2-1-1-1.png 1400w, https://optiver.com/wp-content/uploads/2022/10/website_header_V2-1-1-1-576x253.png 576w, https://optiver.com/wp-content/uploads/2022/10/website_header_V2-1-1-1-768x337.png 768w"
            data-lazy-sizes="(max-width: 1400px) 100vw, 1400px"
            data-lazy-src="../wp-content/uploads/2022/10/website_header_V2-1-1-1.png"
            data-ll-status="loaded"
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="https://optiver.com/wp-content/uploads/2022/10/website_header_V2-1-1-1.png 1400w, https://optiver.com/wp-content/uploads/2022/10/website_header_V2-1-1-1-576x253.png 576w, https://optiver.com/wp-content/uploads/2022/10/website_header_V2-1-1-1-768x337.png 768w"
          />
          <div className="wp-block-cover__inner-container container mx-auto xl:px-10 px-4 mt-10">
            <div className="wp-block-group has-nearly-black-color has-text-color">
              <h2 className="wp-block-heading century text-[#3d4043] lg:text-[51px] text-4xl">
                Loan Products
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanHero;
