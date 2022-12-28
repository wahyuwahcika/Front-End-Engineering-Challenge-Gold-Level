import React from "react";
import Facebook from "../../assets/icon_facebook.png";
import Instagram from "../../assets/icon_instagram.png";
import Twitter from "../../assets/icon_twitter.png";
import Mail from "../../assets/icon_mail.png";
import Twitch from "../../assets/icon_twitch.png";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md">
            <p className="fw-bolder fs-6">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p className="fw-bolder fs-6">binarcarrental@gmail.com</p>
            <p className="fw-bolder fs-6">081-233-334-808</p>
          </div>
          <div className="col-md">
            <p>
              <a href="#services" className="text-decoration-none text-dark">
                Our services
              </a>
            </p>
            <p>
              <a href="#why-us" className="text-decoration-none text-dark">
                Why Us
              </a>
            </p>
            <p>
              <a href="#testi" className="text-decoration-none text-dark">
                Testimonial
              </a>
            </p>
            <p>
              <a href="#faq" className="text-decoration-none text-dark">
                FAQ
              </a>
            </p>
          </div>
          <div className="col-md">
            <p className="fw-bolder fs-6">Connect with us</p>
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
            <img src={Mail} alt="Mail" />
            <img src={Twitch} alt="Twitch" />
          </div>
          <div className="col-md">
            <p className="fw-bolder fs-6">Copyright Binar 2022</p>
            <div className="Logo">
              <button>
                <svg width={90} height={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
