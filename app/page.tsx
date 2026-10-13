'use client'

import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import StoryArt from '../components/StoryArt'
import { getStoryBySlug } from '../lib/news'

const countyStories = [
  ['nairobi', 'Nairobi', 'Nairobi collects 100,000 tonnes of garbage in a month', '26 min ago'],
  ['mombasa', 'Mombasa', 'Court fight breaks over Sh93bn Kipevu oil storage deal', '1 hr ago'],
  ['kisumu', 'Kisumu', 'Heavy rains and storms damage roads, property in Kisumu', '2 hrs ago'],
  ['nakuru', 'Nakuru', 'Rift Valley farmers watch the short rains forecast closely', '3 hrs ago'],
  ['uasin', 'Uasin Gishu', 'Farmers prepare for the short rains planting season', '4 hrs ago'],
  ['nairobi', 'Nairobi', 'US Embassy issues advisory after cyber breach in Kenya', '5 hrs ago'],
  ['mombasa', 'Mombasa', 'Dangote refinery to anchor wider industrial expansion', '6 hrs ago'],
  ['kisumu', 'Kisumu', 'Ministry takes action at JOOTRH over healthcare complaints', '7 hrs ago'],
]

function Skyline() {
  return (
    <img 
      src="/arts/unnamed (2).webp" 
      alt="Nairobi skyline at sunset with city buildings and streets" 
      className="skyline-image"
    />
  )
}

export default function Page() {
  const [county, setCounty] = useState('all')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="ticker"><span className="ticker-label">BREAKING</span><div className="ticker-rail"><div className="ticker-track">{['Man City beat 10-man Liverpool 3-0 at Anfield', 'IEBC ballot paper tender hits fresh roadblock at review board', 'Kenya confirms first imported Bundibugyo Ebola case', 'Dangote breaks ground on Ksh2 trillion Lamu refinery', 'Man City beat 10-man Liverpool 3-0 at Anfield', 'IEBC ballot paper tender hits fresh roadblock at review board'].map((story, i) => <span key={`${story}-${i}`}><b>{['17:30', '20:48', '20:29', '20:44', '17:30', '20:48'][i]}</b>{story}</span>)}</div></div></div>

      <main className="wrap">
        <section className="lead"><article><div className="lead-art"><Skyline /></div><p className="caption">Photo: Nairobi skyline at sunset.</p><div className="lead-copy"><span className="kicker">Business</span><h1><span>Ruto and Dangote break</span><span>ground on Ksh2 trillion</span><span>Lamu refinery</span></h1><p className="standfirst">The $16 billion plant will be East Africa’s largest refinery, creating about 60,000 jobs and supplying fuel across the region.</p><p className="byline"><b>Dispatch Newsroom</b> · 26 min ago · 4 min read</p></div></article><aside className="most-read"><h2>Most read</h2><ol>{[['Kipchoge ends three-year title drought with Melbourne course record', 'Athletics', '/news/kipchoge-ends-three-year-title-drought-with-melbourne-course-record'], ['Kenya races to trace contacts after first Ebola death as DRC outbreak spreads', 'Health', '/news/kenya-races-to-trace-contacts-after-first-ebola-death'], ['Inside IEBC’s 180M ballot papers plan as 2027 election tender hits fresh roadblock', 'Elections', '/news/iebc-180m-ballot-papers-plan-tender-roadblock'], ['Dangote breaks ground on Ksh2 trillion Lamu refinery', 'Business', '/news/dangote-breaks-ground-on-ksh2-trillion-lamu-refinery'], ['Natembeya questions Ruto–Dangote Lamu refinery deal over transparency', 'Politics', '/news/natembeya-questions-ruto-dangote-lamu-refinery-deal']].map(([title, category, href], i) => <li key={title}><span className="number">{i + 1}</span><div><a href={href}>{title}</a><small>{category}</small></div></li>)}</ol></aside></section>
        <div className="latest">{[['21:05', 'Kipchoge wins Melbourne Marathon in course-record time', '/news/kipchoge-ends-three-year-title-drought-with-melbourne-course-record'], ['20:48', 'IEBC ballot paper tender hits fresh roadblock', '/news/iebc-180m-ballot-papers-plan-tender-roadblock'], ['20:29', 'Kenya races to trace contacts after first Ebola death', '/news/kenya-races-to-trace-contacts-after-first-ebola-death'], ['20:23', 'Lamu residents demand compensation and share of Dangote project', '/news/lamu-residents-demand-compensation-and-share-of-dangote-project']].map(([time, title, href]) => <a href={href} key={title}><time>{time}</time>{title}</a>)}</div>

        <section className="section" id="counties"><div className="section-head"><h2>Counties</h2><a href="#">All 47 counties</a></div><div className="chips"><span className="chips-label">Your county</span>{[['all', 'All'], ['nairobi', 'Nairobi'], ['mombasa', 'Mombasa'], ['kisumu', 'Kisumu'], ['nakuru', 'Nakuru'], ['uasin', 'Uasin Gishu']].map(([value, label]) => <button className={`chip ${county === value ? 'selected' : ''}`} onClick={() => setCounty(value)} key={value}>{label}</button>)}</div><div className="story-grid">{countyStories.map(([value, place, title, time], index) => <article className={`story-card ${county !== 'all' && county !== value ? 'hidden' : ''}`} key={title}><StoryArt story={{ slug: `county-${value}-${index}`, title, category: 'Counties' }} className="card-art" /><span className="kicker">{place}</span><h3><a href="/section/news">{title}</a></h3><time>{time}</time></article>)}</div></section>

        <section className="section"><div className="section-head"><h2>Business</h2><a href="#">More business</a></div><div className="business-grid"><article className="business-lead"><StoryArt story={getStoryBySlug('dangote-reveals-why-lamu-beat-mombasa-and-tanga-for-refinery')!} className="card-art card-art-wide" /><span className="kicker">Business</span><h3><a href="/news/dangote-reveals-why-lamu-beat-mombasa-and-tanga-for-refinery">Dangote reveals why Lamu beat Mombasa and Tanga for Ksh2T refinery investment</a></h3><p>The industrialist cites the deep-water port, the LAPSSET corridor and room to expand.</p></article><ul className="row-list">{[['EPRA announces October electricity price adjustment', '/news/epra-announces-october-electricity-price-adjustment'], ['Dangote refinery IPO set to close October 13, targeting $1.6 billion', '/news/dangote-refinery-ipo-set-to-close-october-13-targeting-1-6-billion'], ['Kenya secures licence to manufacture new HIV prevention pill', '/news/kenya-secures-licence-to-manufacture-new-hiv-prevention-pill'], ['Auditor-General: recovery of Sh4bn Uwezo loans unlikely', '/news/auditor-general-recovery-of-sh4bn-uwezo-loans-unlikely']].map(([item, href], i) => <li key={item}><time>Business · {i + 1} hr{i ? 's' : ''} ago</time><a href={href}>{item}</a></li>)}</ul></div></section>
      </main>

      <section className="opinion" id="opinion"><div className="wrap"><div className="section-head"><h2>Opinion</h2><a href="#">All opinion</a></div><div className="opinion-grid">{[['Editorial', 'The Lamu refinery must pay its dues to Lamu', 'A Ksh2 trillion project is only as legitimate as the benefits it brings to the host community.'], ['Editorial', 'Ebola: preparedness, not panic', 'Kenya’s first imported case is a serious test, but the response so far has been the right one.'], ['Columnist', 'IEBC’s procurement troubles are a trust test', 'Every tender delay and allegation chips away at confidence in the 2027 election.'], ['Guest', 'El Niño will not wait for county budgets', 'The rains are forecast for this weekend. Counties must act before the water rises, not after.']].map(([role, title, text]) => <article className="opinion-card" key={title}><span>{role}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="briefing" id="brief"><div className="wrap briefing-inner"><div><h2>The Dispatch morning briefing</h2><p>The day&apos;s main stories from across the counties, in your inbox before breakfast.</p></div>{subscribed ? <p className="success">Thanks — check your inbox to confirm.</p> : <form className="subscribe" onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true) }}><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" aria-label="Email address" /><button>Subscribe</button></form>}</div></section>
      <SiteFooter />
    </div>
  )
}
