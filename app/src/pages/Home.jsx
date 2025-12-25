import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories, projects } from '../data/projects'
import SkillsSection from '../components/SkillsSection'

function useReveal(dep){
  useEffect(()=>{
    const io = new IntersectionObserver((entries)=>{
      for (const e of entries){ if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target) } }
    }, { threshold: 0.2 })
    document.querySelectorAll('.reveal:not(.visible)').forEach(el=>io.observe(el))
    return ()=> io.disconnect()
  },[dep])
}

export default function Home(){
  const [active, setActive] = useState(() => {
    const firstWithProjects = categories.find(c => Object.values(projects).some(p => p.category === c.key))
    return firstWithProjects?.key || categories[0]?.key
  })
  useReveal(active)
  const navigate = useNavigate()
  const list = useMemo(()=> Object.values(projects).filter(p => p.category === active), [active])

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-12 md:pb-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              <span className="text-white/80">Hi, I’m</span> <span className="text-white">Nikesh Bhandari</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">Product Designer • UI/UX Designer • Frontend Developer</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">View Projects</a>
              <a href="#resume" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Get Resume</a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/20 shadow-glow"></div>
              <img src="/assets/images/profile.jpg" alt="Portrait" className="relative z-10 w-full h-full object-cover rounded-2xl"/>
              <div className="absolute -inset-4 -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)] blur-2xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7 text-white/70 leading-7 space-y-4 reveal">
              <p>I’m a multidisciplinary developer and designer who builds clean, accessible, and future-ready digital experiences.</p>
              <p>I enjoy taking products from idea to execution, shaping concepts, wireframes, and polished frontends into cohesive systems. Lately, I’ve been exploring AI assistants and n8n Automation.</p>
              <p>Outside of code, I sketch ideas, experiment with motion, and head outdoors for long hikes.</p>
            </div>
            <div className="md:col-span-5 reveal">
              <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7">
                <h3 className="text-lg font-semibold text-white mb-4">Talk to me about</h3>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      {/* Anime icon (TV) */}
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M8 3l4 4 4-4"/></svg>
                    </span>
                    <span className="text-white/90">Anime</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      {/* Hiking icon (mountain) */}
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 20l7-12 4 7 5-9 4 14z"/></svg>
                    </span>
                    <span className="text-white/90">Hiking & Trekking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      {/* Sketch icon (pencil) */}
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16.862 3.487a2.5 2.5 0 0 1 3.535 3.535L7.5 19.92l-4 1 1-4 13.362-13.433Z"/><path d="M15 6l3 3"/></svg>
                    </span>
                    <span className="text-white/90">Sketch</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      {/* Motion icon (wave) */}
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 16s3-6 9-6 9 6 9 6"/><path d="M3 8s3 6 9 6 9-6 9-6"/></svg>
                    </span>
                    <span className="text-white/90">Motion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="section-title">Projects</h2>
            <div className="text-sm text-white/60">Select a category</div>
          </div>
          <div className="relative mt-6">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory" aria-label="Project categories">
              {categories.map(c => (
                <button key={c.key} className="category-pill" aria-selected={c.key===active} onClick={()=>setActive(c.key)}>{c.label}</button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(p => (
              <article
                key={p.slug}
                className="group rounded-xl border border-white/15 bg-white/5 overflow-hidden hover:bg-white/10 transition reveal cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`View project: ${p.title}`}
                onClick={() => navigate(`/project/${encodeURIComponent(p.slug)}`)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/project/${encodeURIComponent(p.slug)}`) }}
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/60 text-sm">{p.desc}</p>
                  {/* <span className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white">
                    View <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Experience Journey</h2>
          <p className="text-white/60 text-sm mt-2 mb-10">From design to product development</p>
          
          <div className="space-y-8">
            {/* Stablecluster - Current Role */}
            <div className="group relative rounded-xl border border-white/15 bg-white/5 p-6 hover:border-white/30 hover:bg-white/8 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg text-white">Product Designer & Frontend Developer</h3>
                  <p className="text-white/80 font-semibold mt-1">Stablecluster Pvt. Ltd.</p>
                  <p className="text-white/50 text-sm mt-1">Kathmandu, Nepal</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold border border-green-500/30">Current</span>
                  <span className="text-white/60 text-sm whitespace-nowrap">Sep 2025 – Present</span>
                </div>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Collaborated closely with Product Owner to analyze user feedback and business needs for an existing hosting system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Conducted UX research to identify usability issues and opportunities for interface optimization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Redesigned the platform's entire user interface to enhance accessibility, consistency, and overall user experience</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Developed and implemented the redesigned system while maintaining functional compatibility with existing architecture</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Worked within Agile framework, participating in sprint planning and review sessions to ensure timely delivery</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="chip">UX Research</span>
                <span className="chip">UI Redesign</span>
                <span className="chip">Frontend Development</span>
                <span className="chip">Agile</span>
                <span className="chip">Product Strategy</span>
              </div>
            </div>

            {/* Stablecluster - Previous Role */}
            <div className="group relative rounded-xl border border-white/15 bg-white/5 p-6 hover:border-white/30 hover:bg-white/8 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg text-white">Product Designer</h3>
                  <p className="text-white/80 font-semibold mt-1">Stablecluster Pvt. Ltd.</p>
                  <p className="text-white/50 text-sm mt-1">Kathmandu, Nepal</p>
                </div>
                <span className="text-white/60 text-sm whitespace-nowrap">Feb 2024 – Aug 2025</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Led end-to-end design and documentation for an Email & SMS Marketing SaaS system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Worked closely with Product Owner, SEO, and Developers to define features, priorities, and release goals under Agile methodology</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Translated complex workflows into clear, intuitive user interfaces using Figma and system architecture diagrams</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Contributed to product strategy discussions and ensured design feasibility with technical teams</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="chip">SaaS Design</span>
                <span className="chip">Figma</span>
                <span className="chip">Product Strategy</span>
                <span className="chip">Documentation</span>
                <span className="chip">Cross-functional Collaboration</span>
              </div>
            </div>

            {/* Maina Devi Foundation */}
            <div className="group relative rounded-xl border border-white/15 bg-white/5 p-6 hover:border-white/30 hover:bg-white/8 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg text-white">Graphic Designer</h3>
                  <p className="text-white/80 font-semibold mt-1">Maina Devi Foundation</p>
                  <p className="text-white/50 text-sm mt-1">Kathmandu, Nepal</p>
                </div>
                <span className="text-white/60 text-sm whitespace-nowrap">Apr 2023 – Aug 2023</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-white/40 mt-1">▸</span>
                  <span>Designed and created engaging graphics and visual content for social media platforms to enhance brand visibility and user engagement</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="chip">Graphic Design</span>
                <span className="chip">Social Media</span>
                <span className="chip">Brand Identity</span>
                <span className="chip">Visual Content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Education</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="card">
              <h3 className="font-semibold py-1">B.Sc (Hons) Computing</h3>
              <p className="text-white/60 text-sm py-1">Affiliated to Coventry University</p>
              <p className="text-white/50 text-xs py-1">First Class Honors</p>
            </article>
            <article className="card">
              <h3 className="font-semibold py-1">+2 Science</h3>
              <p className="text-white/60 text-sm  py-1">Affiliated to Tribhuvan University</p>
              <p className="text-white/50 text-xs py-1">GPA 3.08</p>
            </article>
            <article className="card">
              <h3 className="font-semibold py-1">Secondary Education Education (SEE)</h3>
              <p className="text-white/60 text-sm py-1">Samata Shiksha Niketan</p>
              <p className="text-white/50 text-xs py-1">GPA 3.65</p>
            </article>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Resume</h2>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Copy + CTAs */}
            <div className="md:col-span-5 text-white/70 space-y-4">
              <p className="max-w-lg">Download my latest resume or contact me for opportunities. I’m open to freelance and full‑time roles.</p>
              <div className="flex gap-3">
                <a href="/assets/docs/nikesh-cv.pdf" target="_blank" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Open PDF</a>
                <a href="/assets/docs/nikesh-cv.pdf" download className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Download</a>
                <a href="#contact" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Contact</a>
              </div>
            </div>
            {/* Preview */}
            <div className="md:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-glow h-[520px] md:h-[640px] lg:h-[720px]">
                {/* Action bar */}
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-black/30 backdrop-blur border-b border-white/10">
                  <span className="text-xs text-white/60">Resume Preview</span>
                  <div className="flex items-center gap-2">
                    <a href="/assets/docs/nikesh-cv.pdf" target="_blank" rel="noreferrer" className="text-xs rounded-full border border-white/20 px-3 py-1 hover:bg-white/10">Open</a>
                    <a href="/assets/docs/nikesh-cv.pdf" download className="text-xs rounded-full border border-white/20 px-3 py-1 hover:bg-white/10">Download</a>
                  </div>
                </div>
                <object data="/assets/docs/nikesh-cv.pdf#view=FitH" type="application/pdf" className="w-full h-full">
                  <iframe src="/assets/docs/nikesh-cv.pdf#toolbar=0&navpanes=0" title="Resume preview" loading="lazy" className="w-full h-full" />
                  <div className="p-4 text-white/70 text-sm">Your browser can’t display PDFs inline. <a className="underline hover:text-white" href="/assets/docs/nikesh-cv.pdf" target="_blank" rel="noreferrer">Open the resume</a>.</div>
                </object>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
            <div className="grid md:grid-cols-12 gap-8">
              {/* Left : copy */}
              <div className="md:col-span-6 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl tracking-tight">Let’s work together!</h2>
                <p className="text-white/70 max-w-xl">Got a project in mind or just want to say hi? Feel free to send me a message. I’m available for freelance projects and open to new opportunities.</p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/90"><path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Z" stroke="currentColor" strokeWidth="1.5"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <a href="mailto:bhandarinikesh93@gmail.com" className="text-lg underline hover:text-white">bhandarinikesh93@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white/90"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56l-.02-2.03c-3.21.7-3.89-1.55-3.89-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.76.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.85 1.19 3.11 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.17l-.02 3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
                  </span>
                  <a href="https://github.com/0-nikesh" target="_blank" rel="noreferrer" className="text-lg underline hover:text-white">0-nikesh</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white/90"><path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3.5 9h3v12h-3V9Zm6 0h2.88v1.64h.04c.4-.76 1.37-1.64 2.82-1.64C18.9 9 21 11.06 21 14.47V21h-3v-5.23c0-1.25-.03-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78V21h-3V9Z"/></svg>
                  </span>
                  <a href="https://www.linkedin.com/in/0nikesh/" target="_blank" rel="noreferrer" className="text-lg underline hover:text-white">Nikesh Bhandari</a>
                </div>
              </div>


              {/* Right : form */}
                <form className="md:col-span-6 space-y-5" action="mailto:bhandarinikesh93@gmail.com" method="post" encType="text/plain">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white/60" htmlFor="c-name">NAME</label>
                    <input id="c-name" type="text" name="name" placeholder="Your Name" className="input" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white/60" htmlFor="c-email">EMAIL</label>
                    <input id="c-email" type="email" name="email" placeholder="you@email.com" className="input" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white/60" htmlFor="c-message">MESSAGE</label>
                    <textarea id="c-message" name="message" placeholder="Tell me about your project..." rows="6" className="input" />
                  </div>
                  <button className="w-full rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition inline-flex items-center justify-center gap-2">
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
                </form>
            </div>

            {/* Social icons on the right side inside container */}
           
          </div>
        </div>
      </section>
    </>
  )
}
