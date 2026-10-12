import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock3 } from 'lucide-react'
import SiteHeader from '../../../components/SiteHeader'
import StoryArt from '../../../components/StoryArt'
import SiteFooter from '../../../components/SiteFooter'
import ArticleActions from '../../../components/ArticleActions'
import { allStories, getRelatedStories, getStoryBySlug } from '../../../lib/news'

type Props = { params: Promise<{ slug: string }> }

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dispatch.ke'

export async function generateStaticParams() {
  return allStories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return { title: 'Story not found' }
  const url = `${siteUrl}/news/${story.slug}`
  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: url },
    openGraph: {
      title: story.title,
      description: story.summary,
      type: 'article',
      url,
      publishedTime: story.datetime,
      authors: [story.author],
      siteName: 'Dispatch KE',
      images: [{ url: `${siteUrl}/images/stories/${story.slug}.svg`, width: 400, height: 250, alt: story.title }],
    },
    twitter: { card: 'summary_large_image', title: story.title, description: story.summary, images: [`${siteUrl}/images/stories/${story.slug}.svg`] },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) notFound()

  const related = getRelatedStories(story.slug)
  const url = `${siteUrl}/news/${story.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: story.title,
    description: story.summary,
    datePublished: story.datetime,
    author: { '@type': 'Person', name: story.author },
    publisher: {
      '@type': 'Organization',
      name: 'Dispatch KE',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/icon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: [`${siteUrl}/icon.svg`],
  }

  return (
    <div className="site-shell">
      <SiteHeader active={story.section} />
      <main className="wrap">
        <article className="article">
          <div className="article-hero">
            <div className="article-kicker-row">
              <a href={`/section/${story.section}`} className="article-back"><ArrowLeft size={14} aria-hidden="true" />{story.sectionTitle}</a>
              <span className="kicker">{story.category}</span>
            </div>
            <h1>{story.title}</h1>
            <div className="article-byline">
              <b>{story.author}</b>
              <span className="dot" aria-hidden="true" />
              <time dateTime={story.datetime}>{story.time}</time>
            </div>
            <p className="article-standfirst">{story.summary}</p>
            <div className="article-art"><StoryArt story={story} /></div>
            <p className="caption">{story.imageCredit ? `Photo: ${story.imageCredit}` : 'Illustration: Dispatch KE. Replace with the story photograph.'}</p>
          </div>
          <div className="article-body">
            {story.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <ArticleActions title={story.title} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </article>

        <section className="article-related" aria-label="Related stories">
          <h2>Related stories</h2>
          <div className="story-grid">
            {related.map((item) => (
              <article className="story-card" key={item.slug}>
                <StoryArt story={item} className="card-art" />
                <span className="kicker">{item.category}</span>
                <h3><a href={`/news/${item.slug}`}>{item.title}</a></h3>
                <p className="story-summary">{item.summary}</p>
                <div className="story-meta">
                  <span className="meta-time"><Clock3 size={14} aria-hidden="true" />{item.time}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
