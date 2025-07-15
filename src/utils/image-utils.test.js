import { describe } from "vitest";
import { getImageURL } from "./image-utils";

describe("getImageURL", () => {
  it("should return the correct URL for a given image file name", () => {
    const fileName = "example.jpg";
    const expectedURL = new URL(`../../img/${fileName}`, import.meta.url).href;
    expect(getImageURL(fileName)).toBe(expectedURL);
  });

  it("should handle different image file names", () => {
    const fileName = "test-image.png";
    const expectedURL = new URL(`../../img/${fileName}`, import.meta.url).href;
    expect(getImageURL(fileName)).toBe(expectedURL);
  });
});
