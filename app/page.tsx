'use client'

import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionIllustration from '../components/illustrations'

const countyStories = [
  ['nairobi', 'Nairobi', 'New route plan: what changes for commuters', '35 min ago'],
  ['mombasa', 'Mombasa', 'Coastal advisory: fishermen urged to stay ashore', '1 hr ago'],
  ['kisumu', 'Kisumu', 'Lakeside traders prepare for the rainy season', '2 hrs ago'],
  ['nakuru', 'Nakuru', 'County assembly debates proposed budget', '3 hrs ago'],
  ['uasin', 'Uasin Gishu', 'Farmers prepare for the short rains planting', '4 hrs ago'],
  ['nairobi', 'Nairobi', 'Hawkers and City Hall meet over designated zones', '5 hrs ago'],
  ['mombasa', 'Mombasa', 'Port-side businesses report steady season', '6 hrs ago'],
  ['kisumu', 'Kisumu', 'Health officials outline clinic upgrade timeline', '7 hrs ago'],
]

function Skyline() {
  return (
    <svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMax slice" aria-label="Illustration of the Nairobi skyline" role="img">
      <defs><pattern id="windows" width="12" height="16" patternUnits="userSpaceOnUse"><rect x="3" y="4" width="5" height="7" fill="#dfe0db" opacity=".5" /></pattern></defs>
      <rect width="800" height="340" fill="#dfe0db" />
      <g fill="#111"><rect x="20" y="210" width="70" height="90" /><rect x="100" y="150" width="52" height="150" /><rect x="160" y="205" width="84" height="95" /><rect x="268" y="120" width="52" height="180" /><rect x="258" y="106" width="72" height="14" /><path d="M274 106L314 106L304 72L284 72Z" /><rect x="292" y="48" width="4" height="26" /><rect x="356" y="96" width="74" height="204" /><rect x="372" y="78" width="42" height="18" /><rect x="440" y="170" width="60" height="130" /><rect x="510" y="125" width="92" height="175" /><rect x="552" y="90" width="4" height="36" /><rect x="612" y="180" width="56" height="120" /><rect x="676" y="140" width="74" height="160" /><rect x="758" y="200" width="42" height="100" /><rect y="300" width="800" height="40" /></g>
      <g fill="url(#windows)"><rect x="100" y="150" width="52" height="150" /><rect x="268" y="120" width="52" height="180" /><rect x="356" y="96" width="74" height="204" /><rect x="510" y="125" width="92" height="175" /><rect x="676" y="140" width="74" height="160" /></g>
      <rect y="300" width="800" height="4" fill="#bb0a1e" />
    </svg>
  )
}

export default function Page() {
  const [county, setCounty] = useState('all')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="ticker"><span className="ticker-label">BREAKING</span><div className="ticker-rail"><div className="ticker-track">{['Heavy rains expected across parts of Western Kenya this week', 'County assemblies begin review of budget proposals', 'Traders in Nairobi CBD seek clarity on new licensing fees', 'Kenya Meteorological Department issues advisory for coastal counties', 'Heavy rains expected across parts of Western Kenya this week', 'County assemblies begin review of budget proposals'].map((story, i) => <span key={`${story}-${i}`}><b>{['09:42', '09:15', '08:50', '08:20', '09:42', '09:15'][i]}</b>{story}</span>)}</div></div></div>

      <main className="wrap">
        <section className="lead"><article><div className="lead-art"><Skyline /></div><p className="caption">Illustration: Nairobi skyline. Replace with a lead photograph.</p><div className="lead-copy"><span className="kicker">City Hall</span><h1><span>City Hall and matatu operators</span><span>agree new CBD routes</span><span>after weeks of talks</span></h1><p className="standfirst">The agreement sets out designated drop-off zones and a phased timeline for operators, with a review planned after the first three months.</p><p className="byline"><b>Dispatch Newsroom</b> · 18 min ago · 4 min read</p></div></article><aside className="most-read"><h2>Most read</h2><ol>{[['Kenya steps up Ebola surveillance after confirmed case', 'Health', '/news/kenya-steps-up-ebola-surveillance-after-confirmed-case'], ['UDA defections reshape the race ahead of 2027', 'Politics', '/news/uda-defections-reshape-race-ahead-of-2027'], ['South Sudan plans inland depot at Naivasha SEZ', 'Business', '/news/south-sudan-plans-inland-depot-naivasha-sez'], ['What the new CBD routes mean for your daily commute', 'Nairobi', '/news/what-new-cbd-routes-mean-for-your-daily-commute'], ['Explainer: how county revenue is shared', 'Explainer', '/news/explainer-how-county-revenue-is-shared']].map(([title, category, href], i) => <li key={title}><span className="number">{i + 1}</span><div><a href={href}>{title}</a><small>{category}</small></div></li>)}</ol></aside></section>
        <div className="latest">{[['09:42', 'Meteorological advisory issued for coastal counties', '/news/meteorological-department-issues-weekend-advisory'], ['09:15', 'Matatu sacco officials welcome new route plan', '/section/news'], ['08:50', 'Schools reopen as term enters second half', '/section/news'], ['08:20', 'Farmers urged to prepare for the short rains', '/news/farmers-prepare-short-rains-planting-season']].map(([time, title, href]) => <a href={href} key={title}><time>{time}</time>{title}</a>)}</div>

        <section className="section" id="counties"><div className="section-head"><h2>Counties</h2><a href="#">All 47 counties</a></div><div className="chips"><span className="chips-label">Your county</span>{[['all', 'All'], ['nairobi', 'Nairobi'], ['mombasa', 'Mombasa'], ['kisumu', 'Kisumu'], ['nakuru', 'Nakuru'], ['uasin', 'Uasin Gishu']].map(([value, label]) => <button className={`chip ${county === value ? 'selected' : ''}`} onClick={() => setCounty(value)} key={value}>{label}</button>)}</div><div className="story-grid">{countyStories.map(([value, place, title, time]) => <article className={`story-card ${county !== 'all' && county !== value ? 'hidden' : ''}`} key={title}><SectionIllustration section="news" className="card-art" /><span className="kicker">{place}</span><h3><a href="/section/news">{title}</a></h3><time>{time}</time></article>)}</div></section>

        <section className="section"><div className="section-head"><h2>Business</h2><a href="#">More business</a></div><div className="business-grid"><article className="business-lead"><SectionIllustration section="business" className="card-art card-art-wide" /><span className="kicker">Business</span><h3><a href="/news/small-traders-ask-clarity-new-licensing-fees">Small traders ask for clarity on new licensing fees</a></h3><p>Associations say the rollout has left many hawkers and shop owners unsure what they owe and when.</p></article><ul className="row-list">{[['Farmers’ groups push for earlier fertiliser distribution', '/section/business'], ['Mobile money agents report steady weekend volumes', '/news/mobile-money-agents-report-steady-weekend-volumes'], ['Explainer: how county revenue is shared', '/news/explainer-how-county-revenue-is-shared'], ['Matatu route change reshapes CBD foot traffic', '/section/business']].map(([item, href], i) => <li key={item}><time>Business · {i + 1} hr{i ? 's' : ''} ago</time><a href={href}>{item}</a></li>)}</ul></div></section>
      </main>

      <section className="opinion" id="opinion"><div className="wrap"><div className="section-head"><h2>Opinion</h2><a href="#">All opinion</a></div><div className="opinion-grid">{[['Editorial', 'Public transport reform only works if operators are in the room', 'The route agreement shows what dialogue can achieve. The test is what happens next.'], ['Guest columnist', 'Counties deserve the same scrutiny as the national government', 'Budgets decided close to home shape daily life more than most headlines admit.'], ['Staff writer', 'The quiet cost of unclear licensing rules for small traders', 'Confusion is its own tax, and it falls hardest on the smallest businesses.'], ['Guest columnist', 'Why the short rains deserve more planning than they get', 'Preparation, not forecasts alone, decides who benefits when the weather turns.']].map(([role, title, text]) => <article className="opinion-card" key={title}><span>{role}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="briefing" id="brief"><div className="wrap briefing-inner"><div><h2>The Dispatch morning briefing</h2><p>The day&apos;s main stories from across the counties, in your inbox before breakfast.</p></div>{subscribed ? <p className="success">Thanks — check your inbox to confirm.</p> : <form className="subscribe" onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true) }}><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" aria-label="Email address" /><button>Subscribe</button></form>}</div></section>
      <SiteFooter />
    </div>
  )
}
