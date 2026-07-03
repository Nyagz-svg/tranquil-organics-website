export const businessInfo = {
  name: "Tranquil Organics",
  productLine: "Tranquil Roots",
  tagline: "Natural haircare and skincare products created for growth, glow and confidence.",
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
    "Cash on delivery",
    "Bank transfer",
  ],
};

export function createWhatsAppLink(message) {
  if (!message) {
    return businessInfo.whatsappUrl;
  }

  return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
