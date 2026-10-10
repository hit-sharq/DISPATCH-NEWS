import type { ComponentType } from 'react'

type IllProps = { className?: string }

export function NewsArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="City skyline illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <g fill="#111">
        <rect x="24" y="128" width="56" height="92" />
        <rect x="92" y="76" width="44" height="144" />
        <rect x="148" y="112" width="62" height="108" />
        <rect x="222" y="56" width="38" height="164" />
        <rect x="272" y="96" width="52" height="124" />
        <rect x="336" y="132" width="46" height="88" />
        <rect y="208" width="400" height="42" />
      </g>
      <g fill="#dfe0db" opacity=".5">
        <rect x="100" y="86" width="7" height="9" />
        <rect x="113" y="86" width="7" height="9" />
        <rect x="126" y="86" width="7" height="9" />
        <rect x="100" y="104" width="7" height="9" />
        <rect x="113" y="104" width="7" height="9" />
        <rect x="126" y="104" width="7" height="9" />
        <rect x="230" y="66" width="7" height="9" />
        <rect x="243" y="66" width="7" height="9" />
        <rect x="230" y="84" width="7" height="9" />
        <rect x="243" y="84" width="7" height="9" />
        <rect x="280" y="106" width="7" height="9" />
        <rect x="293" y="106" width="7" height="9" />
        <rect x="306" y="106" width="7" height="9" />
        <rect x="280" y="124" width="7" height="9" />
        <rect x="293" y="124" width="7" height="9" />
        <rect x="306" y="124" width="7" height="9" />
      </g>
      <rect y="208" width="400" height="5" fill="#bb0a1e" />
    </svg>
  )
}

export function PoliticsArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Parliament building illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <rect x="60" y="196" width="280" height="14" fill="#111" />
      <rect x="76" y="182" width="248" height="14" fill="#111" />
      <g fill="#111">
        <rect x="88" y="120" width="16" height="62" />
        <rect x="120" y="120" width="16" height="62" />
        <rect x="152" y="120" width="16" height="62" />
        <rect x="232" y="120" width="16" height="62" />
        <rect x="264" y="120" width="16" height="62" />
        <rect x="296" y="120" width="16" height="62" />
      </g>
      <path d="M104 120 Q200 28 296 120 Z" fill="#111" />
      <rect x="196" y="48" width="4" height="30" fill="#111" />
      <path d="M200 50 L238 59 L200 68 Z" fill="#bb0a1e" />
      <circle cx="200" cy="118" r="10" fill="#bb0a1e" />
      <rect y="210" width="400" height="40" fill="#111" />
      <rect y="210" width="400" height="5" fill="#006b3f" />
    </svg>
  )
}

export function BusinessArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Rising market chart illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <g fill="#111">
        <rect x="56" y="160" width="44" height="50" />
        <rect x="120" y="130" width="44" height="80" />
        <rect x="184" y="100" width="44" height="110" />
        <rect x="248" y="66" width="44" height="144" />
      </g>
      <rect x="312" y="44" width="44" height="166" fill="#bb0a1e" />
      <path d="M48 176 L140 146 L206 116 L270 84 L356 40" fill="none" stroke="#006b3f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M334 26 L366 40 L336 56 Z" fill="#006b3f" />
      <rect y="210" width="400" height="40" fill="#111" />
      <rect y="210" width="400" height="5" fill="#bb0a1e" />
    </svg>
  )
}

export function SportsArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Running track illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <g fill="none" stroke="#111" strokeWidth="10">
        <path d="M-20 250 A 270 270 0 0 1 420 250" />
        <path d="M-20 250 A 250 250 0 0 1 420 250" />
        <path d="M-20 250 A 230 230 0 0 1 420 250" />
      </g>
      <path d="M-20 250 A 240 240 0 0 1 420 250" fill="none" stroke="#bb0a1e" strokeWidth="10" />
      <circle cx="316" cy="96" r="26" fill="#111" />
      <path d="M300 88 Q316 100 332 88" fill="none" stroke="#dfe0db" strokeWidth="4" />
      <rect y="210" width="400" height="40" fill="#111" />
      <rect y="210" width="400" height="5" fill="#006b3f" />
    </svg>
  )
}

export function TechArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Circuit board illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <g stroke="#111" strokeWidth="6" fill="none">
        <path d="M60 60 H140 V120" />
        <path d="M60 190 H140 V130" />
        <path d="M340 60 H260 V120" />
        <path d="M340 190 H260 V130" />
        <path d="M200 70 V180" />
      </g>
      <g fill="#111">
        <circle cx="60" cy="60" r="14" />
        <circle cx="60" cy="190" r="14" />
        <circle cx="340" cy="60" r="14" />
        <circle cx="340" cy="190" r="14" />
      </g>
      <rect x="160" y="90" width="80" height="70" rx="8" fill="#111" />
      <rect x="176" y="106" width="48" height="38" rx="4" fill="#dfe0db" opacity=".85" />
      <circle cx="200" cy="125" r="9" fill="#bb0a1e" />
      <circle cx="140" cy="120" r="10" fill="#bb0a1e" />
      <circle cx="260" cy="120" r="10" fill="#006b3f" />
      <rect y="210" width="400" height="40" fill="#111" />
      <rect y="210" width="400" height="5" fill="#bb0a1e" />
    </svg>
  )
}

export function OpinionArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Speech bubbles illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <path d="M56 60 h296 a16 16 0 0 1 16 16 v96 a16 16 0 0 1 -16 16 h-176 l-44 36 v-36 h-48 a16 16 0 0 1 -16 -16 v-96 a16 16 0 0 1 16 -16 Z" fill="#111" />
      <path d="M110 96 c-14 2 -22 12 -22 24 c0 12 8 20 18 22 l4 -12 c-6 -2 -9 -6 -9 -11 c0 -6 4 -10 10 -11 l-2 -12 Z" fill="#dfe0db" />
      <path d="M182 96 c-14 2 -22 12 -22 24 c0 12 8 20 18 22 l4 -12 c-6 -2 -9 -6 -9 -11 c0 -6 4 -10 10 -11 l-2 -12 Z" fill="#dfe0db" />
      <circle cx="330" cy="196" r="22" fill="#bb0a1e" />
      <circle cx="282" cy="210" r="14" fill="#006b3f" />
      <rect y="210" width="400" height="40" fill="#111" />
      <rect y="210" width="400" height="5" fill="#bb0a1e" />
    </svg>
  )
}

export function LifestyleArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Sunrise over hills illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <circle cx="200" cy="118" r="52" fill="#bb0a1e" />
      <g stroke="#bb0a1e" strokeWidth="7" strokeLinecap="round">
        <path d="M200 44 V28" />
        <path d="M200 192 V208" />
        <path d="M126 118 H110" />
        <path d="M274 118 H290" />
        <path d="M148 66 L137 55" />
        <path d="M252 66 L263 55" />
        <path d="M148 170 L137 181" />
        <path d="M252 170 L263 181" />
      </g>
      <path d="M0 210 Q100 150 200 200 T400 190 V250 H0 Z" fill="#111" />
      <path d="M0 226 Q120 180 240 218 T400 210 V250 H0 Z" fill="#006b3f" />
    </svg>
  )
}

export function VideoArt({ className }: IllProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Film frames illustration">
      <rect width="400" height="250" fill="#dfe0db" />
      <g fill="#111">
        <rect x="40" y="56" width="96" height="138" rx="8" />
        <rect x="152" y="56" width="96" height="138" rx="8" />
        <rect x="264" y="56" width="96" height="138" rx="8" />
      </g>
      <g fill="#dfe0db" opacity=".65">
        <rect x="52" y="68" width="14" height="10" />
        <rect x="76" y="68" width="14" height="10" />
        <rect x="100" y="68" width="14" height="10" />
        <rect x="124" y="68" width="14" height="10" />
        <rect x="52" y="182" width="14" height="10" />
        <rect x="76" y="182" width="14" height="10" />
        <rect x="100" y="182" width="14" height="10" />
        <rect x="124" y="182" width="14" height="10" />
        <rect x="164" y="68" width="14" height="10" />
        <rect x="188" y="68" width="14" height="10" />
        <rect x="212" y="68" width="14" height="10" />
        <rect x="236" y="68" width="14" height="10" />
        <rect x="164" y="182" width="14" height="10" />
        <rect x="188" y="182" width="14" height="10" />
        <rect x="212" y="182" width="14" height="10" />
        <rect x="236" y="182" width="14" height="10" />
        <rect x="276" y="68" width="14" height="10" />
        <rect x="300" y="68" width="14" height="10" />
        <rect x="324" y="68" width="14" height="10" />
        <rect x="348" y="68" width="14" height="10" />
        <rect x="276" y="182" width="14" height="10" />
        <rect x="300" y="182" width="14" height="10" />
        <rect x="324" y="182" width="14" height="10" />
        <rect x="348" y="182" width="14" height="10" />
      </g>
      <path d="M186 108 L226 128 L186 148 Z" fill="#bb0a1e" />
      <rect y="210" width="400" height="40" fill="#111" />
      <rect y="210" width="400" height="5" fill="#bb0a1e" />
    </svg>
  )
}

const illustrations: Record<string, ComponentType<IllProps>> = {
  news: NewsArt,
  politics: PoliticsArt,
  business: BusinessArt,
  sports: SportsArt,
  tech: TechArt,
  opinion: OpinionArt,
  lifestyle: LifestyleArt,
  video: VideoArt,
}

export default function SectionIllustration({ section, className }: { section: string; className?: string }) {
  const Art = illustrations[section] ?? NewsArt
  return <Art className={className} />
}
