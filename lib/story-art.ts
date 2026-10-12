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

function skyline(rnd: () => number, p: Palette): string {
  let out = ''
  let x = -12
  while (x < W + 12) {
    const w = 26 + rnd() * 52
    const h = 48 + rnd() * 128
    out += `<rect x="${f(x)}" y="${f(FOOT - h)}" width="${f(w)}" height="${f(h)}" fill="${p.ink}"/>`
    const cols = Math.max(1, Math.floor(w / 13))
    const rows = Math.max(1, Math.floor(h / 20))
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (rnd() > 0.55) {
          out += `<rect x="${f(x + 5 + c * 12)}" y="${f(FOOT - h + 7 + r * 18)}" width="6" height="8" fill="${p.bg}" opacity=".45"/>`
        }
      }
    }
    x += w + 5 + rnd() * 16
  }
  return out
}

function bars(rnd: () => number, p: Palette): string {
  let out = ''
  const n = 4 + Math.floor(rnd() * 3)
  const gap = 26
  const bw = (W - 96 - gap * (n - 1)) / n
  let px = 48
  let py = 0
  for (let i = 0; i < n; i++) {
    const h = 40 + rnd() * 130
    const x = 48 + i * (bw + gap)
    const fill = i === n - 1 ? p.accent : p.ink
    out += `<rect x="${f(x)}" y="${f(FOOT - h)}" width="${f(bw)}" height="${f(h)}" fill="${fill}"/>`
    if (i === 0) { px = x + bw / 2; py = FOOT - h }
  }
  const lx = 48 + (n - 1) * (bw + gap) + bw / 2
  const ly = FOOT - (40 + rnd() * 130)
  out += `<path d="M${f(px)} ${f(py)} L${f((px + lx) / 2)} ${f(Math.min(py, ly) - 24)} L${f(lx)} ${f(ly)}" fill="none" stroke="${p.accent2}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`
  out += `<path d="M${f(lx - 14)} ${f(ly - 4)} L${f(lx + 4)} ${f(ly - 12)} L${f(lx - 2)} ${f(ly + 10)} Z" fill="${p.accent2}"/>`
  return out
}

function waves(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 60 + rnd() * 280
  const cy = FOOT + 30
  const rings = 5 + Math.floor(rnd() * 3)
  for (let i = rings; i > 0; i--) {
    const r = 34 + i * (22 + rnd() * 10)
    const fill = i % 2 === 0 ? p.ink : i % 4 === 1 ? p.accent : p.accent2
    out += `<path d="M${f(cx - r)} ${cy} A${f(r)} ${f(r)} 0 0 1 ${f(cx + r)} ${cy} Z" fill="${fill}" opacity="${f(0.35 + (rings - i) * 0.14)}"/>`
  }
  out += `<circle cx="${f(cx)}" cy="${f(cy - 30 - rnd() * 40)}" r="${f(14 + rnd() * 12)}" fill="${p.accent}"/>`
  return out
}

function rings(rnd: () => number, p: Palette): string {
  let out = ''
  const cx = 90 + rnd() * 220
  const cy = 60 + rnd() * 90
  const n = 4 + Math.floor(rnd() * 3)
  for (let i = n; i > 0; i--) {
    const r = 16 + i * (15 + rnd() * 8)
    const fill = i === 1 ? p.accent : i % 2 === 0 ? p.ink : p.accent2
    out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${fill}" opacity="${f(0.5 + (n - i) * 0.12)}"/>`
  }
  out += `<circle cx="${f(cx)}" cy="${f(cy)}" r="7" fill="${p.bg}"/>`
  return out
}

function peaks(rnd: () => number, p: Palette): string {
  let out = ''
  out += `<circle cx="${f(70 + rnd() * 260)}" cy="${f(46 + rnd() * 40)}" r="${f(22 + rnd() * 14)}" fill="${p.accent}"/>`
  let x = -20
  let first = true
  while (x < W + 20) {
    const w = 90 + rnd() * 130
    const h = 60 + rnd() * 110
    out += `<path d="M${f(x)} ${FOOT} L${f(x + w / 2)} ${f(FOOT - h)} L${f(x + w)} ${FOOT} Z" fill="${first ? p.ink : p.accent2}" opacity="${first ? '1' : f(0.55 + rnd() * 0.3)}"/>`
    first = false
    x += w * (0.55 + rnd() * 0.4)
  }
  return out
}

function dotgrid(rnd: () => number, p: Palette): string {
  let out = ''
  const cols = 10
  const rows = 6
  const gx = (W - 80) / cols
  const gy = (FOOT - 60) / rows
  const hot = Math.floor(rnd() * cols * rows)
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const i = c * rows + r
      const x = 40 + c * gx + gx / 2
      const y = 34 + r * gy + gy / 2
      if (i === hot) {
        out += `<circle cx="${f(x)}" cy="${f(y)}" r="13" fill="${p.accent}"/>`
      } else if (rnd() > 0.72) {
        out += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(3 + rnd() * 3)}" fill="${p.ink}" opacity=".8"/>`
      } else {
        out += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(2 + rnd() * 2)}" fill="${p.ink}" opacity=".3"/>`
      }
    }
  }
  return out
}

function arcs(rnd: () => number, p: Palette): string {
  let out = ''
  const cell = 62
  for (let gx = 0; gx < 6; gx++) {
    for (let gy = 0; gy < 3; gy++) {
      const x = 14 + gx * cell
      const y = 18 + gy * cell
      const rot = Math.floor(rnd() * 4) * 90
      const pick = rnd()
      const fill = pick > 0.72 ? p.accent : pick > 0.36 ? p.ink : p.accent2
      out += `<path d="M${x} ${y + cell - 14} A${cell - 14} ${cell - 14} 0 0 1 ${x + cell - 14} ${y}" fill="none" stroke="${fill}" stroke-width="${f(8 + rnd() * 8)}" transform="rotate(${rot} ${f(x + (cell - 14) / 2)} ${f(y + (cell - 14) / 2)})"/>`
    }
  }
  return out
}

function frames(rnd: () => number, p: Palette): string {
  let out = ''
  const n = 3
  const fw = 84
  const fh = 128
  const gap = 22
  const total = n * fw + (n - 1) * gap
  const startX = (W - total) / 2
  for (let i = 0; i < n; i++) {
    const x = startX + i * (fw + gap)
    const y = 44 + rnd() * 10
    out += `<rect x="${f(x)}" y="${f(y)}" width="${fw}" height="${fh}" rx="8" fill="${p.ink}"/>`
    for (let h = 0; h < 4; h++) {
      out += `<rect x="${f(x + 8)}" y="${f(y + 10 + h * 12)}" width="10" height="6" fill="${p.bg}" opacity=".5"/>`
      out += `<rect x="${f(x + fw - 18)}" y="${f(y + 10 + h * 12)}" width="10" height="6" fill="${p.bg}" opacity=".5"/>`
      out += `<rect x="${f(x + 8)}" y="${f(y + fh - 34 + h * 8)}" width="10" height="6" fill="${p.bg}" opacity=".5"/>`
      out += `<rect x="${f(x + fw - 18)}" y="${f(y + fh - 34 + h * 8)}" width="10" height="6" fill="${p.bg}" opacity=".5"/>`
    }
    if (i === Math.floor(rnd() * n)) {
      out += `<path d="M${f(x + fw / 2 - 10)} ${f(y + fh / 2 - 14)} L${f(x + fw / 2 + 14)} ${f(y + fh / 2)} L${f(x + fw / 2 - 10)} ${f(y + fh / 2 + 14)} Z" fill="${p.accent}"/>`
    }
  }
  return out
}

const variants = [skyline, bars, waves, rings, peaks, dotgrid, arcs, frames]

export function storyArtSvg(slug: string, title = 'Story illustration'): string {
  const seed = hashString(slug)
  const rnd = createRandom(seed)
  const p = palettes[seed % palettes.length]
  const variant = variants[Math.floor(seed / palettes.length) % variants.length]
  const label = title.replace(/"/g, '&quot;').slice(0, 120)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label}"><rect width="${W}" height="${H}" fill="${p.bg}"/>${variant(rnd, p)}<rect y="${FOOT}" width="${W}" height="${H - FOOT}" fill="${p.ink}"/><rect y="${FOOT}" width="${W}" height="5" fill="${p.accent}"/></svg>`
}
