import React, { useState } from 'react'
import { skillCategories } from '../data/skills'

export default function SkillsSection() {
  // All categories open by default (null = all collapsed, we want all expanded)
  const [collapsedCategories, setCollapsedCategories] = useState(new Set())

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="text-white/60 text-sm mt-2 mb-8">Click a category to explore or hover to preview</p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => {
            const isOpen = !collapsedCategories.has(cat.id)
            
            const toggleCategory = () => {
              const newSet = new Set(collapsedCategories)
              if (isOpen) {
                newSet.add(cat.id)
              } else {
                newSet.delete(cat.id)
              }
              setCollapsedCategories(newSet)
            }
            
            return (
              <div
                key={cat.id}
                className={`group relative rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen 
                    ? 'border-white/40 bg-white/10 shadow-glow' 
                    : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/8'
                }`}
                onClick={toggleCategory}
              >
                {/* Header */}
                <div className="p-4 flex items-center gap-3">
                  <span className="text-3xl" role="img" aria-label={cat.label}>{cat.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm leading-tight">{cat.label}</h3>
                    <p className="text-xs text-white/50 mt-0.5">{cat.skills.length} skills</p>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Expanded Skills List */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-4 pt-2 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Preview (desktop only, shows 3 skills) - hidden when open */}
                {!isOpen && (
                  <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 pt-12">
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white/90">
                            {skill}
                          </span>
                        ))}
                        {cat.skills.length > 3 && (
                          <span className="text-[10px] px-2 py-0.5 text-white/60">+{cat.skills.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
