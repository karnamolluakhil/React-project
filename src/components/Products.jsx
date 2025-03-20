import React, { useState, useEffect } from "react";
import { Card, Row, Col, Alert, Typography, Rate, Button, Modal, Spin } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

const { Title, Text } = Typography;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError("Error fetching products!");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const showModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  if (error) return <Alert message={error} type="error" showIcon className="mt-5" />;

  return (
    <div className="container py-5">
      <Title level={2} className="text-center mb-4">🔥 Trending Products</Title>
      {loading ? (
        <div className="text-center py-5">
          <Spin size="large" />
          <p>Loading products...</p>
        </div>
      ) : (
        <Row gutter={[24, 24]} justify="center">
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                className="shadow-sm rounded"
                cover={
                  <div className="d-flex justify-content-center align-items-center" style={{ height: "250px", background: "#f8f9fa" }}>
                    <img src={product.thumbnail} alt={product.title} style={{ maxWidth: "90%", maxHeight: "90%" }} />
                  </div>
                }
              >
                <Text type="secondary">{product.category}</Text>
                <Title level={5} className="text-truncate mt-2">{product.title}</Title>
                <Rate allowHalf value={product.rating} disabled className="mb-2" />
                <Text strong className="d-block text-primary">${product.price.toFixed(2)}</Text>
                <div className="d-flex justify-content-between mt-3">
                  <Button type="primary" icon={<ShoppingCartOutlined />}>Buy Now</Button>
                  <Button type="default" icon={<EyeOutlined />} onClick={() => showModal(product)}>View</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Modal for product details */}
      <Modal
        title={<span className="fw-bold">{selectedProduct?.title}</span>}
        open={modalVisible}
        onCancel={handleClose}
        footer={[
          <Button key="close" onClick={handleClose}>Close</Button>,
          <Button key="buy" type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>,
        ]}
      >
        {selectedProduct && (
          <>
            <div className="text-center">
              <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="img-fluid mb-3" style={{ maxHeight: "250px" }} />
            </div>
            <Text type="secondary">{selectedProduct.category}</Text>
            <p>{selectedProduct.description}</p>
            <Rate allowHalf value={selectedProduct.rating} disabled />
            <Text strong className="d-block text-primary mt-2 fs-5">${selectedProduct.price.toFixed(2)}</Text>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Products;
