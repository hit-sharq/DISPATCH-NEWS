import { MetadataRoute } from 'next'
import { allStories, sections } from '../lib/news'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dispatch.ke'

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionUrls = sections.map((section) => ({
    url: `${siteUrl}/section/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: 'hourly' as const,
    priority: 0.8,
  }))

  const storyUrls = allStories.map((story) => ({
    url: `${siteUrl}/news/${story.slug}`,
    lastModified: new Date(story.datetime),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'hourly' as const, priority: 1 },
    { url: `${siteUrl}/articles`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    ...sectionUrls,
    ...storyUrls,
  ]
}
