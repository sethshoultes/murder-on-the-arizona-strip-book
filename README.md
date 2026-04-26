# Murder on the Arizona Strip — Book Site

A reading-focused web edition of the novel, with scene illustrations that fade in as you scroll. Built with Astro + MDX. Deploys to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321 (default Astro port).

## Build for GitHub Pages

```bash
npm run build
# outputs to dist/
```

The site assumes a base path of `/murder-on-the-arizona-strip-book/`. Configured in `astro.config.mjs`. Adjust if you deploy to a different repo name or a custom domain.

## Adding a chapter

1. Create `src/content/chapters/<NN>-<slug>.mdx` with frontmatter:
   ```yaml
   ---
   number: 2
   title: "Chapter Title"
   slug: "chapter-slug"
   epigraph: "Optional opening line."
   ---
   ```
2. Add prose. Include `<Illustration>` and `<ClipLoop>` components from `../../components/` at scene cue points.
3. Drop illustration assets into `public/illustrations/` and clip MP4s into `public/clips/`.

## Components

- **`<Illustration src alt caption?>`** — fades-in PNG illustration as it scrolls into view.
- **`<ClipLoop src poster? caption?>`** — auto-playing muted video loop. Plays when in view, pauses when out of view.
- **`<SceneBreak />`** — typographic scene divider.

All fade-ins respect `prefers-reduced-motion`.

## Source novel

The manuscript and project bible live at `~/writing/murder-on-the-arizona-strip/`. The illustrations and clips are derived from `film/render/kling/keyframes/` and `film/render/kling/*.mp4` of that project.
