import React, { useEffect, useState } from "react";
const Alignment = () => {
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const alignments = [
    "Minimum 10% Co-Investment from the Manager",
    "Manager Capital is First Loss",
    "Direct Lending into Sydney Real Estate",
    "No Management Fees until Capital Returned",
    "Sydney-Centric and Quality Focused",
    "Income stream with Quarterly Distribution",
    "See the Real Risks and Provide Solutions",
  ]
  return (
    <>
      <div className="bg-[#512b00f5]">
        <div className="container mx-auto xl:px-10 px-4 w-full lg:py-36 py-24">
          <div className="flex">
            <h1 className="century text-white lg:text-[46px] text-4xl leading-[70px] mt-4">
              TOTAL INVESTOR – MANAGER ALIGNMENT
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex gap-4 justify-center xl:flex-nowrap flex-wrap"
          >
            <div className="md:max-w-[710px] w-full">
              {
                alignments.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => setVisibility(key)}
                    className={`pl-5 mt-3 cursor-pointer ${visibility == key
                      ? "border-l-2 border-[#e53b16]"
                      : "border-l-2 border-white"
                      }`}
                  >
                    <p className="roboto-mono text-xs pt-2 text-white">01</p>
                    <p className="text-[25px] text-white mt-1 font-light">
                      {
                        item
                      }
                    </p>
                  </div>
                ))
              }

            </div>

            <div
              className={`md:max-w-[710px] w-full ${visibility < 7 ? "" : "hidden"
                }`}
            >
              <p className="text-xl text-white text-right font-light my-4">
                businessOperationsSecure Bailment Solutions (SBS) is led by
                people with real experience and agility.
                Fundamental to our success has been
                our commitment to partnerships both with
                borrowers and investors, which we nurture
                with respect and care
              </p>

              <p className="text-xl text-white text-right font-light my-4">
                We’re proud to have built relationships with
                discerning and seasoned investors, ranging
                from sophisticated private investors to
                high-net-worth families, corporations and
                financial institutions
              </p>
              <p className="text-xl text-white text-right font-light my-4">
                We are specialists in private mortgage
                loans. We’ve not only been able to deliver
                exceptional returns, we’ve also achieved
                ethical outcomes despite challenging
                market conditions and complex lending
                structures
              </p>

              <p className="text-xl text-white text-right font-light my-4">
                At all times our mission has to be clearminded and focused on our “backyard”
                - Sydney real estate. Until now we have
                operated a fund reserved for known private
                investors and family
              </p>

              <p className="text-xl text-white text-right font-light my-4">
                Commencing October 1, 2021, we will
                be launching both a Debt and Equity
                Fund for sophisticated and wholesale
                investors on a strict referral basis only
              </p>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Alignment;
