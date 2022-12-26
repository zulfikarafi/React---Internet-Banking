import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import ModalLogout from '../views/modal';


export default function Topbar() {
    return (
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                   

                    {/* <!-- Topbar Navbar --> */}
                    <div className="navbar-nav ml-auto">

                        <div className="topbar-divider d-none d-sm-block"></div>

                        <Dropdown className="nav-item dropdown no-arrow">
                            <DropdownToggle  id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {/* <span id="userprofile" className="mr-2 d-none d-lg-inline text-gray-600 small"></span> */}
                                <i className="fa-solid fa-image-portrait"></i>
                            </DropdownToggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                    <Dropdown.Item  href="profil.html">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profil
                                    </Dropdown.Item>
                                <Dropdown.Divider className="dropdown-divider"/>
                                {/* <Dropdown.Item href="/" data-toggle="modal" data-target="#logoutModal">
                                    <i onclick="logout()" className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Dropdown.Item> */}
                                    <ModalLogout/>
                                </Dropdown.Menu>
                        </Dropdown>
  
                    </div>
                </nav>
    );
  }