import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "antd/dist/reset.css"; // Ant Design CSS

const { Title, Text } = Typography;

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row gutter={[16, 16]} align="middle" justify="center" className="w-100">
        
        {/* Left Content */}
        <Col xs={24} md={12} className="text-center text-md-start px-4">
          <Text type="secondary" strong>Starting At $999</Text>
          <Title level={2}>The best notebook collection 2024</Title>
          <Text strong>
            Exclusive offer <Text type="danger">-10%</Text> off this week
          </Text>
          <br />
          <Button type="primary" size="large" className="mt-3">Shop Now</Button>
        </Col>

        {/* Right Image */}
        <Col xs={24} md={12} className="text-center">
          <img
            src="/images/image.png" // Ensure the image is in public/images
            alt="Notebook Collection"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </Col>

      </Row>
    </div>
  );
};

export default Loader;
