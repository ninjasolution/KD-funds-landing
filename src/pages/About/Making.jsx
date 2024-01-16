import React, { useEffect } from "react";

const Making = () => {
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
        className="wp-block-cover xl:max-w-[1536px] mx-auto relative h-[400px] flex flex-col justify-center items-center md:mb-[244px] mb-20"
      >
        <span
          aria-hidden="true"
          className="wp-block-cover__background has-background-dim-30 has-background-dim"
        />
        <img
          decoding="async"
          width={1400}
          height={583}
          className="wp-block-cover__image-background wp-image-12407 entered lazyloaded absolute"
          alt="About Us Market Making"
          src="../wp-content/uploads/2022/10/about-us-market-making-1.jpg"
          srcSet="https://optiver.com/wp-content/uploads/2022/10/about-us-market-making-1.jpg 1400w, https://optiver.com/wp-content/uploads/2022/10/about-us-market-making-1-576x240.jpg 576w, https://optiver.com/wp-content/uploads/2022/10/about-us-market-making-1-768x320.jpg 768w"
        />
        <div className="wp-block-cover__inner-container relative z-50 px-20">
          <div className="subheader h6 text-white">MARKET MAKING</div>
          <h4 className="wp-block-heading century lg:text-[34px] md:text-xl text-sm text-white md:leading-[60px]">
            As one of the oldest market making institutions,&nbsp;we are active
            on multiple exchanges&nbsp;across the globe, trading options,
            futures,&nbsp;equities, FX, fixed income and commodities products.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Making;
