import PhoneIcon from "@/assets/images/icons/phone-icon.png";
import MessageIcon from "@/assets/images/icons/message.png";
import LocationIcon from "@/assets/images/icons/location.png";

import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";

import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import { Link } from "react-router-dom";

export default function FaqSidebar() {
  return (
    <div className="details-left-content">
      <div className="content-box mb-30">
        <h4 className="sidebar-title">Kontakt info</h4>
        <ul className="sidebar-contact-wrap">
          <li className="sidebar-contact-list gap-3 d-flex justify-content-start align-items-start">
            <img src={PhoneIcon} alt="Icon" />
            <div className="text">
              <p className="sidebar-contact-title">Tlf nummer</p>
              <Link className="sidebar-contact-link" to="#">
                51 51 51 51
              </Link>
            </div>
          </li>
          <li className="sidebar-contact-list gap-3 d-flex justify-content-start align-items-start">
            <img src={MessageIcon} alt="Icon" />
            <div className="text">
              <p className="sidebar-contact-title">Email</p>
              <Link className="sidebar-contact-link" to="#">
                eksempel@eksempel.com
              </Link>
            </div>
          </li>
          <li className="sidebar-contact-list gap-3 d-flex justify-content-start align-items-start">
            <img src={LocationIcon} alt="Icon" />
            <div className="text">
              <p className="sidebar-contact-title">Lokasjon</p>
              <p className="sidebar-contact-link">
                Rogaland, Sandnes, Adresse 123
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-box mb-30">
        <h4 className="sidebar-title">Andre plattformer</h4>
        <ul className="sidebar-social d-flex align-items-center">
          <li>
            <Link
              className="sidebar-social-link"
              to="www.facebook.com"
              target="_blank"
            >
              <img className="social-icon" src={FacebookDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-social-link"
              to="www.twitter.com"
              target="_blank"
            >
              <img className="social-icon" src={TwitterDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-social-link"
              to="www.instagram.com"
              target="_blank"
            >
              <img className="social-icon" src={InstagramDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-social-link"
              to="www.linkdien.com"
              target="_blank"
            >
              <img className="social-icon" src={LinkedinDark} alt="Icon" />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}
