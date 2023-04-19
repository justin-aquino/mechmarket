import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="border-primary m-auto my-4"
      >
        <Card.Img
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <Rating
              value={product.rating}
              text={` from ${product.numReviews} reviews`}
            />{" "}
          </Card.Text>
          <Card.Text>$ {product.price}</Card.Text>
          <Button
            variant="primary"
            aria-label={`More information on ${product.name}`}
            className="mb-2"
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
