import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import FaqSidebar from "@/components/Faq/FaqSidebar";

import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import FaqImage from "../../assets/images/bg/questions.jpg";
import { useEffect } from "react";

export default function FaqPage() {

  useEffect(() => {
    try {
      const backdrop = document.querySelector(".offcanvas-backdrop");
      const root = document.querySelector("#root");
  
      // Check if `backdrop` exists before trying to remove it
      if (backdrop && root) {
        root.removeChild(backdrop);
      }
    } catch (error) {
      console.error("Error removing backdrop:", error.message);
    }
  }, []);

  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={FaqImage} title="Vanlige spørsmål" />
        <section className="faq-area pt-150 position-relative overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-12 col-12 mb-20 mb-lg-0">
                <div className="details-left-content details-entry-title">

                  <h2 className="section-title mb-10">
                    Her er noen av de vanligste spørsmålene vi får
                  </h2>
                  <div
                    className="accordion portfolio-accordion portfolio-accordion-2 mt-50 mb-50"
                    id="myAccordion"
                  >
                    <div className="accordion-item portfolio-accordion-item ">
                      <div
                        className="accordion-header cursor-Pointer"
                        id="headingOne"
                      >
                        <div
                          className="accordion-button collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <h3 className="faq-item-title">
                            Spørsmål1
                          </h3>
                        </div>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#myAccordion"
                      >
                        <p className="faq-content">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus illum laboriosam a, temporibus voluptatem ipsa veniam tempore excepturi architecto!
                        </p>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingTwo"
                        >
                          <div
                            className="accordion-button collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                          >
                            <h3 className="faq-item-title">
                              Spørsmål2
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nobis voluptatem aperiam, quidem laborum a incidunt nemo earum tempore corrupti?
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingThree"
                        >
                          <div
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                          >
                            <h3 className="faq-item-title">
                              Spørsmål3
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus quo amet voluptatem fugit fuga! Aspernatur magnam optio dignissimos consectetur.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingFour"
                        >
                          <div
                            className="accordion-button collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                          >
                            <h3 className="faq-item-title">
                              Spørsmål4
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat praesentium dicta recusandae non. Blanditiis doloremque laborum porro officia iusto minus.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingFive"
                        >
                          <div
                            className="accordion-button collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                          >
                            <h3 className="faq-item-title">
                              Spørsmål5
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi deserunt! Odit dignissimos id facere fuga suscipit natus, possimus laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                <FaqSidebar />
              </div>
            </div>
          </div>
          <img className="about-shape-four-1" src={ShadowShape} alt="Shape" />
        </section>
      </main>
    </InnerLayout>
  );
}
