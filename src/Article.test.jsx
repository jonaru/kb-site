import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { renderWithRouter } from "./test-utils";

vi.mock("./utils/image-utils", () => ({
  getImageURL: (fileName) => `/img/${fileName}`,
}));

describe("Article Component", () => {
  it("renders the article with image and description", async () => {
    const props = {
      productId: "123",
      fileName: "test-image.jpg",
      description: "Test Article Description",
    };

    renderWithRouter(props);

    const articleItem = await screen.findByRole("link");
    expect(articleItem).toBeInTheDocument();
    expect(articleItem).toHaveAttribute("href", "/products/123");

    const image = await screen.findByRole("img", {
      name: /test article description/i,
    });

    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("img/test-image.jpg"),
    );
  });

  it("navigates to the product page on click", async () => {
    const props = {
      productId: "123",
      fileName: "test-image.jpg",
      description: "Test Article Description",
    };

    renderWithRouter(props);

    const user = userEvent.setup();
    const articleLink = await screen.findByRole("link");

    await act(async () => {
      await user.click(articleLink);
    });

    // Assuming you have a way to check navigation, e.g., using a mock router
    //check that product route is rendered
    expect(screen.getByText("Product Page")).toBeInTheDocument();
  });
});
