import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function absoluteUrl(path){
  try { return new URL(path, window.location.origin).toString() } catch { return path }
}
function extractYoutubeId(urlOrId){
  if (!urlOrId) return ''
  if (/^[a-zA-Z0-9_-]{6,}$/i.test(urlOrId) && !/\//.test(urlOrId)) return urlOrId
  try {
    const u = new URL(urlOrId)
    if (u.hostname.includes('youtu.be')){
      const id = u.pathname.replace(/^\//,'').split('/')[0]
      return id || ''
    }
    const v = u.searchParams.get('v')
    if (v) return v
    const m = u.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/)
    if (m) return m[1]
  } catch {}
  return ''
}

function getInstagramEmbed(url){
  if (!url) return ''
  try {
    const u = new URL(url)
    const pathname = u.pathname.endsWith('/') ? u.pathname : u.pathname + '/'
    return `${u.origin}${pathname}embed`
  } catch { return '' }
}

function getInstagramAspect(url){
  try {
    const u = new URL(url)
    return u.pathname.includes('/reel/') ? 'aspect-[9/16]' : 'aspect-[4/5]'
  } catch { return 'aspect-[4/5]' }
}

function getLinkedInEmbed(url){
  if (!url) return ''
  try {
    const u = new URL(url)
    // LinkedIn embed URL pattern: /embed/feed/update/<rest>
    return `${u.origin}/embed${u.pathname}`
  } catch { return '' }
}

export default function Project(){
  const { slug } = useParams()
  const proj = projects[slug]
  const [active, setActive] = React.useState('yt')
  const youTubeId = useMemo(()=> extractYoutubeId(proj?.youtubeId || proj?.youtubeUrl), [proj])
  const youtubeLink = proj?.youtubeUrl || (youTubeId ? `https://youtu.be/${youTubeId}` : '')
  const instagramEmbed = useMemo(()=> getInstagramEmbed(proj?.instagramUrl), [proj])
  const igAspect = useMemo(()=> getInstagramAspect(proj?.instagramUrl), [proj])
  const linkedinEmbed = useMemo(()=> getLinkedInEmbed(proj?.linkedinUrl), [proj])

  const pptxEmbed = useMemo(()=>{
    if (!proj?.pptxPath) return ''
    const url = absoluteUrl(proj.pptxPath)
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`
  }, [proj])

  if (!proj){
    return (
      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl">Project Not Found</h1>
        <p className="text-white/60 mt-2">The project you requested does not exist.</p>
        <Link to="/" className="inline-block mt-6 rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Back home</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
      <section className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 space-y-4">
          <p className="text-white/60 tracking-widest uppercase text-xs">Project</p>
          <h1 className="font-display text-3xl md:text-4xl">{proj.title}</h1>
          <p className="text-white/70">{proj.desc}</p>
          {(proj.period || proj.org) && (
            <p className="text-white/50 text-sm">{proj.period}{proj.period && proj.org ? ' • ' : ''}{proj.org}</p>
          )}
          {Array.isArray(proj.skills) && proj.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {proj.skills.map((s, i) => (
                <span key={i} className="chip text-xs">{s}</span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-2">
            {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Live</a>}
            {proj.repo && <a href={proj.repo} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">View Code</a>}
            {proj.figma && <a href={proj.figma} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Figma</a>}
            {youtubeLink && <a href={youtubeLink} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">YouTube</a>}
            {proj.pdfPath && <a href={proj.pdfPath} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Documentation (PDF)</a>}
            <Link to="/" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">All Projects</Link>
          </div>
          <div className="mt-6">
            {youTubeId ? (
              <div className="aspect-video rounded-lg overflow-hidden border border-white/15 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${encodeURIComponent(youTubeId)}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : instagramEmbed ? (
              <div className={`${igAspect} rounded-lg overflow-hidden border border-white/15 bg-white`}> 
                <iframe 
                  className="h-full w-full" 
                  src={instagramEmbed} 
                  title="Instagram post" 
                  frameBorder="0" 
                  allow="encrypted-media; clipboard-write; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img src={proj.img} alt="Project cover" className="w-full rounded-xl border border-white/15 bg-white/5 shadow-glow" />
            )}
          </div>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-glow">
            <h2 className="font-semibold mb-3">Viewers</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {youTubeId && (
                <button className="category-pill" aria-selected={active==='yt'} onClick={()=>setActive('yt')}>YouTube</button>
              )}
              {instagramEmbed && (
                <button className="category-pill" aria-selected={active==='ig'} onClick={()=>setActive('ig')}>Instagram</button>
              )}
                {linkedinEmbed && (
                  <button className="category-pill" aria-selected={active==='li'} onClick={()=>setActive('li')}>LinkedIn</button>
                )}
              {proj.pdfPath && (
                <button className="category-pill" aria-selected={active==='pdf'} onClick={()=>setActive('pdf')}>PDF</button>
              )}
              {proj.pptxPath && (
                <button className="category-pill" aria-selected={active==='pptx'} onClick={()=>setActive('pptx')}>PPTX</button>
              )}
            </div>

            {youTubeId && active==='yt' && (
              <div className="aspect-video rounded-lg overflow-hidden border border-white/15 bg-black">
                <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${encodeURIComponent(youTubeId)}`} title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            )}

            {instagramEmbed && active==='ig' && (
              <div className={`${igAspect} rounded-lg overflow-hidden border border-white/15 bg-white`}>
                <iframe className="h-full w-full" src={instagramEmbed} title="Instagram post" frameBorder="0" allow="encrypted-media; clipboard-write; picture-in-picture" allowFullScreen />
              </div>
            )}

            {linkedinEmbed && active==='li' && (
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/15 bg-white/5">
                <iframe className="h-full w-full" src={linkedinEmbed} title="LinkedIn post" frameBorder="0" allow="encrypted-media; clipboard-write; picture-in-picture" allowFullScreen />
              </div>
            )}

            {proj.pdfPath && active==='pdf' && (
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/15 bg-white/5">
                <iframe className="h-full w-full" src={`${proj.pdfPath}#view=FitH`} title="PDF viewer" />
              </div>
            )}

            {proj.pptxPath && active==='pptx' && (
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/15 bg-white/5">
                <iframe className="h-full w-full" src={pptxEmbed} title="PPTX viewer" />
              </div>
            )}

            {/* <p className="mt-3 text-xs text-white/50">Upload your files to <code>public/assets/docs/</code>. PPTX is embedded using Office web viewer but displays inside this page.</p> */}
          </div>
        </aside>
      </section>
    </main>
  )
}
