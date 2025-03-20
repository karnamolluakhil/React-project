import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Features from "./components/Features";
import Products from "./components/Products";
import Shop from "./components/Shop";
import CategoryGrid from "./components/CategoryGrid";
import CategoryPage from "./components/CategoryPage"; // Import CategoryPage component
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#fff", padding: 0 }}>
        <Navbar />
      </Header>

      <Content style={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Loader />
              <Features />
              <Products />
            </>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<CategoryGrid />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} /> {/* ✅ Fixed syntax */}
        </Routes>
      </Content>

      <Footer style={{ textAlign: "center", backgroundColor: "#fff", padding: "10px" }}>
        © 2024 Your Company. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default App;
