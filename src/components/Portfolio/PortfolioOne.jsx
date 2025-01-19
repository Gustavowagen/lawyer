import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import PersonalInjuryImage from "@/assets/images/portfolios/parsonal-injury.svg";
import HouseImage from "@/assets/images/portfolios/house.webp";

import PortfolioIconTwo from "@/assets/images/portfolios/icon-2.svg";
import pShape from "@/assets/images/shapes/p-shape-2.png";
import { Link } from "react-router-dom";
import WideChair from "../../assets/images/home-1/wheelchair-wide.jpg";
import WideAccident from "../../assets/images/home-1/ulykke-wide.jpg";

export default function PortfolioOne() {
  return (
    <section className="portfolio-area position-relative">
      <div className="container-one">
        <div className="portfolio-content pb-120">
          <div className="container">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-150 mb-sm-50 gap-2">
              <div className="portfolio-top-wrap mb-50">
                <h2 className="section-title move-line-3d">
                  Alertnative tjenester
                </h2>
              </div>
              <div
                className="section-btn mb-30 mb-sm-0 fade-slide top"
                data-delay="0.2"
              >
                <Link to="/contact" className="btn-fill gap-2 s-btn">
                  Kontakt oss
                  <img
                    className="btn-icon-black"
                    src={ArrowTopYellow}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            <div className="accordion portfolio-accordion" id="myAccordion">
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.2"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingOne"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PersonalInjuryImage}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">Personlig skade</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt adipisci commodi blanditiis porro itaque nihil soluta vitae, aliquam, esse perspiciatis sapiente ut sit exercitationem aperiam rerum saepe, quo reiciendis repudiandae!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={WideChair}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex incidunt est et obcaecati exercitationem quas quasi repellendus asperiores, neque, suscipit corporis consequuntur nobis tenetur ratione in sed voluptatem accusamus!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.4"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingTwo"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PortfolioIconTwo}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">Bilulykker</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum voluptate id blanditiis numquam unde veritatis fuga adipisci voluptatem repellendus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={WideAccident}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque beatae temporibus accusamus debitis velit consequuntur veniam voluptates nam repellat voluptas molestiae eaque omnis, impedit in quod doloremque asperiores dolorem sequi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="portfolio-shape" src={pShape} alt="Shape" />
      </div>
    </section>
  );
}
