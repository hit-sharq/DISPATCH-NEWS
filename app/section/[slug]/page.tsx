import { Metadata } from 'next'
import { getSectionBySlug, sections } from '../../../lib/news'
import SectionContent from './SectionContent'

type Props = { params: Promise<{ slug: string }> }

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dispatch.ke'

export async function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = getSectionBySlug(slug)
  return {
    title: data.title,
    description: data.intro,
    alternates: { canonical: `/section/${data.slug}` },
    openGraph: {
      title: `${data.title} — Dispatch KE`,
      description: data.intro,
      type: 'website',
      images: [{ url: `${siteUrl}/images/${data.slug}.svg`, width: 400, height: 250, alt: data.title }],
    },
  }
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params
  const data = getSectionBySlug(slug)
  return <SectionContent data={data} />
}
