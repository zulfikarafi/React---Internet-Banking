import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';
// import PengaturanProfile from './pengaturan_profile';

function CollapsePengaturan() {
    const [open, setOpen] = useState(false);

    return (
    <li className="nav-item">
        <div  className="nav-link collapsed"  
            data-toggle="collapse" 
            data-target="#collapseTwo"
            aria-expanded={open} 
            aria-controls="collapseTwo" 
            onClick={() => setOpen(!open)} >
                <i className="fas fa-fw fa-cog"></i>
                <span>Pengaturan</span>
        </div>
        <Collapse in={open} >
            <div  id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Pengaturan:</h6>
                <Link className="collapse-item" to="/pengaturan_profile">Ubah Profil</Link>
                <a className="collapse-item" href="/ubah_password">Ubah Password</a>
            </div>
            </div>
        </Collapse>
    </li> 
    
  )
}

export default CollapsePengaturan