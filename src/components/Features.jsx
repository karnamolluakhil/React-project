import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  CarOutlined,
  DollarCircleOutlined,
  PercentageOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const features = [
  {
    icon: <CarOutlined style={{ fontSize: "32px" }} />,
    title: "Free Delivery",
    description: "Orders from all items",
  },
  {
    icon: <DollarCircleOutlined style={{ fontSize: "32px" }} />,
    title: "Return & Refund",
    description: "Money back guarantee",
  },
  {
    icon: <PercentageOutlined style={{ fontSize: "32px" }} />,
    title: "Member Discount",
    description: "On order over $99",
  },
  {
    icon: <CustomerServiceOutlined style={{ fontSize: "32px" }} />,
    title: "Support 24/7",
    description: "Contact us 24 hours a day",
  },
];

const Features = () => {
  return (
    <div className="container my-4">
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card bordered={false} className="shadow-sm text-center" style={{ backgroundColor: "#f8f9fa" }}>
              {feature.icon}
              <Title level={5} className="mt-2">{feature.title}</Title>
              <Text type="secondary">{feature.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
