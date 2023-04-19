import React from "react";
import products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Product";
const HomeScreen = () => {
  console.log(products);
  const mappedProducts = products.map((product) => {
    return (
      <Col
        sm={12}
        md={6}
        lg={3}
      >
        <Product product={product} />
      </Col>
    );
  });
  return (
    <>
      <h3>Featured Products</h3>
      <Row>{mappedProducts}</Row>
    </>
  );
};

export default HomeScreen;
