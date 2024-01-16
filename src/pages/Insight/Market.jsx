import React, { useEffect } from "react";
const Market = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <section
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="wp-block-optiver-latest lg:pb-36 pb-20"
        >
          <div className="container mx-auto">
            <div className="wp-block-heading subheader h6 roboto-mono">
              Latest
            </div>
            <h2 className="wp-block-heading century lg:text-[50px] text-4xl mb-10">Market structure</h2>
            <div className="items">
              <ul className="result-list">
                <li
                  className="php-result-item item item-posttype-insights item-viewmode-grid"
                  style={{ cursor: "pointer" }}
                >
                  <article>
                    <header className="thumbnail-insights">
                      <img
                        width={2560}
                        height={1400}
                        src="https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3.png"
                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                        alt="Building an equity options market: The story of Brazil’s B3"
                      />
                      <div className="badge-series">
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
                        <span className="text-term">Series</span>
                      </div>
                    </header>
                    <main>
                      <span>Market structure</span>
                      <h2 className="h4 ss bold century">
                        <a href="/insights/building-an-equity-options-market-the-story-of-brazils-b3/">
                          Building an equity options market: The story of
                          Brazil’s B3{" "}
                        </a>
                      </h2>
                      <p>
                        In this article, we trace how Brazil’s B3 built one of
                        the most successful global SSO markets almost from
                        scratch, providing an example for exchanges around the
                        globe.{" "}
                      </p>
                      <a
                        className="btn-animate"
                        href="/insights/building-an-equity-options-market-the-story-of-brazils-b3/"
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
                      <span>Asia Pacific</span>
                    </footer>
                  </article>
                </li>
                <li
                  className="php-result-item item item-posttype-insights item-viewmode-list"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-term">Market structure</p>
                  <div>
                    <h5 className="h5">
                      A plan for tackling closing auction outages
                    </h5>
                    <a
                      className="btn btn-icon btn-secondary"
                      href="/insights/a-plan-for-tackling-closing-auction-outages/"
                    >
                      <span className="sr-only">Learn more</span>
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3382 0.146446L19.5202 3.32843C19.7155 3.52369 19.7155 3.84027 19.5202 4.03553L16.3382 7.21751C16.143 7.41278 15.8264 7.41278 15.6311 7.21751C15.4359 7.02225 15.4359 6.70567 15.6311 6.51041L17.9596 4.18198L-6.09334e-08 4.18198L-4.63629e-08 3.18198L17.9596 3.18198L15.6311 0.853553C15.4359 0.658291 15.4359 0.341709 15.6311 0.146446C15.8264 -0.0488158 16.143 -0.0488158 16.3382 0.146446Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>EMEA</p>
                </li>
                <li
                  className="php-result-item item item-posttype-insights item-viewmode-list"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-term">Market structure</p>
                  <div>
                    <h5 className="h5">
                      Equity options: Who uses them and why?
                    </h5>
                    <a
                      className="btn btn-icon btn-secondary"
                      href="/insights/equity-options-who-uses-them-and-why/"
                    >
                      <span className="sr-only">Learn more</span>
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3382 0.146446L19.5202 3.32843C19.7155 3.52369 19.7155 3.84027 19.5202 4.03553L16.3382 7.21751C16.143 7.41278 15.8264 7.41278 15.6311 7.21751C15.4359 7.02225 15.4359 6.70567 15.6311 6.51041L17.9596 4.18198L-6.09334e-08 4.18198L-4.63629e-08 3.18198L17.9596 3.18198L15.6311 0.853553C15.4359 0.658291 15.4359 0.341709 15.6311 0.146446C15.8264 -0.0488158 16.143 -0.0488158 16.3382 0.146446Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>Asia Pacific</p>
                </li>
                <li
                  className="php-result-item item item-posttype-insights item-viewmode-list"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-term">Market structure</p>
                  <div>
                    <h5 className="h5">Consectatur dolor</h5>
                    <a
                      href="t1-the-case-for-one-day-settlement-in-europe/index.html"
                      className="btn btn-icon btn-secondary"
                    >
                      <span className="sr-only">Learn more</span>
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3382 0.146446L19.5202 3.32843C19.7155 3.52369 19.7155 3.84027 19.5202 4.03553L16.3382 7.21751C16.143 7.41278 15.8264 7.41278 15.6311 7.21751C15.4359 7.02225 15.4359 6.70567 15.6311 6.51041L17.9596 4.18198L-6.09334e-08 4.18198L-4.63629e-08 3.18198L17.9596 3.18198L15.6311 0.853553C15.4359 0.658291 15.4359 0.341709 15.6311 0.146446C15.8264 -0.0488158 16.143 -0.0488158 16.3382 0.146446Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>EMEA</p>
                </li>
              </ul>
            </div>
            <p />
          </div>
        </section>
      </div>
    </>
  );
};

export default Market;
