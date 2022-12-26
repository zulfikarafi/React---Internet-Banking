import React from 'react'

function PengaturanProfile() {
  return (
    
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Pengaturan Profile</h1>
        </div>

        <form action="#">
            <div className="form-floating mb-3 offset-lg-1 col-lg-8">
                <label for="nama">Nama</label>
                    <div className="form-control" id="userprofilee">
                </div>
            </div>    
            <div className="form-floating mb-3 offset-lg-1 col-lg-8">
                <label for="nhp">No. Handphone</label>
                <input type="text" className="form-control" value="" id="nhp" />
            </div>

            <div className="form-floating mb-3 offset-lg-1 col-lg-8">
                <label for="eml">Email</label>
                <input type="email" className="form-control" value="" id="eml" />
            </div>

            <div className="form-floating mb-3 offset-lg-1 col-lg-8">
                <label for="pkrjn">Pekerjaan</label>
                <input type="text" className="form-control" value="" id="pkrjn" />
            </div>

            <div className="offset-lg-1 col-lg-8">
                <button onclick="updateProfil()" className="btn btn-primary" type="Update">Kirim</button>
            </div>   
        </form>
    </div>
)}

export default PengaturanProfile