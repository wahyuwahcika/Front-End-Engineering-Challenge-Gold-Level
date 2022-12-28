import React from "react";
import OurServiceGirl from "../../assets/img_service.png";
import ChekList from "../../assets/Group 53.png";

function OurService() {
  return (
    <section className="OurService" id="our-service">
      <div className="container mt-1">
        <div className="row mt-5 pt-5">
          <div className="col-md-6 text-center mt-5">
            <img src={OurServiceGirl} className="img-fluid" alt="GambarOrang" />
          </div>
          <div className="col-md-6 mt-5">
            <h3 className="text-jutify mt-4 fw-bold lh-lg fs-2">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p className="mt-4 fw-blod fs-6 text-justify">
              Sewa mobil di (lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="list-group text-nowrap fs-6">
              <a className="list-group-item list-group-item-action border-0">
                <img src={ChekList} /> Sewa Mobil Dengan Supir di Bali 12 Jam
              </a>
              <a className="list-group-item list-group-item-action border-0">
                <img src={ChekList} /> Sewa Mobil Lepas Kunci di Bali 24 Jam
              </a>
              <a className="list-group-item list-group-item-action border-0">
                <img src={ChekList} /> Sewa Mobil Jangka Panjang Bulanan
              </a>
              <a className="list-group-item list-group-item-action border-0">
                <img src={ChekList} /> Gratis Antar - Jemput Mobil di Bandara
              </a>
              <a className="list-group-item list-group-item-action border-0">
                <img src={ChekList} /> Layanan Airport Transfer / Drop In Out
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurService;
