'use client'

import { use, useMemo, useState } from 'react'
import { ArrowRight, Bookmark, Clock3, Share2 } from 'lucide-react'
import SiteHeader from '../../../components/SiteHeader'
import SiteFooter from '../../../components/SiteFooter'
import SectionIllustration from '../../../components/illustrations'
import type { Section } from '../../../lib/news'

export default function SectionContent({ data }: { data: Section }) {
  const [shared, setShared] = useState(false)
  const [search, setSearch] = useState('')
  const [saved, setSaved] = useState<string[]>([])

  const filtered = useMemo(
    () => data.stories.filter((story) => `${story.title} ${story.summary}`.toLowerCase().includes(search.toLowerCase())),
    [data.stories, search],
  )
  const searching = search.trim().length > 0
  const featured = searching ? undefined : filtered[0]
  const rest = searching ? filtered : filtered.slice(1)

  const toggleSave = (title: string) =>
    setSaved((items) => (items.includes(title) ? items.filter((item) => item !== title) : [...items, title]))

  const shareStory = async (title: string) => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href })
    } else {
      await navigator.clipboard?.writeText(window.location.href)
      setShared(true)
    }
  }

  return (
    <div className="site-shell">
      <SiteHeader active={data.slug} search={{ value: search, onChange: setSearch, placeholder: `Search ${data.title.toLowerCase()}` }} />
      <main className="wrap">
        <section className="section section-page">
          <span className="kicker section-kicker">Dispatch desk</span>
          <div className="section-head">
            <h2>{data.title}</h2>
            <a href="/">All sections</a>
          </div>
          <p className="section-intro">{data.intro}</p>

          {featured && (
            <article className="featured-card">
              <div className="featured-art"><SectionIllustration section={data.slug} /></div>
              <div className="featured-copy">
                <span className="kicker">{featured.category}</span>
                <h3><a href={`/news/${featured.slug}`}>{featured.title}</a></h3>
                <p className="featured-summary">{featured.summary}</p>
                <div className="story-meta">
                  <span className="meta-time"><Clock3 size={14} aria-hidden="true" />{featured.time}</span>
                  <div className="story-actions">
                    <button onClick={() => shareStory(featured.title)}><Share2 size={14} aria-hidden="true" />Share</button>
                    <button onClick={() => toggleSave(featured.title)} className={saved.includes(featured.title) ? 'saved' : ''}><Bookmark size={14} aria-hidden="true" />{saved.includes(featured.title) ? 'Saved' : 'Save'}</button>
                  </div>
                </div>
              </div>
            </article>
          )}

          {rest.length > 0 && (
            <div className="story-grid section-grid">
              {rest.map((story) => (
                <article className="story-card" key={story.slug}>
                  <SectionIllustration section={data.slug} className="card-art" />
                  <span className="kicker">{story.category}</span>
                  <h3><a href={`/news/${story.slug}`}>{story.title}</a></h3>
                  <p className="story-summary">{story.summary}</p>
                  <div className="story-meta">
                    <span className="meta-time"><Clock3 size={14} aria-hidden="true" />{story.time}</span>
                    <div className="story-actions">
                      <button onClick={() => shareStory(story.title)} aria-label={`Share ${story.title}`}><Share2 size={14} aria-hidden="true" /></button>
                      <button onClick={() => toggleSave(story.title)} aria-label={`Save ${story.title}`} className={saved.includes(story.title) ? 'saved' : ''}><Bookmark size={14} aria-hidden="true" /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="empty-state">No stories match &ldquo;{search}&rdquo;. Try a different keyword or browse another section.</p>
          )}
        </section>
        {shared && <p className="share-note">Link copied to your clipboard.</p>}
      </main>
      <section className="section-cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Need the full morning picture?</h2>
            <p>Read the latest briefing from every desk.</p>
          </div>
          <a href="/#brief" className="cta-button">Get the briefing <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
