import ServiceIconOne from "@/assets/images/svg/service-icon-1.svg";
import ServiceIconSix from "@/assets/images/svg/service-icon-6.svg";
import ServiceIconSeven from "@/assets/images/svg/service-icon-7.svg";
import ServiceIconEight from "@/assets/images/svg/service-icon-8.svg";
import ServiceIconNine from "@/assets/images/svg/service-icon-9.svg";
import ServiceIconTen from "@/assets/images/svg/service-icon-10.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ServiceShapeFour from "@/assets/images/shapes/service-shape-4.png";
import { Link } from "react-router-dom";

export default function LegalPracticeServiceTwo() {
  return (
    <section className="service-area-4 pt-150 pb-150 position-relative">
      <div className="container">
        <div className="service-topwrap-3 text-center pb-50">
          <h2 className="section-title fade-slide bottom" data-delay="0.4">
            Våre tjenester
          </h2>
        </div>
        <div className="more-service">
          <div className="fade-slide bottom" data-delay="0.2">
            <div className="service-item-4">
              <img src={ServiceIconOne} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Ulykker
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <div className="service-item-4">
              <img src={ServiceIconNine} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Lover for studenter
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.6">
            <div className="service-item-4">
              <img src={ServiceIconEight} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Familielover
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.8">
            <div className="service-item-4">
              <img src={ServiceIconSeven} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Forsikring
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.2">
            <div className="service-item-4">
              <img src={ServiceIconTen} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Skilsmisse
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <div className="service-item-4">
              <img src={ServiceIconSix} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Bilskader
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.6">
            <div className="service-item-4">
              <img src={ServiceIconTen} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Kriminalitet blant unge
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.8">
            <div className="service-item-4">
              <img src={ServiceIconEight} className="service-img-4" alt="img" />
              <h3>
                <Link className="service-title-4" to="/services">
                  Helse og skader
                </Link>
              </h3>
              <p className="service-text-4">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
              <Link to="/services" className="service-btn-4">
                <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img
        className="service-shape-four-1"
        src={ServiceShapeFour}
        alt="Shape"
      />
    </section>
  );
}
