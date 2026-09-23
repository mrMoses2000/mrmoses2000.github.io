import React from 'react'
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle } from 'lucide-react'

export function Experience({ data, lang }) {
  const isRu = lang === 'ru'

  return (
    <section id="experience" className="py-12 border-b border-zinc-900 section-break">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
            {isRu ? "Карьера & Практика" : "Career & Track Record"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {data.sections.experience}
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            {isRu
              ? "От программирования микроконтроллеров и ядра Linux до современных распределенных систем и веб-сервисов."
              : "From STM32 firmware and Linux kernel drivers to modern distributed web platforms and automated pipelines."}
          </p>
        </div>

        {/* Timeline list */}
        <div className="space-y-6">
          {data.experience.map((item, idx) => (
            <div
              key={idx}
              className="card-print p-5 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>{item.role}</span>
                  </h3>
                  <span className="text-zinc-500 font-normal">·</span>
                  <span className="text-zinc-300 font-semibold">{item.company}</span>
                  {item.logo && (
                    <span className="inline-flex items-center h-6 px-2 py-0.5 rounded-md bg-white border border-zinc-200/90 shadow-sm shrink-0">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="h-3.5 w-auto object-contain max-w-[85px]"
                        loading="lazy"
                      />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-3">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{item.location}</span>
              </div>

              <p className="text-sm text-zinc-300 font-normal mb-3 leading-relaxed">
                {item.desc}
              </p>

              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0 mt-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education Card */}
          <div className="card-print p-5 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/70">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                {data.personal.education}
              </h3>
              {data.personal.educationLogo && (
                <span className="inline-flex items-center h-6 px-2 py-0.5 rounded-md bg-white border border-zinc-200/90 shadow-sm shrink-0">
                  <img
                    src={data.personal.educationLogo}
                    alt="НГУ"
                    className="h-3.5 w-auto object-contain max-w-[80px]"
                    loading="lazy"
                  />
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-300">
              {data.personal.educationDetails}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
