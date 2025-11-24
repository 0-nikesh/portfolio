import React from 'react'
import { skillCategories } from '../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="text-white/60 text-sm mt-2 mb-8">A quick snapshot of the stacks I use, grouped by category.</p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl border border-white/20 bg-white/5 shadow-glow overflow-hidden"
            >
              <div className="p-4 flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={cat.label}>{cat.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm leading-tight">{cat.label}</h3>
                  <p className="text-xs text-white/50 mt-0.5">{cat.skills.length} skills</p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
