# Portfolio — React + Vite + Tailwind

Modern React port of your portfolio with a project detail route and on-page viewers (YouTube, PDF, PPTX).

## Stack
- React 18 with React Router
- Vite
- Tailwind CSS

## Scripts

```powershell
# From e:\portfolio\app
npm install
npm run dev   # http://localhost:5173
npm run build # output to dist/
npm run preview
```

## Structure
```
app/
  public/
    assets/
      images/    # put project thumbnails here
      docs/      # put PDFs and PPTX files here
  src/
    data/projects.js  # categories and project catalog
    pages/
      Home.jsx        # homepage with sections
      Project.jsx     # /project/:slug detail page with viewers
    components/
      Header.jsx, Footer.jsx
    styles.css        # tailwind + custom css
  index.html
  tailwind.config.js
  postcss.config.js
  vite.config.js
```

## Add projects
Edit `src/data/projects.js` and add entries keyed by `slug`:

```js
{
  slug: 'taskforge',
  title: 'TaskForge',
  desc: 'Kanban + realtime collab.',
  img: '/assets/images/taskforge.png',
  repo: 'https://github.com/you/taskforge',
  youtubeId: 'XXXXXXXXXXX',
  pdfPath: '/assets/docs/taskforge.pdf',
  pptxPath: '/assets/docs/taskforge.pptx',
  category: 'mern'
}
```

- Thumbnails go in `public/assets/images/`
- PDFs/PPTX go in `public/assets/docs/`
- Cards link to `/project/<slug>` automatically.

## Viewers
- YouTube is embedded via iframe inside the page.
- PDF uses the browser’s inline PDF viewer in an iframe.
- PPTX uses Microsoft Office web viewer embedded on your page; files must be accessible at your deployed URL.

## Deploy
- Netlify: build command `npm run build`, publish `dist`
- GitHub Pages: `npm run build` then serve `dist` (or use gh-pages workflow)

For a custom domain, point DNS to your hosting provider and ensure all assets are under `/assets/...`.
