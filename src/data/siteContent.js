import {
  Award,
  Gift,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export const announcementMessages = [
  "Free delivery in selected areas for orders above KSh 2,500",
  "Get 10% off your first order when you join the Tranquil Circle",
  "Order directly on WhatsApp",
  "Tranquil Roots by Tranquil Organics",
];

export const trustBadges = [
  { label: "Plant-powered care", icon: Sparkles },
  { label: "Premium packaging", icon: PackageCheck },
  { label: "WhatsApp support", icon: MessageCircle },
  { label: "Kenya delivery", icon: Truck },
  { label: "Secure checkout prototype", icon: ShieldCheck },
  { label: "Small-batch quality", icon: Award },
];

export const concerns = [
  {
    title: "Dry Hair",
    text: "Seal in moisture and support softer-feeling strands.",
    productIds: ["organic-hair-growth-butter", "complete-haircare-routine-pack"],
  },
  {
    title: "Dry Scalp",
    text: "Build a simple scalp massage and nourishment routine.",
    productIds: ["ayurvedic-hair-oil"],
  },
  {
    title: "Breakage Support",
    text: "Create a consistent routine for stronger-looking hair.",
    productIds: ["organic-hair-growth-butter", "complete-haircare-routine-pack"],
  },
  {
    title: "Protective Styles",
    text: "Care for the scalp and seal moisture between styles.",
    productIds: ["ayurvedic-hair-oil", "organic-hair-growth-butter", "complete-haircare-routine-pack"],
  },
  {
    title: "Dull Hair",
    text: "Add natural-looking shine and softness to your routine.",
    productIds: ["ayurvedic-hair-oil", "organic-hair-growth-butter", "conditioning-bar"],
  },
  {
    title: "Wash Day Struggle",
    text: "Make wash day feel softer, calmer, and easier.",
    productIds: ["conditioning-bar", "complete-haircare-routine-pack"],
  },
];

export const routineOptions = [
  "Dry Hair",
  "Dry Scalp",
  "Wash Day Struggle",
  "Protective Styles",
  "Breakage Support",
  "Dull Hair",
  "Full Routine",
];

export const routineRecommendations = {
  "Dry Hair": {
    productIds: ["organic-hair-growth-butter"],
    message:
      "Best for sealing moisture, softening strands, and supporting dry hair routines.",
  },
  "Dry Scalp": {
    productIds: ["ayurvedic-hair-oil"],
    message:
      "Best for scalp nourishment, weekly massage, and scalp comfort.",
  },
  "Wash Day Struggle": {
    productIds: ["conditioning-bar"],
    message:
      "Best for softening hair after washing and making wash day easier.",
  },
  "Protective Styles": {
    productIds: ["ayurvedic-hair-oil", "organic-hair-growth-butter"],
    message:
      "Best for scalp care, moisture sealing, and protective style maintenance.",
  },
  "Breakage Support": {
    productIds: ["complete-haircare-routine-pack"],
    message:
      "Best for building a consistent routine that supports stronger-looking hair.",
  },
  "Dull Hair": {
    productIds: ["organic-hair-growth-butter", "ayurvedic-hair-oil"],
    message:
      "Best for adding natural-looking shine and softness.",
  },
  "Full Routine": {
    productIds: ["complete-haircare-routine-pack"],
    message:
      "Best for customers who want the full Tranquil Roots routine in one set.",
  },
};

export const heroTrustStripItems = [
  "Loved by natural hair customers",
  "Made for dry hair, scalp care, and protective styles",
  "Free delivery in selected areas over KSh 2,500",
  "Order directly on WhatsApp",
];

export const recommendedRoutine = [
  {
    step: "1",
    title: "Soften on wash day",
    productId: "conditioning-bar",
    text: "Use the Conditioning Bar to support softer, smoother-feeling hair after washing.",
  },
  {
    step: "2",
    title: "Nourish the scalp",
    productId: "ayurvedic-hair-oil",
    text: "Apply Ayurvedic Hair Oil directly to the scalp and massage for 3 to 5 minutes.",
  },
  {
    step: "3",
    title: "Seal in moisture",
    productId: "organic-hair-growth-butter",
    text: "Use Organic Hair Growth Butter on damp or dry hair to help seal moisture and add natural-looking shine.",
  },
];

export const visualStoryCards = [
  {
    title: "Product texture",
    text: "Replace with real product and routine photography.",
  },
  {
    title: "Scalp application",
    text: "Replace with real product and routine photography.",
  },
  {
    title: "Natural ingredients",
    text: "Replace with real product and routine photography.",
  },
  {
    title: "Packaging in natural light",
    text: "Replace with real product and routine photography.",
  },
  {
    title: "Routine results",
    text: "Replace with real product and routine photography.",
  },
];

export const loyaltyRewards = [
  { title: "10% off first order", icon: Gift },
  { title: "Birthday treat", icon: Sparkles },
  { title: "Repeat customer rewards", icon: HeartHandshake },
  { title: "Referral discount", icon: MessageCircle },
];

export const faqItems = [
  {
    question: "How do I place an order?",
    answer:
      "Add products to your cart and complete checkout, or order directly through WhatsApp for manual confirmation.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes. Delivery is available within Kenya, with fees confirmed before dispatch.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Same-day or next-day delivery may be available depending on your location. Timing is confirmed after you share your delivery details.",
  },
  {
    question: "Are the products suitable for natural hair?",
    answer:
      "Yes. Tranquil Roots products are created for natural hair routines, including moisture care, scalp nourishment, wash day, and protective styles.",
  },
  {
    question: "How often should I use the hair oil?",
    answer:
      "Use the Ayurvedic Hair Oil 2 to 3 times per week, or as needed within your routine.",
  },
  {
    question: "Can I use the butter on protective styles?",
    answer:
      "Yes. The Organic Hair Growth Butter can help seal in moisture and add shine around protective styles.",
  },
  {
    question: "How do I know which product is right for my hair?",
    answer:
      "Use the Build Your Routine section or message Tranquil Organics on WhatsApp for product guidance.",
  },
  {
    question: "Can I use the products on relaxed hair?",
    answer:
      "The products can fit many hair routines, including relaxed hair, but customers should check ingredient details once final lists are confirmed.",
  },
  {
    question: "Can I order through WhatsApp?",
    answer:
      "Yes. Use any WhatsApp order button on the website to send your order details.",
  },
  {
    question: "Do you deliver outside Nairobi?",
    answer:
      "Delivery within Kenya is available. Locations outside Nairobi are confirmed before dispatch.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Order updates are shared through WhatsApp after your order is confirmed.",
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer:
      "Yes. Salons, hairdressers, resellers, and repeat customers can request bulk pricing on WhatsApp.",
  },
];

export const customerReviews = [
  {
    name: "Amina K.",
    productUsed: "Organic Hair Growth Butter",
    hairConcern: "Dry hair",
    review:
      "My hair stayed softer for longer after wash day, especially when I used the butter after moisturising.",
    date: "Review date coming soon",
    rating: 5,
  },
  {
    name: "Mercy W.",
    productUsed: "Ayurvedic Hair Oil",
    hairConcern: "Scalp dryness",
    review:
      "The oil feels nourishing on my scalp and fits easily into my weekly routine.",
    date: "Review date coming soon",
    rating: 5,
  },
  {
    name: "Sharon N.",
    productUsed: "Conditioning Bar",
    hairConcern: "Wash day softness",
    review:
      "The conditioning bar made wash day feel easier and left my hair feeling softer.",
    date: "Review date coming soon",
    rating: 5,
  },
];

export const tipArticles = [
  {
    title: "How to Keep Natural Hair Moisturised",
    summary:
      "A simple look at layering water-based moisture, oil, and butter without overloading your strands.",
  },
  {
    title: "How to Use Hair Oil Without Making Hair Greasy",
    summary:
      "Learn how a few drops, scalp massage, and good timing can make hair oil feel lighter in your routine.",
  },
  {
    title: "Simple Wash Day Routine for Softer Hair",
    summary:
      "Build a calm wash day flow with cleansing, conditioning, scalp care, and moisture sealing.",
  },
  {
    title: "How to Care for Hair in Protective Styles",
    summary:
      "Keep your scalp nourished and your hair comfortable while wearing braids, twists, or other protective styles.",
  },
];
