import React, { useEffect } from "react";

const History = () => {
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
        className="wp-block-optiver-timeline lg:pb-36 pb-20"
        style={{ position: "relative" }}
      >
        <div className="arrow-prev">&lt;</div>
        <div className="wp-block-group container mx-auto xl:pl-14 pl-4">
          <div className="subheader h6">OUR HISTORY</div>
          <h2 className="wp-block-heading">A brief history of SBS</h2>
          <p>Discover our history and get a peek at our future.</p>
        </div>
        <div className="timeline-slide 2xl:pl-[224px] md:pl-20 pl-4">
          <div className="timeline-block">
            <div className="top-timeline" data-day={1986}>
              <img
                width={700}
                height={475}
                src="../wp-content/uploads/2022/06/oude-beurs-vloer-1-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="Our first trade"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/oude-beurs-vloer-1-1.jpg 700w, https://optiver.com/wp-content/uploads/2022/06/oude-beurs-vloer-1-1-576x391.jpg 576w"
                data-lazy-sizes="(max-width: 700px) 100vw, 700px"
                data-lazy-src="../wp-content/uploads/2022/06/oude-beurs-vloer-1-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 700px) 100vw, 700px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/oude-beurs-vloer-1-1.jpg 700w, https://optiver.com/wp-content/uploads/2022/06/oude-beurs-vloer-1-1-576x391.jpg 576w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">1986</div>
              <h2>Our first trade</h2>
              <p></p>
              <p>
                The SBS story begins with a single trader on the floor of
                Amsterdam’s European Options Exchange.
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={1000}
                height={709}
                src="../wp-content/uploads/2022/06/166A7524-2048x1453-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="Sydney office"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1-576x408.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1-768x545.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/166A7524-2048x1453-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1-576x408.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/166A7524-2048x1453-1-768x545.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">1996</div>
              <h2>Sydney office</h2>
              <p></p>
              <p>
                SBS opens its{" "}
                <a
                  data-id={102}
                  data-type="page"
                  href="/about-us/locations/sydney/"
                >
                  Sydney
                </a>{" "}
                office.
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day={1999}>
              <img
                width={1000}
                height={667}
                src="../wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="US operations"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1-768x512.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/tomas-eidsvold-Vhr4lk8gNBk-unsplash-2048x1365-1-768x512.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">1999</div>
              <h2>US operations</h2>
              <p></p>
              <p>US operation established in New York City.</p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={1000}
                height={667}
                src="../wp-content/uploads/2023/05/Taiwan-office-opening.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="SBS expands into Taiwan"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2023/05/Taiwan-office-opening.jpg 1000w, https://optiver.com/wp-content/uploads/2023/05/Taiwan-office-opening-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2023/05/Taiwan-office-opening-768x512.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2023/05/Taiwan-office-opening.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2023/05/Taiwan-office-opening.jpg 1000w, https://optiver.com/wp-content/uploads/2023/05/Taiwan-office-opening-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2023/05/Taiwan-office-opening-768x512.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">2005</div>
              <h2>Taipei</h2>
              <p></p>
              <p>
                SBS APAC expands to{" "}
                <a
                  href="/about-us/locations/taipei/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Taipei
                </a>
                .
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={1000}
                height={667}
                src="../wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="Growth in Chicago"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1-768x512.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/Optiver_CPVA7498_Office-Lifetsyle-2048x1365-1-1-768x512.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">2010</div>
              <h2>Growth in Chicago</h2>
              <p></p>
              <p>Headcount in our Chicago office surpasses 100.</p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={1000}
                height={667}
                src="../wp-content/uploads/2022/06/Trading-Desk-2048x1365-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="Shanghai"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/Trading-Desk-2048x1365-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/Trading-Desk-2048x1365-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/Trading-Desk-2048x1365-1-768x512.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/Trading-Desk-2048x1365-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/Trading-Desk-2048x1365-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/Trading-Desk-2048x1365-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/Trading-Desk-2048x1365-1-768x512.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">2012</div>
              <h2>Shanghai</h2>
              <p></p>
              <p>
                SBS APAC expands to{" "}
                <a
                  data-id={9592}
                  data-type="page"
                  href="/about-us/locations/shanghai/"
                >
                  Shanghai
                </a>
                .
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day={2019}>
              <img
                width={1000}
                height={667}
                src="../wp-content/uploads/2022/06/11901-2048x1365-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="UK foothold"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/11901-2048x1365-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/11901-2048x1365-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/11901-2048x1365-1-768x512.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/11901-2048x1365-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/11901-2048x1365-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/11901-2048x1365-1-576x384.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/11901-2048x1365-1-768x512.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">2019</div>
              <h2>UK foothold</h2>
              <p></p>
              <p>
                We open our{" "}
                <a
                  data-id={101}
                  data-type="page"
                  href="/about-us/locations/london/"
                >
                  London
                </a>{" "}
                office.
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={1000}
                height={1232}
                src="../wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="Two more openings"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1-468x576.jpg 468w, https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1-623x768.jpg 623w, https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1-768x946.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1-468x576.jpg 468w, https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1-623x768.jpg 623w, https://optiver.com/wp-content/uploads/2022/06/AdobeStock_163598067-scaled-1-768x946.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">2021</div>
              <h2>Two more openings</h2>
              <p></p>
              <p>
                SBS opens offices in{" "}
                <a
                  data-id={5558}
                  data-type="page"
                  href="/about-us/locations/austin/"
                >
                  Austin
                </a>
                , TX and{" "}
                <a
                  data-id={8421}
                  data-type="page"
                  href="/about-us/locations/singapore/"
                >
                  Singapore
                </a>
                .
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={1000}
                height={681}
                src="../wp-content/uploads/2022/06/London_lobby-2048x1395-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt="London lobby"
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/06/London_lobby-2048x1395-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/London_lobby-2048x1395-1-576x392.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/London_lobby-2048x1395-1-768x523.jpg 768w"
                data-lazy-sizes="(max-width: 1000px) 100vw, 1000px"
                data-lazy-src="../wp-content/uploads/2022/06/London_lobby-2048x1395-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcSet="https://optiver.com/wp-content/uploads/2022/06/London_lobby-2048x1395-1.jpg 1000w, https://optiver.com/wp-content/uploads/2022/06/London_lobby-2048x1395-1-576x392.jpg 576w, https://optiver.com/wp-content/uploads/2022/06/London_lobby-2048x1395-1-768x523.jpg 768w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">2022</div>
              <h2>The present</h2>
              <p></p>
              <p>
                SBS opens its first ‘
                <a
                  data-id={10244}
                  data-type="career"
                  href="/working-at-optiver/career-hub/optiver-opens-state-of-the-art-london-office/"
                >
                  office of the future
                </a>
                ’ in London.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-next">&gt;</div>
      </section>
    </>
  );
};

export default History;
