export type Sponsor = {
  slug: string
  name: string
  tagline: string
  logo?: string
  image?: string
  standfirst: string
  description: string
  keyFacts: string[]
  features: string[]
  ctaLinks: { href: string; label: string }[]
  contact: {
    phone?: string
    liveChat?: string
    social: { href: string; label: string; icon?: string }[]
  }
  disclaimer: string
  bannerText?: string
}

export const sponsors: Sponsor[] = [
  {
    slug: 'betkumi',
    name: 'BetKumi',
    tagline: 'Kenya\'s licensed crash games & casino platform',
    image: '/arts/betkumi.jpeg',
    standfirst:
      'BetKumi is Kenya\'s fastest-growing online casino and crash game platform. Licensed by the Betting Control and Licensing Board of Kenya (BCLB, Licence No. BK 0001228), with instant M-Pesa deposits, fast withdrawals and provably fair games.',
    description:
      'BetKumi is a fully licensed online casino and crash game platform built for Kenyan players, operated by Incline Technologies Limited. The platform pairs instant M-Pesa deposits with lightning-fast withdrawals, low minimum stakes from KSh 10, provably fair games with transparent odds, and multipliers up to 3000x.',
    keyFacts: [
      'BCLB licensed — Licence No. BK 0001228 (Incline Technologies Limited)',
      'Instant M-Pesa deposits and withdrawals',
      'Minimum deposit from KSh 10; bets from KSh 10',
      'Multipliers up to 3000x',
      'Provably fair games with transparent odds',
      '500% first deposit bonus (wager 3x; once per day per account)',
      'Weekly cashback up to 30%',
      'Daily free bets',
      'Affiliate program',
      '24/7 customer support',
      'SSL encryption on all transactions',
      'No app required — runs in the mobile browser; register with your M-Pesa number',
    ],
    features: [
      'Aviator',
      'Aviatrix',
      'Comet Crash',
      'Dragon Tower',
      'Dice',
      'Football Crash',
      'HiLo',
      'Keno',
      'Limbo',
      'Mines',
      'Live sports betting — football, EPL and local leagues',
    ],
    ctaLinks: [
      { href: 'https://betkumi.co.ke/', label: 'betkumi.co.ke — Play now' },
      { href: 'https://betkumi.com/', label: 'betkumi.com — Alt site' },
      { href: 'https://betkumi.news/', label: 'betkumi.news — News & guides' },
    ],
    contact: {
      phone: '+254 792 131 313',
      liveChat: 'Live chat on betkumi.co.ke (24/7)',
      social: [
        { href: 'https://x.com/betkumi', label: 'X (Twitter): @betkumi' },
        { href: 'https://www.facebook.com/betkumi.ke', label: 'Facebook: BetKumi KE' },
        { href: 'https://www.instagram.com/betkumi_kenya/', label: 'Instagram: @betkumi_kenya' },
      ],
    },
    disclaimer:
      'BetKumi is operated by Incline Technologies Limited and is licensed by the Betting Control and Licensing Board of Kenya under Licence No. BK 0001228. <b>18+ only.</b> Gambling can be addictive and can be harmful. Set a deposit limit before your first stake, and treat every round as entertainment first. If you or someone you know has a gambling problem, please seek help from a professional support service.',
    bannerText:
      'Advertisement · Paid for by BetKumi (Incline Technologies Limited). Not written by the Dispatch KE newsroom.',
  },
]

export function getSponsorBySlug(slug: string): Sponsor | undefined {
  return sponsors.find((s) => s.slug === slug)
}

export function getAllSponsorSlugs(): string[] {
  return sponsors.map((s) => s.slug)
}