import type { MetadataRoute } from "next";
import { getAllReviews } from "@/lib/reviews";
import { getAllComparisons } from "@/lib/comparisons";
import { getAllUseCases } from "@/lib/use-cases";
import { getAllGuides } from "@/lib/guides";
import { getAllBestOfs } from "@/lib/best-of";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllPosts } from "@/lib/content";

const BASE_URL = "https://aivoicereview.com";
const LAST_MODIFIED = new Date("2026-04-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/use-cases`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-of`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const reviewRoutes: MetadataRoute.Sitemap = getAllReviews().map((r) => ({
    url: `${BASE_URL}/reviews/${r.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const compareRoutes: MetadataRoute.Sitemap = getAllComparisons().map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = getAllUseCases().map((u) => ({
    url: `${BASE_URL}/use-cases/${u.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guideRoutes: MetadataRoute.Sitemap = getAllGuides().map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const bestOfRoutes: MetadataRoute.Sitemap = getAllBestOfs().map((b) => ({
    url: `${BASE_URL}/best-of/${b.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogIndexRoute: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const blogPostRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const mdxBlogRoutes: MetadataRoute.Sitemap = getAllPosts("blog").map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...reviewRoutes,
    ...compareRoutes,
    ...useCaseRoutes,
    ...guideRoutes,
    ...bestOfRoutes,
    ...blogIndexRoute,
    ...blogPostRoutes,
    ...mdxBlogRoutes,
  ];
}
