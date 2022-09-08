import React from "react";
import img from "../2253737.jpg";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <h4>add to cart</h4>
      </div>
      <h1>Home components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            style={{ width: "100px", height: "100px" }}
            src={img}
            alt=" hai kuch bs"
          />
        </div>
        <div className="text-wrapper item">
          <span>I Phone</span>
          <span>Price:$1000</span>
        </div>
        <div className="btn-wrapper item">
          <button>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
