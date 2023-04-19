import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        variant="light"
        className="card border-secondary mb-3 my-3"
      >
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
        />
        <Card.Body>
          <Card.Title className="card-subtitle text-muted">
            {product.name}
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            variant="primary"
            aria-label={`More information on ${product.name}`}
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
