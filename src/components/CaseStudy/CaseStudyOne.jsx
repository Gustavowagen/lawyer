import ArrowTopRight from "@/assets/images/icons/arrow-top-dark.svg";
import ArrowDownYellow from "@/assets/images/icons/arrow-down-yellow.svg";
import ServiceShapeOne from "@/assets/images/shapes/service-shape-1.png";
import ServiceShapeTwo from "@/assets/images/shapes/service-shape-2.png";

import { cases } from "@/data/cases";
import { Link } from "react-router-dom";

export default function CaseStudyOne() {
  return (
    <section className="our-service pb-150 position-relative">
      <div className="container">
        <div className="col-12 col-md-10 col-lg-7 m-auto pb-50 text-center">
          <h2
            className="section-title text-center fade-slide bottom"
            data-delay="0.4"
          >
            Våre Tjenester
          </h2>
        </div>
        <div className="gallery-card-grid mb-40">
          {cases &&
            cases.length > 0 &&
            cases.map((caseItem, index) => (
              <article
                key={index}
                className="fade-slide bottom"
                data-delay="0.2"
              >
                <div className="img">
                  <img
                    className="service-thumb-img"
                    src={caseItem.image}
                    alt="Crimanal"
                  />
                </div>
                <div className="text">
                  <div className="card-icon-wrap btn-hover-gradiant">
                    <img className="card-icon" src={caseItem.icon} alt="icon" />
                  </div>
                  {caseItem.title && (
                    <h4 className="service-title">{caseItem.title}</h4>
                  )}
                  {caseItem.description && (
                    <p>
                      Maecenas efficitur neque posu rutrum justo vel, placerat.
                    </p>
                  )}
                </div>
                <Link
                  to="/services"
                  className="btn-fill gap-2 cursor-Pointer d-flex align-items-center"
                >
                  {caseItem.btnText}
                  <img
                    className="btn-icon-black"
                    src={ArrowTopRight}
                    alt="Icon"
                  />
                </Link>
              </article>
            ))}

          <div className="d-xl-none d-lg-flex d-none align-items-center justify-content-center">
            <div className="service-btn">
              <div
                className="d-flex justify-content-center align-items-center fade-slide bottom"
                data-delay="0.2"
              >
                <Link
                  to="/services"
                  className="round-btn d-flex gap-2 flex-column justify-content-center align-items-center"
                >
                  <span className="btn-text">Mer Detaljer</span>
                  <img
                    className="btn-icon-black"
                    src={ArrowDownYellow}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="none-lg d-xl-block d-lg-none d-block">
          <div
            className="d-flex justify-content-center align-items-center fade-slide bottom"
            data-delay="0.2"
          >
            <Link
              to="/services"
              className="round-btn d-flex gap-2 flex-column justify-content-center align-items-center"
            >
              <span className="btn-text">Mer Detaljer</span>
              <img
                className="btn-icon-black"
                src={ArrowDownYellow}
                alt="Icon"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Shape  --> */}
      <img className="service-shape-1" src={ServiceShapeOne} alt="Shape" />
      <img className="service-shape-2" src={ServiceShapeTwo} alt="Shape" />
    </section>
  );
}
