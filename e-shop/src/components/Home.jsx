import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
          />

          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
