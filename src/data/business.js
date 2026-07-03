export const businessInfo = {
  name: "Tranquil Organics",
  productLine: "Tranquil Roots",
  tagline: "Natural haircare and skincare products created for growth, glow, and confidence.",
  siteUrl: "https://tranquil-organics-website-phi.vercel.app",
  whatsappDisplay: "+254 727 347707",
  whatsappNumber: "254727347707",
  whatsappUrl: "https://wa.me/254727347707",
  instagramHandle: "@tranquilorganics",
  instagramUrl: "https://www.instagram.com/tranquilorganics",
  email: "hello@tranquilorganics.com",
  deliveryLocation: "Kenya delivery available",
  deliveryInfo:
    "Delivery is available within Kenya. Same-day or next-day delivery may be available depending on your location. Delivery fee is confirmed before dispatch.",
  returnsPolicy:
    "Due to the personal-care nature of our products, returns are only accepted for damaged, incorrect, or unopened items. Customers should report any issue within 24 hours after delivery.",
  paymentMethods: [
    "M-Pesa on confirmation",
    "Cash on delivery where available",
    "Bank transfer on request",
  ],
  checkoutPaymentMethods: [
    "M-Pesa on confirmation",
    "Cash on delivery where available",
    "Bank transfer on request",
  ],
};

export const policyContent = {
  shipping: {
    title: "Shipping Policy",
    route: "/shipping",
    description:
      "Delivery is available within Kenya. Same-day or next-day delivery may be available depending on the customer location. Delivery fees are confirmed before dispatch. Customers can confirm delivery details through WhatsApp.",
  },
  returns: {
    title: "Returns Policy",
    route: "/returns",
    description:
      "Due to the personal-care nature of the products, returns are only accepted for damaged, incorrect, or unopened items. Customers should report any issue within 24 hours after delivery.",
  },
  privacy: {
    title: "Privacy Policy",
    route: "/privacy",
    description:
      "Customer contact and delivery details are used only for order handling, customer support, and communication.",
  },
  terms: {
    title: "Terms of Service",
    route: "/terms",
    description:
      "Product information is for general haircare guidance. Prices can change, availability can change, and orders are confirmed before dispatch.",
  },
};

export function createWhatsAppLink(message) {
  if (!message) {
    return businessInfo.whatsappUrl;
  }

  return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
