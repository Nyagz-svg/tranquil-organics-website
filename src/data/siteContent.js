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
  "Order easily through WhatsApp",
  "Natural haircare for growth, glow and confidence",
];

export const trustBadges = [
  { label: "Natural-inspired care", icon: Sparkles },
  { label: "Premium packaging", icon: PackageCheck },
  { label: "WhatsApp support", icon: MessageCircle },
  { label: "Kenya delivery", icon: Truck },
  { label: "Secure checkout prototype", icon: ShieldCheck },
  { label: "Small-batch quality", icon: Award },
];

export const concerns = [
  {
    title: "Dry Hair",
    text: "Organic Hair Growth Butter and the Routine Pack help seal in moisture.",
    productIds: ["organic-hair-growth-butter", "complete-haircare-routine-pack"],
  },
  {
    title: "Scalp Dryness",
    text: "Ayurvedic Hair Oil supports scalp nourishment in a weekly routine.",
    productIds: ["ayurvedic-hair-oil"],
  },
  {
    title: "Breakage Support",
    text: "The butter and Routine Pack support consistent protective care.",
    productIds: ["organic-hair-growth-butter", "complete-haircare-routine-pack"],
  },
  {
    title: "Protective Styles",
    text: "Scalp care and moisture sealing between styles.",
    productIds: ["ayurvedic-hair-oil", "organic-hair-growth-butter", "complete-haircare-routine-pack"],
  },
  {
    title: "Dull Hair",
    text: "Shine, softness, and a more polished routine.",
    productIds: ["ayurvedic-hair-oil", "organic-hair-growth-butter", "conditioning-bar"],
  },
  {
    title: "Wash Day Softness",
    text: "Conditioning Bar helps wash day feel softer and easier.",
    productIds: ["conditioning-bar", "complete-haircare-routine-pack"],
  },
];

export const routineOptions = [
  "Dry Hair",
  "Scalp Nourishment",
  "Protective Styles",
  "Breakage Support",
  "Wash Day Softness",
  "Dull Hair",
];

export const recommendedRoutine = [
  {
    step: "Step 1",
    product: "Conditioning Bar",
    text: "Cleanse and condition with the Conditioning Bar.",
  },
  {
    step: "Step 2",
    product: "Ayurvedic Hair Oil",
    text: "Apply Ayurvedic Hair Oil directly to the scalp and massage for 3 to 5 minutes.",
  },
  {
    step: "Step 3",
    product: "Organic Hair Growth Butter",
    text: "Apply Organic Hair Growth Butter to damp or dry hair to seal in moisture.",
  },
  {
    step: "Step 4",
    product: "Complete Haircare Routine Pack",
    text: "Use the Complete Haircare Routine Pack for a full routine.",
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
      "Use the Build Your Hair Routine section or message Tranquil Organics on WhatsApp for product guidance.",
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
      "My hair feels softer and easier to manage after using the butter consistently.",
    date: "Review date coming soon",
    rating: 5,
  },
  {
    name: "Mercy W.",
    productUsed: "Ayurvedic Hair Oil",
    hairConcern: "Scalp dryness",
    review:
      "The oil feels nourishing on my scalp and works well in my weekly routine.",
    date: "Review date coming soon",
    rating: 5,
  },
  {
    name: "Sharon N.",
    productUsed: "Conditioning Bar",
    hairConcern: "Wash day softness",
    review:
      "The conditioning bar makes wash day feel easier and leaves my hair feeling soft.",
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
