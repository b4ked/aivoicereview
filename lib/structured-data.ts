const BASE_URL = "https://aivoicereview.com";

export function buildReviewSchema(review: {
  slug: string;
  title: string;
  metaDescription: string;
  rating: { overall: number };
  updatedAt: string;
}) {
  const toolName = review.title.split(" Review")[0];
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    name: review.title,
    description: review.metaDescription,
    url: `${BASE_URL}/reviews/${review.slug}`,
    datePublished: review.updatedAt,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.overall.toFixed(1),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: toolName,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
    },
    author: {
      "@type": "Organization",
      name: "AI Voice Review",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Voice Review",
      url: BASE_URL,
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildItemListSchema(
  title: string,
  description: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
