# Om Pansare — Portfolio

React + Vite + TypeScript + React Router. Brand: **Om Pansare**. *Quiet confidence. Visible work.*

## Run locally
```
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

## Edit content (no component changes needed)
Everything lives in `src/data/site.ts`:
- **Photo**: replace `public/images/om-pansare.jpg` (4:5 ratio works best).
- **Links / email**: `links` and `email`.
- **Add a project**: push an object to `projects` (slug, title, summary, category, tech, `featured: true` to show on Home, optional repo/demo/image/sections). It gets `/projects/<slug>` automatically.
- **Skills, experience, achievements, journal, now, education, interests**: fill the matching arrays. Empty arrays render designed empty states. Add only verified information.
- Screenshots: put files in `public/images/` and reference as `/images/name.png`.

## Deploy free on Vercel (recommended)
Vercel needs no config for Vite and `vercel.json` already rewrites every route to `index.html`, so refreshing `/projects` or opening a deep link works.
1. Create a GitHub repo and push: `git init && git add . && git commit -m "Portfolio" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`
2. On vercel.com choose **Add New → Project**, import the repo. Framework preset: Vite. Build `npm run build`, output `dist`.
3. Deploy. Future updates: edit, commit, push — Vercel redeploys automatically.

GitHub Pages alternative: set `base: '/<repo-name>/'` in `vite.config.ts` and copy `dist/index.html` to `dist/404.html` after build for deep links.

## Troubleshooting
- Blank page after deploy on GitHub Pages: `base` is wrong.
- 404 on refresh: the host is missing the SPA rewrite (see `vercel.json`).
- Update `index.html` and add a `sitemap.xml` with your final URL once you have it.
