import PropTypes from "prop-types";
import BannerShape from "@/assets/images/shapes/banner-shape.png";

InnerHero.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
};

export default function InnerHero({ backgroundImage, title }) {
  return (
    <section className="banner-area">
      <div className="container-one position-relative overflow-hidden">
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="banner-content">
            <h1
              className="section-title-lg mb-10 fade-slide bottom"
              data-delay="0.2"
            >
              {title}
            </h1>
          </div>
        </div>
        {/* Shape */}
        <img
          className="banner-shape zoom-in-out"
          src={BannerShape}
          alt="Shape"
        />
      </div>
    </section>
  );
}
