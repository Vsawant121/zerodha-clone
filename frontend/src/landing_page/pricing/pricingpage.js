import React from 'react';

// 1. Hero and Brokerage (same folder)
import Hero from './hero';
import Brokerage from './brokerage';

// 2. Correct casing to match your file explorer:
import Navbar from '../../navbar';           // lowercase 'n'
import OpenAccount from '../../OpenAccount';   // capital 'O'

function PricingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brokerage />
      <OpenAccount />
    </>
  );
}

export default PricingPage;