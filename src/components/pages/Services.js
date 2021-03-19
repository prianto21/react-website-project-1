import React from "react";
import "../HeroSection.css";
function Services() {
  const img = {
    fontSize: 100,
  };
  return (
    <div>
      <img
        src="images/img-9.jpg"
        alt="images"
        className="cards__item__img"
        style={img}
      />
      <h1 style={{ color: "red" }}>services</h1>
    </div>
  );
}

export default Services;
