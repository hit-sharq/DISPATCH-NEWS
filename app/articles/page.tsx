'use client'

import { useState } from 'react'
import { Check, Copy, Image as ImageIcon, Link2, Send, Share2 } from 'lucide-react'

const trending = [
  { category: 'Politics', title: 'UDA defections reshape the race ahead of 2027', note: 'Party realignments are accelerating as governors and MPs weigh new alliances.' },
  { category: 'Health', title: 'Kenya steps up Ebola surveillance after confirmed case', note: 'Health officials are tracing contacts and monitoring suspected cases.' },
  { category: 'Business', title: 'South Sudan plans inland depot at Naivasha SEZ', note: 'The project aims to ease pressure on the Port of Mombasa.' },
]

function EditorialMark() {
  return <div className="wordmark">Dispatch<sup>KE</sup></div>
}

function KenyaPulse() {
  return <svg viewBox="0 0 520 180" role="img" aria-label="Abstract red, black and green editorial wave" className="pulse-art">
    <path d="M0 138C74 111 112 138 171 95S280 44 337 76s89 46 183-25v129H0Z" fill="#111" />
    <path d="M0 151c82-27 122-10 180-54s106-56 159-24 104 48 181-29v74c-86 44-130 12-192-14s-106-20-158 17S84 166 0 176Z" fill="#bb0a1e" />
    <path d="M0 171c74-13 116 4 177-25s112-24 164 1 107 20 179-21v54H0Z" fill="#006b3f" />
  </svg>
}

function ShareArticle({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)
  const share = async () => {
    const url = window.location.href
    if (navigator.share) await navigator.share({ title, text: 'Read this on Dispatch KE', url })
    else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  }
  return <button className="share-button" onClick={share}><Share2 size={16} aria-hidden="true" />{copied ? 'Link copied' : 'Share article'}</button>
}

export default function ArticlesPage() {
  const [headline, setHeadline] = useState('')
  const [body, setBody] = useState('')
  const [published, setPublished] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyLink = async () => { await navigator.clipboard?.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1800) }

  return <div className="editor-shell">
    <div className="utility"><div className="wrap"><span>Dispatch newsroom · editorial workspace</span><a href="/">Back to homepage</a></div></div>
    <header className="editor-header"><div className="wrap editor-header-inner"><a href="/" aria-label="Dispatch KE home"><EditorialMark /><span className="tagline">Independent news for Kenya</span></a><div className="editor-actions"><span className="status-dot">Autosave on</span><a className="button" href="#preview">Preview story</a></div></div></header>
    <main className="wrap editor-main">
      <div className="editor-intro"><div><span className="kicker">Newsroom</span><h1>Write an article</h1><p>Shape the story, add a strong visual, and publish it across the Dispatch network.</p></div><ShareArticle title={headline || 'Dispatch KE article'} /></div>
      <div className="editor-layout">
        <section className="writing-panel" aria-label="Article editor">
          <div className="field-row"><label>Section<select defaultValue="News"><option>News</option><option>Politics</option><option>Business</option><option>Counties</option><option>Sports</option><option>Tech</option><option>Opinion</option></select></label><label>Byline<input defaultValue="Dispatch Newsroom" /></label></div>
          <label>Headline<input className="headline-input" value={headline} onChange={(e) => setHeadline(e.target.value)} placeholder="Write a clear, specific headline" /></label>
          <label>Standfirst<textarea className="standfirst-input" placeholder="Give readers the essential context in one or two sentences." /></label>
          <div className="image-picker"><div className="image-picker-top"><div><span className="kicker">Story visual</span><h2>Choose an editorial illustration</h2></div><button className="text-action"><ImageIcon size={15} />Upload image</button></div><div className="svg-options"><button className="svg-card selected"><KenyaPulse /><span>Kenya pulse</span></button><button className="svg-card"><svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" fill="#dfe0db"/><circle cx="35" cy="30" r="20" fill="#111"/><path d="M0 75 55 45l28 17 32-23 45 36v15H0Z" fill="#bb0a1e"/></svg><span>Breaking line</span></button><button className="svg-card"><svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" fill="#111"/><path d="M0 62 35 18l32 26 27-31 66 49v28H0Z" fill="#006b3f"/><circle cx="122" cy="24" r="13" fill="#bb0a1e"/></svg><span>County brief</span></button></div></div>
          <label>Article body<textarea className="body-input" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Start writing your story..." /></label>
          <div className="publish-row"><span>Draft saved just now</span><button className="publish-button" onClick={() => setPublished(true)}><Send size={16} />{published ? 'Published to preview' : 'Publish story'}</button></div>
        </section>
        <aside className="trend-panel"><div className="panel-heading"><span className="kicker">What is moving</span><h2>Kenya trending now</h2><p>Use today&apos;s strongest conversations to guide your next dispatch.</p></div>{trending.map((item) => <article className="trend-item" key={item.title}><span>{item.category}</span><h3>{item.title}</h3><p>{item.note}</p><button onClick={() => setHeadline(item.title)}>Use headline</button></article>)}<div className="share-tools"><h3>Distribution tools</h3><p>Copy the story link or use the share button to send it to your audience.</p><button onClick={copyLink}><Link2 size={15} />{copied ? 'Copied' : 'Copy article link'}<Copy size={14} /></button></div></aside>
      </div>
      <section className="preview-card" id="preview"><div><span className="kicker">Live preview</span><h2>{headline || 'Your headline will appear here'}</h2><p>{body || 'Your article preview will update as you write. Keep the opening focused and useful to readers.'}</p></div><div className="preview-art"><KenyaPulse /></div></section>
    </main>
  </div>
}

