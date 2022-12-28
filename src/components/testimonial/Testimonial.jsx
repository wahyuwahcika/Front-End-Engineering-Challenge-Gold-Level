import React from "react";
import PicOrang1 from "../../assets/img_photo.png";
import PicOrang2 from "../../assets/img_photo2.png";
import Rate1 from "../../assets/Rate.png";
import RightButton from "../../assets/Right_button.png";
import LeftButton from "../../assets/Left_button.png";

function Testimonial() {
  return (
    <section className="container-fluid p-0 text-justify m-4" id="testimonial">
      <div className="testi text-center ">
        <h1 className="title-testi  fs-2 fw-bold">Testimonial </h1>
        <p className="desc-testi text-center fs-6 fw-bold">Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="content-testi">
              <img src={PicOrang1} alt="Orang1" />
              <div className="isi-content-testi">
                <img src={Rate1} alt="rate1" />
                <p className="desc-box-testi">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="nama-testi">John Dee 32, Bromo </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="content-testi">
              <img src={PicOrang2} alt="Orang2" />
              <div className="isi-content-testi">
                <img src={Rate1} alt="rate2" />
                <p className="desc-box-testi">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="nama-testi">John Dee 32, Bromo </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="content-testi">
              <img src={PicOrang1} alt="Orang3" />
              <div className="isi-content-testi">
                <img src={Rate1} alt="rate3" />
                <p className="desc-box-testi">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="nama-testi">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-carousel">
          <button className="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <img src={LeftButton} alt="Left" />
          </button>
          <button className="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <img src={RightButton} alt="Right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
