import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes & Route
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Features from "./components/Features";
import Products from "./components/Products";
import Shop from "./components/Shop"; // Ensure correct import
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling
import { Layout } from "antd"; // Ant Design Layout

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      {/* Navbar as Header */}
      <Header style={{ backgroundColor: "#fff", padding: 0 }}>
        <Navbar />
      </Header>

      {/* Main Content */}
      <Content style={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Loader />
              <Features /> {/* Features Section */}
              <Products /> {/* Trending Products Section */}
            </>
          } />
          <Route path="/shop" element={<Shop />} /> {/* Shop Page */}
        </Routes>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center", backgroundColor: "#fff", padding: "10px" }}>
        © 2024 Your Company. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default App;
