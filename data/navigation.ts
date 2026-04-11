import type { NavItem, FooterNav } from '@/types'

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Reviews',
    href: '/reviews',
    children: [
      { label: 'All Reviews', href: '/reviews' },
      { label: 'ElevenLabs', href: '/reviews/elevenlabs' },
      { label: 'Murf', href: '/reviews/murf' },
      { label: 'PlayHT', href: '/reviews/playht' },
    ],
  },
  {
    label: 'Comparisons',
    href: '/comparisons',
    children: [
      { label: 'All Comparisons', href: '/comparisons' },
      { label: 'ElevenLabs vs Murf', href: '/comparisons/elevenlabs-vs-murf' },
    ],
  },
  { label: 'Blog', href: '/blog' },
]

export const footerNav: FooterNav = {
  columns: [
    {
      title: 'Reviews',
      links: [
        { label: 'All Reviews', href: '/reviews' },
        { label: 'ElevenLabs Review', href: '/reviews/elevenlabs' },
        { label: 'Murf Review', href: '/reviews/murf' },
        { label: 'PlayHT Review', href: '/reviews/playht' },
      ],
    },
    {
      title: 'Comparisons',
      links: [
        { label: 'All Comparisons', href: '/comparisons' },
        { label: 'ElevenLabs vs Murf', href: '/comparisons/elevenlabs-vs-murf' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
  legal: [
    { label: 'About', href: '/about' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const sitemapRoutes: Array<{
  path: string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}> = [
  { path: '/reviews', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/comparisons', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/affiliate-disclosure', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.3 },
]

export const blogPageMeta = {
  title: 'AI Voice Generator Blog: News, Reviews and Comparisons',
  heading: 'AI Voice Generator News and Reviews',
  description: 'Articles, comparisons, and how-to guides on AI voice generation tools.',
}
