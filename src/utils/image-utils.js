function getImageURL(fileName) {
  return new URL(`../../img/${fileName}`, import.meta.url).href;
}

export { getImageURL };
