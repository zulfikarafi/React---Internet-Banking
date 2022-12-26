import React from "react";

function TarikTunai() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tarik Tunai</h1>
      </div>
      <form action="#">
        <div className="form-floating mb-3 offset-lg-1 col-lg-8">
          <label for="rekeningSumber">Rekening Sumber</label>
          <select
            id="rekeningSumber"
            className="form-control "
            aria-label="Default select example"
          >
            <option selected>Silahkan Pilih Rekening Anda</option>
          </select>
        </div>

        <div className="form-floating mb-3 offset-lg-1 col-lg-8">
          <label for="rekeningTujuan">Rekening Tujuan</label>
          <input type="text" className="form-control" id="rekeningTujuan" />
        </div>
        
        <div className="form-floating mb-3 offset-lg-1 col-lg-8">
          <label for="Jumlah">Jumlah</label>
          <select
            id="jumlah"
            className="form-control "
            aria-label="Default select example"
          >
            <option selected>Pilih Jumlah Uang</option>
            <option value="50000"> 50000</option>
            <option value="100000"> 100000</option>
            <option value="150000"> 150000</option>
            <option value="200000"> 200000</option>
            <option value="300000"> 300000</option>
            <option value="500000"> 500000</option>
          </select>
        </div>

        <div className="offset-lg-1 col-lg-8">
          <button
            onclick="tarikTunai()"
            className="btn btn-primary"
            type="button"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default TarikTunai;
