function getNextIdFunc() : () => number {
  let currentId = 0;
  return function () {
    return currentId++;
  };
}

const getNextId : () => number = getNextIdFunc();

type ProductData = {
  id: number;
  name: string;
  fileName: string;
  description: string;
  features: string[];
};

export type { ProductData };

const data: ProductData[] = [
  {
    id: getNextId(),
    name: "The Locky single vanity basin",
    fileName: "basin-locky.jpg",
    description:
      "Locky enkelhandfat är en yteffektiv tvättställsmodul, noggrant proportionerad för att tillföra tidlös elegans till gästtoaletter och mindre badrum. Det undermonterade handfatet är skickligt handgjort i fin porslinslera, medan ställningen finns i flera skräddarsydda utföranden för att passa ditt utrymme.",
    features: [
      "Kompakt design – idealisk för ett mindre badrum",
      "Klassisk marmoryta",
      "Handgjuten porslinsho gör varje exemplar unikt",
    ],
  },
  {
    id: getNextId(),
    name: "The Spital free standing shower",
    fileName: "shower-spital.jpg",
    description:
      'En helt sluten duschkabin i glas, designad för att göra ett intryck – oavsett om den placeras mitt i badrummet eller till och med i sovrummet. Spital-duschen har ett klassiskt 200 mm (8") duschhuvud samt en smidig handdusch som tillsammans ger en lyxig helkroppsdusch. Den fristående duschbrickan i gjutjärn finns i flera utföranden: grundmålad, målad i valfri kulör, eller högpolerad. Trots att den är helt självbärande, har enheten även ett inbyggt tvålfat i glasväggen för dina duschprodukter.',
    features: [
      "Vår ursprungliga ikoniska fristående dusch",
      "Kan anslutas via golv eller vägg",
      "Levereras med både takdusch och handdusch",
      "Dörren kan beställas för att öppnas åt vänster eller höger",
      "Anpassa din duschbricka och metallbeslag",
    ],
  },
  {
    id: getNextId(),
    name: "Tay hammered copper bath tub",
    fileName: "bath-hammered-copper.jpg",
    description:
      "Tay är ett rymligt, dubbelsidigt badkar med rullkant, tillverkat i massivt gjutjärn – och erbjuder samma generösa komfort och raffinerade lyx som vår ikoniska modell Spey. \n \n Denna version har en handapplicerad klädsel i hamrad koppar, som kombinerar ett varmt, rustikt uttryck med gjutjärnets styrka och stabilitet. Välj mellan en blank, polerad kopparyta eller en djupare, patinerad ton som passar din stil.",
    features: [
      "Vackert handklädd kopparfinish med hållbarheten hos ett gjutjärnsbadkar",
      "Vårt längsta fristående badkar med kjol",
      "Bred ytterkant och låg höjd för enkel åtkomst och maximal komfort",
      "Handgjutet i gjutjärn för att uppnå en överlägsen tjocklek",
    ],
  },
  {
    id: getNextId(),
    name: "The Eden low level WC suite",
    fileName: "wc-low.jpg",
    description:
      "Eden WC med lågspolande cistern speglar den klassiska design som präglar hela Drummonds kollektion. Den är skickligt handgjord i finaste engelska porslin, och cisternen fungerar som en elegant mittpunkt – idealisk för traditionella badrum eller gästtoaletter. \n \n Paketet innehåller Drummonds karaktäristiska WC-stol tillsammans med en smal lågspolande cistern och en spolhandtag i antingen porslin eller valnöt, samt beslag i mässing, nickel eller krom. Toalettsits och avloppsrör säljs separat och kan väljas från vårt fullständiga sortiment.",
    features: [
      "Komplett uppsättning med handtag, cistern, skål, rör och fästen",
      "Finns med sexkantigt, porslins- eller valnötshandtag",
      "Handgjutet porslin för en unik finish",
      "Vattensparande halvspolning uppnås genom att hålla ner handtaget",
    ],
  },

  {
    id: getNextId(),
    name: "The Grand Union Doubly Vanity Cabinet",
    fileName: "grand-union.webp",
    description:
      "Grand Union dubbelkommod erbjuder generöst med förvaring i sex rymliga lådor, toppade med en distinkt snidad marmorskiva och matchande stänkskydd. Paketet inkluderar skåp, handfat och handtag. Blandare och avloppsdetaljer säljs separat. Designen kombinerar de mjuka linjerna och stegade detaljerna från art déco-eran med den robusta och ärliga hantverkstraditionen från Arts & Crafts-rörelsen i det sena edwardianska Storbritannien. Resultatet är ett stycke som andas 1920-talets elegans samtidigt som det passar sömlöst in i både klassiska och moderna interiörer – där generösa proportioner möter genomtänkt förvaring.",
    features: [
      "Generös förvaring med sex lådor",
      "Unikt snidad marmorskiva och stänkskydd",
      "Designad av Nicola Harding",
    ],
  },
  {
    id: getNextId(),
    name: "The Chessleton surface mounted shower",
    fileName: "chessleton.jpg",
    description:
      "Utformad som ett iögonfallande centrumstycke som ger karaktär åt vilket badrum som helst. \n \n Den här duschen bär på det karakteristiska Chessleton-uttrycket – med rena linjer och en tidlös design som tillför elegans i både klassiska och moderna miljöer. \n \n Enheten har separata reglage för av/på och levereras med handdusch, redo att kombineras med valfritt överhuvud från Drummonds exklusiva sortiment.\n \n Monteringen är mycket flexibel: matningshöjden kan justeras efter rummets förutsättningar, och både blockhöjden och duscharmens utskjut kan anpassas helt efter dina önskemål.",
    features: [
      "Levereras med både tak- och handduschfunktion.",
      "Kompatibel med alla Drummonds duschhuvuden.",
      "Val mellan handtag i metall eller porslin.",
      "Ett iögonfallande centrumstycke för duschrummet.",
    ],
  },
];

const getProducts = () : ProductData[] => {
  return data;
};

export { getProducts };
