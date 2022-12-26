import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TarikTunai from './views/tarik_tunai';
import Transfer from './views/transfer';
import Deposito from './views/deposito';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BerandaNasabah from './views/berandanasabah';
import PengaturanProfile from './views/pengaturan_profile';
import UbahPassword from './views/ubah_password';
import BlokirKartu from './views/blokir_kartu';
import RekeningBaru from './views/rekening_baru';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}> 
          <Route path="/berandanasabah" element={<BerandaNasabah/>} />
          <Route path="/transfer" element={<Transfer/>} />
          <Route path="/tarik_tunai" element={<TarikTunai/>} />
          <Route path="/deposito" element={<Deposito/>} />
          <Route path="/pengaturan_profile" element={<PengaturanProfile/>} />
          <Route path="/ubah_password" element={<UbahPassword/>} />
          <Route path="/blokir_kartu" element={<BlokirKartu/>} />
          
        </Route> 
        <Route path="/rekening_baru" element={<RekeningBaru/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
