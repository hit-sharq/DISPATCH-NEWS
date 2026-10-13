function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function createRandom(seed: number): () => number {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Palette = { bg: string; ink: string; accent: string; accent2: string }

const palettes: Palette[] = [
  { bg: '#dfe0db', ink: '#111111', accent: '#bb0a1e', accent2: '#006b3f' },
  { bg: '#14181c', ink: '#e8e6e1', accent: '#bb0a1e', accent2: '#006b3f' },
  { bg: '#f2ede2', ink: '#1d1b16', accent: '#b3401f', accent2: '#2f5d46' },
  { bg: '#e9e5db', ink: '#16202c', accent: '#a3122e', accent2: '#c98a1b' },
  { bg: '#101820', ink: '#e8e4dc', accent: '#e0b13c', accent2: '#bb0a1e' },
  { bg: '#efe9df', ink: '#20242a', accent: '#006b3f', accent2: '#bb0a1e' },
  { bg: '#e3e0d8', ink: '#1a1a1a', accent: '#006b3f', accent2: '#bb0a1e' },
  { bg: '#1c2321', ink: '#dfe0db', accent: '#006b3f', accent2: '#e0b13c' },
]

const W = 400
const H = 250
const FOOT = 210

function f(n: number): string {
  return n.toFixed(1)
}

function themePolitics(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 90)}" y="${f(cy - 30)}" width="180" height="70" rx="4" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 100)}" y="${f(cy - 45)}" width="200" height="18" rx="3" fill="${p.accent}"/>`
  for (let i = 0; i < 5; i++) {
    const x = cx - 75 + i * 38
    out += `<rect x="${f(x)}" y="${f(cy - 20)}" width="10" height="45" fill="${p.bg}" opacity=".5"/>`
  }
  out += `<path d="M${f(cx)} ${f(cy - 45)} L${f(cx)} ${f(cy - 75)} L${f(cx + 30)} ${f(cy - 65)} L${f(cx + 30)} ${f(cy - 45)} Z" fill="${p.accent2}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy - 80)}" r="10" fill="${p.accent}"/>`
  const n = 3 + Math.floor(rnd() * 3)
  for (let i = 0; i < n; i++) {
    const x = 40 + i * 110 + rnd() * 20
    out += `<rect x="${f(x)}" y="${f(FOOT - 30)}" width="22" height="30" fill="${p.ink}" opacity=".7"/>`
    out += `<rect x="${f(x - 4)}" y="${f(FOOT - 42)}" width="30" height="14" rx="2" fill="${p.accent2}"/>`
  }
  return out
}

function themeElections(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 120
  out += `<rect x="${f(cx - 55)}" y="${f(cy - 40)}" width="110" height="90" rx="6" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 45)}" y="${f(cy - 55)}" width="90" height="20" rx="3" fill="${p.accent}"/>`
  out += `<rect x="${f(cx - 20)}" y="${f(cy - 25)}" width="40" height="50" fill="${p.bg}" opacity=".4"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="14" fill="${p.accent2}"/>`
  out += `<path d="M${f(cx - 8)} ${f(cy)} L${f(cx - 3)} ${f(cy + 6)} L${f(cx + 10)} ${f(cy - 7)}" fill="none" stroke="${p.bg}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`
  const n = 4 + Math.floor(rnd() * 3)
  for (let i = 0; i < n; i++) {
    const x = 30 + i * 85 + rnd() * 15
    const h = 30 + rnd() * 40
    out += `<rect x="${f(x)}" y="${f(FOOT - h)}" width="${f(30 + rnd() * 20)}" height="${f(h)}" fill="${p.accent2}" opacity="${f(0.4 + rnd() * 0.4)}"/>`
  }
  return out
}

function themeBusiness(rnd: () => number, p: Palette): string {
  let out = ''
  const n = 5 + Math.floor(rnd() * 3)
  const gap = 18
  const bw = (W - 80 - gap * (n - 1)) / n
  let peak = 0
  for (let i = 0; i < n; i++) {
    const h = 40 + rnd() * 120
    const x = 40 + i * (bw + gap)
    out += `<rect x="${f(x)}" y="${f(FOOT - h)}" width="${f(bw)}" height="${f(h)}" fill="${i === n - 1 ? p.accent : p.ink}"/>`
    if (h > peak) peak = h
  }
  let line = ''
  let px = 40
  let py = FOOT - 40
  for (let i = 0; i < n; i++) {
    const h = 40 + rnd() * 120
    const x = 40 + i * (bw + gap) + bw / 2
    const y = FOOT - h - 8
    line += ` L${f(x)} ${f(y)}`
    out += `<circle cx="${f(x)}" cy="${f(y)}" r="5" fill="${p.accent2}"/>`
  }
  out += `<path d="M${f(px)} ${f(py)}${line}" fill="none" stroke="${p.accent2}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`
  out += `<circle cx="${f(W - 70)}" cy="${f(50)}" r="22" fill="${p.accent}"/>`
  out += `<text x="${f(W - 70)}" y="${f(58)}" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="${p.bg}">Ksh</text>`
  return out
}

function themeMarkets(rnd: () => number, p: Palette): string {
  let out = ''
  out += themeBusiness(rnd, p)
  out += `<path d="M${f(30)} ${f(FOOT - 10)} L${f(60)} ${f(FOOT - 50)} L${f(90)} ${f(FOOT - 30)} L${f(120)} ${f(FOOT - 70)}" fill="none" stroke="${p.accent}" stroke-width="3" opacity=".6"/>`
  return out
}

function themeFootball(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="55" fill="${p.bg}" stroke="${p.ink}" stroke-width="4"/>`
  out += `<path d="M${f(cx)} ${f(cy - 45)} L${f(cx + 25)} ${f(cy - 20)} L${f(cx + 15)} ${f(cy + 15)} L${f(cx - 15)} ${f(cy + 15)} L${f(cx - 25)} ${f(cy - 20)} Z" fill="${p.ink}"/>`
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2
    out += `<path d="M${f(cx + Math.cos(a) * 28)} ${f(cy + Math.sin(a) * 28)} L${f(cx + Math.cos(a) * 48)} ${f(cy + Math.sin(a) * 48)}" stroke="${p.ink}" stroke-width="3"/>`
  }
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="10" fill="${p.accent}"/>`
  out += `<rect x="${f(cx - 130)}" y="${f(cy - 80)}" width="12" height="160" fill="${p.ink}"/>`
  out += `<rect x="${f(cx + 118)}" y="${f(cy - 80)}" width="12" height="160" fill="${p.ink}"/>`
  out += `<path d="M${f(cx - 130)} ${f(cy - 80)} L${f(cx - 100)} ${f(cy - 60)} M${f(cx + 118)} ${f(cy - 80)} L${f(cx + 88)} ${f(cy - 60)}" stroke="${p.ink}" stroke-width="4"/>`
  return out
}

function themeUCL(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="60" fill="${p.ink}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="52" fill="${p.bg}" opacity=".2"/>`
  out += `<path d="M${f(cx - 40)} ${f(cy - 20)} A${f(48)} ${f(48)} 0 0 1 ${f(cx + 40)} ${f(cy - 20)}" fill="none" stroke="${p.accent}" stroke-width="6"/>`
  out += `<path d="M${f(cx - 48)} ${f(cy + 10)} A${f(56)} ${f(56)} 0 0 0 ${f(cx + 48)} ${f(cy + 10)}" fill="none" stroke="${p.accent2}" stroke-width="5"/>`
  out += `<text x="${f(cx)}" y="${f(cy + 12)}" text-anchor="middle" font-family="sans-serif" font-size="34" font-weight="bold" fill="${p.accent}">UCL</text>`
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    const x = cx + Math.cos(a) * 85
    const y = cy + Math.sin(a) * 85
    out += `<circle cx="${f(x)}" cy="${f(y)}" r="6" fill="${p.accent}" opacity=".6"/>`
  }
  return out
}

function themeAthletics(rnd: () => number, p: Palette): string {
  let out = ''
  out += `<path d="M${f(20)} ${f(FOOT - 20)} L${f(60)} ${f(FOOT - 60)} L${f(100)} ${f(FOOT - 35)} L${f(140)} ${f(FOOT - 80)} L${f(180)} ${f(FOOT - 45)} L${f(220)} ${f(FOOT - 90)} L${f(260)} ${f(FOOT - 50)} L${f(300)} ${f(FOOT - 75)} L${f(340)} ${f(FOOT - 40)} L${f(380)} ${f(FOOT - 65)}" fill="none" stroke="${p.accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
  out += `<path d="M${f(20)} ${f(FOOT - 20)} L${f(60)} ${f(FOOT - 60)} L${f(100)} ${f(FOOT - 35)} L${f(140)} ${f(FOOT - 80)} L${f(180)} ${f(FOOT - 45)} L${f(220)} ${f(FOOT - 90)} L${f(260)} ${f(FOOT - 50)} L${f(300)} ${f(FOOT - 75)} L${f(340)} ${f(FOOT - 40)} L${f(380)} ${f(FOOT - 65)} L${f(380)} ${f(FOOT)} L${f(20)} ${f(FOOT)} Z" fill="${p.accent}" opacity=".2"/>`
  out += `<circle cx="${f(220)}" cy="${f(FOOT - 95)}" r="12" fill="${p.accent2}"/>`
  out += `<path d="M${f(220)} ${f(FOOT - 95)} L${f(250)} ${f(FOOT - 110)}" stroke="${p.ink}" stroke-width="4" stroke-linecap="round"/>`
  out += `<path d="M${f(250)} ${f(FOOT - 110)} L${f(265)} ${f(FOOT - 100)}" stroke="${p.ink}" stroke-width="4" stroke-linecap="round"/>`
  out += `<rect x="${f(30)}" y="${f(FOOT - 18)}" width="${f(W - 60)}" height="6" fill="${p.accent}"/>`
  return out
}

function themeHealth(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 60)}" y="${f(cy - 60)}" width="120" height="120" rx="10" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 50)}" y="${f(cy - 50)}" width="100" height="100" rx="6" fill="${p.bg}" opacity=".3"/>`
  out += `<rect x="${f(cx - 12)}" y="${f(cy - 40)}" width="24" height="80" fill="${p.accent}"/>`
  out += `<rect x="${f(cx - 40)}" y="${f(cy - 12)}" width="80" height="24" fill="${p.accent}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="55" fill="none" stroke="${p.accent2}" stroke-width="4" opacity=".6"/>`
  for (let i = 0; i < 5; i++) {
    const x = 30 + i * 70 + rnd() * 20
    out += `<circle cx="${f(x)}" cy="${f(40 + rnd() * 30)}" r="${f(4 + rnd() * 4)}" fill="${p.accent2}" opacity=".5"/>`
  }
  return out
}

function themeWeather(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 90
  out += `<circle cx="${f(cx - 20)}" cy="${f(cy)}" r="35" fill="${p.accent}"/>`
  out += `<circle cx="${f(cx + 10)}" cy="${f(cy - 10)}" r="28" fill="${p.accent}" opacity=".8"/>`
  out += `<circle cx="${f(cx + 35)}" cy="${f(cy + 5)}" r="25" fill="${p.accent}" opacity=".6"/>`
  for (let i = 0; i < 8; i++) {
    const x = 40 + i * 42 + rnd() * 15
    const y = 140 + rnd() * 40
    out += `<path d="M${f(x)} ${f(y)} L${f(x - 6)} ${f(y + 18)} M${f(x)} ${f(y)} L${f(x)} ${f(y + 20)} M${f(x)} ${f(y)} L${f(x + 6)} ${f(y + 18)}" stroke="${p.accent2}" stroke-width="3" stroke-linecap="round"/>`
  }
  out += `<path d="M${f(30)} ${f(FOOT - 30)} Q${f(100)} ${f(FOOT - 50)} ${f(170)} ${f(FOOT - 30)} T${f(310)} ${f(FOOT - 30)}" fill="none" stroke="${p.ink}" stroke-width="3" opacity=".4"/>`
  return out
}

function themeTech(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 80)}" y="${f(cy - 50)}" width="160" height="100" rx="10" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 70)}" y="${f(cy - 40)}" width="140" height="70" rx="4" fill="${p.bg}" opacity=".2"/>`
  out += `<rect x="${f(cx - 30)}" y="${f(cy + 50)}" width="60" height="12" rx="2" fill="${p.ink}"/>`
  for (let i = 0; i < 6; i++) {
    const x = cx - 55 + i * 20
    out += `<rect x="${f(x)}" y="${f(cy - 25)}" width="12" height="12" fill="${p.accent}" opacity="${f(0.5 + rnd() * 0.5)}"/>`
  }
  for (let i = 0; i < 4; i++) {
    const x = cx - 50 + i * 25
    out += `<rect x="${f(x)}" y="${f(cy + 5)}" width="15" height="8" fill="${p.accent2}" opacity="${f(0.4 + rnd() * 0.4)}"/>`
  }
  out += `<circle cx="${f(cx + 60)}" cy="${f(cy - 60)}" r="18" fill="${p.accent}"/>`
  out += `<path d="M${f(cx + 55)} ${f(cy - 60)} L${f(cx + 60)} ${f(cy - 65)} L${f(cx + 65)} ${f(cy - 60)}" fill="none" stroke="${p.bg}" stroke-width="3"/>`
  return out
}

function themeMobile(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 45)}" y="${f(cy - 70)}" width="90" height="140" rx="12" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 38)}" y="${f(cy - 60)}" width="76" height="115" rx="6" fill="${p.bg}" opacity=".25"/>`
  out += `<rect x="${f(cx - 15)}" y="${f(cy - 75)}" width="30" height="6" rx="3" fill="${p.accent}"/>`
  for (let i = 0; i < 4; i++) {
    out += `<rect x="${f(cx - 30)}" y="${f(cy - 45 + i * 25)}" width="${f(40 + rnd() * 20)}" height="10" rx="2" fill="${p.accent2}" opacity="${f(0.5 + rnd() * 0.4)}"/>`
  }
  out += `<circle cx="${f(cx)}" cy="${f(cy + 55)}" r="8" fill="${p.accent}"/>`
  out += `<path d="M${f(cx - 60)} ${f(cy - 30)} L${f(cx - 45)} ${f(cy - 30)} M${f(cx - 60)} ${f(cy + 20)} L${f(cx - 45)} ${f(cy + 20)}" stroke="${p.accent2}" stroke-width="4" stroke-linecap="round"/>`
  return out
}

function themeWorld(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="70" fill="${p.ink}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="62" fill="${p.bg}" opacity=".15"/>`
  out += `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="30" ry="70" fill="none" stroke="${p.accent}" stroke-width="3" opacity=".7"/>`
  out += `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="55" ry="40" fill="none" stroke="${p.accent}" stroke-width="3" opacity=".7"/>`
  out += `<path d="M${f(cx - 70)} ${f(cy)} L${f(cx + 70)} ${f(cy)}" stroke="${p.accent}" stroke-width="3" opacity=".7"/>`
  out += `<path d="M${f(cx)} ${f(cy - 70)} L${f(cx)} ${f(cy + 70)}" stroke="${p.accent}" stroke-width="3" opacity=".7"/>`
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2
    const x = cx + Math.cos(a) * 90
    const y = cy + Math.sin(a) * 90
    out += `<circle cx="${f(x)}" cy="${f(y)}" r="5" fill="${p.accent2}" opacity=".6"/>`
  }
  return out
}

function themeEnergy(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 100
  out += `<path d="M${f(cx)} ${f(cy - 70)} L${f(cx - 30)} ${f(cy - 30)} L${f(cx - 10)} ${f(cy - 30)} L${f(cx - 35)} ${f(cy + 20)} L${f(cx + 5)} ${f(cy - 10)} L${f(cx - 15)} ${f(cy - 10)} L${f(cx + 30)} ${f(cy + 60)} Z" fill="${p.accent}"/>`
  out += `<path d="M${f(cx - 70)} ${f(FOOT)} L${f(cx - 70)} ${f(cy + 40)} M${f(cx + 70)} ${f(FOOT)} L${f(cx + 70)} ${f(cy + 40)}" stroke="${p.ink}" stroke-width="6"/>`
  out += `<path d="M${f(cx - 70)} ${f(cy + 40)} L${f(cx + 70)} ${f(cy + 40)}" stroke="${p.ink}" stroke-width="4"/>`
  out += `<circle cx="${f(cx - 70)}" cy="${f(cy + 40)}" r="8" fill="${p.accent2}"/>`
  out += `<circle cx="${f(cx + 70)}" cy="${f(cy + 40)}" r="8" fill="${p.accent2}"/>`
  for (let i = 0; i < 4; i++) {
    const x = 40 + i * 90
    out += `<path d="M${f(x)} ${f(FOOT - 20)} L${f(x + 20)} ${f(FOOT - 35)} L${f(x + 40)} ${f(FOOT - 20)}" fill="none" stroke="${p.accent2}" stroke-width="3" opacity=".5"/>`
  }
  return out
}

function themeNairobi(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 120
  out += `<circle cx="${f(cx + 100)}" cy="${f(cy - 60)}" r="25" fill="${p.accent}"/>`
  let x = 20
  const buildings: { x: number; w: number; h: number }[] = []
  while (x < W - 20) {
    const w = 30 + rnd() * 50
    const h = 50 + rnd() * 100
    buildings.push({ x, w, h })
    out += `<rect x="${f(x)}" y="${f(FOOT - h)}" width="${f(w)}" height="${f(h)}" fill="${p.ink}"/>`
    const cols = Math.max(1, Math.floor(w / 14))
    const rows = Math.max(1, Math.floor(h / 22))
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (rnd() > 0.5) {
          out += `<rect x="${f(x + 5 + c * 14)}" y="${f(FOOT - h + 6 + r * 22)}" width="7" height="9" fill="${p.bg}" opacity=".45"/>`
        }
      }
    }
    x += w + 4 + rnd() * 12
  }
  if (buildings.length > 1) {
    const b = buildings[Math.floor(buildings.length / 2)]
    out += `<rect x="${f(b.x + b.w / 2 - 4)}" y="${f(FOOT - b.h - 20)}" width="8" height="20" fill="${p.ink}"/>`
    out += `<path d="M${f(b.x + b.w / 2 - 8)} ${f(FOOT - b.h)} L${f(b.x + b.w / 2)} ${f(FOOT - b.h - 20)} L${f(b.x + b.w / 2 + 8)} ${f(FOOT - b.h)}" fill="${p.accent}"/>`
  }
  return out
}

function themeCounties(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="65" fill="${p.ink}"/>`
  out += `<path d="M${f(cx)} ${f(cy - 50)} L${f(cx + 40)} ${f(cy - 20)} L${f(cx + 30)} ${f(cy + 30)} L${f(cx - 20)} ${f(cy + 40)} L${f(cx - 45)} ${f(cy)} Z" fill="${p.accent2}" opacity=".7"/>`
  out += `<path d="M${f(cx - 30)} ${f(cy - 10)} L${f(cx + 10)} ${f(cy - 25)} L${f(cx + 35)} ${f(cy + 5)} L${f(cx + 5)} ${f(cy + 25)} L${f(cx - 25)} ${f(cy + 15)} Z" fill="${p.accent}" opacity=".8"/>`
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2
    const x = cx + Math.cos(a) * 95
    const y = cy + Math.sin(a) * 95
    out += `<circle cx="${f(x)}" cy="${f(y)}" r="7" fill="${p.accent2}" opacity=".6"/>`
  }
  return out
}

function themeSecurity(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 120
  out += `<path d="M${f(cx)} ${f(cy - 70)} L${f(cx + 50)} ${f(cy - 45)} L${f(cx + 40)} ${f(cy + 30)} L${f(cx)} ${f(cy + 60)} L${f(cx - 40)} ${f(cy + 30)} L${f(cx - 50)} ${f(cy - 45)} Z" fill="${p.ink}"/>`
  out += `<path d="M${f(cx)} ${f(cy - 55)} L${f(cx + 38)} ${f(cy - 35)} L${f(cx + 30)} ${f(cy + 22)} L${f(cx)} ${f(cy + 45)} L${f(cx - 30)} ${f(cy + 22)} L${f(cx - 38)} ${f(cy - 35)} Z" fill="${p.bg}" opacity=".3"/>`
  out += `<path d="M${f(cx)} ${f(cy - 30)} L${f(cx + 12)} ${f(cy - 10)} L${f(cx + 30)} ${f(cy - 8)} L${f(cx + 18)} ${f(cy + 8)} L${f(cx + 22)} ${f(cy + 28)} L${f(cx)} ${f(cy + 18)} L${f(cx - 22)} ${f(cy + 28)} L${f(cx - 18)} ${f(cy + 8)} L${f(cx - 30)} ${f(cy - 8)} L${f(cx - 12)} ${f(cy - 10)} Z" fill="${p.accent}"/>`
  return out
}

function themeRights(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 100
  out += `<rect x="${f(cx - 6)}" y="${f(cy - 60)}" width="12" height="120" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 70)}" y="${f(cy - 50)}" width="140" height="14" rx="3" fill="${p.ink}"/>`
  out += `<path d="M${f(cx - 70)} ${f(cy - 36)} L${f(cx - 90)} ${f(cy + 10)} L${f(cx - 50)} ${f(cy + 10)} Z" fill="${p.accent2}"/>`
  out += `<path d="M${f(cx + 70)} ${f(cy - 36)} L${f(cx + 50)} ${f(cy + 10)} L${f(cx + 90)} ${f(cy + 10)} Z" fill="${p.accent2}"/>`
  out += `<rect x="${f(cx - 50)}" y="${f(cy + 40)}" width="100" height="10" rx="3" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 30)}" y="${f(cy + 50)}" width="60" height="25" rx="3" fill="${p.ink}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy - 75)}" r="12" fill="${p.accent}"/>`
  return out
}

function themeFood(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 120
  out += `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="80" ry="35" fill="${p.ink}"/>`
  out += `<ellipse cx="${f(cx)}" cy="${f(cy - 5)}" rx="75" ry="30" fill="${p.bg}" opacity=".3"/>`
  out += `<ellipse cx="${f(cx)}" cy="${f(cy - 8)}" rx="55" ry="22" fill="${p.ink}" opacity=".6"/>`
  out += `<circle cx="${f(cx - 20)}" cy="${f(cy - 15)}" r="12" fill="${p.accent}"/>`
  out += `<circle cx="${f(cx + 15)}" cy="${f(cy - 10)}" r="10" fill="${p.accent2}"/>`
  out += `<circle cx="${f(cx - 5)}" cy="${f(cy - 25)}" r="8" fill="${p.accent}" opacity=".8"/>`
  out += `<rect x="${f(cx - 90)}" y="${f(cy - 50)}" width="8" height="50" rx="4" fill="${p.accent2}" transform="rotate(-20 ${f(cx - 86)} ${f(cy - 25)})"/>`
  out += `<rect x="${f(cx + 82)}" y="${f(cy - 50)}" width="8" height="50" rx="4" fill="${p.accent2}" transform="rotate(20 ${f(cx + 86)} ${f(cy - 25)})"/>`
  return out
}

function themeEducation(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 100
  out += `<path d="M${f(cx)} ${f(cy - 40)} L${f(cx + 70)} ${f(cy - 10)} L${f(cx)} ${f(cy + 20)} L${f(cx - 70)} ${f(cy - 10)} Z" fill="${p.ink}"/>`
  out += `<path d="M${f(cx - 70)} ${f(cy - 10)} L${f(cx - 70)} ${f(cy + 30)} L${f(cx)} ${f(cy + 60)} L${f(cx + 70)} ${f(cy + 30)} L${f(cx + 70)} ${f(cy - 10)}" fill="${p.accent2}" opacity=".5"/>`
  out += `<path d="M${f(cx)} ${f(cy + 20)} L${f(cx)} ${f(cy + 60)}" stroke="${p.ink}" stroke-width="3"/>`
  out += `<path d="M${f(cx - 20)} ${f(cy + 70)} L${f(cx + 20)} ${f(cy + 70)} L${f(cx + 25)} ${f(cy + 90)} L${f(cx - 25)} ${f(cy + 90)} Z" fill="${p.accent}"/>`
  out += `<path d="M${f(cx - 30)} ${f(cy - 50)} L${f(cx - 10)} ${f(cy - 60)} L${f(cx + 10)} ${f(cy - 50)}" fill="none" stroke="${p.accent}" stroke-width="4" stroke-linecap="round"/>`
  return out
}

function themeOpinion(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 100
  out += `<rect x="${f(cx - 80)}" y="${f(cy - 60)}" width="160" height="90" rx="12" fill="${p.ink}"/>`
  out += `<path d="M${f(cx - 30)} ${f(cy + 30)} L${f(cx - 40)} ${f(cy + 55)} L${f(cx - 10)} ${f(cy + 30)}" fill="${p.ink}"/>`
  for (let i = 0; i < 4; i++) {
    out += `<rect x="${f(cx - 60)}" y="${f(cy - 40 + i * 18)}" width="${f(80 + rnd() * 40)}" height="8" rx="4" fill="${p.bg}" opacity=".5"/>`
  }
  out += `<rect x="${f(cx + 60)}" y="${f(cy - 80)}" width="10" height="60" rx="3" fill="${p.accent}" transform="rotate(15 ${f(cx + 65)} ${f(cy - 50)})"/>`
  out += `<path d="M${f(cx + 55)} ${f(cy - 85)} L${f(cx + 75)} ${f(cy - 80)} L${f(cx + 70)} ${f(cy - 65)}" fill="${p.accent2}"/>`
  return out
}

function themeEditorial(rnd: () => number, p: Palette): string {
  return themeOpinion(rnd, p)
}

function themeColumnist(rnd: () => number, p: Palette): string {
  let out = themeOpinion(rnd, p)
  out += `<path d="M${f(40)} ${f(FOOT - 40)} L${f(80)} ${f(FOOT - 60)} L${f(120)} ${f(FOOT - 45)}" fill="none" stroke="${p.accent}" stroke-width="3" opacity=".5"/>`
  return out
}

function themeGuest(rnd: () => number, p: Palette): string {
  return themeOpinion(rnd, p)
}

function themeNational(rnd: () => number, p: Palette): string {
  return themeNairobi(rnd, p)
}

function themeEvents(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 90)}" y="${f(cy - 40)}" width="180" height="80" rx="8" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 90)}" y="${f(cy - 40)}" width="180" height="20" rx="8" fill="${p.accent}"/>`
  for (let i = 0; i < 4; i++) {
    out += `<circle cx="${f(cx - 60 + i * 40)}" cy="${f(cy - 30)}" r="6" fill="${p.bg}" opacity=".6"/>`
  }
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 5; c++) {
      out += `<rect x="${f(cx - 70 + c * 32)}" y="${f(cy - 10 + r * 20)}" width="20" height="12" rx="2" fill="${p.bg}" opacity="${f(0.3 + rnd() * 0.4)}"/>`
    }
  }
  out += `<path d="M${f(cx - 90)} ${f(cy + 40)} L${f(cx - 100)} ${f(cy + 60)} M${f(cx + 90)} ${f(cy + 40)} L${f(cx + 100)} ${f(cy + 60)}" stroke="${p.ink}" stroke-width="6"/>`
  return out
}

function themeExplainer(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<circle cx="${f(cx - 60)}" cy="${f(cy)}" r="28" fill="${p.ink}"/>`
  out += `<text x="${f(cx - 60)}" y="${f(cy + 8)}" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="${p.bg}">?</text>`
  out += `<path d="M${f(cx - 30)} ${f(cy)} L${f(cx + 30)} ${f(cy)}" stroke="${p.accent}" stroke-width="4" stroke-linecap="round"/>`
  out += `<path d="M${f(cx + 40)} ${f(cy - 10)} L${f(cx + 70)} ${f(cy)} L${f(cx + 40)} ${f(cy + 10)}" fill="${p.accent}"/>`
  out += `<rect x="${f(cx - 100)}" y="${f(cy + 30)}" width="${f(60 + rnd() * 40)}" height="10" rx="5" fill="${p.accent2}" opacity=".6"/>`
  out += `<rect x="${f(cx + 20)}" y="${f(cy + 30)}" width="${f(60 + rnd() * 40)}" height="10" rx="5" fill="${p.accent2}" opacity=".6"/>`
  return out
}

function themeDocumentary(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 70)}" y="${f(cy - 45)}" width="140" height="90" rx="8" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 60)}" y="${f(cy - 35)}" width="120" height="70" rx="4" fill="${p.bg}" opacity=".2"/>`
  out += `<path d="M${f(cx - 20)} ${f(cy - 15)} L${f(cx + 20)} ${f(cy)} L${f(cx - 20)} ${f(cy + 15)} Z" fill="${p.accent}"/>`
  out += `<rect x="${f(cx - 30)}" y="${f(cy + 50)}" width="60" height="8" rx="4" fill="${p.ink}"/>`
  out += `<circle cx="${f(cx + 55)}" cy="${f(cy - 55)}" r="12" fill="${p.accent2}"/>`
  out += `<circle cx="${f(cx - 55)}" cy="${f(cy - 55)}" r="12" fill="${p.accent2}"/>`
  return out
}

function themeLive(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="35" fill="${p.accent}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="25" fill="${p.bg}" opacity=".3"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="15" fill="${p.bg}"/>`
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="7" fill="${p.accent}"/>`
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2
    const r = 55 + rnd() * 20
    out += `<circle cx="${f(cx + Math.cos(a) * r)}" cy="${f(cy + Math.sin(a) * r)}" r="6" fill="${p.ink}" opacity=".6"/>`
  }
  out += `<rect x="${f(cx - 40)}" y="${f(cy + 60)}" width="80" height="22" rx="4" fill="${p.ink}"/>`
  out += `<text x="${f(cx)}" y="${f(cy + 76)}" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="${p.accent}">LIVE</text>`
  return out
}

function themeShort(rnd: () => number, p: Palette): string {
  return themeDocumentary(rnd, p)
}

function themePolicy(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<rect x="${f(cx - 60)}" y="${f(cy - 60)}" width="120" height="130" rx="6" fill="${p.ink}"/>`
  out += `<rect x="${f(cx - 50)}" y="${f(cy - 50)}" width="100" height="110" rx="4" fill="${p.bg}" opacity=".2"/>`
  for (let i = 0; i < 6; i++) {
    out += `<rect x="${f(cx - 40)}" y="${f(cy - 35 + i * 18)}" width="${f(50 + rnd() * 30)}" height="6" rx="3" fill="${p.bg}" opacity=".5"/>`
  }
  out += `<path d="M${f(cx + 50)} ${f(cy - 70)} L${f(cx + 70)} ${f(cy - 50)} L${f(cx + 60)} ${f(cy - 50)} L${f(cx + 75)} ${f(cy - 30)} L${f(cx + 45)} ${f(cy - 30)} L${f(cx + 55)} ${f(cy - 50)} L${f(cx + 45)} ${f(cy - 50)} Z" fill="${p.accent}"/>`
  return out
}

function themeWellness(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 200
  const cy = 110
  out += `<path d="M${f(cx)} ${f(cy + 50)} L${f(cx - 45)} ${f(cy - 10)} Q${f(cx - 45)} ${f(cy - 50)} ${f(cx)} ${f(cy - 35)} Q${f(cx + 45)} ${f(cy - 50)} ${f(cx + 45)} ${f(cy - 10)} Z" fill="${p.accent}"/>`
  out += `<path d="M${f(cx)} ${f(cy + 40)} L${f(cx - 30)} ${f(cy - 5)} Q${f(cx - 30)} ${f(cy - 30)} ${f(cx)} ${f(cy - 20)} Q${f(cx + 30)} ${f(cy - 30)} ${f(cx + 30)} ${f(cy - 5)} Z" fill="${p.bg}" opacity=".3"/>`
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2
    const x = cx + Math.cos(a) * 80
    const y = cy + Math.sin(a) * 80
    out += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(4 + rnd() * 4)}" fill="${p.accent2}" opacity=".5"/>`
  }
  return out
}

function themeSecurity2(rnd: () => number, p: Palette): string {
  return themeSecurity(rnd, p)
}

const categoryThemes: Record<string, (rnd: () => number, p: Palette) => string> = {
  Politics: themePolitics,
  Elections: themeElections,
  Business: themeBusiness,
  Markets: themeMarkets,
  Football: themeFootball,
  UCL: themeUCL,
  Athletics: themeAthletics,
  Health: themeHealth,
  Weather: themeWeather,
  Tech: themeTech,
  Mobile: themeMobile,
  World: themeWorld,
  Energy: themeEnergy,
  Nairobi: themeNairobi,
  Counties: themeCounties,
  National: themeNational,
  Security: themeSecurity,
  Rights: themeRights,
  Food: themeFood,
  Education: themeEducation,
  Editorial: themeEditorial,
  Columnist: themeColumnist,
  Guest: themeGuest,
  Events: themeEvents,
  Explainer: themeExplainer,
  Documentary: themeDocumentary,
  Live: themeLive,
  Short: themeShort,
  Policy: themePolicy,
  Wellness: themeWellness,
}

function fallbackTheme(rnd: () => number, p: Palette): string {
  const cx = 100 + rnd() * 200
  const cy = 60 + rnd() * 80
  const r = 30 + rnd() * 30
  let out = `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${p.accent}" opacity=".8"/>`
  out += `<circle cx="${f(cx + r * 0.6)}" cy="${f(cy - r * 0.4)}" r="${f(r * 0.5)}" fill="${p.accent2}" opacity=".7"/>`
  for (let i = 0; i < 4; i++) {
    const x = 30 + i * 90 + rnd() * 30
    out += `<rect x="${f(x)}" y="${f(FOOT - 40 - rnd() * 60)}" width="${f(40 + rnd() * 30)}" height="${f(40 + rnd() * 60)}" fill="${p.ink}" opacity=".6"/>`
  }
  return out
}

export function storyArtSvg(slug: string, title = 'Story illustration', category = ''): string {
  const seed = hashString(slug)
  const rnd = createRandom(seed)
  const p = palettes[seed % palettes.length]
  const theme = categoryThemes[category] || fallbackTheme
  const label = title.replace(/"/g, '&quot;').slice(0, 120)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label}"><rect width="${W}" height="${H}" fill="${p.bg}"/>${theme(rnd, p)}<rect y="${FOOT}" width="${W}" height="${H - FOOT}" fill="${p.ink}"/><rect y="${FOOT}" width="${W}" height="5" fill="${p.accent}"/></svg>`
}
