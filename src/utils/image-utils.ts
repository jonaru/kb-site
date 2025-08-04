function getImageURL(fileName : string) : string {
  return new URL(`../../img/${fileName}`, import.meta.url).href;
}

export { getImageURL };
