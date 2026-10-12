export type ShareTarget = 'x' | 'facebook' | 'linkedin' | 'whatsapp' | 'telegram' | 'email'

type ShareInput = {
  url: string
  title: string
}

export function shareUrl(target: ShareTarget, { url, title }: ShareInput): string {
  const enc = encodeURIComponent
  switch (target) {
    case 'x':
      return `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`
    case 'whatsapp':
      return `https://wa.me/?text=${enc(`${title} ${url}`)}`
    case 'telegram':
      return `https://t.me/share/url?url=${enc(url)}&text=${enc(title)}`
    case 'email':
      return `mailto:?subject=${enc(title)}&body=${enc(url)}`
  }
}

export function openSharePopup(href: string, name: string) {
  const width = 600
  const height = 540
  const left = Math.round((window.innerWidth - width) / 2)
  const top = Math.round((window.innerHeight - height) / 2)
  window.open(
    href,
    `dispatch-share-${name}`,
    `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,resizable=yes,scrollbars=yes`,
  )
}
