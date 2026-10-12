import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'
import SiteHeader from '../../../components/SiteHeader'
import SiteFooter from '../../../components/SiteFooter'
import { getSponsorBySlug, type Sponsor } from '../../../lib/sponsors'
import '../sponsored.css'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { getAllSponsorSlugs } = await import('../../../lib/sponsors')
  return getAllSponsorSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sponsor = getSponsorBySlug(slug)
  if (!sponsor) return { title: 'Sponsor not found' }
  return {
    title: `Sponsored: ${sponsor.name} — ${sponsor.tagline}`,
    description: `Sponsored content. ${sponsor.standfirst}`,
    robots: { index: true, follow: true },
  }
}

function SponsoredContent({ sponsor }: { sponsor: Sponsor }) {
  return (
    <article className="article">
      {/* Hero */}
      <section className="sponsored-hero">
        <div className="sponsored-hero-inner">
          <span className="sponsored-hero-tag">Sponsored content</span>
          <h1>{sponsor.name} — {sponsor.tagline}</h1>
          <p className="standfirst">{sponsor.standfirst}</p>
        </div>
      </section>

      {/* Disclosure banner */}
      <div className="sponsored-banner" role="note" aria-label="Sponsored content disclosure">
        <span className="sponsored-tag">Sponsored content</span>
        <span className="sponsored-by">{sponsor.bannerText}</span>
      </div>

      {/* Description */}
      <section className="sponsored-section fade-in-animate">
        <h2>The platform</h2>
        <p>{sponsor.description}</p>
      </section>

      {/* Key facts */}
      <section className="sponsored-section fade-in-animate">
        <h2>Key facts</h2>
        <ul>
          {sponsor.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}
        </ul>
      </section>

      {/* Features */}
      <section className="sponsored-section fade-in-animate">
        <h2>Features & games</h2>
        <ul>
          {sponsor.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      {/* CTA */}
      <section className="sponsored-section fade-in-animate">
        <h2>Get started</h2>
        <div className="sponsored-links">
          {sponsor.ctaLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="sponsored noopener"
              aria-label={`Visit ${link.label}`}
            >
              {link.label}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      {/* Contact & social */}
      <section className="sponsored-section fade-in-animate">
        <h2>Contact & social</h2>
        <div className="sponsored-contact">
          {sponsor.contact.phone && (
            <span style={{ display: 'flex', alignItems: 'center', color: 'var(--mute)', fontSize: '.86rem' }}>
              📞 {sponsor.contact.phone}
            </span>
          )}
          {sponsor.contact.liveChat && (
            <span style={{ display: 'flex', alignItems: 'center', color: 'var(--mute)', fontSize: '.86rem' }}>
              💬 {sponsor.contact.liveChat}
            </span>
          )}
          {sponsor.contact.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="sponsored noopener"
              aria-label={`Visit ${link.label}`}
            >
              {link.label}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="sponsored-disclaimer">
        <p dangerouslySetInnerHTML={{ __html: sponsor.disclaimer }} />
        <p>
          This page is paid advertising. It is not editorial content and was not produced by the Dispatch KE newsroom.
          Dispatch KE does not endorse {sponsor.name} or any associated product. Links on this page carry
          <code>rel="sponsored"</code> in line with Google's paid-link policy.
        </p>
      </div>
    </article>
  )
}

export default async function SponsoredPage({ params }: Props) {
  const { slug } = await params
  const sponsor = getSponsorBySlug(slug)
  if (!sponsor) notFound()

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="wrap">
        <SponsoredContent sponsor={sponsor} />
      </main>
      <SiteFooter />
    </div>
  )
}