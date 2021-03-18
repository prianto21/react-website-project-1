import React from "react";

import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Products from "./Products";
import Services from "./Services";
import SignUp from "./SignUp";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Services />
      <Products />
      <SignUp />
    </>
  );
}

export default Home;
