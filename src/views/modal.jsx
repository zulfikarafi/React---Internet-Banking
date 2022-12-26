// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'

// export default function ModalLogout() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//     <Dropdown.Item variant="primary" onclick={handleShow}>
//             <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//             Logout
//     </Dropdown.Item>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         id="logoutModal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Apakah anda yakin akan keluar?</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         Klik tombol "Logout" jikan anda ingin keluar.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary">Logout</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

class ModalLogout extends React.Component {
    constructor() {
      super()
      this.state = {
        show: false
      }
    }
  
    handleModal() {
        this.setState({ show: !this.state.show })
    }


    render() {
      return (
        <div>
            <Dropdown.Item variant="primary" onClick={() => { this.handleModal() }}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </Dropdown.Item>

            <Modal 
                show={this.state.show}
                onHide={() => { this.handleModal() }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header  >
                    <Modal.Title>Apakah anda yakin akan keluar?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Klik tombol "Logout" jikan anda ingin keluar.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { this.handleModal() }}>
                    Cancel
                    </Button>
                    <Button variant="primary">
                    Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
    }
  }
  
  export default ModalLogout;