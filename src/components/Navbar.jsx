import React, { useState } from "react";
import { Layout, Menu, Input, Badge, Switch } from "antd";
import { ShoppingCartOutlined, SearchOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar= () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    document.body.classList.toggle("dark-mode", checked);
  };

  return (
    <Header className={`px-4 ${darkMode ? "bg-dark text-white" : "bg-white"}`} style={{ display: "flex", alignItems: "center" }}>
      {/* Logo */}
      <div className="logo" style={{ fontSize: "24px", fontWeight: "bold", flex: "0 0 150px" }}>
        <Link to="/" className={darkMode ? "text-white" : "text-dark"}>Shopify</Link>
      </div>

      {/* Search Bar */}
      <Input
        placeholder="Search for a product..."
        prefix={<SearchOutlined />}
        style={{ maxWidth: "400px", flex: 1, margin: "0 20px" }}
      />

      {/* Navbar Items */}
      <Menu mode="horizontal" theme={darkMode ? "dark" : "light"} selectable={false} style={{ flex: "0 0 auto" }}>
        <Menu.Item key="products">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="categories">
          <Link to="/categories">Categories</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Badge count={0} showZero>
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
          </Badge>
        </Menu.Item>
        <Menu.Item key="darkmode">
          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
