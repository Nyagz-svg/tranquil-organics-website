import { useEffect } from "react";

const defaultKeywords =
  "natural haircare, organic hair butter, Ayurvedic hair oil, conditioning bar, hair growth butter, natural skincare, Tranquil Organics, Tranquil Roots";

export default function PageMeta({ title, description, keywords = defaultKeywords }) {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", keywords);
    }
  }, [title, description, keywords]);

  return null;
}
