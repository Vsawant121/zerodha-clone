import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const { email, username, password } = inputValue;

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
      const response = await fetch("https://zerodha-clone-xli5.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      const data = await response.json();
      if (data.success) {
        setIsError(false);
        setMessage("Account created successfully! Redirecting to Sign In...");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setIsError(true);
        setMessage(data.message || "Signup failed");
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
            src="/signup.png"
            alt="Signup Illustration"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-6 p-4">
          <h2 className="mb-3">Open a Zerodha Account</h2>
          <p className="text-muted mb-4">
            Modern platform to invest in stocks, derivatives, mutual funds, and more.
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
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Choose a username"
                value={username}
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
                placeholder="Enter password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fs-5">
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-muted">
              Already have an account? <Link to="/login" className="text-decoration-none">Sign In here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
