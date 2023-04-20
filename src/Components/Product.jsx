import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <Card
          style={{ width: "18rem" }}
          className="border-primary m-auto my-4 p-2 rounded"
        >
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            className="rounded"
          />
          <Card.Body>
            <Card.Title className="text-light">{product.name}</Card.Title>
            <Card.Text>
              <Rating
                value={product.rating}
                text={` from ${product.numReviews} reviews`}
              />{" "}
            </Card.Text>
            <Card.Text>$ {product.price}</Card.Text>
            <Button
              tabIndex={-1}
              variant="primary"
              aria-label={`More information on ${product.name}`}
              className="mb-2"
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Product;
