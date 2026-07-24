import React from 'react';
import { Link } from 'react-router-dom';
import homeHeroImg from '../../homeHero.png';

function Hero(){
    return(
        <div className="container p-5">
            <div className="row text-center">
                
               <img src={homeHeroImg} alt="Hero Image" className="img-fluid mb-4" />
               <h1 className="mt-4">Invest in everything</h1>
               
               <p>Discover the power of investing with our platform.</p>
               <Link to="/signup">
                 <button className='p-2 btn btn-primary' style={{width:"30%" , marginTop:"20px"}}>Sign Up Now</button>
               </Link>
            </div>
        </div>
    )
}
export default Hero;