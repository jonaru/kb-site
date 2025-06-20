const data = [
  {
    id: crypto.randomUUID(),
    name: "The Locky single vanity basin",
    fileName: "basin-locky.jpg",
    description:
      "The Locky single basin is a space-efficient vanity suite, thoughtfully proportioned to add timeless elegance to cloakrooms and more compact bathrooms. Its under-mounted basin is expertly handcrafted from fine china clay, while the stand is available in a variety of customizable finishes to suit your space.",
  },
  {
    id: crypto.randomUUID(),
    name: "The Spital free standing shower",
    fileName: "shower-spital.jpg",
    description:
      'A fully enclosed glass shower unit designed to make a statement — whether positioned at the heart of your bathroom or even in your bedroom. The Spittal shower features a timeless 200mm (8") shower head along with a convenient hand shower, delivering a luxurious, full-body soak. Its freestanding cast iron shower tray is available in a range of finishes, including primed, painted in any colour you choose, or polished to a shine. Though completely self-supporting, the unit also includes a built-in soap dish in the glass panel for your shower essentials.',
  },
  {
    id: crypto.randomUUID(),
    name: "Hammered copper bath tub",
    fileName: "bath-hammered-copper.jpg",
    description:
      "The Tay is a generously sized, double-ended roll-top bath crafted from solid cast iron, offering the same spacious comfort and refined luxury as our iconic Spey model.\n \n This version features a hand-applied hammered copper cladding, blending a warm, rustic aesthetic with the strength and stability of cast iron. Choose between a bright, polished copper finish or a deeper, burnished tone to suit your style.",
  },
  {
    id: crypto.randomUUID(),
    name: "The Eden low level WC suite",
    fileName: "wc-low.jpg",
    description:
      "The Eden low-level WC suite reflects classic design principles consistent with the rest of Drummonds' collection. Expertly handcrafted from the finest English china, the low-level cistern serves as an elegant centrepiece — ideal for traditional bathrooms or cloakrooms. \n \n The suite includes the signature Drummonds WC pan, paired with a slim, low-level cistern and a flush handle available in either china or burnished walnut, complemented by fittings in brass, nickel, or chrome. Toilet seat and soil pipe are sold separately and can be selected from our complete range of options.",
  },

  {
    id: crypto.randomUUID(),
    name: "The Grand Union Doubly Vanity Cabinet",
    fileName: "grand-union.webp",
    description:
      "The Grand Union Double Vanity offers ample storage with six spacious drawers, topped by a distinctively carved marble surface and matching backsplash. The suite includes the cabinet, basin, and handles. Mixer taps and waste fittings are available separately. \n \n Its design blends the curved edges and stepped detailing typical of Art Deco with the sturdy, straightforward cabinetry inspired by the Arts & Crafts movement of late Edwardian Britain. The result is a piece that echoes 1920s elegance while seamlessly complementing both classic and modern interiors — combining generous proportions with carefully considered storage solutions.",
    features: [
      "Generous storage with six drawers",
      "Uniquely carved marble top and backsplash",
      "Designed by Nicola Harding",
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "The Locky single vanity basin",
    fileName: "basin-locky.jpg",
    description:
      "The Locky single basin is a space-efficient vanity suite, thoughtfully proportioned to add timeless elegance to cloakrooms and more compact bathrooms. Its under-mounted basin is expertly handcrafted from fine china clay, while the stand is available in a variety of customizable finishes to suit your space.",
  },
  {
    id: crypto.randomUUID(),
    name: "The Spital free standing shower",
    fileName: "shower-spital.jpg",
    description:
      'A fully enclosed glass shower unit designed to make a statement — whether positioned at the heart of your bathroom or even in your bedroom. The Spittal shower features a timeless 200mm (8") shower head along with a convenient hand shower, delivering a luxurious, full-body soak. Its freestanding cast iron shower tray is available in a range of finishes, including primed, painted in any colour you choose, or polished to a shine. Though completely self-supporting, the unit also includes a built-in soap dish in the glass panel for your shower essentials.',
  },
  {
    id: crypto.randomUUID(),
    name: "Hammered copper bath tub",
    fileName: "bath-hammered-copper.jpg",
    description:
      "The Tay is a generously sized, double-ended roll-top bath crafted from solid cast iron, offering the same spacious comfort and refined luxury as our iconic Spey model.\n \n This version features a hand-applied hammered copper cladding, blending a warm, rustic aesthetic with the strength and stability of cast iron. Choose between a bright, polished copper finish or a deeper, burnished tone to suit your style.",
  },
  {
    id: crypto.randomUUID(),
    name: "The Eden low level WC suite",
    fileName: "wc-low.jpg",
    description:
      "The Eden low-level WC suite reflects classic design principles consistent with the rest of Drummonds' collection. Expertly handcrafted from the finest English china, the low-level cistern serves as an elegant centrepiece — ideal for traditional bathrooms or cloakrooms. \n \n The suite includes the signature Drummonds WC pan, paired with a slim, low-level cistern and a flush handle available in either china or burnished walnut, complemented by fittings in brass, nickel, or chrome. Toilet seat and soil pipe are sold separately and can be selected from our complete range of options.",
  },

  {
    id: crypto.randomUUID(),
    name: "The Grand Union Doubly Vanity Cabinet",
    fileName: "grand-union.webp",
    description:
      "The Grand Union Double Vanity offers ample storage with six spacious drawers, topped by a distinctively carved marble surface and matching backsplash. The suite includes the cabinet, basin, and handles. Mixer taps and waste fittings are available separately. \n \n Its design blends the curved edges and stepped detailing typical of Art Deco with the sturdy, straightforward cabinetry inspired by the Arts & Crafts movement of late Edwardian Britain. The result is a piece that echoes 1920s elegance while seamlessly complementing both classic and modern interiors — combining generous proportions with carefully considered storage solutions.",
    features: [
      "Generous storage with six drawers",
      "Uniquely carved marble top and backsplash",
      "Designed by Nicola Harding",
    ],
  },
];

const getProducts = () => {
  return data;
};

export { getProducts };
