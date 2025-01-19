import ArrowDownYellow from "@/assets/images/icons/arrow-down-yellow.svg";

import Ansatt1 from "../../assets/images/teams/ansatt1.webp";
import Ansatt2 from "../../assets/images/teams/ansatt2.webp";
import Ansatt3 from "../../assets/images/teams/ansatt3.webp";
import Ansatt4 from "../../assets/images/teams/ansatt4.webp";
import Ansatt5 from "../../assets/images/teams/ansatt5.webp";
import Ansatt6 from "../../assets/images/teams/ansatt6.webp";
import Ansatt7 from "../../assets/images/teams/ansatt7.webp";

import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import { Link } from "react-router-dom";


export default function TeamOne() {
  return (
    <section className="team-member pt-140 pb-150 position-relative">
      <div className="container">
        <div className="col-12 col-md-10 col-lg-7 m-auto text-center">
          <h2
            className="section-title text-center pb-50 fade-slide bottom"
            data-delay="0.4"
          >
            Våre ansatte
          </h2>
        </div>
        <div className="gallery-card-grid">
          <div className="fade-slide bottom" data-delay="0.2">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt1}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Eier</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                    Navn 1
                  </h3>
                  <br/>
                </div>
              </div>
            </article>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt2}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Advokat</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                    Navn 2
                  </h3>
                </div>
              </div>
            </article>
          </div>
          <div className="fade-slide bottom" data-delay="0.6">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt3}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Advokatr</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                    Navn 3
                  </h3>
                </div>
              </div>
            </article>
          </div>
          <div className="fade-slide bottom" data-delay="0.8">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt4}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Advokat</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                   Navn 4
                  </h3>
                </div>
              </div>
            </article>
          </div>
          <div className="fade-slide bottom" data-delay="0.2">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt5}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Advokat</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                    Navn 5
                  </h3>
                </div>
              </div>
            </article>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt6}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Skilsmisseadvokat</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                    Navn 6
                  </h3>
                </div>
              </div>
            </article>
          </div>
          <div className="fade-slide bottom" data-delay="0.6">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={Ansatt7}
                  alt="Crimanal"
                />
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">Firmaadvokat</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3 className="team-title">
                    Navn 7
                  </h3>
                </div>
              </div>
            </article>
          </div>
          <div
            className="fade-slide bottom d-flex align-items-center justify-content-center"
            data-delay="0.6"
          >
            <div className="d-flex justify-content-center align-items-center">
              <Link
                to="#"
                className="round-btn d-flex flex-column gap-2 justify-content-center align-items-center"
              >
                Oversikt
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
      {/* Shape  */}
      <img
        className="team-shape-1 moveBottom"
        src={AboutShapeThree}
        alt="Shape"
        style={{pointerEvents:"none"}}
      />
      <img className="team-shape-2" src={AboutShapeFour} alt="Shape" />
    </section>
  );
}
