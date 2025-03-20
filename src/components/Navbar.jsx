import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Navbar expand="lg" className={`${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm py-3 fixed-top`}>
      <Container>
        
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <i className="bi bi-shop me-2"></i>Shopify
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className="justify-content-between">
          
          {/* Search Bar */}
          <Form className="d-flex mx-auto" style={{ maxWidth: "450px", width: "100%" }}>
            <FormControl 
              type="search" 
              placeholder="Search products..." 
              aria-label="Search"
              className="border border-secondary rounded-start p-2"
            />
            <Button type="submit" className="btn btn-primary rounded-end">
              <i className="bi bi-search"></i>
            </Button>
          </Form>

          {/* Navigation Links & Icons */}
          <Nav className="align-items-center gap-3">
            <Nav.Link as={Link} to="/shop" className="fw-bold fs-6">Products</Nav.Link>
            <Nav.Link as={Link} to="/categories" className="fw-bold fs-6">Categories</Nav.Link>
            <Nav.Link as={Link} to="/login" className="fw-bold d-flex align-items-center">
              <i className="bi bi-person-circle me-1 fs-5"></i> <span className=" d-md-inline">Login</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <i className="bi bi-cart3 fs-4"></i>
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle px-2">0</span>
            </Nav.Link>

            {/* Dark Mode Toggle */}
            <Button 
              variant="outline-secondary" 
              onClick={toggleDarkMode} 
              className="border-0 d-flex align-items-center p-2"
            >
              <i className={`bi ${darkMode ? "bi-sun-fill text-warning" : "bi-moon-stars-fill text-dark"} fs-5`}></i>
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
