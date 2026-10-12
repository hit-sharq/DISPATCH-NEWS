import { mkdirSync, writeFileSync } from 'node:fs'
import { storyArtSvg } from '../lib/story-art.ts'
import { allStories } from '../lib/news.ts'

mkdirSync('public/images/stories', { recursive: true })

for (const story of allStories) {
  writeFileSync(`public/images/stories/${story.slug}.svg`, storyArtSvg(story.slug, story.title))
}

console.log(`Generated ${allStories.length} unique story images in public/images/stories/`)
