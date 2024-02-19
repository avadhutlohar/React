import React from "react";

const Product = () => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>The lean startup</p>
          <p className="product__price">
            <small>$</small>
            <strong>19.99</strong>
          </p>
          <div className="product__rating">⭐</div>
        </div>
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""/>
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
