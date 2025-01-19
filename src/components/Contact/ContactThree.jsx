import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import { Link } from "react-router-dom";

export default function ContactThree() {
  return (
    <section className="contact-consultation pt-150">
      <div className="container">
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          <div className="col-lg-8">
            <div
              className="blog-consulatanry-box position-relative fade-slide bottom"
              data-delay="0.2"
            >
              <p className="section-title mb-20">
                Har du noe du vil ta opp? <span>Send oss en melding her</span>
              </p>
              <form className="form-wrap" action="/">
                <div className="row g-3 mb-20">
                  <div className="col-12">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Fullt navn"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Adresse"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Tlf nummer"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-textarea"
                      placeholder="Melding"
                      id="w3review"
                      name="w3review"
                      rows={4}
                      cols={50}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col mb-30">

                  </div>
                  <div className="col-xl-12">
                    <button className="btn-fill" type="submit">
                      Send
                      <img
                        className="btn-icon-black"
                        src={ArrowTopYellow}
                        alt="Icon"
                      />
                    </button>
                  </div>
                </div>
              </form>
              <img className="form-shape" src={ShadowShape} alt="Shape" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
