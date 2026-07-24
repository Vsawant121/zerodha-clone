import React from 'react';
import education from '../../education.svg';
function Education(){
    return(
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-md-6 p-4">
                    <img src={education} alt="education" className="img-fluid" style={{ width: '80%' }} />
                </div>
                <div className="col-md-6 p-4">
                    <h1 className="fs-2 mb-4">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer" className="text-decoration-none">Varsity &rarr;</a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market queries.</p>
                    <a href="https://tradingqna.com/" target="_blank" rel="noreferrer" className="text-decoration-none">TradingQ&A &rarr;</a>
                </div>
            </div>
        </div>
    )
}
export default Education;