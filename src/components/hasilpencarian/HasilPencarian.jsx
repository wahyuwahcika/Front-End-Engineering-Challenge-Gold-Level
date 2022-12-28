import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbars/Navbar";
import Footer from "../footer/Footer";
import MobilInova from "../../assets/image 1.png";
import "../hasilpencarian/designSearchResult.css";
// import { BASE_URL } from "../../config/api";

function HasilPencarian() {
  const [cars, setCars] = useState([]);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc";

  useEffect(() => {
    const url = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: token,
      },
    };
    console.log("ini config", config);
    axios
      .get(`${url}/admin/v2/car`, config)
      .then((res) => {
        const temporaryCars = res.data.cars;
        console.log("ini log data");
        console.log(temporaryCars);
        setCars(temporaryCars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   const BASE_URL = "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login";
  //   // const config = axios.fetch(BASE_URL, {
  //   //   method: "POST",
  //   //   headers: {
  //   //     access_token: token,
  //   //   },
  //   // });
  //   console.log("ini config", config);
  //   // axios
  //   //   .get(`${BASE_URL}/admin/v2/car`, config)
  //   //   .then((res) => {
  //   //     const temporaryCars = res.data.cars;
  //   //     console.log("ini data car");
  //   //     console.log(temporaryCars);
  //   //     // setCars(temporaryCars);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  // }, []);

  return (
    <>
      <Navbar type />
      {/* Hero section */}
      <section className="hero" id="Hero"></section>
      {/* Hero Section end */}
      {/* form start */}
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
                  <div className="button">
                    <a href="" target="_blank" className="btn btn-light">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="car-choice">
        <div className="container">
          <div className="car-choice-border">
            <div className="row">
              {/* <div className="col-lg-4 col-md-6">
                <div className="card-border">
                  <div className="card">
                    <img src={MobilInova} className="card-img-top" alt="Mobil1" />
                    <div className="card-body">
                      <h5 className="card-title">Innova</h5>
                      <h4>Rp 500.000 / hari</h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <Link to="/detailpaketsewa">
                        <a className="btn btn-primary">Pilih Mobil</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6">
                <div className="card-border">
                  <div className="card">
                    <img src={MobilInova} className="card-img-top" alt="Mobil2" />
                    <div className="card-body">
                      <h5 className="card-title">Innova</h5>
                      <h4>Rp 500.000 / hari</h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <Link to="/detailpaketsewa">
                        <a className="btn btn-primary">Pilih Mobil</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}

              {cars?.map((car) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="card-border">
                      <div className="card">
                        <img src={car.image} className="card-img-top" alt="Mobil3" />
                        <div className="card-body">
                          <h5 className="card-title">{car.name}</h5>
                          <h4>Rp. {car.price} / hari</h4>
                          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <Link to="/detailpaketsewa">
                            <a className="btn btn-primary">Pilih Mobil</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HasilPencarian;
