import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-lg tracking-widest">NB<span className="text-white/50">_</span></a>
        <ul className="hidden md:flex gap-6 text-sm text-white/70">
          <li><a className="hover:text-white" href="#about">About</a></li>
          <li><a className="hover:text-white" href="#skills">Skills</a></li>
          <li><a className="hover:text-white" href="#projects">Projects</a></li>
          <li><a className="hover:text-white" href="#experience">Experience</a></li>
          <li><a className="hover:text-white" href="#education">Education</a></li>
          <li><a className="hover:text-white" href="#resume">Resume</a></li>
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition">Contact</a>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/10" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <ul className="px-6 py-4 space-y-3 text-white/80">
            <li><a className="block" href="#about" onClick={()=>setOpen(false)}>About</a></li>
            <li><a className="block" href="#skills" onClick={()=>setOpen(false)}>Skills</a></li>
            <li><a className="block" href="#projects" onClick={()=>setOpen(false)}>Projects</a></li>
            <li><a className="block" href="#experience" onClick={()=>setOpen(false)}>Experience</a></li>
            <li><a className="block" href="#education" onClick={()=>setOpen(false)}>Education</a></li>
            <li><a className="block" href="#resume" onClick={()=>setOpen(false)}>Resume</a></li>
            <li><a className="block" href="#contact" onClick={()=>setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
