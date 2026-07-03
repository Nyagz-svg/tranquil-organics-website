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
    shortDescription: "Seals in moisture, softens strands, and adds natural-looking shine.",
    trustNote: "Natural-inspired care for dry hair and protective styles.",
    benefitStatement:
      "Plant-powered care that helps reduce dryness, soften strands, and support a consistent haircare routine.",
    description:
      "A rich hair butter made for moisture sealing, softer-feeling strands, protective styles, and natural-looking shine.",
    concerns: ["Dry Hair", "Breakage Support", "Protective Styles", "Dull Hair"],
    whoItIsFor:
      "Suitable for natural hair routines, dry hair, dull hair, and protective styles that need moisture sealing.",
    whatItDoes:
      "Helps seal in moisture, soften strands, add shine, and support a steady haircare routine.",
    benefits: [
      "Helps seal in moisture",
      "Softens strands",
      "Ideal for dry hair and protective styles",
      "Adds natural-looking shine",
    ],
    keyIngredients:
      "Ingredient details to be updated after brand confirmation.",
    ingredients: "Full ingredient list to be updated after confirmation from the brand.",
    howToUse:
      "Apply a small amount to damp or dry hair to seal in moisture. Use after Ayurvedic Hair Oil or as needed around protective styles.",
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
    shortDescription: "Nourishes the scalp and supports a consistent weekly routine.",
    trustNote: "WhatsApp support available for routine guidance.",
    benefitStatement:
      "Plant-powered scalp care that nourishes the scalp, helps reduce dryness, and adds natural-looking shine.",
    description:
      "A lightweight hair oil designed for scalp nourishment, dryness support, shine, and consistent natural haircare routines.",
    concerns: ["Scalp Dryness", "Protective Styles", "Dull Hair"],
    whoItIsFor:
      "Suitable for customers building a scalp-care routine, refreshing protective styles, or managing scalp dryness.",
    whatItDoes:
      "Nourishes the scalp, helps reduce dryness, supports a consistent haircare routine, and adds natural-looking shine.",
    benefits: [
      "Nourishes the scalp",
      "Helps reduce dryness",
      "Supports a consistent haircare routine",
      "Adds natural-looking shine",
    ],
    keyIngredients:
      "Ingredient details to be updated after brand confirmation.",
    ingredients: "Full ingredient list to be updated after confirmation from the brand.",
    howToUse:
      "Apply directly to the scalp and massage for 3 to 5 minutes. Use 2 to 3 times per week or as part of your regular routine.",
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
    shortDescription: "Softens strands and makes wash day feel easier.",
    trustNote: "Premium packaging and easy wash-day storage.",
    benefitStatement:
      "A conditioning treatment that supports wash day softness, easier detangling, and a smoother-feeling routine.",
    description:
      "A conditioning bar made for wash day softness, smoother-feeling strands, and easier natural haircare maintenance.",
    concerns: ["Dry Hair", "Wash Day Softness", "Dull Hair"],
    whoItIsFor:
      "Suitable for wash day routines, dry hair, dull hair, and customers who want a simple conditioning step.",
    whatItDoes:
      "Helps soften strands, support easier wash days, and leave hair feeling smoother.",
    benefits: [
      "Conditions hair after washing",
      "Softens strands",
      "Supports wash day softness",
      "Travel-friendly",
    ],
    keyIngredients:
      "Ingredient details to be updated after brand confirmation.",
    ingredients: "Full ingredient list to be updated after confirmation from the brand.",
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
      "A full routine for scalp nourishment, wash day softness, and moisture sealing.",
    trustNote: "Save when buying the routine as a complete set.",
    benefitStatement:
      "A complete routine pack for cleansing, nourishing, moisturising, and maintaining healthier-looking hair.",
    description:
      "A complete routine pack for cleansing, nourishing, moisturising, and maintaining healthier-looking hair.",
    includes: [
      "Organic Hair Growth Butter",
      "Ayurvedic Hair Oil",
      "Conditioning Bar",
    ],
    concerns: [
      "Dry Hair",
      "Scalp Dryness",
      "Breakage Support",
      "Protective Styles",
      "Dull Hair",
      "Wash Day Softness",
    ],
    whoItIsFor:
      "Suitable for customers who want all core Tranquil Roots routine steps in one set.",
    whatItDoes:
      "Combines wash day conditioning, scalp nourishment, and moisture sealing for a complete natural haircare routine.",
    benefits: [
      "Covers a full wash day to styling routine",
      "Combines cleansing, scalp care, and moisture sealing",
      "Helps simplify product selection",
      "Better value than buying each step separately",
    ],
    keyIngredients:
      "Ingredient details to be updated after brand confirmation.",
    ingredients: "Full ingredient list to be updated after confirmation from the brand.",
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
