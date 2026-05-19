import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    const absoluteUrl = window.location.href;

    document.title = title;

    function upsertMeta(selector, attributes) {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement(attributes.tagName || "meta");
        document.head.appendChild(element);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        if (key !== "tagName") {
          element.setAttribute(key, value);
        }
      });
    }

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: absoluteUrl });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", absoluteUrl);
  }, [title, description]);

  return null;
}
