import React, { useState, useEffect } from "react";
import { Card, Row, Col, Alert, Typography, Rate, Button, Modal } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

const { Title, Text } = Typography;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Error fetching products!");
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
      <Title level={2} className="text-center">Trending Products</Title>
      <Row className="row" gutter={[16, 16]} justify="center">
        {products.slice(0, 7).map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8} className="col">
            <Card
              hoverable
              variant="outlined"
              className="border rounded shadow-sm d-flex flex-column h-100"
              cover={
                <div className="d-flex justify-content-center align-items-center overflow-hidden" style={{ height: "250px" }}>
                  <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </div>
              }
            >
              <div className="d-flex flex-column h-100">
                <Text className="text-secondary">{product.category}</Text>
                <Title level={5} className="text-truncate" style={{ minHeight: "50px" }}>
                  {product.title}
                </Title>
                <Rate allowHalf defaultValue={product.rating?.rate} disabled />
                <Text strong className="d-block text-primary">${product.price.toFixed(2)}</Text>
                <div className="mt-auto d-flex justify-content-between">
                  <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
                  <Button type="default" icon={<EyeOutlined />} onClick={() => showModal(product)}>
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={selectedProduct?.title}
        open={modalVisible} // ✅ Fix: use `open` instead of `visible`
        onCancel={handleClose}
        footer={[
          <Button key="close" onClick={handleClose}>
            Close
          </Button>,
          <Button key="buy" type="primary" icon={<ShoppingCartOutlined />}>
            Add to Cart
          </Button>,
        ]}
      >
        {selectedProduct && (
          <>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid mb-3" />
            <Text className="text-secondary">{selectedProduct.category}</Text>
            <p>{selectedProduct.description}</p>
            <Rate allowHalf defaultValue={selectedProduct.rating?.rate} disabled />
            <div>
              <Text strong className="d-block text-primary">${selectedProduct.price.toFixed(2)}</Text>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Products;
