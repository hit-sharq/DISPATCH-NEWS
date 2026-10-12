'use client'

import { useState } from 'react'
import { Bookmark } from 'lucide-react'
import ShareBar from './ShareBar'

type ArticleActionsProps = {
  title: string
  url: string
  summary?: string
}

export default function ArticleActions({ title, url, summary }: ArticleActionsProps) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="article-actions">
      <ShareBar title={title} url={url} summary={summary} />
      <button onClick={() => setSaved(!saved)} className={saved ? 'saved' : ''} aria-pressed={saved}>
        <Bookmark size={15} aria-hidden="true" />{saved ? 'Saved' : 'Save story'}
      </button>
    </div>
  )
}
