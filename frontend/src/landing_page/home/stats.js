import React from 'react';
import ecosystem from '../../ecosystem.png';

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No promises, alerts, calls, or push notifications. High quality apps that you use at your pace.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src={ecosystem} alt="ecosystem" className="img-fluid" style={{ width: '90%' }} />
        </div>
      </div>
    </div>
  );
}
export default Stats;