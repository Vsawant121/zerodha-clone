import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/smallcaseLogo.png" alt="smallcase" style={{ height: "45px" }} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/streakLogo.png" alt="streak" style={{ height: "45px" }} />
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/sensibullLogo.svg" alt="sensibull" style={{ height: "45px" }} />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ height: "45px" }} />
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/goldenpiLogo.png" alt="goldenpi" style={{ height: "45px" }} />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/dittoLogo.png" alt="ditto" style={{ height: "45px" }} />
          <p className="text-small text-muted mt-2">Insurance advice</p>
        </div>
        <div className="col-12 mt-4">
          <Link to="/signup">
            <button
              className="p-2 btn btn-primary fs-5 mb-5"
              style={{ width: "20%", margin: "0 auto" }}
            >
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;