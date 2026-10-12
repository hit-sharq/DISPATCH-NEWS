'use client'

import { Search } from 'lucide-react'
import { Mark } from './Wordmark'

type SiteHeaderProps = {
  active?: string
  search?: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
  }
}

const sections: [string, string][] = [
  ['News', '/section/news'],
  ['Politics', '/section/politics'],
  ['Business', '/section/business'],
  ['Counties', '#counties'],
  ['Sports', '/section/sports'],
  ['Tech', '/section/tech'],
]

export default function SiteHeader({ active, search }: SiteHeaderProps) {
  const today = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Nairobi' }).format(new Date())
  return (
    <>
      <div className="utility"><div className="wrap"><span>Nairobi Edition · {today}</span><div className="utility-links"><span><b>EN</b> / SW</span><a href="#brief">Newsletter</a><a href="/contact">Contact</a></div></div></div>
      <div className="flag"><i /><i /><i /></div>
      <header className="mast"><div className="wrap mast-inner"><a href="/" aria-label="Dispatch KE home"><Mark /><span className="tagline">Independent news for Kenya</span></a><div className="mast-actions"><label className="search"><Search size={16} aria-hidden="true" /><input placeholder={search ? search.placeholder : 'Search stories'} aria-label="Search stories" value={search ? search.value : undefined} onChange={(event) => search?.onChange(event.target.value)} /></label><a href="#brief" className="button">Get the briefing</a></div></div></header>
      <nav className="nav" aria-label="Primary navigation"><div className="wrap nav-inner"><a href="#" className="live">Live</a>{sections.map(([item, href]) => <a href={href} key={item} className={active === item.toLowerCase() ? 'active' : ''}>{item}</a>)}<a href="/section/opinion" className={active === 'opinion' ? 'active' : ''}>Opinion</a><a href="/section/lifestyle" className={active === 'lifestyle' ? 'active' : ''}>Lifestyle</a><a href="/section/video" className={active === 'video' ? 'active' : ''}>Video</a><a href="/articles" className={`cta ${active === 'write' ? 'active' : ''}`}>Write</a></div></nav>
    </>
  )
}
