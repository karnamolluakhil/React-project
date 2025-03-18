import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from "react-bootstrap";
import { BsSearch, BsCart, BsSun, BsMoon, BsPerson } from "react-icons/bs";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Load dark mode state from localStorage
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
    localStorage.setItem("darkMode", darkMode); // Save preference
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Navbar expand="lg" className={`shadow-sm ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Shopify
        </Navbar.Brand>

        {/* Navbar Toggler for Mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          {/* Centered Search Bar */}
          <Form className="d-flex mx-auto my-2 my-lg-0 w-50">
            <FormControl type="search" placeholder="Search for a product..." className="me-2 border-primary" />
            <Button variant="primary">
              <BsSearch />
            </Button>
          </Form>

          {/* Navbar Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products" className="fw-bold">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" className="fw-bold">
              Categories
            </Nav.Link>
          </Nav>

          {/* Login, Cart & Dark Mode Toggle */}
          <div className="d-flex align-items-center">
            {/* Login */}
            <Link to="/login" className="text-decoration-none me-3 text-dark fw-bold">
              <BsPerson size={22} className="me-1" />
              Login
            </Link>

            {/* Cart */}
            <Link to="/cart" className="position-relative text-dark me-3">
              <BsCart size={24} />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                0
              </Badge>
            </Link>

            {/* Dark Mode Toggle */}
            <Button variant="outline-secondary" onClick={toggleDarkMode} className="border-0">
              {darkMode ? <BsSun size={22} /> : <BsMoon size={22} />}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;