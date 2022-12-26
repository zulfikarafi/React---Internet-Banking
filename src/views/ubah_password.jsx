import React from 'react'

function UbahPassword() {
  return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Pengaturan Profile</h1>
        </div>
        <form action="#">
            <div className="form-floating mb-3 offset-lg-1 col-lg-8">
                <label for="nama">Password Baru</label>
                <input type="password" className="form-control" value="" id="pasbar" required/>
            </div>    
            <div className="form-floating mb-3 offset-lg-1 col-lg-8">
                <label for="nhp">Konfirmasi Password</label>
                <input type="password" className="form-control" value="" id="pasbar2" required/>
            </div>

            <div className="offset-lg-1 col-lg-8">
                <button onclick="updateProfil()" className="btn btn-primary" type="Update">Kirim</button>
            </div>   
        </form>   
    </div>
  )
}

export default UbahPassword