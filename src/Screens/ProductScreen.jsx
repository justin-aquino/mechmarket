import React from "react";
import products from "../products";
import { useParams } from "react-router";

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);

  console.log(id, product);
  return (
    <div>
      <h3>{product.name}</h3>ProductScreen
    </div>
  );
};

export default ProductScreen;
