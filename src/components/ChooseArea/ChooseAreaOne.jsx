import ColorIconThree from "@/assets/images/svg/color-icon-3.svg";
import ColorIconFour from "@/assets/images/svg/color-icon-4.svg";
import ColorIconSeven from "@/assets/images/svg/color-icon-7.svg";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import ChooseShape from "@/assets/images/shapes/choose-shape.png";

import WhyUs from "../../assets/images/bg/whyUs.webp";

export default function ChooseAreaOne() {
  return (
    <section className="choose-area pt-150 pb-150 position-relative">
      <div className="container">
        <div className="choose-wrapper">
          <div className="choose-left">
            <div className="fade-slide top" data-delay="0.2" >
              <h2 className="section-title pb-40">
                Hvorfor velge oss?
              </h2>
            </div>
            <img
              className="choose-img fade-slide bottom"
              data-delay="0.4"
              src={WhyUs}
              alt="House"
            />
          </div>
          <div className="choose-right-slider fade-slide top" data-delay="0.6">
            <div className="project-item choose-our-project">
              <div className="choose-list">
                <div className="choose-icon-img">
                  <img src={ColorIconThree} alt="Image" />
                </div>
                <div className="project-content text-start">
                  <h3 className="choose-title">Mye for pengene</h3>
                  <p className="choose-text">
                    Tjenesten vi tilbyr gir deg mye for pengene
                  </p>
                </div>
              </div>
              <div className="choose-list">
                <div className="choose-icon-img">
                  <img src={ColorIconFour} alt="Image" />
                </div>
                <div className="project-content text-start">
                  <h3 className="choose-title">Mange fornøyde kunder</h3>
                  <p className="choose-text">
                    Vi har over 100 fornøyde kunder
                  </p>
                </div>
              </div>
              <div className="choose-list">
                <div className="choose-icon-img">
                  <img src={ColorIconSeven} alt="Image" />
                </div>
                <div className="project-content text-start">
                  <h3 className="choose-title">Høy suksessrate</h3>
                  <p className="choose-text">
                    Vi har en av de høyeste suksessratene i fylket
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <img
        className="choose-shape-1 moveLeft"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="choose-shape-2" src={ChooseShape} alt="Shape" />
    </section>
  );
}
