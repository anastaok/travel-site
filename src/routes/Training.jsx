import React from "react";
import { Footer, HeroImg, NavBar, TrainingInfo } from "../components";

const Training = () => {
  return (
    <div>
      <NavBar />
      <HeroImg heading="TRAINING" text="Pre-Flight & In-Flight Training" />
      <TrainingInfo />
      <Footer />
    </div>
  );
};

export default Training;
