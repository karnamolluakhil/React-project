import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50") 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); 
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Shop</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="shadow-sm border-0 rounded-3 h-100">
                <div className="text-center p-3">
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 text-truncate" title={product.title}>
                    {product.title}
                  </Card.Title>
                  <Card.Text className="fw-bold text-primary fs-5">${product.price}</Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Shop;
