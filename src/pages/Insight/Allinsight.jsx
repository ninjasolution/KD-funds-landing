import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Allinsight = () => {
  const [selects, setSelects] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null); // New state for selected option

  // Your list of options
  const options = ["All topics", "Insight", "News", "Landscape", "Management"];

  // Filter options based on search query
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelects(false); // Hide the dropdown after selecting an option
  };
  const handleNextButtonClick = () => {
    setShowForm2(true);
  };
  //
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-[#EDEDED] lg:py-36 py-20 wp-block-optiver-archive-page archive has-grey-background-color has-light-grey-background-color has-background has-light-grey-background-color has-background">
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="container mx-auto"
        >
          <div className="wp-block-group">
            <h2 className="wp-block-heading lg:text-[50px] text-4xl mb-10">All Insights</h2>
          </div>
          <form
            name="form"
            className="archive"
            method="get"
            x-data="archiveSearch()"
            x-init="archiveSearchInit()"
          >
            <div className="row search">
              <div className="search-select-butons lg:w-[450px] ml-auto">
                <div className="relative bg-white rounded-t-3xl">
                  <svg
                    className="absolute right-3 top-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 15l-4 4l-4 -4" />
                  </svg>

                  <p
                    onClick={() => setSelects(!selects)}
                    className="cursor-pointer border py-3 px-3 outline-none h-10 flex items-center text-sm w-full"
                  >
                    {selectedOption ? selectedOption : "Select an option"}
                  </p>
                  <div
                    className={`absolute w-full bg-white z-50 border px-2 ${
                      selects ? "" : "hidden"
                    }`}
                  >
                    <input
                      type="search"
                      className="w-full border my-2 outline-none py-2 px-2 rounded-full"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="w-full pt-1 h-[180px] overflow-y-auto">
                      {filteredOptions.map((option, index) => (
                        <p
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className="hover:bg-[#94adbf] px-3 hover:text-white py-2 cursor-pointer"
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="form-control form-field-search">
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="Search"
                      name="search"
                      defaultValue
                    />
                    <svg
                      width={23}
                      height={22}
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.51613"
                        cy="8.51613"
                        r="8.01613"
                        stroke="#3D4043"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="14.9005"
                        y1="14.1935"
                        x2="21.9998"
                        y2="21.2929"
                        stroke="#3D4043"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="result items">
              <div
                className="empty-result"
                x-show="isEmptyResult"
                style={{ display: "none" }}
              >
                <p>Sorry, no results available.</p>
              </div>
              <ul className="result-list">
                <Link to="/insight-detail">
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
                        <h2 className="h4 ss bold">
                          <a>
                            Building an equity options market: The story of
                            Brazil’s B3
                          </a>
                        </h2>
                        <p>
                          In this article, we trace how Brazil’s B3 built one of
                          the most successful global SSO markets almost from
                          scratch, providing an example for exchanges around the
                          globe.{" "}
                        </p>
                        <a className="btn-animate">
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
                </Link>
                <Link to="/insight-detail">
                  <li
                    className="php-result-item item item-posttype-insights item-viewmode-grid"
                    style={{ cursor: "pointer" }}
                  >
                    <article>
                      <header className="thumbnail-insights">
                        <img
                          width={2560}
                          height={1280}
                          src="https://optiver.com/wp-content/uploads/2023/06/Electricity-cable-scaled.jpeg"
                          className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                          alt
                        />
                      </header>
                      <main>
                        <span>Market structure</span>
                        <h2 className="h4 ss bold">
                          <a>A plan for tackling closing auction outages </a>
                        </h2>
                        <p>
                          Closing auction outages are rare, but they do happen.
                          While recent regulatory efforts have been aimed at
                          outages during normal trading hours, more needs to be
                          done to protect the closing auction.{" "}
                        </p>
                        <a className="btn-animate">
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
                        <span>EMEA</span>
                      </footer>
                    </article>
                  </li>
                </Link>
                <Link to="/insight-detail">
                  <li
                    className="php-result-item item item-posttype-insights item-viewmode-grid"
                    style={{ cursor: "pointer" }}
                  >
                    <article>
                      <header className="thumbnail-insights">
                        <img
                          width={2561}
                          height={1400}
                          src="https://optiver.com/wp-content/uploads/2023/05/iStock-1281937814.jpg"
                          className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                          alt="Equity Options: Who Uses Them and Why?"
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
                        <h2 className="h4 ss bold">
                          <a>Equity options: Who uses them and why? </a>
                        </h2>
                        <p>
                          This is the second in a series of articles exploring
                          single-stock options in key Asia Pacific (APAC)
                          markets. Following an outline of the present situation
                          for equity options in each of these markets, we offer
                          our recommendations for how to grow them. In this
                          article, we discuss the uses and popularity of SSOs.{" "}
                        </p>
                        <a className="btn-animate">
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
                </Link>
                <Link to="/insight-detail">
                  <li
                    className="php-result-item item item-posttype-insights item-viewmode-grid"
                    style={{ cursor: "pointer" }}
                  >
                    <article>
                      <header className="thumbnail-insights">
                        <img
                          width={2560}
                          height={1506}
                          src="https://optiver.com/wp-content/uploads/2023/02/AdobeStock_498757393-scaled.jpeg"
                          className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                          alt
                        />
                      </header>
                      <main>
                        <span>Market structure</span>
                        <h2 className="h4 ss bold">
                          <a>Consectatur dolor </a>
                        </h2>
                        <p>
                          We encourage Europe to follow the US’s lead and move
                          to T+1 settlement, but we caution that there are
                          numerous complexities to iron out.{" "}
                        </p>
                        <a className="btn-animate">
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
                        <span>EMEA</span>
                      </footer>
                    </article>
                  </li>
                </Link>
                <Link to="/insight-detail">
                  <li
                    className="php-result-item item item-posttype-insights item-viewmode-grid"
                    style={{ cursor: "pointer" }}
                  >
                    <article>
                      <header className="thumbnail-insights">
                        <img
                          width={2560}
                          height={1707}
                          src="https://optiver.com/wp-content/uploads/2023/04/AdobeStock_210414981-scaled.jpeg"
                          className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                          alt
                        />
                      </header>
                      <main>
                        <span>Market regulation</span>
                        <h2 className="h4 ss bold">
                          <a>A new playbook for Europe’s capital markets </a>
                        </h2>
                        <p>
                          We propose a new playbook for turning Europe’s capital
                          markets into a healthier place.{" "}
                        </p>
                        <a className="btn-animate">
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
                        <span>EMEA</span>
                      </footer>
                    </article>
                  </li>
                </Link>
                <Link to="/insight-detail">
                  <li
                    className="php-result-item item item-posttype-insights item-viewmode-grid"
                    style={{ cursor: "pointer" }}
                  >
                    <article>
                      <header className="thumbnail-insights">
                        <img
                          width={2559}
                          height={1399}
                          src="https://optiver.com/wp-content/uploads/2023/04/How-to-bring-APACs-equity-options-markets-to-life.jpg"
                          className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                          alt
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
                        <h2 className="h4 ss bold">
                          <a>
                            How to bring APAC’s equity options markets to life{" "}
                          </a>
                        </h2>
                        <p>
                          In this series of articles, we’re exploring
                          single-stock options markets in key regions of APAC.
                          After describing the state of play for equity options
                          in each of these markets, we offer our recommendations
                          for how to grow them.{" "}
                        </p>
                        <a className="btn-animate">
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
                </Link>
              </ul>
            </div>
            <div
              className="row"
              x-show="isNoMoreResults"
              style={{ display: "none" }}
            >
              <p>Sorry, no more results available.</p>
            </div>
            <div className="row loadmore">
              <a
                className="btn btn-primary"
                x-on:click="onLoadMore"
                x-show="showLoadMore"
                title="Load more"
              >
                Load more
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Allinsight;
