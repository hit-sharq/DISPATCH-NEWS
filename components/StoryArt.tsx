import { storyArtSvg } from '../lib/story-art'
import type { Story } from '../lib/news'

type StoryArtProps = {
  story: Pick<Story, 'slug' | 'title' | 'image'>
  className?: string
}

export default function StoryArt({ story, className }: StoryArtProps) {
  if (story.image) {
    return <img src={story.image} alt={story.title} className={className} loading="lazy" />
  }
  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: storyArtSvg(story.slug, story.title) }} />
  )
}
