import React from "react";
import ComplateIcon from "../../assets/icon_complete.png";
import PriceIcon from "../../assets/icon_price.png";
import IconHrs from "../../assets/icon_24hrs.png";
import ProfeIcon from "../../assets/icon_professional.png";

function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="row mt-2 pt-3">
          <div className="col-md mt-5">
            <h3 className="text-lg-start text-sm-center text-sm-center text-tengah fs-1">Why Us</h3>
            <p className="mt-2 text-lg-start text-sm-center text-sm-center text-tengah text-tengah fs-5">Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3">
          <div className="col-md  mb-2">
            <div className="card p-2">
              <div className="card-body">
                <img src={ComplateIcon} alt="PicJempol" />
                <h5 className="card-title fw-bold mt-2">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-md mb-2">
            <div className="card p-2">
              <div className="card-body">
                <img src={PriceIcon} alt="PicHarga" />
                <h5 className="card-title mt-2 fw-bold">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-md mb-2">
            <div className="card p-2">
              <div className="card-body">
                <img src={IconHrs} alt="PicDuaempat" />
                <h5 className="card-title fw-bold mt-2">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-md mb-2">
            <div className="card p-2">
              <div className="card-body">
                <img src={ProfeIcon} alt="PicProfesional" />
                <h5 className="card-title fw-bold mt-2">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
