import React from "react";
import Hero from "../home/hero";
import LeftSection from "./leftimage";
import RightSection from './rightSection'; // or './rightsection'
import Universe from './universe';

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/kite.png"
        productName="Kite"
        productDescription="Experience the thrill of flying a kite in the sky."
        tryDemo="/try-demo"
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore="/app-store"
      />
      <RightSection
      imageURL="/console.png"
        productName="Console"
        productDescription="Experience the thrill of flying a kite in the sky."
        
        learnMore="/learn-more" />
      <Universe />
    </>
  );
}

export default ProductPage;
