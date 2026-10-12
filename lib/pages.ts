export type PageBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }

export type ContentPage = {
  slug: string
  title: string
  description: string
  blocks: PageBlock[]
}

export const contentPages: ContentPage[] = [
  {
    slug: 'about',
    title: 'About us',
    description: 'Dispatch KE is an independent Kenyan newsroom reporting from Nairobi to every county.',
    blocks: [
      { type: 'p', text: 'Dispatch KE began in 2024 with a simple conviction: Kenya’s counties deserve the same quality of reporting as Nairobi. What started as a small newsroom in Westlands now publishes across eight desks, with correspondents reporting from Nakuru, Kisumu, Mombasa and Uasin Gishu.' },
      { type: 'h2', text: 'What we cover' },
      { type: 'list', items: [
        'News — the stories shaping Kenya today, reported with clarity and context',
        'Politics — power, policy and the people making decisions',
        'Business — markets, enterprise and the economy behind everyday life',
        'Sports — scores, stories and the people behind Kenyan sport',
        'Tech — innovation, startups and the digital economy',
        'Opinion — editorials, columns and arguments from our newsroom',
        'Lifestyle — food, travel, culture and the way Kenya lives',
        'Video — documentaries, interviews and explainers',
      ] },
      { type: 'h2', text: 'Our mission' },
      { type: 'p', text: 'We publish reporting that readers can trust: accurate, fair and useful. We believe strong counties need strong local journalism, and that every Kenyan deserves plain-language news about the decisions that shape their lives — from City Hall budgets to the weather over the lake basin.' },
      { type: 'p', text: 'We write for the commuter in Nairobi, the trader in Mombasa, the farmer in Uasin Gishu and the student in Kisumu. If a decision affects your county, we want to be there to explain it.' },
      { type: 'h2', text: 'Editorial independence' },
      { type: 'p', text: 'Dispatch KE is editorially independent. We do not accept payment for coverage, advertisers never see stories before publication, and our newsroom decisions are made by editors — not by sponsors or politicians. When we get something wrong, we say so, prominently and quickly.' },
      { type: 'h2', text: 'The newsroom' },
      { type: 'p', text: 'Our newsroom is organised into eight desks, each led by a desk editor, with a county network of correspondents and a growing data team. We report in English and Swahili, and we are building a sign-language video programme for the deaf community.' },
    ],
  },
  {
    slug: 'careers',
    title: 'Careers',
    description: 'Join the Dispatch KE newsroom — we are always looking for sharp reporters, editors and producers who understand Kenya’s counties.',
    blocks: [
      { type: 'p', text: 'Dispatch KE is always looking for sharp reporters, editors and producers who understand Kenya’s counties — and who believe local journalism changes lives.' },
      { type: 'h2', text: 'Why Dispatch KE' },
      { type: 'list', items: [
        'Editorial freedom: reporters choose their stories, and editors protect them',
        'A county network: report from the field, not just the newsroom',
        'A newsroom that values accuracy over speed, every single time',
        'Competitive salaries and a hybrid working model based in Nairobi',
      ] },
      { type: 'h2', text: 'Current openings' },
      { type: 'list', items: [
        'County Correspondent — Rift Valley: based in Nakuru, covering counties across the region',
        'County Correspondent — Coast: based in Mombasa, covering the coastal counties',
        'Data Reporter — Politics Desk: build datasets, visualise elections and track promises',
        'Video Producer — Video Desk: shoot and edit documentaries and explainers',
      ] },
      { type: 'h2', text: 'What we offer' },
      { type: 'list', items: [
        'A newsroom with a proven record of corrections handled in public',
        'Training budgets and mentorship from senior editors',
        'Health cover and a pension scheme from day one',
      ] },
      { type: 'h2', text: 'How to apply' },
      { type: 'p', text: 'Send your CV and three published clips through the contact page, with the role in the subject line. We read every application, and we reply to every candidate — usually within two weeks. Applications from all counties are strongly encouraged.' },
    ],
  },
  {
    slug: 'advertise',
    title: 'Advertise',
    description: 'Reach a national audience of Kenyan readers with advertising on Dispatch KE.',
    blocks: [
      { type: 'p', text: 'Reach a national audience of Kenyan readers with advertising on Dispatch KE. Our readers come for the news and stay for the context — and they notice the brands that support independent journalism.' },
      { type: 'h2', text: 'Our audience' },
      { type: 'list', items: [
        'Readers across all 47 counties, with the strongest reach in Nairobi, Nakuru, Kisumu and Mombasa',
        'Engaged professionals, traders, farmers and students — the people who make Kenya’s economy move',
        'A morning briefing read before breakfast, every weekday',
      ] },
      { type: 'h2', text: 'Formats' },
      { type: 'list', items: [
        'Display advertising across every section, in standard IAB sizes',
        'Sponsored slots in The Dispatch morning briefing',
        'Native content, clearly labelled and produced with our commercial team',
        'County-level targeting, so your message reaches the right market',
      ] },
      { type: 'h2', text: 'Example of labelled sponsored content' },
      { type: 'p', text: 'See how we label paid native content: <a href="/sponsored/">Sponsored content hub</a> (e.g. <a href="/sponsored/betkumi">BetKumi</a>). All sponsored content carries a clear banner, rel="sponsored" links, and the required disclosures.' },
      { type: 'h2', text: 'Why Dispatch KE' },
      { type: 'p', text: 'Advertising on Dispatch KE supports independent journalism — and readers respect brands that do. Our ad standards are strict: no political advertising without disclosure, no tracking-based personalisation, and no ads adjacent to breaking news unless they are relevant to it.' },
      { type: 'h2', text: 'Get in touch' },
      { type: 'p', text: 'To discuss rates, formats or a county-level campaign, reach our commercial team through the contact page with your goals and timeline. We reply within two working days.' },
    ],
  },
  {
    slug: 'contact',
    title: 'Contact',
    description: 'Contact the Dispatch KE newsroom — we welcome tips, story ideas and reader feedback.',
    blocks: [
      { type: 'p', text: 'The newsroom welcomes tips, story ideas and reader feedback. If you know something we should be reporting, tell us — confidential tips are protected.' },
      { type: 'h2', text: 'What to contact us about' },
      { type: 'list', items: [
        'General inquiries and story ideas',
        'Story tips and leaks — confidential tips are protected',
        'Corrections — always include the story link',
        'Advertising and partnerships',
        'Careers applications — include the role in the subject line',
        'Data and privacy questions',
      ] },
      { type: 'h2', text: 'Newsroom hours' },
      { type: 'p', text: 'The newsroom runs on a three-shift rota, from 6am to 10pm EAT, seven days a week. Breaking news is staffed around the clock during major events.' },
      { type: 'h2', text: 'Visit us' },
      { type: 'p', text: 'Our newsroom is based in Westlands, Nairobi. Visitors are welcome by appointment — email newsroom@dispatch.ke to arrange a tour or an interview with a desk editor.' },
      { type: 'h2', text: 'Reader engagement' },
      { type: 'p', text: 'We read every message, and we publish a reader letters column every Friday. If your county is missing from our coverage, tell us — that is how our correspondent network grows.' },
      { type: 'p', text: 'Prefer to write it down? Use the message form below — every message goes straight to the duty editor.' },
    ],
  },
  {
    slug: 'editorial-standards',
    title: 'Editorial standards',
    description: 'The standards every Dispatch KE story must meet: accuracy, fairness, independence and clear labelling.',
    blocks: [
      { type: 'p', text: 'Every story on Dispatch KE must pass the same test: would a reader in any county trust it? These standards are how we answer yes.' },
      { type: 'h2', text: 'Accuracy' },
      { type: 'p', text: 'We verify facts with primary sources — documents, data and direct interviews — and we attribute every claim clearly. Numbers are checked twice: once by the reporter, once by the desk editor. If a figure comes from a press release, we say so.' },
      { type: 'h2', text: 'Fairness' },
      { type: 'p', text: 'We seek comment from all sides before publication, and we give subjects of criticism a real chance to respond — not a token question at deadline. When someone declines to comment, we report that too.' },
      { type: 'h2', text: 'Independence' },
      { type: 'p', text: 'We accept no payment for coverage. Advertisers never see stories before publication, and sponsors have no line into editorial meetings. Our only loyalty is to the reader.' },
      { type: 'h2', text: 'Sourcing' },
      { type: 'p', text: 'We name our sources whenever we can. Anonymous sources are reserved for cases where disclosure would endanger someone, and every anonymous source is known to at least two editors.' },
      { type: 'h2', text: 'Labelling' },
      { type: 'p', text: 'News, analysis and opinion look different on our pages. Opinion pieces are labelled by role — Editorial, Columnist, Guest — and analysis is clearly marked. Sponsored content is always disclosed in plain language.' },
      { type: 'h2', text: 'Diversity' },
      { type: 'p', text: 'We report in English and Swahili, and we are building a sign-language video programme. Our correspondent network spans the counties, so the newsroom reflects the country it covers — not just the capital.' },
    ],
  },
  {
    slug: 'corrections',
    title: 'Corrections',
    description: 'If you spot an error in our reporting, tell us — corrections make our journalism better.',
    blocks: [
      { type: 'p', text: 'If you spot an error in our reporting, tell us. Corrections are not a failure — they are how a newsroom earns trust, and we treat every reader report seriously.' },
      { type: 'h2', text: 'How to report an error' },
      { type: 'list', items: [
        'Use the contact page and include the story link',
        'Describe the error and, if you can, the correct fact',
        'Include a way to reach you if we need to clarify — we keep reporter identities confidential on request',
      ] },
      { type: 'h2', text: 'How we correct' },
      { type: 'p', text: 'We verify every report before making changes. Factual errors are corrected in the story with a note at the end describing what changed and when. We never silently edit a published story.' },
      { type: 'h2', text: 'Our timeline' },
      { type: 'list', items: [
        'Typos and formatting: fixed immediately, noted in the next update',
        'Factual errors: corrected within 24 hours with a public note',
        'Significant errors: corrected within 24 hours, with an editor’s note and, where warranted, a follow-up story',
      ] },
      { type: 'h2', text: 'What we never do' },
      { type: 'p', text: 'We do not alter quotes without a note, we do not change headlines to hide errors, and we never remove a story without a senior editor’s approval and a public explanation.' },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy policy',
    description: 'Dispatch KE is committed to protecting your privacy. This policy explains what data we collect and how we use it.',
    blocks: [
      { type: 'p', text: 'Dispatch KE is committed to protecting your privacy. This policy explains what we collect, what we do with it, and how to reach us about your data.' },
      { type: 'h2', text: 'What we collect' },
      { type: 'list', items: [
        'Email addresses for the morning briefing newsletter — used only to send it',
        'Standard web server logs (IP address, browser, pages viewed) for security and analytics',
        'Cookie preferences you set on this site',
      ] },
      { type: 'h2', text: 'How we use it' },
      { type: 'p', text: 'We use your email address to send the briefing you asked for, and we use aggregated logs to understand traffic and protect the site. We do not sell your data, we do not rent our list, and we do not run behavioural advertising.' },
      { type: 'h2', text: 'Cookies' },
      { type: 'p', text: 'We use a small number of cookies to keep the site working and to count visits in aggregate. You can manage them in your browser — see our cookie settings page for details.' },
      { type: 'h2', text: 'Your rights' },
      { type: 'list', items: [
        'Access: ask for a copy of the data we hold about you',
        'Correction: ask us to fix anything inaccurate',
        'Deletion: ask us to remove your email from the briefing list',
        'Portability: ask for your data in a common format',
      ] },
      { type: 'h2', text: 'Questions about your data' },
      { type: 'p', text: 'Reach us through the contact page and we will respond within 30 days. If you are not satisfied with our response, you may contact the Office of the Data Protection Commissioner.' },
    ],
  },
  {
    slug: 'terms-of-use',
    title: 'Terms of use',
    description: 'These terms govern your use of the Dispatch KE website and its content.',
    blocks: [
      { type: 'p', text: 'These terms govern your use of the Dispatch KE website and its content. By using the site, you accept these terms.' },
      { type: 'h2', text: 'Content and copyright' },
      { type: 'p', text: 'All content on Dispatch KE — articles, photographs, illustrations, audio, video and branding — is protected by copyright and owned by Dispatch KE or its licensors. You may not reproduce, republish or redistribute our content without written permission.' },
      { type: 'h2', text: 'Permitted use' },
      { type: 'list', items: [
        'Link to any story with proper attribution',
        'Quote brief passages (up to 100 words) with credit and a link',
        'Print individual articles for personal, non-commercial use',
      ] },
      { type: 'h2', text: 'Not permitted' },
      { type: 'list', items: [
        'Republishing our articles in full, with or without credit',
        'Scraping the site or using our content to train AI models',
        'Using our branding or logo without written permission',
        'Reselling access to the site or its content',
      ] },
      { type: 'h2', text: 'Disclaimer' },
      { type: 'p', text: 'The site is provided as is, without warranties of any kind. We strive for accuracy, but we are not liable for decisions made based on our content. Third-party links are provided for convenience and are not endorsements.' },
      { type: 'h2', text: 'Changes to these terms' },
      { type: 'p', text: 'We may update these terms from time to time. The revised terms are posted on this page, and continued use of the site after changes constitutes acceptance. Material changes will be noted in a story or the morning briefing.' },
    ],
  },
  {
    slug: 'cookie-settings',
    title: 'Cookie settings',
    description: 'Dispatch KE uses a small number of cookies to keep the site working and to understand how readers use it.',
    blocks: [
      { type: 'p', text: 'Dispatch KE uses a small number of cookies to keep the site working and to understand how readers use it. We do not use tracking cookies for advertising, and we do not share your data with ad networks.' },
      { type: 'h2', text: 'Essential cookies' },
      { type: 'p', text: 'Essential cookies keep the site functional: they remember your cookie preferences and maintain your session. These are always on and cannot be switched off.' },
      { type: 'h2', text: 'Analytics cookies' },
      { type: 'p', text: 'Analytics cookies collect aggregated, anonymous traffic data — pages viewed, time on site, and section popularity. This helps us decide what to report on. No personal data is shared with third parties.' },
      { type: 'h2', text: 'How to manage cookies' },
      { type: 'list', items: [
        'Chrome: Settings → Privacy and security → Cookies and other site data',
        'Safari: Preferences → Privacy → Manage website data',
        'Firefox: Settings → Privacy & Security → Cookies and Site Data',
        'Edge: Settings → Cookies and site permissions',
      ] },
      { type: 'h2', text: 'Questions' },
      { type: 'p', text: 'Disabling analytics cookies does not affect your reading experience. Questions about cookies? Reach us through the contact page.' },
    ],
  },
]

export function getPageBySlug(slug: string): ContentPage | undefined {
  return contentPages.find((page) => page.slug === slug)
}
