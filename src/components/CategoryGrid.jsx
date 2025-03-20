import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  "Beauty", "Fragrances", "Furniture", "Groceries", "Home Decoration",
  "Kitchen Accessories", "Laptops", "Mens Shirts", "Mens Shoes", "Mens Watches",
  "Mobile Accessories", "Motorcycle", "Skin Care", "Smartphones", "Sports Accessories",
  "Sunglasses", "Tablets", "Tops", "Vehicle", "Womens Bags", "Womens Dresses",
  "Womens Jewellery", "Womens Shoes", "Womens Watches"
];

const products = [
  "Laptop", "Smartphone", "Tablet", "Watch", "Sunglasses", "Shoes",
  "Jacket", "Backpack", "Headphones", "Camera", "Speaker", "Gaming Console"
];

const CategoryGrid = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Categories</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-3 mb-3">
            <Link 
              to={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`} 
              className="text-decoration-none"
            >
              <div className="p-3 border rounded bg-light text-center">
                <h5 className="text-dark">{category}</h5>
                <span className="text-primary">View products</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <h2 className="mt-5 mb-4">Products</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3 mb-3">
            <Link 
              to={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`} 
              className="text-decoration-none"
            >
              <div className="p-3 border rounded bg-light text-center">
                <h5 className="text-dark">{product}</h5>
                <span className="text-primary">View details</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
