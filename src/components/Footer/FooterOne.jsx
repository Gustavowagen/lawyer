import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";

import FooterShapeOne from "@/assets/images/shapes/footer-shape-1.png";
import FooterShapeTwo from "@/assets/images/shapes/footer-shape-2.png";
import FooterShapeThree from "@/assets/images/shapes/footer-shape-3.png";
import FooterShapeFour from "@/assets/images/shapes/footer-shape-4.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import CounterOne from "../Counter/CounterOne";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/images/logos/logo-no-bg.png";


export default function FooterOne() {
  return (
    <footer className="footer-area">
      <div className="container">
        <CounterOne />
        <div className="footer-content footer-two-border">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-10 col-12 mb-40 mb-lg-0-">
              <div className="footer-left">
                <Link to="/" className="footer-logo mb-30 d-block">
                  <img src={Logo1} alt="footer-logo" width={"75px"}/>
                </Link>
                <div className="footer-text mb-30 ">
                  <p className="footer-content">
                    Ditt advokatfirma
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-10 col-12">
              <div className="footer-right">
                <div className="footer-nav-menu">
                  <h3 className="footer-title">Linker</h3>
                  <ul className="footer-list">
                    <li>
                      <Link className="footer-link" to="/services">
                        Tjenester
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/contact">
                        Kontakt oss
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/faq">
                        Vanlige spørmsål
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/about">
                        Om oss
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <h3 className="footer-title">Kontor 1</h3>
                  <ul className="footer-list">
                    <li>Sandnes, Rogaland</li>
                    <li>Adresse 123</li>
                    <li>
                      <Link className="footer-link" to="#">
                        51 51 51 51
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <h3 className="footer-title">Kontor 2</h3>
                  <ul className="footer-list">
                    <li>Stavanger, Rogaland</li>
                    <li>Adresse 321</li>
                    <li>
                      <Link className="footer-link" to="#">
                        52 52 52 52
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newlatter d-flex flex-column flex-md-row justify-content-between align-items-center pb-60 pt-40">
          <div className="col mb-20 mb-md-0">
            <h4 className="footer-newsleter">
              Abonner på vårt <span>nyhetsbrev</span>
            </h4>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <form className="newletter-form" action="/">
              <input
                className="newslatter-input"
                type="email"
                placeholder="Email"
              />
              <button className="btn-newsletter" type="submit">
                <img src={ArrowTopBlack} alt="Icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-6 col-12 mb-16 mb-md-0">
              <div className="copyright-left-area">
                <p className="copyright-text">
                  Copyright: © 2025 <Link to="#">Advokatfirma</Link>. All
                  Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-12">
              <ul className="social-icon gap-3 d-flex justify-content-center justify-content-md-end">
                <li>
                  <Link
                    className="footer-social-link"
                    to="www.facebook.com"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      src={FacebookDark}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-social-link"
                    to="www.twitter.com"
                    target="_blank"
                  >
                    <img className="social-icon" src={TwitterDark} alt="Icon" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-social-link"
                    to="www.instagram.com"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      src={InstagramDark}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-social-link"
                    to="www.linkdien.com"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      src={LinkedinDark}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <img
        className="footer-shape-1 moveBottom"
        src={FooterShapeOne}
        alt="Shape"
      />
      <img className="footer-shape-2" src={FooterShapeTwo} alt="Shape" />
      <img className="footer-shape-3" src={FooterShapeThree} alt="Shape" />
      <img
        className="footer-shape-4 moveBottom"
        src={FooterShapeFour}
        alt="Shape"
      />
    </footer>
  );
}
