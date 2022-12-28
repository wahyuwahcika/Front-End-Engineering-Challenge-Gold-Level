import React from "react";
import Navbar from "../navbars/Navbar";
import Footer from "../footer/Footer";
import MobilInova from "../../assets/image 1.png";
import PicIcon from "../../assets/fi_users.png";
import "../detailpaketsewa/designDetailPaketSewa.css";

function DetailPaketSewa() {
  return (
    <>
      {/* Hero section */}
      <main>
        <Navbar />
        <section className="heroDetailPaket" id="Hero"></section>
        {/* Hero Section end */}
        {/* form start */}
        <section className="find-result">
          <div className="container">
            <div className="find-result-border">
              <h3>Pencarianmu</h3>
              <div className="row">
                <div className="find-result-form">
                  <div className="form">
                    <div className="col-lg-3">
                      <div className="form-border">
                        <div className="mb-3">
                          <label className="form-label">Nama Mobil</label>
                          <input type="text" className="form-control" placeholder="Innova" disabled="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-border">
                        <label className="form-label">Kategori</label>
                        <select className="form-select" disabled="">
                          <option>Masukan Kapasitas Mobil</option>
                          <option value={1}>2 - 4 orang</option>
                          <option value={2}>4 - 6 orang</option>
                          <option value={3} selected="">
                            6 - 8 orang
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-border">
                        <label className="form-label">Harga</label>
                        <select className="form-select" disabled="">
                          <option>Masukan Harga Sewa per Hari</option>
                          <option value={1}>&lt; Rp. 400.000 </option>
                          <option value={2} selected="">
                            {" "}
                            Rp. 400.000 - Rp. 600.000{" "}
                          </option>
                          <option value={3}> &gt; Rp. 600.000 </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-border">
                        <label className="form-label">Status</label>
                        <select className="form-select" disabled="">
                          <option selected="">Disewa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="car-detail">
          <div className="container">
            <div className="car-detail-border">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="package-desc">
                    <div className="card">
                      <h3>Tentang Paket</h3>
                      <h3>Include</h3>
                      <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                      </ul>
                      <h3>Exclude</h3>
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                      <h3>Refund, Reschedule, Overtime</h3>
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="card-border">
                    <div className="card">
                      <img src={MobilInova} className="card-img-top" alt="mobil4" />
                      <div className="card-body">
                        <h5 className="card-title">Innova</h5>
                        <ul>
                          <img src={PicIcon} alt="vektor-orang" />
                          <li>6 - 8 orang</li>
                        </ul>
                        <div className="nominal">
                          <h4>Total</h4>
                          <h4>Rp 500.000</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default DetailPaketSewa;
