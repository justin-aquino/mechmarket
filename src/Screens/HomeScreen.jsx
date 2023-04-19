import React from "react";
import products from "../products";
import { Col } from "react-bootstrap";
import Product from "../Components/Product";
const HomeScreen = () => {
  console.log(products);
  const mappedProducts = products.map((product) => {
    return (
      <Col
        sm={12}
        md={6}
        lg={4}
      >
        <Product product={product} />
      </Col>
    );
  });
  return (
    <>
      <h1>Featured Products</h1>
      {mappedProducts}
    </>
  );
};

export default HomeScreen;
