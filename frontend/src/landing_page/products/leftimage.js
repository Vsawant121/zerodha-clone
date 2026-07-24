import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-3">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href={tryDemo} className="btn btn-primary m-2">
            Try Demo
          </a>
          <a href={learnMore} className="btn btn-secondary m-2">
            Learn More
          </a>
          <div className="mt-3">
            <a href={googlePlay || "#"} className="m-2">
              <img
                src="/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
