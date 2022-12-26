import CollapsePengaturan from "../views/collapse_pengaturan";

export default function Sidebar() {
    return (
        <div>

            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/berandanasabah">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fa-regular fa-building-"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Alltale</div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"></hr>

                {/* <!-- Nav Item - Dashboard --> */}
                <li onclick="klikBeranda()" className="nav-item active">
                    <a className="nav-link" href="/berandanasabah">
                        <i className="fa-solid fa-house"></i>
                        <span>Beranda</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Akun
                </div>

                <CollapsePengaturan/>

                <li className="nav-item">
                    <a className="nav-link" href="/rekening_baru">
                        <i className="fa-regular fa-square-plus"></i>
                        <span>Buka Rekening Baru</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/blokir_kartu">
                    <i className="fa-solid fa-ban"></i>
                    <span>Blokir Kartu</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Transaksi
                </div>

                {/* <!-- Nav Item - Transfer --> */}
                <li className="nav-item">
                    <a className="nav-link" href="/transfer">
                        <i className="fa-solid fa-money-bill-transfer"></i>
                        <span>Transfer</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Tarik Tunai --> */}
                <li className="nav-item">
                    <a className="nav-link" href="/tarik_tunai">
                        <i className="fa-solid fa-money-bill"></i>
                        <span>Tarik Tunai</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Deposito --> */}
                <li className="nav-item">
                    <a className="nav-link" href="/deposito">
                        <i className="fa-solid fa-piggy-bank"></i>
                        <span>Deposito</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>
            
                {/* <!-- Nav Item - History --> */}
                <li className="nav-item">
                    <a className="nav-link" href="history.html">
                        <i className="fa-solid fa-history"></i>
                        <span>History</span>
                    </a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block"></hr>

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        </div>
    );
  }