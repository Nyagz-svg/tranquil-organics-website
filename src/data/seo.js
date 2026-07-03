import { businessInfo } from "./business.js";
import { products } from "./products.js";

export const siteRoutes = [
  "/",
  "/shop",
  "/routine",
  "/about",
  "/reviews",
  "/contact",
  "/ingredients",
  "/tips",
  "/shipping",
  "/returns",
  "/privacy",
  "/terms",
  "/cart",
  "/checkout",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${businessInfo.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteImageUrl(imagePath) {
  return absoluteUrl(imagePath);
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessInfo.name,
    url: businessInfo.siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.whatsappDisplay,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
    sameAs: [businessInfo.instagramUrl],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessInfo.name,
    url: businessInfo.siteUrl,
  };
}

export function productJsonLd(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.bundleImages
      ? product.bundleImages.map((image) => absoluteImageUrl(image))
      : absoluteImageUrl(product.image),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    sku: product.id,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/product/${product.id}`),
      priceCurrency: "KES",
      price: String(product.price),
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(product.rating),
      reviewCount: String(product.reviewCount),
    },
  };
}

export function productListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tranquil Roots products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/product/${product.id}`),
      name: product.name,
    })),
  };
}
