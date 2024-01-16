import React, { useEffect } from "react";

const Interview = () => {
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
        className="wp-block-optiver-timeline has-light-blue-background-color has-background bg-[#F0F6FC]  lg:py-36 py-20"
        style={{ position: "relative" }}
      >
        <div className="arrow-prev">&lt;</div>
        <div className="wp-block-group container mx-auto xl:px-10 px-4 2xl:pl-8">
          <div className="subheader h6">ONBOARDING</div>
          <h2 className="wp-block-heading">Discover our interview process</h2>
          <p>
            Our interview process varies by role, but there are a few things
            they all share in common.
          </p>
        </div>
        <div className="timeline-slide" style={{ paddingLeft: 224 }}>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={716}
                height={800}
                src="../wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg 716w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-516x576.jpg 516w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-687x768.jpg 687w"
                data-lazy-sizes="(max-width: 716px) 100vw, 716px"
                data-lazy-src="../wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 716px) 100vw, 716px"
                srcSet="https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg 716w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-516x576.jpg 516w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-687x768.jpg 687w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">01</div>
              <h2>Application</h2>
              <p></p>
              <p>Submit your job application and information on our website.</p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day></div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">02</div>
              <h2>Assessments</h2>
              <p></p>
              <p>
                Our assessments vary based on role, skill level and experience,
                and may include quantitative, cognitive or technical
                assessments.
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={716}
                height={800}
                src="../wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg 716w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-516x576.jpg 516w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-687x768.jpg 687w"
                data-lazy-sizes="(max-width: 716px) 100vw, 716px"
                data-lazy-src="../wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 716px) 100vw, 716px"
                srcSet="https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg 716w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-516x576.jpg 516w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-687x768.jpg 687w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">03</div>
              <h2>Initial interviews</h2>
              <p></p>
              <p>
                Candidates are invited for a conversation to assess skills,
                cultural fit and working style.
              </p>
            </div>
          </div>
          <div className="timeline-block">
            <div className="top-timeline" data-day>
              <img
                width={716}
                height={800}
                src="../wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                alt
                decoding="async"
                data-lazy-srcset="https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg 716w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-516x576.jpg 516w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-687x768.jpg 687w"
                data-lazy-sizes="(max-width: 716px) 100vw, 716px"
                data-lazy-src="../wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg"
                data-ll-status="loaded"
                sizes="(max-width: 716px) 100vw, 716px"
                srcSet="https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1.jpg 716w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-516x576.jpg 516w, https://optiver.com/wp-content/uploads/2022/07/jenny-ueberberg-Q_MfGy0PQZw-unsplash-1-687x768.jpg 687w"
              />
            </div>
            <div className="bottom-timeline">
              <div className="timeline-day upper">04</div>
              <h2>Final interviews and discussions</h2>
              <p></p>
              <p>
                Candidates typically undergo a series of behavioral and
                technical interviews to further dive into how they think.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-next">&gt;</div>
      </section>
    </>
  );
};

export default Interview;
