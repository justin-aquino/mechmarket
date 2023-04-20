import React, { useEffect, useState } from "react";
import products from "../products";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../Components/Rating";

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  const [isInStock, setIsInStock] = useState(true);

  useEffect(() => {
    if (product.countInStock > 0) setIsInStock(false); //conditionally render disabled attribute
  }, []);

  console.log(id, product);
  return (
    <>
      <Link
        to="/"
        className=" btn btn-primary my-3"
      >
        Go Back
      </Link>
      <Row className="m-4">
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col>
          <h3>{product.name}</h3>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <h3>${product.price}</h3>
          <p>{product.description}</p>
        </Col>
        <Col className="m-auto">
          <Card
            className="border-primary"
            rounded
          >
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col> Status:</Col>
                  <Col>
                    <strong>
                      {" "}
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <button
                      className="btn btn-outline-secondary"
                      disabled={isInStock}
                    >
                      Add to Cart
                    </button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
