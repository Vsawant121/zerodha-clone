import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className='container border-top mt-5 pt-5 pb-4'>
            <div className='row text-muted' style={{ fontSize: "0.95rem" }}>
                <div className='col-3 mb-4'>
                    <img src="/logo.svg" alt="logo" style={{ width: "130px" }} className="mb-3" />
                    <p className="small text-muted">&copy; 2024 Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col-3 mb-4 d-flex flex-column gap-2'>
                    <p className="fw-bold text-dark mb-2">Company</p>
                    <Link to="/about" className="text-muted text-decoration-none">About Us</Link>
                    <Link to="/product" className="text-muted text-decoration-none">Products</Link>
                    <Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link>
                </div>
                <div className='col-3 mb-4 d-flex flex-column gap-2'>
                    <p className="fw-bold text-dark mb-2">Account</p>
                    <Link to="/signup" className="text-muted text-decoration-none">Open Account</Link>
                    <Link to="/login" className="text-muted text-decoration-none">Sign In</Link>
                </div>
                <div className='col-3 mb-4 d-flex flex-column gap-2'>
                    <p className="fw-bold text-dark mb-2">Support</p>
                    <Link to="/support" className="text-muted text-decoration-none">Help Center</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;