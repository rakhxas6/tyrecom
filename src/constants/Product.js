import triangleTyre from "../assets/tyresCollection/triangle_tyres.png";

const tyreInformation = [
  {
    term: "Tire Width",
    description: "Refers to the overall width of the tire in millimeters.",
  },
  {
    term: "Aspect Ratio",
    description:
      "The relationship between the tire height and width. In this example, the tire height is approximately 60% of the tire width.",
  },
  {
    term: "Rim Diameter",
    description:
      "The tyre’s rim diameter is measured in inches taken from the wheel flange where the tyre is seated (bead seat area) to the same point on the opposite side.",
  },
];

const tyres = [
  {
    name: "Triangle 215/45r18 Tyre",
    category: "Tyres",
    brand: "Triangle",
    rimDiameter: "18 Inch",
    width: "215",
    aspectRatio: "45",
    imageUrl: triangleTyre,
  },
];

const widths = [
  "155",
  "165",
  "175",
  "185",
  "195",
  "205",
  "215",
  "225",
  "235",
  "245",
  "255",
];

const diameters = ["13", "14", "15", "16", "17", "18", "19", "20"];

const aspects = ["45", "50", "55", "60", "65", "70", "75"];

const brands = ["MRF", "CEAT", "Yokohama", "Bridgestone", "Apollo", "Michelin"];

export { tyreInformation, widths, diameters, aspects, brands, tyres };
