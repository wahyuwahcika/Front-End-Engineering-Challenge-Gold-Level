import React from "react";
import Navbar from "../navbars/Navbar";
import Footer from "../footer/Footer";
import "../carimobil/designSearchCar.css";
import Mobil1 from "../../assets/img_car.png";
import { Link } from "react-router-dom";

function CariMobil() {
  return (
    <>
      <Navbar />
      <section className="heroCar" id="Hero">
        {/* <div className="jumbotron jumbotron-fluid"> */}
        {/* jumbotron fluid membuat lebar menjadi penuh dan sudit tidak lancip */}
        <div className="container">
          <div className="row mb-5 mt-0">
            {/* mb =margin top mt= margin buttom range 0-5 */}
            <div className="col-md m-auto">
              {/* md = breakpoint >= 720px */}
              <h1 className="text-lg-justify fw-bold lh-lg fs-1">Sewa &amp; Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
              <p className="fs-6 fw-bold text-justify">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              {/* text justify = membuat sama rata 1 paragraf dan fw-blod membuat  */}
            </div>
            <div className="col-md">
              <img src={Mobil1} className="img-fluid img-car" alt="GambarMobil" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="cari-mobil position-relative m-5">
        <div className="container position-absolute top-0 start-50 translate-middle d-flex">
          <div className="cari-mobil-border">
            <div className="row">
              <div className="find-car-form">
                <div className="form">
                  <div className="col-lg-3">
                    <div className="form-border">
                      <div className="mb-3">
                        <label className="form-label">Nama Mobil</label>
                        <input type="text" className="form-control" placeholder="Ketik nama/tipe mobil" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-border">
                      <label className="form-label">Kategori</label>
                      <select className="form-select">
                        <option selected="">Masukan Kapasitas Mobil</option>
                        <option value={1}>2 - 4 orang</option>
                        <option value={2}>4 - 6 orang</option>
                        <option value={3}>6 - 8 orang</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-border">
                      <label className="form-label">Harga</label>
                      <select className="form-select">
                        <option selected="">Masukan Harga Sewa per Hari</option>
                        <option value={1}> &lt; Rp. 400.000 </option>
                        <option value={2}> Rp. 400.000 - Rp. 600.000 </option>
                        <option value={3}> &gt; Rp. 600.000 </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-border">
                      <label className="form-label">Status</label>
                      <select className="form-select">
                        <option selected="">Disewa</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="submit">
                  <div className="btn.btn-success">
                    <Link to="/hasilpencarian">
                      <a target="_blank" className="btn btn-success">
                        Cari Mobil
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CariMobil;
