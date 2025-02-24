import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to eBay</h1>
        <p>Find the best deals on millions of products.</p>
        <button className="shop-button">Start Shopping</button>
      </div>

      {/* Featured Categories */}
      <div className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {[
            { name: "Electronics", img: "https://via.placeholder.com/150" },
            { name: "Fashion", img: "https://via.placeholder.com/150" },
            { name: "Home & Garden", img: "https://via.placeholder.com/150" },
            { name: "Sports", img: "https://via.placeholder.com/150" },
          ].map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>Start Selling on eBay</h2>
        <button className="sell-button">Sell Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
