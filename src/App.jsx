import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import Loader from "./components/Loader"; // Import Loader
import Features from "./components/Features"; // Import Features
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
        <Loader />
        <Features /> {/* Add Features component */}
      </Content>

      {/* Footer (Optional) */}
      <Footer style={{ textAlign: "center", backgroundColor: "#fff", padding: "10px" }}>
        © 2024 Your Company. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default App;
