import ContactIconOne from "@/assets/images/svg/contact-info-icon-1.svg";
import ContactIconThree from "@/assets/images/svg/contact-info-icon-3.svg";
import MailIcon from "@/assets/images/svg/mail.svg";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <div className="contact-info-card">
      <div className="container">
        <div className="card-content fade-slide bottom" data-delay="0.2">
          <div className="card-item">
            <img
              className="contact-info-img"
              src={ContactIconThree}
              alt="Phone"
            />
            <Link className="contact-info-link" to="#">
              51 51 51 51
            </Link>
            <br />
            <Link className="contact-info-link" to="tel:+55(9900)66622">
              52 52 52 52
            </Link>
            <p className="contact-info-text">Kontakt nummer</p>
          </div>
          <div className="card-item">
            <img className="contact-info-img" src={MailIcon} alt="Email" />
            <Link
              className="contact-info-link"
              to="#"
            >
              eks@eks.com
            </Link>
            <Link className="contact-info-link" to="mailto:info.@gmail.com">
              eks2@eks2.com
            </Link>
            <p className="contact-info-text">Kontakt Email</p>
          </div>
          <div className="card-item">
            <img
              className="contact-info-img"
              src={ContactIconOne}
              alt="Location"
            />
            <p className="contact-info-title">Adresse 1. Norge</p>
            <p className="contact-info-title">Adresse 2. Norge</p>
            <p className="contact-info-text">Adresse</p>
          </div>
        </div>
      </div>
    </div>
  );
}
