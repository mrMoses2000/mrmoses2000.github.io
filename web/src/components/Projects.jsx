import React, { useState } from 'react'
import { ExternalLink, Layers, Bot, Globe, Terminal, Send } from 'lucide-react'
import { GithubIcon } from './Icons'

export function Projects({ data, mode, lang }) {
  const [filter, setFilter] = useState('all')
  const isRu = lang === 'ru'
  const isBusiness = mode === 'business'

  const categories = [
    { id: 'all', label: isRu ? 'Все проекты' : 'All Projects', icon: Layers },
    { id: 'bots', label: isRu ? 'Telegram & Mini Apps' : 'Telegram & Mini Apps', icon: Bot },
    { id: 'web', label: isRu ? 'Веб-платформы' : 'Web Platforms', icon: Globe },
    { id: 'systems', label: isRu ? 'Системы & ИИ' : 'Systems & AI', icon: Terminal },
  ]

  const filteredProjects = data.projects.filter(p => {
    if (filter === 'all') return true
    if (filter === 'bots') return p.category === 'bots' || p.category === 'ai' || Boolean(p.bot)
    if (filter === 'web') return p.category === 'web' || Boolean(p.live)
    if (filter === 'systems') return p.category === 'systems' || p.category === 'ai'
    return true
  })

  return (
    <section id="projects" className="py-12 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
              {isRu ? "Портфолио & Реальные кейсы" : "Portfolio & Real Cases"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {data.sections.projects}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              {isBusiness
                ? (isRu ? "Фокус на окупаемости, удобстве клиентов и автоматизации рутины." : "Focus on ROI, user conversion, and business process automation.")
                : (isRu ? "Фокус на архитектуре, очередях задач, базах данных и системных интерфейсах." : "Focus on system boundaries, async queues, databases, and low-level protocols.")}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            {categories.map(cat => {
              const Icon = cat.icon
              const active = filter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-print flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{project.subtitle}</p>
                  </div>
                  <span className="shrink-0 text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Description based on mode */}
                <div className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {isBusiness ? project.businessDesc : project.systemsDesc}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge-print text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 mt-4 border-t border-zinc-800/60 no-print">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-white transition-all shadow-sm"
                  >
                    <span>{isRu ? "Открыть сайт" : "Live Site"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.bot && (
                  <a
                    href={project.bot}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-800/60 text-blue-300 hover:text-blue-100 hover:border-blue-600 text-xs font-medium transition-all group/bot"
                    title={project.botAccess ? (isRu ? `Доступ: ${project.botAccess}` : `Access: ${project.botAccess}`) : undefined}
                  >
                    <Send className="w-3 h-3 text-blue-400 group-hover/bot:translate-x-0.5 transition-transform" />
                    <span>{project.botLabel || (isRu ? "Telegram-бот" : "Telegram Bot")}</span>
                    {project.botAccess && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-900/60 text-blue-300/90 border border-blue-700/50">
                        {project.botAccess}
                      </span>
                    )}
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-medium transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{isRu ? "Исходный код" : "Source Code"}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
