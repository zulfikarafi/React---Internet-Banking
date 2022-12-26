import React from "react";

function Deposito() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Deposito</h1>
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
          <label for="Jumlah">Jumlah</label>
          <input type="text" className="form-control" id="jumlah" />
        </div>

        <div className="offset-lg-1 col-lg-8">
          <button
            onclick="deposito()"
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

export default Deposito;
