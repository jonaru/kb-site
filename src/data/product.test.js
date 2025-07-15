import { describe } from "vitest";
import { getProducts } from "./product";

describe("getProducts", () => {
  it("should return a list of products", () => {
    const products = getProducts();
    expect(Array.isArray(products)).toBe(true);
  });

  it("should return products with the correct structure", () => {
    const products = getProducts();
    products.forEach((product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("fileName");
      expect(product).toHaveProperty("description");
      expect(product).toHaveProperty("features");
      expect(Array.isArray(product.features)).toBe(true);
    });
  });
});
