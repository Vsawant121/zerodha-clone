import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount(){
    return(
        <div className="container p-5">
            <div className="row text-center">
               <h1 className="mt-4">Open a Zerodha Account</h1>
               <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
               <Link to="/signup">
                 <button className='p-2 btn btn-primary fs-5' style={{width:"25%" , marginTop:"20px"}}>Sign Up Now</button>
               </Link>
            </div>
        </div>
    )
}
export default OpenAccount;