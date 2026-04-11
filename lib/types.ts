export interface PricingTier {
  name: string;
  price: string;
  credits: string;
  features: string[];
  highlighted?: boolean;
}

export interface ReviewSection {
  id: string;
  heading: string;
  content: string;
}

export interface Rating {
  overall: number;
  quality: number;
  value: number;
  ease: number;
  features: number;
}

export interface Review {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  verdict: string;
  rating: Rating;
  pros: string[];
  cons: string[];
  bestFor: string[];
  notFor: string[];
  pricingTiers: PricingTier[];
  affiliateUrl: string;
  updatedAt: string;
  testedWith: string;
  sections: ReviewSection[];
}

export interface FeatureRow {
  feature: string;
  toolA: string;
  toolB: string;
}

export interface Comparison {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  toolAName: string;
  toolBName: string;
  toolASlug: string;
  toolBSlug: string;
  winner: "A" | "B" | "tie";
  verdict: string;
  featureRows: FeatureRow[];
  affiliateUrlA: string;
  affiliateUrlB: string;
}

export interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problem: string;
  solution: string;
  recommendedSlugs: string[];
}

export interface GuideSection {
  id: string;
  heading: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: GuideSection[];
  updatedAt: string;
}

export interface BestOf {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  rankedSlugs: string[];
  verdict: string;
  updatedAt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "review" | "comparison" | "use-case" | "guide" | "best-of" | "opinion";
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  excerpt: string;
  sections: { id: string; heading: string; content: string }[];
}
