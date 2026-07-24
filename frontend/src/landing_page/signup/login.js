import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://zerodha-clone-xli5.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      const data = await response.json();
      if (data.success) {
        setIsError(false);
        setMessage("Login successful! Redirecting to Dashboard...");
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-hp2t.onrender.com";
        }, 1500);
      } else {
        setIsError(true);
        setMessage(data.message || "Invalid credentials");
      }
    } catch (err) {
      setIsError(true);
      setMessage("Error connecting to server. Please try again.");
    }
  };

  return (
    <div className="container p-5">
      <div className="row mt-5">
        <div className="col-md-6 text-center p-4">
          <img
            src="/kite.png"
            alt="Kite Dashboard Login"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>
        <div className="col-md-6 p-4">
          <h2 className="mb-3">Sign In to Zerodha</h2>
          <p className="text-muted mb-4">
            Access Kite, Console, and your trading dashboard.
          </p>

          {message && (
            <div className={`alert ${isError ? "alert-danger" : "alert-success"}`} role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fs-5">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-muted">
              Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
