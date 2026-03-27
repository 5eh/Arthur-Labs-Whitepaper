import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://whitepaper.arthurlabs.net'
  const sections = ['', '/disclaimer', '/introduction', '/architecture', '/systems', '/token', '/deployments', '/references']
  return sections.map(s => ({
    url: `${base}${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: s === '' ? 1.0 : 0.8,
  }))
}
