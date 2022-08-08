import React from "react";
import { Footer, HeroImg, NavBar, PricingCards } from "../components";

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="PRICING" text="Choose your trip!" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
