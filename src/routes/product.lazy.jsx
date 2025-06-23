import "../../styles/product.css";
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
      <div className="product-description">
        <h2 className="product-heading">{product.name}</h2>
        <p className="product-description-text">{product.description}</p>
      </div>
      <div className="product-image">
        <img src={getImageURL(product.fileName)} alt={product.name} />
      </div>
      <div className="product-features">
        <h3>Utvalda egenskaper</h3>
        <ul className="product-features-list">
          {product.features.map((feature) => (
            <li className="product-features-list-item">{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
