import React, { useEffect } from "react";
import M2 from "../../assets/images/Manage/m2.svg";
const Diff = () => {
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
        className="container mx-auto xl:px-10 px-4 lg:pb-36 pb-20"
      >
        <h1 className="lg:text-[56px] text-4xl text-[#3d4043] century">
          Our Difference
        </h1>
        <p className="lg:text-xl text-base text-[#3d4043] mt-10">
          Secure Bailment Solutions (SBS) is led by people with real experience
          and agility. Fundamental to our success has been our commitment to
          partnerships both with borrowers and investors, which we nurture with
          respect and care We’re proud to have built relationships with
          discerning and seasoned investors, ranging from sophisticated private
          investors, to high net worth families, corporations and financial
          institutions We are specialists in private mortgage loans.
          <br />
          <br />
          We’ve not only been able to deliver exceptional returns, we’ve also
          achieved ethical outcomes despite challenging market conditions and
          complex lending structures At all times our mission has to be clear
          minded and focused on our “backyard” - Sydney real estate. Until now
          we have operated a fund reserved for known private investors and
          family Commencing March 31, 2021 we will be launching both a Debt and
          Equity Funds for sophisticated and wholesale investors on a referral
          basis only
        </p>
        <div className="mt-4">
          <img src={M2} alt="Image" className="lg:max-w-[1024px] w-full " />
        </div>
      </div>
    </>
  );
};

export default Diff;
