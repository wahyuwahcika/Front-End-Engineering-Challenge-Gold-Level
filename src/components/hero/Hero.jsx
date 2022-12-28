import React from "react";
import { Link } from "react-router-dom";
import Mobil1 from "../../assets/img_car.png";

function Hero() {
  return (
    <section className="heroBar" id="Hero">
      <div className="jumbotron jumbotron-fluid">
        {/* jumbotron fluid membuat lebar menjadi penuh dan sudah tidak lancip */}
        <div className="container">
          <div className="row mb-5 mt-0">
            {/* mb =margin top mt= margin buttom range 0-5 */}
            <div className="col-md m-auto">
              {/* md = breakpoint >= 720px */}
              <h1 className="text-lg-justify fw-bold lh-lg fs-2">Sewa &amp; Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
              <p className="fs-6  text-justify">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              {/* text justify = membuat sama rata 1 paragraf dan fw-blod membuat  */}
              <Link to="/carimobil">
                <a className="btn btn-success" href="" role="button">
                  Mulai Sewa Mobil
                </a>
              </Link>
            </div>
            <div className="col-md">
              <img src={Mobil1} className="img-fluid img-car" alt="GambarMobil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
