import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import AboutShapeOne from "@/assets/images/shapes/about-shape-1.png";
import AboutShapeTwo from "@/assets/images/shapes/about-shape-2.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import AboutShapeFive from "@/assets/images/shapes/about-shape-5.png";
import BasicImg1 from "../../assets/images/home-1/basicImg1.webp";
import BasicImg2 from "../../assets/images/home-1/basicImg2.webp";

import "./AboutOne.css";

export default function AbutOne() {
  return (
    <section className="about-area pt-150 pb-150 position-relative">
      <div className="container">
        <div className="about-content">
          <div className="d-flex justify-content-between align-items-center mb-30" id="about-cont">
            <h2
              className="about-title split_chars"
              data-cs-stagger="0.05"
              data-cs-translate-x={-100}
              style={{color:"white"}}
            >
              Om oss
            </h2>

          </div>
          <div className="row about-text-contnet">
            <div className="col-lg-4 col-md-10 left-img mb-20 mb-lg-0">
              <img
                className="full-imgage fade-slide left"
                data-delay="0.2"
                src={BasicImg1}
                alt="man"
              />
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="section-entry-title mb-20-mb-lg-80">
                <h4
                  className="about-subtitle mb-20 fade-slide right"
                  data-delay="0.2"
                >
                  Dedikert & <span>Engasjert</span>
                </h4>
                <div className="fade-slide bottom" data-delay="0.4">
                  <p>
                    Sed at dolor sit amet leo porttitor semper sit amet vitae
                    quam. Sed varius, purus at consectetur faucibus, mi felis
                    porttitor leo, et volutpat orci lacus sit amet ex. Donec non
                    faucibus dolor, sed bibendum arcu. Sed malesuada eu nunc ut
                    ultrices. Donec mollis mauris laoreet.
                  </p>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-5 mb-20 mb-lg-0">
                  <img
                    className="right-sub-img full-image fade-slide right"
                    data-delay="0.3"
                    src={BasicImg2}
                    alt="woman"
                  />
                </div>
                <div className="col-lg-6">
                  <div
                    className="section-entry-title fade-slide bottom"
                    data-delay="0.4"
                  >
                    <h4 className="about-subtitle mb-20">
                      Over 8 år med <span>Erfaring</span>
                    </h4>
                    <p className="mb-16 ">
                      Mauris et pulvinar ante. Etiam id elementum ex. Nunc quis
                      odio Cras a ullamcorper ante. Donec id nulla posuere,
                      vulputate magna sagittis.
                    </p>
                    <div className="section-btn d-inline-block">
                      <a
                        href="contact"
                        className="btn-fill s-btn gap-2 d-flex align-items-center"
                        style={{zIndex:1000}}
                      >
                        Kontakt oss
                        <img
                          className="btn-icon-black"
                          src={ArrowTopYellow}
                          alt="Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img
        className="about-shape-1 moveBottom"
        src={AboutShapeOne}
        alt="Shape"
      />
      <img className="about-shape-2 moveLeft" src={AboutShapeTwo} alt="Shape" />
      <img
        className="about-shape-3 moveBottom"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="about-shape-4" src={AboutShapeFour} alt="Shape" style={{pointerEvents: "none"}} />
      <img className="about-shape-5" src={AboutShapeFive} alt="Shape" />
    </section>
  );
}
