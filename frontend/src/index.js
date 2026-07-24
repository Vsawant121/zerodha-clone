import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Removed 'Routed'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./landing_page/home/homepage";
import Signup from "./landing_page/signup/signup";
import Login from "./landing_page/signup/login";
import ProductPage from "./landing_page/products/productpage";
import AboutPage from "./landing_page/about/aboutpage";
import PricingPage from "./landing_page/pricing/pricingpage";
import SupportPage from "./landing_page/support/supportpage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./navbar";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

