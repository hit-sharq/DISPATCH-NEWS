import { mkdirSync, writeFileSync } from 'node:fs'
import { storyArtSvg } from '../lib/story-art'
import { allStories } from '../lib/news'

mkdirSync('public/images/stories', { recursive: true })

for (const story of allStories) {
  writeFileSync(`public/images/stories/${story.slug}.svg`, storyArtSvg(story.slug, story.title))
}

console.log(`Generated ${allStories.length} unique story images in public/images/stories/`)
