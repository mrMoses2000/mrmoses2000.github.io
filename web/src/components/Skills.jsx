import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Cpu, Server, Code, Layers, Sparkles } from 'lucide-react'

export function Skills({ data, lang }) {
  const [expanded, setExpanded] = useState(false)
  const isRu = lang === 'ru'

  const icons = [Cpu, Server, Code, Layers, Sparkles]

  return (
    <section id="skills" className="py-12 border-b border-zinc-900 section-break">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
              {isRu ? "Стек & Компетенции" : "Stack & Competencies"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {data.sections.skills}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              {isRu
                ? "Сбалансированный арсенал: от низкого уровня ядра и сетей до современных фронтенд и ИИ-инструментов."
                : "Balanced stack: from low-level Linux kernel and networking to modern frontend and AI agent pipelines."}
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="skill-toggle-btn no-print inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all self-start sm:self-auto"
          >
            <span>{expanded ? (isRu ? "Свернуть детали" : "Collapse details") : (isRu ? "Показать глубокий стек" : "Show deep systems stack")}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skillsCategories.map((cat, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <div
                key={idx}
                className="card-print p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800/80">
                    <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-zinc-200">{skill.name}</span>
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                            {skill.level}
                          </span>
                        </div>
                        {/* Expandable or print description */}
                        <div
                          className={`text-[11px] text-zinc-400 leading-relaxed ${
                            expanded ? 'block' : 'hidden md:block print-expand'
                          }`}
                        >
                          {skill.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
