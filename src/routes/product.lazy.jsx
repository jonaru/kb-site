import { createLazyFileRoute } from "@tanstack/react-router";
import { useSelectedProduct } from "../contexts";
import { useEffect } from "react";
import { getProducts } from "../data/product";
import { getImageURL } from "../utils/image-utils";

export const Route = createLazyFileRoute("/product")({
  component: Product,
});

function Product() {
  const { selectedProduct } = useSelectedProduct();

  if (!selectedProduct) {
    return <p>No product selected</p>;
  }

  const product = getProducts().find((p) => p.id === selectedProduct);
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="product">
      <h2 className="product-heading"></h2>
      <img src={getImageURL(product.fileName)} alt={product.name} />
      <p className="product-description">{product.description}</p>
    </section>
  );
}
