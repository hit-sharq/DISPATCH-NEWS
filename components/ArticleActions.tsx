'use client'

import { useState } from 'react'
import { Bookmark, Share2 } from 'lucide-react'

export default function ArticleActions({ title }: { title: string }) {
  const [saved, setSaved] = useState(false)
  const [shared, setShared] = useState(false)

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title, text: 'Read this on Dispatch KE', url: window.location.href })
    } else {
      await navigator.clipboard?.writeText(window.location.href)
      setShared(true)
      setTimeout(() => setShared(false), 1800)
    }
  }

  return (
    <div className="article-actions">
      <button onClick={share}><Share2 size={15} aria-hidden="true" />{shared ? 'Link copied' : 'Share article'}</button>
      <button onClick={() => setSaved(!saved)} className={saved ? 'saved' : ''}><Bookmark size={15} aria-hidden="true" />{saved ? 'Saved' : 'Save story'}</button>
    </div>
  )
}
