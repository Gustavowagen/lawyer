import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import AboutUs2 from "../../assets/images/bg/aboutUs2.webp";

export default function AboutTwo() {
  return (
    <section className="about-area-3 pt-150 pb-150">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="about-left-3 fade-slide left" data-delay="0.2">
              <img src={AboutUs2} alt="Image" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="about-right-3">
              <h2
                className="section-title pb-20 fade-slide bottom"
                data-delay="0.4"
              >
                Vi gir deg den beste hjelpen du kan få
              </h2>
              <div className="about-btm-3 fade-slide bottom" data-delay="0.6">
                <div className="about-item-3">
                  <div className="about-item-left-3">
                    <h3 className="about-subtitle-3">Vårt mål</h3>
                    <p className="about-subtext-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quod, vitae illo doloremque illum deserunt? Maxime corrupti deserunt debitis et.
                    </p>
                  </div>
                  <div className="about-item-right-3">
                    <div className="parent-skill">
                      <div className="skill">
                        <ReactVisibilitySensor delayedCall>
                          {({ isVisible }) => (
                            <div className="progress">
                              {isVisible ? (
                                <CountUp
                                  className="progress-number"
                                  start={0}
                                  end={80}
                                />
                              ) : (
                                0
                              )}
                              %
                            </div>
                          )}
                        </ReactVisibilitySensor>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-item-3">
                  <div className="about-item-left-3">
                    <h3 className="about-subtitle-3">Vår visjon</h3>
                    <p className="about-subtext-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quos modi laborum corporis aut cum beatae deleniti harum ipsum molestiae!
                    </p>
                  </div>
                  <div className="about-item-right-3">
                    <div className="parent-skill">
                      <div className="skill">
                        <ReactVisibilitySensor delayedCall>
                          {({ isVisible }) => (
                            <div className="progress">
                              {isVisible ? (
                                <CountUp
                                  className="progress-number"
                                  start={0}
                                  end={75}
                                />
                              ) : (
                                0
                              )}
                              %
                            </div>
                          )}
                        </ReactVisibilitySensor>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
