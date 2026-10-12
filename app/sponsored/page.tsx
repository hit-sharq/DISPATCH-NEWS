import { Metadata } from 'next'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import StoryArt from '../../components/StoryArt'
import { sponsors, type Sponsor } from '../../lib/sponsors'

export const metadata: Metadata = {
  title: 'Sponsored content | Dispatch KE',
  description: 'Browse sponsored content and native advertising on Dispatch KE. All content is clearly labelled and carries rel="sponsored" links.',
}

export default function SponsoredIndexPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="wrap">
        <section className="section section-page">
          <span className="kicker section-kicker">Advertising</span>
          <div className="section-head">
            <h2>Sponsored content</h2>
            <a href="/advertise">Advertise with us</a>
          </div>
          <p className="section-intro">
            Sponsored content is paid advertising produced with our commercial partners.
            All content is clearly labelled, carries <code>rel="sponsored"</code> links,
            and includes the required regulatory disclosures.
          </p>

          <div className="story-grid">
            {sponsors.map((sponsor) => (
              <article key={sponsor.slug} className="story-card">
                <div className="card-art" style={{ backgroundImage: sponsor.image ? `url(${sponsor.image})` : undefined }}>
                  <a href={`/sponsored/${sponsor.slug}`} aria-label={`Read sponsored story: ${sponsor.name}`} />
                </div>
                <span className="kicker">Sponsored</span>
                <h3><a href={`/sponsored/${sponsor.slug}`}>{sponsor.name}</a></h3>
                <p className="story-summary">{sponsor.standfirst}</p>
                <div className="story-meta">
                  <a href={`/sponsored/${sponsor.slug}`} className="meta-time" style={{ background: 'var(--red)', color: '#fff', padding: '6px 12px', borderRadius: '999px', fontWeight: '800', fontSize: '.72rem', textDecoration: 'none' }}>
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="empty-state" style={{ marginTop: '48px', textAlign: 'center' }}>
            <h3>Want to reach our readers?</h3>
            <p style={{ marginTop: '12px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Dispatch KE offers sponsored content, display advertising, newsletter slots and county-level targeting.
              Our commercial team produces clearly labelled native content that respects our readers and your brand.
            </p>
            <a href="/advertise" className="button" style={{ marginTop: '24px', display: 'inline-block' }}>
              Discuss a campaign
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}