const data = [
  {
    id: crypto.randomUUID(),
    name: "The Locky single vanity basin",
    fileName: "basin-locky.jpg",
    description: "",
  },
  {
    id: crypto.randomUUID(),
    name: "The Spital free standing shower",
    fileName: "shower-spital.jpg",
    description: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Hammered copper bath tub",
    fileName: "bath-hammered-copper.jpg",
    description: "",
  },
  {
    id: crypto.randomUUID(),
    name: "The Eden low level WC suite",
    fileName: "wc-low.jpg",
    description: "",
  },
];

const getProducts = () => {
  return data;
};

export { getProducts };
