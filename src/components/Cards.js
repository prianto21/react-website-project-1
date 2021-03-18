import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out These Epic Destinations !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/"
              label="Adventure"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/SignUp"
              label="Adventure"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/"
              label="Adventure"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/products"
              label="Adventure"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
