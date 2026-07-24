import React from 'react';
import largestBroker from '../../largestBroker.svg';

function Awards(){
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 p-4">
                    <img src={largestBroker} alt="Largest Broker" className="img-fluid mb-4" />
                </div>
                <div className="col-md-6 p-4">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/pressLogos.png" alt="Press Logos" className="img-fluid mt-3" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}
export default Awards;
