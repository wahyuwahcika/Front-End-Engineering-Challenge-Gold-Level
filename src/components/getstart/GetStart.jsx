import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function GetStart() {
  return (
    <section className="container mt-5" id="mulai-sewa">
      <div className="card pt-5 pb-5 ps-5 pe-5 rounded-4 m-5 bg-primary">
        <div className="card-rental text-center text-white">
          <h5 className="fw-bold fs-4 p-2">Sewa Mobil di (Lokasimu) Sekarang</h5>
          <p className="fw-light fs-6 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <Link to="/carimobil">
              <button type="button" className="btn btn-success fw-bold fs-6" href="Index2.html">
                Mulai Sewa Mobil »
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStart;
