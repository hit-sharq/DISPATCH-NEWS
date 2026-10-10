import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dispatch.ke'

export const metadata: Metadata = {
  title: { default: 'Dispatch KE | Independent news for Kenya', template: '%s | Dispatch KE' },
  description: 'Independent news for Kenya: politics, business, counties, sport and opinion.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Dispatch KE',
    title: 'Dispatch KE | Independent news for Kenya',
    description: 'Independent news for Kenya: politics, business, counties, sport and opinion.',
    url: siteUrl,
    images: [{ url: `${siteUrl}/images/og-image.svg`, width: 1200, height: 630, alt: 'Dispatch KE — Independent news for Kenya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dispatch KE | Independent news for Kenya',
    description: 'Independent news for Kenya: politics, business, counties, sport and opinion.',
    images: [`${siteUrl}/images/og-image.svg`],
  },
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
    apple: '/icon.svg',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Dispatch KE',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  slogan: 'Independent news for Kenya',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  )
}
