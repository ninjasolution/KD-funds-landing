import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NDetail = () => {
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
        className="container mx-auto lg:pt-52 pt-20 px-4"
      >
        <article className="post-14502 insights type-insights status-publish format-standard has-post-thumbnail hentry topic-market-structure region-asia-pac">
          <header>
            <Link to="/news">
              <a className="btn btn-icon btn-icon-arrow-left">Back</a>
            </Link>
            <div className="top">
              NEWS &nbsp;<span className="bold">·</span>&nbsp;{" "}
              <time
                dateTime="2023-07-03T02:39:33+00:00"
                itemProp="datePublished"
              >
                DECEMBER 14, 2023
              </time>
            </div>
            <h1>Building an equity options market: The story of Brazil’s B3</h1>
            <div className="series-container">
              <div className="optiver-series">
                <span>Part of series:</span>
                <ul>
                  <li>
                    <a
                      className
                      href="/"
                      title="How to bring APAC’s equity options markets to life"
                    >
                      01
                    </a>
                  </li>
                  <li>
                    <a
                      className
                      href="/"
                      title="Equity options: Who uses them and why?"
                    >
                      02
                    </a>
                  </li>
                  <li>
                    <a
                      className="current"
                      href="/"
                      title="Building an equity options market: The story of Brazil’s B3"
                    >
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <figure className="featured">
              <img
                width={2560}
                height={1400}
                className="attachment-14502 size-14502 wp-post-image entered lazyloaded"
                alt="Building an equity options market: The story of Brazil’s B3"
                decoding="async"
                large
                sizes="(max-width: 2560px) 100vw, 2560px"
                srcSet="https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3.png 2560w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-576x315.png 576w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-768x420.png 768w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-1536x840.png 1536w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-2048x1120.png 2048w"
              />
            </figure>
          </header>
          <section>
            <p>
              <em>
                In this series of articles, we are exploring single-stock
                options in key markets in the Asia Pacific region. Following an
                outline of the present situation for equity options in each of
                these markets, we offer our recommendations for how to grow
                them. In this article, we trace how Brazil’s B3 built one of the
                most successful global SSO markets almost from scratch,
                providing an example for exchanges around the globe. To read
                previous instalments,
                <a>
                  click here
                </a>
                .<br />
              </em>
            </p>
            <p>
              In 2011, when Marcos Antonio Skistymas of Brazil’s B3 exchange
              surveyed the local trading landscape for opportunities, he saw
              good signs. Single-stock options, popular in regions like the US,
              were seeing surprisingly strong demand among the country’s
              burgeoning retail investor base. For someone looking to develop
              this market, it was a promising indicator.
            </p>
            <p>
              There was an obstacle though: Virtually all of that trading was
              happening off-exchange.
            </p>
            <p>
              Fast forward to 2022, and on-exchange trading has taken hold in
              Brazil, with the average number of equity options contracts traded
              daily on B3 having increased by 117%.
            </p>
            <p className="mb-10">
              This is the story of how B3 established a thriving listed equity
              options offering in a market once dominated by off-exchange
              trading. In previous articles we have discussed how SSOs can
              benefit investors seeking risk management or income generation.
              The flexibility of these instruments has made them a popular
              choice in markets around the world, as a cost-efficient means of
              achieving exposure to underlying assets. As major derivatives
              markets like Japan, Korea, mainland China and Taiwan seek to build
              out their own SSO markets, we feel B3’s path can provide a
              blueprint for growth.
            </p>
            {/* <figure className="wp-block-image size-large is-style-rounded">
              <img
                decoding="async"
                width={768}
                height={402}
                src="https://optiver.com/wp-content/uploads/2023/07/Brazil-market-SSO_1200x628-768x402.png"
                alt="Brazil market: SSO"
                className="wp-image-14506 entered lazyloaded"
              />
            </figure> */}
            <p />
            <p className="pt-5">
              From the outset, B3 aimed to follow a robust and disciplined
              process for growing their on-screen SSO market, according to
              Skistymas, managing director for listed products. That meant
              initially focusing on retail investors and improving technology to
              support on-screen SSO trading. A little over a decade later, and
              the results are clear to see.
            </p>
            <p>
              Skistymas describes B3’s journey in five steps, adaptable to
              markets across the world.
            </p>
            <h4 className="wp-block-heading has-dark-blue-color has-text-color">
              1 “Upgrade technology to encourage and support on-screen trading.”
            </h4>
            <p>
              An important first step for building an on-screen SSO market for
              B3 was upgrading the exchange’s technology to better accommodate
              this type of trading. Superior technology enables different types
              of investors to participate. It does so by providing them with
              easier access and the ability to trade with greater frequency,
              according to Skistymas.{" "}
            </p>
            <p>
              Technology also proved useful for strengthening the exchange’s
              relationships with market makers. It provided better tools for B3
              to monitor market maker activity and accelerate the feedback
              process, allowing market makers to quickly make adjustments to
              their algorithms to comply with their obligations.
            </p>
            <h4 className="wp-block-heading has-dark-blue-color has-text-color">
              2 “Focus on fair pricing and creating liquidity in a limited
              number of names.”
            </h4>
            <p>
              B3 initially focused on building liquidity in a small number of
              names, targeting the products investors were most interested in.
              “We preferred to leverage on the spreads instead of on the depth
              of the book in the first instance, so we could offer fair prices
              mainly to encourage retail investors to trade on screen,” said
              Skistymas.
            </p>
            <p className="pb-10">
              The exchange worked closely with market makers to grow liquidity.
              “We designed our market making program with input from global
              market makers and institutional investors, both of whom identified
              gaps that we needed to address,” according to Skistymas. “We
              worked together very closely with the market makers and had a
              daily monitoring and regular feedback process. They could quickly
              adjust their algorithms to ensure fair pricing and this attracted
              more retail investors to trade on the screen.”
            </p>
            <figure className="wp-block-image size-large is-style-rounded">
              <img
                decoding="async"
                width={768}
                height={402}
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/AdobeStock_667233159-2048x1381-0-0-0-.jpeg"
                alt="Shrinking spreads"
                className="wp-image-14507 entered lazyloaded"
              />
            </figure>
            <p />
            <p className="pt-10">
              For SSOs, 10-20 names is a good starting point, enabling liquidity
              providers to scale up the necessary support for new names. From
              there, names can be added five at a time. The chart above shows an
              average 44% reduction in the spread between bid and offer prices
              for names that were added to the market maker program,
              illustrating a significant benefit to investors. This demonstrates
              the impact of the additional liquidity brought by market makers
              and reinforces B3’s commitment to fair pricing on the screen.
            </p>
            <h4 className="wp-block-heading has-dark-blue-color has-text-color">
              3 “Build depth in the order book to attract more institutional
              investors.”
            </h4>
            <p>
              Institutional investors typically trade larger volumes than retail
              investors. Technology is important for ensuring there is adequate
              liquidity for larger trade sizes, but so is a competitive and well
              managed market maker program, with obligations on size and number
              of contracts to ensure adequate depth in the book.&nbsp;
            </p>
            <p className="pb-10">
              “As trading volumes on the screen grew, we started to introduce
              more technology, and this &nbsp;enabled us to accredit more market
              makers in our programs,” said Skistymas. “This meant we could
              focus on the depth of the book and address the needs of
              institutional investors. Competition between market makers further
              tightened the spreads on the screen.”
            </p>
            <figure className="wp-block-image size-large is-style-rounded">
              <img
                decoding="async"
                width={768}
                height={402}
                src="https://optiver.com/wp-content/uploads/2023/07/Growing-market-maker-participation_1200x628-768x402.png"
                alt="Growing market-maker participation"
                className="wp-image-14508 entered lazyloaded"
              />
            </figure>
            <p />
            <h4 className="pt-10 wp-block-heading has-dark-blue-color has-text-color">
              4 “Bring new investors to the market and seek continuous
              feedback.”
            </h4>
            <p>
              Educating market participants such as brokers, asset managers,
              banks and international market makers and providing avenues for
              regular feedback was critical for B3. It was also important to
              demonstrate a commitment to act on this feedback when and where
              appropriate.
            </p>
            <p>
              “The educational process enabled us to better understand what we
              needed to address in terms of topics such as market maker
              obligations, new and existing products, discussions with the
              broker community, different trading strategies, etc.,” said
              Skistymas. “We tried to address all the points this community
              brought to us quickly. If there was a collective view that we
              needed to do something, then we tried to deliver very fast, so we
              didn’t lose the traction with them,” he added.
            </p>
            <p>
              This allowed B3 to capitalise on the surge in SSO trading that
              occurred during the pandemic. “We experienced very strong retail
              flows and we were prepared for it, because we had a very strong
              market maker program with more than seven market makers for each
              symbol, fair prices on the screen, depth in the book and a very
              robust monitoring process,” said Skistymas.
            </p>
            <h4 className="wp-block-heading has-dark-blue-color has-text-color">
              5 “Add new products and features.”
            </h4>
            <p>
              As the market matured, B3 was quick to introduce additional
              products and features. That could mean new expiries or even flex
              options, which provided more tools for investors to manage their
              risks and generate income.
            </p>
            <p>
              “We are now preparing for what we are calling the next generation
              of liquidity,” said Skistymas. The exchange is “looking firstly to
              develop and introduce weekly options and then further down the
              track, zero-day-to-expiry options.”
            </p>
            <h5 className="wp-block-heading">
              <strong>Conclusion</strong>
            </h5>
            <p>
              For B3, the result of these efforts is clear, and not just in
              trading volumes. In 2011, when the Brazilian SSO market looked
              very different, retail investors comprised more than 60% of market
              participants, with institutions making up 22% and international
              investors and market makers comprising just 13%.{" "}
            </p>
            <p className="pb-10">
              Today, retail investors make up around 24%, while non-resident
              investors and market makers are 51% and institutional investors
              comprise 24%. This represents a much healthier balance of investor
              types, a testament to what B3 has built and an example for
              exchanges around the globe.
            </p>
            <figure className="wp-block-image size-large is-style-rounded">
              <img
                decoding="async"
                width={768}
                height={402}
                src="https://optiver.com/wp-content/uploads/2023/07/Brazil-market-SSO-Investors_1200x628-768x402.png"
                alt="Brazil market: SSO Investors"
                className="wp-image-14509 entered lazyloaded"
              />
            </figure>
            <div
              style={{ height: 25 }}
              aria-hidden="true"
              className="wp-block-spacer pt-10"
            />
            <div
              style={{ height: 10 }}
              aria-hidden="true"
              className="wp-block-spacer"
            />
            <div
              style={{ height: 25 }}
              aria-hidden="true"
              className="wp-block-spacer"
            />
            <p>
              To discuss this paper – or any other market structure topic –
              reach out to the SBS APAC Corporate Strategy team at&nbsp;
              {/* <a href="mailto:Corporate_Strategy_APAC@optiver.com.au" /> */}
              <a>
                Corporate_Strategy_APAC@sbs.com.au
              </a>
            </p>
            <p>
              <em>
                <sup>
                  DISCLAIMER: Each of SBS Australia Pty Limited ABN 54 077
                  364 366 AFSL 244145, SBS Trading Hong Kong Limited APO583,
                  SBS Taiwan Futures Co., Ltd F034, SBS Singapore
                  Trading Pte Ltd UEN&nbsp; 202107169R and SBS (Shanghai)
                  Trading Company Limited (individually and collectively,
                  “SBS”) is a proprietary trading firm and trades
                  exclusively for the benefit of its own account or its’
                  affiliates. This communication is for informational purposes
                  only. It is not a recommendation to engage in investment
                  activities and must not be relied upon when making any
                  investment decisions. This communication does not consider the
                  investment objectives or financial situation of any particular
                  counterparty. All investments involve risk and no portion of
                  this document should be interpreted as legal, financial, tax,
                  or accounting advice, and should not be construed as an offer
                  to buy or sell, or a solicitation to buy or sell any future,
                  option, swap, or other derivative or financial instrument.
                  Entering into transactions with SBS does not create or
                  represent a customer relationship for either party. As such,
                  none of the regulatory provisions regarding customers will
                  apply to the transactions SBS enters into with you. There
                  are no warranties, expressed or implied, as to the accuracy or
                  completeness of any information provided herein. The sources
                  for the information and any opinions in this communication are
                  believed to be reliable, but SBS does not warrant or
                  guarantee the accuracy of such information or opinions.
                </sup>
              </em>
            </p>
          </section>
          <footer>
            <div className="topics">
              <span>Market structure</span>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default NDetail;
