import ImergencyShapeOne from "@/assets/images/shapes/emergency-shape-1.png";
import ImergencyShapeTwo from "@/assets/images/shapes/emergency-shape-2.png";
import { Link } from "react-router-dom";
import AboutUs3 from "../../assets/images/bg/aboutUs3.webp";
import AboutUs4 from "../../assets/images/bg/aboutUs4.webp";

export default function EmmergencyCaseOne() {
  return (
    <section className="emargency-case pt-140 pb-150 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div
              className="d-flex flex-column mb-40 fade-slide right"
              data-delay="0.4"
            >
              <h2 className="section-title">
                Ditt prioriterte advokatfirma
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="fade-slide bottom" data-delay="0.2">
              <p className="emargency-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eaque inventore culpa, itaque perspiciatis aspernatur adipisci vitae explicabo maxime accusantium officiis ex cum ipsam natus. Reprehenderit explicabo illo sunt aspernatur.
              </p>
            </div>
            <img
              className="fade-slide bottom"
              data-delay="0.4"
              src={AboutUs4}
              alt="image"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column">
            <div className="col">
              <img
                className="mb-20 fade-slide right"
                data-delay="0.2"
                src={AboutUs3}
                alt="image"
              />
              <div className="fade-slide bottom" data-delay="0.4">
                <p className="emargency-subtitle">
                  Vi engasjerer oss innenfor vårt fagfelt
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum in consectetur corporis commodi amet sint quas tempora illum similique laborum, cupiditate est quaerat magnam? Blanditiis iste exercitationem eligendi excepturi dicta.
                </p>
              </div>
            </div>
            <div className="col d-block d-md-none mb-30">
              <p className="mb-20">
                A non-emergency medical transport (NEMT) company provides
                transportation for disabled, elderly, and other people who need
                help accidents.
              </p>
              
            </div>
            <div
              className="section-btn w-fit fade-slide bottom"
              data-delay="0.4"
            >
              <Link
                to="/contact"
                className="btn-fill s-btn d-flex align-items-center"
              >
                Kontakt oss
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img className="emargency-shape-1" src={ImergencyShapeOne} alt="Shape" />
      <img className="emargency-shape-2" src={ImergencyShapeTwo} alt="Shape" />
    </section>
  );
}
