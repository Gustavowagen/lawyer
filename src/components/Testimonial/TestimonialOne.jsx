import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import FiveStatIcon from "@/assets/images/icons/five-star.svg";
import QuoteIcon from "@/assets/images/svg/btn.svg";

import { Link } from "react-router-dom";
import Slider from "react-slick";

import MiniPfp1 from "../../assets/images/teams/mini-pfp1.webp";
import MiniPfp2 from "../../assets/images/teams/mini-pfp2.webp";
import MiniPfp3 from "../../assets/images/teams/mini-pfp3.webp";

export default function TestimonialOne() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area pt-150 pb-150">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pb-50">
          <div className="col">
            <h2 className="section-title fade-slide bottom" data-delay="0.4">
              Hva sier folk 
              <span className="title-yellow"> Om oss?</span>
            </h2>
          </div>
          <div
            className="section-btn d-inline-block mb-30 mb-sm-0 fade-slide top"
            data-delay="0.6"
          >
            <Link
              to="/contact"
              className="btn-fill s-btn d-flex align-items-center"
            >
              Kontakt oss
              <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
            </Link>
          </div>
        </div>
        <Slider
          {...sliderOption}
          className="testimonial-slider testimonial-card-gallery pb-40-md-60 fade-slide bottom"
          data-delay="0.6"
        >
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <div className="review">
                <div className="review-icon">
                  <img src={FiveStatIcon} alt="Icon" />
                </div>
                <small>Anmeldelse</small>
              </div>
            </div>
            <p className="testimonail-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a minus neque ducimus necessitatibus fuga?
            </p>
            <div className="member-profile d-flex justify-content-between align-items-center">
              <div className="member-details">
                <img src={MiniPfp1} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    Harald J.B
                  </h6>
                  <span>Advokat</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteIcon} alt="Image" />
              </blockquote>
            </div>
          </div>
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <div className="review">
                <div className="review-icon">
                  <img src={FiveStatIcon} alt="Icon" />
                </div>
                <small>Anmeldelse</small>
              </div>
            </div>
            <p className="testimonail-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et harum quas sapiente ad magni?
            </p>
            <div className="member-profile d-flex justify-content-between align-items-center">
              <div className="member-details">
                <img src={MiniPfp2} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    Ole K.H
                  </h6>
                  <span>Kunde</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteIcon} alt="Quote Icon" />
              </blockquote>
            </div>
          </div>
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <div className="review">
                <div className="review-icon">
                  <img src={FiveStatIcon} alt="Icon" />
                </div>
                <small>Anmeldelse</small>
              </div>
            </div>
            <p className="testimonail-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa architecto consequuntur amet ut ab.
            </p>
            <div className="member-profile d-flex justify-content-between align-items-center">
              <div className="member-details">
                <img src={MiniPfp3} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    Jon T.D
                  </h6>
                  <span>Kunde</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteIcon} alt="Quote Icon" />
              </blockquote>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
