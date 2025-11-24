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
              <img src="/assets/images/profile.svg" alt="Portrait" className="relative z-10 w-full h-full object-cover rounded-2xl"/>
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
              <p>I’m a multidisciplinary developer/designer focused on building clean, accessible, and future‑friendly interfaces.</p>
              <p>I enjoy shipping products end‑to‑end—from ideation and wireframes to polished frontends. Recent interests include AI assistants and generative UI.</p>
              <p>When I’m not coding, I sketch, experiment with motion, and hike.</p>
            </div>
            <ul className="md:col-span-5 grid grid-cols-2 gap-3 text-sm reveal">
              {['HTML','CSS / Tailwind','JavaScript','Flutter','React / MERN','Figma','AI/ML','Accessibility'].map(s=> (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      {/* <SkillsSection /> */}

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
              <article key={p.slug} className="group rounded-xl border border-white/15 bg-white/5 overflow-hidden hover:bg-white/10 transition reveal">
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/60 text-sm">{p.desc}</p>
                  <button onClick={()=>navigate(`/project/${encodeURIComponent(p.slug)}`)} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
                    View <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
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
                  <h3 className="font-display text-lg text-white">Product Designer & Development Associate</h3>
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
              <h3 className="font-semibold">B.Sc (Hons) Computing — First Class Honors</h3>
              <p className="text-white/60 text-sm">Affiliated to Coventry University</p>
              <p className="text-white/50 text-xs">2022 — 2025</p>
            </article>
            <article className="card">
              <h3 className="font-semibold">+2 Science</h3>
              <p className="text-white/60 text-sm">Kabhre Multiple Campus (Affiliated to TU)</p>
              <p className="text-white/50 text-xs">GPA 3.08</p>
            </article>
            <article className="card">
              <h3 className="font-semibold">Secondary Education (SEE)</h3>
              <p className="text-white/60 text-sm">Samata Shiksha Niketan</p>
              <p className="text-white/50 text-xs">GPA 3.65</p>
            </article>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Resume</h2>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-white/70 space-y-4">
              <p>Download my latest resume or contact me for opportunities. I’m open to freelance and full‑time roles.</p>
              <div className="flex gap-3">
                <a href="/assets/docs/nikesh-cv.pdf" target="_blank" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Download PDF</a>
                <a href="#contact" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Contact</a>
              </div>
              <p className="text-white/50 text-xs">Tip: Replace <code>public/assets/resume/resume.pdf</code> with your file.</p>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[3/4] rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-transparent shadow-glow flex items-center justify-center text-white/40 text-sm">Resume Preview</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Contact</h2>
          <div className="grid md:grid-cols-12 gap-8">
            <form className="md:col-span-7 space-y-4" action="mailto:your.email@example.com" method="post" encType="text/plain">
              <input type="text" name="name" placeholder="Nikesh Bhandari" className="input" required />
              <input type="email" name="email" placeholder="Email" className="input" required />
              <textarea name="message" placeholder="Message" rows="5" className="input" />
              <button className="rounded-lg border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">Send</button>
            </form>
            <div className="md:col-span-5 text-white/60 space-y-2">
              <p>Email: <a className="underline hover:text-white" href="mailto:bhandarinikesh93@gmail.com">bhandarinikesh93@gmail.com</a></p>
              <p>GitHub: <a className="underline hover:text-white" href="https://github.com/0-nikesh" target="_blank" rel="noreferrer">Nikesh Bhandari</a></p>
              <p>LinkedIn: <a className="underline hover:text-white" href="https://www.linkedin.com/in/0nikesh/" target="_blank" rel="noreferrer">Nikesh Bhandari</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
