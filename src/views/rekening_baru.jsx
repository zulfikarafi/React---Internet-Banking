import React from 'react'

function RekeningBaru() {
  return (
    <div className="bg-gradient-primary" onload="dropdownAkun()">

    <div className="container">

        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">Buka Rekening Baru</h1>
                                        <p className="mb-4">Nikmati Langkah mudah Buka Rekening Alltale dimanapun, dan kapanpun</p>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <select className="form-control " aria-label="Default select example" id="saldo">
                                                <option selected>Pilih jumlah awal saldo anda </option>
                                                <option value="50000">50000</option>
                                                <option value="1000000">1000000</option>
                                                <option value="5000000">5000000</option>
                                            </select>    
                                        </div>
                                        
                                        <div  className="form-group row">
                                            <div className="col-sm-6">
                                                <select className="form-control " aria-label="Default select example" id="jenis">
                                                    <option selected>Pilih Jenis kartu</option>
                                                    <option value="PLATINUM">PLATINUM</option>
                                                    <option value="GOLD">GOLD</option>
                                                    <option value="BLACK">BLACK</option>
                                            </select>
                                            </div>
                                            <div  className="col-sm-6 ">
                                                <select id="cabang" className="form-control " aria-label="Default select example"  >
                                                    <option  selected>Pilih Cabang</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </form>
                                    <hr></hr>
                                    <div onclick="bukaRekening()"  className="btn btn-primary btn-user btn-block">
                                        Buka Rekening
                                        
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="dashboard_nasabah.html">Kembali ke beranda</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>

  )
}

export default RekeningBaru