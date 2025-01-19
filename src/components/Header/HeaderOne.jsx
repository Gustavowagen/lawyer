import logo from "@/assets/images/logos/logo-no-bg.png";
import HeaderLineSm from "@/assets/images/bg/header-line-sm.png";
import SearchIcon from "@/assets/images/icons/search.svg";
import ArrowTopWhite from "@/assets/images/icons/arrow-top-white.svg";
import OffcanvasMenuIcon from "@/assets/images/icons/off-menu-icon.svg";
import MenuOne from "@/components/Menu/MenuOne";
import { Link } from "react-router-dom";
import "./headerOne.css";

export default function HeaderOne() {
  return (
    <header id="header-one" className="header header-area header-fixed">
      <div className="main-menu-area d-flex" id="sticker">
        <div className="height-100 w-100">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 nav-left-padding nav-left-bg">
              <div className="logo-area">
                <Link to="/">
                  <img src={logo} alt="company-logo" id="headerOne-logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-5 col-6 nav-menu-box">
              <div className="row justify-content-between align-items-center menu-top nav-right-padding">
                <div className="col-xl-8 col-lg-10 col-12 d-none d-md-block">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="header-top-text">
                      Velkommen til vårt firma
                    </p>
                    <p className="phone">
                      Tlf: 
                        <span> 51 51 51 51</span>
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-7 d-none d-xl-block">
                  <div className="d-flex justify-content-end align-items-center free-case gap-2">
                    <p>Tilgjengelig 24/7</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center py-14 nav-right-padding">
                <div className="col-xl-8 col-lg-6 col-md-4 col-1 p-0 d-flex justify-content-between align-items-center d-xl-block d-none">
                  <MenuOne />
                </div>
                <div className="col-xl-4 col-12 d-flex justify-content-xl-end justify-content-lg-between justify-content-end align-items-center header-btn-show-hide">
                  <div className="d-flex justify-content-xl-end justify-content-lg-between justify-content-end align-items-center w-100 px-lg-5 px-xl-0 pe-lg-0 pe-md-4 pe-1">
                    <div className="dropdown d-none d-xl-block">
                      <button
                        className="btn search-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={SearchIcon} alt="Search" />
                      </button>
                      <input
                        className="dropdown-menu search-dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                    <div className="header-btn">
                      <Link
                        to="/contact"
                        className="btn-fill cursor-Pointer d-flex align-items-center gap-2"
                      >
                        Kontakt oss
                        <img
                          className="btn-icon-black"
                          src={ArrowTopWhite}
                          alt="Icon"
                        />
                      </Link>
                    </div>
                    {/* Offcanvas menu  */}
                    <div
                      className="offcanvas-icon"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <img src={OffcanvasMenuIcon} alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Line shape */}
          <img className="header-line-shape" src={HeaderLineSm} alt="Shape" />
        </div>
      </div>
    </header>
  );
}
