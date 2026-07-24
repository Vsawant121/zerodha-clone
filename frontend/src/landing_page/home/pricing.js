import React from 'react';
function Pricing(){
    return(
        <div className="container">
            <div className="row">
                <div className='col-4'>
                    <h1>Unbeatable pricing</h1>
                    <p>We offer the best prices in the market without compromising on quality.</p>

                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 border'>
                            <h2>Basic Plan</h2>
                            <p>$9.99/month</p>
                        </div>
                        <div className='col-6'>
                            <h2>Premium Plan</h2>
                            <p>$19.99/month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;