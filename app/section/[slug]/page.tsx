'use client'

import { use, useMemo, useState } from 'react'
import { ArrowRight, Clock3, Share2 } from 'lucide-react'

const sectionData: Record<string, { title: string; intro: string; accent: string; stories: { category: string; title: string; summary: string; time: string }[] }> = {
  news: { title: 'News', intro: 'The stories shaping Kenya today, reported with clarity and context.', accent: 'bg-red-700', stories: [
    { category: 'National', title: 'Government outlines new plan to ease pressure on essential services', summary: 'Officials say the phased plan will focus on access, accountability and measurable results.', time: '18 min ago' },
    { category: 'Counties', title: 'County leaders call for faster response as rains change travel plans', summary: 'Residents across western counties are preparing for a wetter than usual week.', time: '42 min ago' },
    { category: 'Public interest', title: 'What readers should know about the latest public advisory', summary: 'A plain-language guide to the decisions and dates that affect households this week.', time: '1 hr ago' },
    { category: 'Explainer', title: 'Five questions behind the headline dominating the morning', summary: 'We break down the facts, the context and what happens next.', time: '2 hrs ago' },
  ] },
  politics: { title: 'Politics', intro: 'Power, policy and the people making decisions across the country.', accent: 'bg-black', stories: [
    { category: 'Politics', title: 'UDA defections reshape the race ahead of 2027', summary: 'Party realignments are accelerating as governors and MPs weigh new alliances.', time: '25 min ago' },
    { category: 'Politics', title: 'Leaders trade proposals as the budget conversation moves counties', summary: 'The next phase of negotiations will test how much room local governments have.', time: '1 hr ago' },
    { category: 'Analysis', title: 'Why coalition arithmetic is already back in the conversation', summary: 'The alliances taking shape now may define the political map later.', time: '3 hrs ago' },
    { category: 'Opinion', title: 'The case for more useful political disagreement', summary: 'Good scrutiny is not noise. It is how public decisions get better.', time: '5 hrs ago' },
  ] },
  business: { title: 'Business', intro: 'Markets, enterprise and the economy behind everyday life.', accent: 'bg-emerald-700', stories: [
    { category: 'Business', title: 'South Sudan plans inland depot at Naivasha SEZ', summary: 'The project aims to ease pressure on the Port of Mombasa and create new trade routes.', time: '35 min ago' },
    { category: 'Enterprise', title: 'Small traders ask for clarity on new licensing fees', summary: 'Associations say unclear rollout plans are leaving businesses unsure what they owe.', time: '2 hrs ago' },
    { category: 'Agriculture', title: 'Farmers prepare for the short rains planting season', summary: 'Input suppliers and growers are watching weather updates closely.', time: '4 hrs ago' },
    { category: 'Money', title: 'Mobile money agents report steady weekend volumes', summary: 'Operators say customer habits are shifting as digital payments expand.', time: '6 hrs ago' },
  ] },
}

export default function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const [shared, setShared] = useState(false)
  const [search, setSearch] = useState('')
  const [saved, setSaved] = useState<string[]>([])
  const { slug } = use(params)
  const data = sectionData[slug] ?? sectionData.news
  const filtered = useMemo(() => data.stories.filter((story) => `${story.title} ${story.summary}`.toLowerCase().includes(search.toLowerCase())), [data.stories, search])

  return <div className="min-h-screen bg-[#f7f7f4] text-[#111]">
    <div className="h-1 flex"><span className="flex-1 bg-black" /><span className="flex-1 bg-[#bb0a1e]" /><span className="flex-1 bg-[#006b3f]" /></div>
    <header className="border-b border-[#dededa] bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8"><a href="/" className="text-4xl font-black tracking-[-.06em]">Dispatch<sup className="ml-1 bg-[#bb0a1e] px-1 py-0.5 text-xs tracking-normal text-white">KE</sup></a><div className="flex items-center gap-3"><input value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search this section" placeholder="Search this section" className="hidden w-48 border border-[#dededa] bg-[#f7f7f4] px-3 py-2 text-sm outline-none focus:border-[#bb0a1e] sm:block" /><a href="/articles" className="bg-black px-4 py-2 text-sm font-bold text-white hover:bg-[#bb0a1e]">Write</a></div></div><nav className="border-t border-[#dededa]" aria-label="Section navigation"><div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-sm font-bold md:px-8"><a href="/section/news">News</a><a href="/section/politics">Politics</a><a href="/section/business">Business</a><a href="/#counties">Counties</a><a href="/#opinion">Opinion</a><a href="/">Home</a></div></nav></header>
    <main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14"><div className="mb-10 max-w-3xl"><span className={`inline-block px-2 py-1 text-xs font-extrabold uppercase tracking-wider text-white ${data.accent}`}>Dispatch desk</span><h1 className="mt-4 text-5xl font-black tracking-[-.05em] md:text-7xl">{data.title}</h1><p className="mt-4 max-w-2xl font-serif text-xl leading-relaxed text-[#4b4b48]">{data.intro}</p></div><div className="grid gap-7 md:grid-cols-2">{filtered.map((story, index) => <article key={story.title} className={`group border-t-4 border-[#111] bg-white p-6 ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.1fr_1fr] md:gap-8 md:p-8' : ''}`}><div className={`mb-5 flex min-h-40 items-end bg-gradient-to-br from-[#dfe0db] via-[#b8b8b3] to-[#111] p-5 ${index === 0 ? 'md:min-h-64' : ''}`}><span className="text-6xl font-black text-white/80">0{index + 1}</span></div><div><div className="flex items-center justify-between gap-3"><span className="text-xs font-extrabold uppercase tracking-wider text-[#bb0a1e]">{story.category}</span><button aria-label={`Share ${story.title}`} onClick={async () => { if (navigator.share) await navigator.share({ title: story.title, url: window.location.href }); else { await navigator.clipboard?.writeText(window.location.href); setShared(true) } }} className="text-[#80807b] hover:text-[#bb0a1e]"><Share2 size={16} /></button></div><h2 className={`${index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl'} mt-2 font-black leading-tight tracking-[-.03em] group-hover:text-[#bb0a1e]`}>{story.title}</h2><p className="mt-3 font-serif text-lg leading-relaxed text-[#4b4b48]">{story.summary}</p><div className="mt-5 flex items-center justify-between border-t border-[#dededa] pt-4 text-xs text-[#80807b]"><span className="flex items-center gap-2"><Clock3 size={14} />{story.time}</span><button onClick={() => setSaved((items) => items.includes(story.title) ? items.filter((item) => item !== story.title) : [...items, story.title])} className="font-bold text-[#111] hover:text-[#bb0a1e]">{saved.includes(story.title) ? 'Saved' : 'Save story'}</button></div></div></article>)}</div>{shared && <p className="mt-6 text-sm font-bold text-[#006b3f]">Link copied to your clipboard.</p>}<div className="mt-12 border-t-4 border-black bg-black p-7 text-white md:flex md:items-center md:justify-between"><div><h2 className="text-2xl font-black">Need the full morning picture?</h2><p className="mt-1 text-[#b8b8b3]">Read the latest briefing from every desk.</p></div><a href="/#brief" className="mt-5 inline-flex items-center gap-2 bg-[#bb0a1e] px-5 py-3 text-sm font-bold md:mt-0">Get the briefing <ArrowRight size={16} /></a></div></main>
  </div>
}
