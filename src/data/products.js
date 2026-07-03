export const products = [
  {
    id: "organic-hair-growth-butter",
    name: "Organic Hair Growth Butter",
    brand: "Tranquil Roots",
    category: "Hair Butter",
    size: "250ml",
    price: 850,
    stockLabel: "In Stock",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 42,
    image: "/images/organic-hair-growth-butter.png",
    shortDescription: "A rich hair butter for moisture, softness, shine, and protective styles.",
    description:
      "A rich nourishing hair butter designed to moisturise, soften, and support healthy-looking hair growth.",
    concerns: ["Dry Hair", "Breakage", "Protective Styles", "Dull Hair"],
    benefits: [
      "Helps seal in moisture",
      "Supports soft and manageable hair",
      "Ideal for dry hair and protective styles",
      "Adds shine",
    ],
    ingredients:
      "Ingredients placeholder: add your exact butter blend, oils, botanical extracts, fragrance notes, and allergen details here before launch.",
    howToUse:
      "Apply a small amount to damp or dry hair. Massage into hair strands and scalp as needed. Use after applying hair oil for better moisture sealing.",
  },
  {
    id: "ayurvedic-hair-oil",
    name: "Ayurvedic Hair Oil",
    brand: "Tranquil Roots",
    category: "Hair Oil",
    size: "100ml",
    price: 650,
    stockLabel: "In Stock",
    badge: "Routine Essential",
    rating: 4.8,
    reviewCount: 36,
    image: "/images/ayurvedic-hair-oil.png",
    shortDescription: "A lightweight scalp oil infused with castor and Ayurvedic-inspired care.",
    description:
      "A natural hair oil infused with castor oil and Ayurvedic-inspired ingredients to nourish the scalp and support stronger-looking hair.",
    concerns: ["Itchy Scalp", "Scalp Nourishment", "Protective Styles", "Dull Hair"],
    benefits: [
      "Nourishes the scalp",
      "Helps reduce dryness",
      "Supports healthy-looking hair growth",
      "Adds shine",
    ],
    ingredients:
      "Ingredients placeholder: add castor oil details, Ayurvedic-inspired botanicals, carrier oils, fragrance notes, and allergen details here before launch.",
    howToUse:
      "Apply a few drops directly to the scalp and massage gently. Use 2 to 3 times per week or as part of a haircare routine.",
  },
  {
    id: "conditioning-bar",
    name: "Conditioning Bar",
    brand: "Tranquil Roots",
    category: "Conditioning Bar",
    size: "",
    price: 500,
    stockLabel: "In Stock",
    badge: "New Arrival",
    rating: 4.7,
    reviewCount: 29,
    image: "/images/conditioning-bar.png",
    shortDescription: "A travel-friendly conditioning bar for softer, smoother wash days.",
    description:
      "A conditioning bar made to nourish hair with every wash, leaving hair soft, smooth, and easier to manage.",
    concerns: ["Dry Hair", "Wash Day Care", "Wash Day Softness", "Dull Hair"],
    benefits: [
      "Conditions hair after washing",
      "Helps soften hair",
      "Easy to use",
      "Travel-friendly",
    ],
    ingredients:
      "Ingredients placeholder: add your conditioning base, natural oils, botanical ingredients, fragrance notes, and allergen details here before launch.",
    howToUse:
      "After washing, rub the conditioning bar between wet hands or directly onto wet hair. Leave briefly, then rinse thoroughly.",
  },
  {
    id: "complete-haircare-routine-pack",
    name: "Complete Haircare Routine Pack",
    brand: "Tranquil Roots",
    category: "Routine Pack",
    size: "3-piece set",
    originalPrice: 2000,
    price: 1850,
    stockLabel: "In Stock",
    badge: "Customer Favourite",
    bundleLabel: "Save when you buy as a set",
    rating: 4.9,
    reviewCount: 31,
    image: "/images/organic-hair-growth-butter.png",
    bundleImages: [
      "/images/conditioning-bar.png",
      "/images/ayurvedic-hair-oil.png",
      "/images/organic-hair-growth-butter.png",
    ],
    shortDescription:
      "A complete set for cleansing, nourishing, moisturising, and routine maintenance.",
    description:
      "A complete routine pack for cleansing, nourishing, moisturising, and maintaining healthier-looking hair.",
    includes: [
      "Organic Hair Growth Butter",
      "Ayurvedic Hair Oil",
      "Conditioning Bar",
    ],
    concerns: [
      "Dry Hair",
      "Itchy Scalp",
      "Breakage",
      "Protective Styles",
      "Dull Hair",
      "Wash Day Care",
      "Scalp Nourishment",
      "Wash Day Softness",
      "Breakage Support",
    ],
    benefits: [
      "Covers a full wash day to styling routine",
      "Combines cleansing, scalp care, and moisture sealing",
      "Helps simplify product selection",
      "Better value than buying each step separately",
    ],
    ingredients:
      "Bundle ingredient details use the individual product ingredient placeholders until final ingredient lists are confirmed by the brand.",
    howToUse:
      "Use the Conditioning Bar on wash day, massage Ayurvedic Hair Oil into the scalp, then apply Organic Hair Growth Butter to seal in moisture.",
  },
];

export const categories = ["All", "Hair Butter", "Hair Oil", "Conditioning Bar", "Routine Pack"];

export function formatPrice(value) {
  return `KSh ${value.toLocaleString("en-KE")}`;
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

export function getProductsByIds(productIds) {
  return productIds
    .map((productId) => getProductById(productId))
    .filter(Boolean);
}
