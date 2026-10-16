export const categories = [
  {
    name: "Engine",
    image: "engineClose",
    text: "Liners, pumps, injectors and turbos.",
  },
  {
    name: "Brakes",
    image: "underVehicle",
    text: "Drums, shoes, chambers and slack adjusters.",
  },
  {
    name: "Clutch",
    image: "alternator",
    text: "Discs, pressure plates and release bearings.",
  },
  {
    name: "Suspension",
    image: "mechanicWrench",
    text: "Leaf springs, shocks and U-bolt kits.",
  },
  {
    name: "Electrical",
    image: "mechanicLight",
    text: "Starters, alternators and lamps.",
  },
  {
    name: "Filters",
    image: "oilService",
    text: "Oil, fuel, air and urea filters.",
  },
  {
    name: "Transmission",
    image: "gears",
    text: "Gears, shafts and clutch housings.",
  },
  {
    name: "Hydraulics",
    image: "excavator",
    text: "Cylinders, pumps, hoses and seals.",
  },
  {
    name: "Body Parts",
    image: "bus",
    text: "Mirrors, bumpers and mudguards.",
  },
  {
    name: "Undercarriage",
    image: "factory",
    text: "Rollers, idlers and sprockets.",
  },
];

export const brands = [
  {
    slug: "tata",
    name: "Tata Motors",
    image: "highwayTruck",
    summary: "Parts for Prima, Signa and LPK trucks and tippers.",
    models: [
      "Prima 2523",
      "Prima 2528",
      "Prima 3123",
      "Prima 3128",
      "Signa 4923",
      "LPK 2518",
    ],
  },
  {
    slug: "ashok-leyland",
    name: "Ashok Leyland",
    image: "tipper",
    summary: "Captain and U-Truck parts for fleet and tipper work.",
    models: ["Captain 2518", "Captain 2523", "Captain 3123", "U-Truck"],
  },
  {
    slug: "bharatbenz",
    name: "BharatBenz",
    image: "dispatch",
    summary: "BS6 haulage and tipper parts, quoted by model.",
    models: ["1923C", "2823R", "3523R"],
  },
  {
    slug: "mahindra",
    name: "Mahindra",
    image: "constructionCrew",
    summary: "Blazo X tipper, haulage and mixer parts.",
    models: ["Blazo X 28", "Blazo X 35", "Blazo X 42"],
  },
  {
    slug: "eicher",
    name: "Eicher",
    image: "tools",
    summary: "Pro series truck and tipper parts.",
    models: ["Pro 3015", "Pro 6019T", "Pro 8028XC"],
  },
  {
    slug: "volvo",
    name: "Volvo",
    image: "volvoTruck",
    summary: "Heavy-truck parts. Send the chassis or model with the part number.",
    models: [],
  },
  {
    slug: "scania",
    name: "Scania",
    image: "scaniaTruck",
    summary: "Heavy-truck parts. Send the chassis or model with the part number.",
    models: [],
  },
  {
    slug: "construction",
    name: "Construction equipment",
    image: "excavator",
    summary: "Undercarriage and hydraulic parts for JCB, Hitachi, Caterpillar and Komatsu.",
    models: [],
    equipment: ["JCB", "Hitachi", "Caterpillar", "Komatsu"],
    productSlugs: ["jcb", "hitachi", "caterpillar", "komatsu"],
  },
];

export function brandBySlug(slug) {
  return brands.find((brand) => brand.slug === slug);
}
