import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dispatch.ke'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/articles'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
