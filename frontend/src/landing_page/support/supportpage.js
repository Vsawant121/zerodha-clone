import React from "react";

import Hero from './hero'; // Use lowercase 'hero' instead of 'Hero'
import CreateTicket from "./ticket";

import Navbar from "../../navbar";
import Footer from "../../footer";

function PricingPage() {
  return (
    <>
      <Hero />
      <CreateTicket />
    </>
  );
}

export default PricingPage;