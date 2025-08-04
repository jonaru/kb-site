import "../../../styles/product.css";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getImageURL } from "../../utils/image-utils";
import type { ProductData } from "../../data/product";
import { getProducts } from "../../data/product";

export const Route = createFileRoute("/products/$id")({
  component: Product,
  loader: loader,
  pendingComponent: () => <div>Loading product...</div>,
  errorComponent: ({ error }) => (
    <div style={{ textAlign: "center" }}>
      <h2>Error loading product</h2>
      <p>{error.message}</p>
    </div>
  ),
});

async function loader({ params }: { params: { id: string } }) {
  const { id } = params;
  const products : ProductData[] = getProducts();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    throw new Error("Product not found");
  }

  return { product };
}

function Product() : React.ReactElement {
  const { product } : { product: ProductData } = useLoaderData({ from: "/products/$id" });

  if (!product) {
    return <div>Product not found.</div>;
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
