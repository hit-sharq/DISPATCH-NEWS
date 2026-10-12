import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import ContactForm from '../../components/ContactForm'
import { contentPages } from '../../lib/pages'

type Props = { params: Promise<{ slug: string }> }

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dispatch.ke'

export async function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = contentPages.find((item) => item.slug === slug)
  if (!page) return { title: 'Page not found' }
  const url = `${siteUrl}/${page.slug}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, type: 'website', url },
  }
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params
  const page = contentPages.find((item) => item.slug === slug)
  if (!page) notFound()

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="wrap">
        <article className="article">
          <div className="page-hero">
            <div className="article-kicker-row">
              <a href="/" className="article-back"><ArrowLeft size={14} aria-hidden="true" />Home</a>
              <span className="kicker">Dispatch KE</span>
            </div>
            <h1>{page.title}</h1>
            <p className="article-standfirst">{page.description}</p>
          </div>
          <div className="article-body">
            {page.blocks.map((block, index) => {
              if (block.type === 'h2') return <h2 key={index}>{block.text}</h2>
              if (block.type === 'list') return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>
              return <p key={index}>{block.text}</p>
            })}
          </div>
          {page.slug === 'contact' && <ContactForm />}
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
