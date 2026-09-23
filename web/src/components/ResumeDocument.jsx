import React from 'react'
import { Send, MessageSquare, Mail, MapPin, ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'

export function ResumeDocument({ data, lang, mode }) {
  const isRu = lang === 'ru'

  return (
    <div className="bg-white text-zinc-900 min-h-screen font-sans p-6 sm:p-10 max-w-4xl mx-auto shadow-lg print:shadow-none print:p-0">
      {/* Top Action Bar (hidden on print) */}
      <div className="no-print flex items-center justify-between pb-6 mb-6 border-b border-zinc-200">
        <a
          href={`/?lang=${lang}&mode=${mode}`}
          className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1"
        >
          ← {isRu ? "Вернуться на интерактивный сайт" : "Back to interactive portfolio"}
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-sm"
          >
            {isRu ? "Распечатать / Сохранить в PDF" : "Print / Save as PDF"}
          </button>
        </div>
      </div>

      {/* Resume Content (2-page printable layout) */}
      <div className="space-y-6 text-zinc-800 leading-snug">
        {/* Header */}
        <div className="border-b-2 border-zinc-900 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-950 uppercase">
                {data.personal.name}
              </h1>
              <p className="text-sm font-semibold text-zinc-700 mt-0.5">
                {isRu ? "Software Engineer · C/C++ · Linux · High-Load Web & AI" : "Software Engineer · C/C++ · Linux · High-Load Web & AI"}
              </p>
            </div>
            <div className="text-xs text-zinc-600 sm:text-right space-y-0.5">
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3 h-3 text-zinc-500" />
                <span>{data.personal.location}</span>
              </div>
              <div>
                <a href={`mailto:${data.personal.email}`} className="text-zinc-900 hover:underline">
                  {data.personal.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 pt-2 border-t border-zinc-200 text-xs font-medium text-zinc-800">
            <span className="flex items-center gap-1">
              <strong>Telegram:</strong>
              <a href={data.personal.telegramUrl} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                {data.personal.telegram}
              </a>
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1">
              <strong>WhatsApp:</strong>
              <a href={data.personal.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                {data.personal.whatsapp}
              </a>
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1">
              <strong>GitHub:</strong>
              <a href={data.personal.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-900 hover:underline">
                {data.personal.github}
              </a>
            </span>
          </div>
        </div>

        {/* Executive Summary & AI Stance */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
            {isRu ? "Профессиональный профиль" : "Professional Profile"}
          </h2>
          <p className="text-xs text-zinc-700 leading-relaxed text-justify">
            {data.aiPhilosophy.statement}
          </p>
        </div>

        {/* Skills Matrix */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
            {isRu ? "Ключевые навыки & Технологический стек" : "Core Competencies & Technical Stack"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div>
              <span className="font-bold text-zinc-950">Systems & Low-Level: </span>
              <span className="text-zinc-700">C, C++20, Linux Kernel, Device Drivers, MIPS, STM32, DPDK, VPP, DPI, conntrack, POSIX, CMake, Make</span>
            </div>
            <div>
              <span className="font-bold text-zinc-950">Backend & Databases: </span>
              <span className="text-zinc-700">Python (FastAPI, asyncpg, Pydantic), Node.js (Fastify, Express), PostgreSQL (18+ migrations), Redis, SQLite</span>
            </div>
            <div>
              <span className="font-bold text-zinc-950">Frontend & Mini Apps: </span>
              <span className="text-zinc-700">React 19, TypeScript, Telegram Mini Apps API, Tailwind CSS, Vite, Framer Motion, SEO, Core Web Vitals</span>
            </div>
            <div>
              <span className="font-bold text-zinc-950">Infrastructure & AI: </span>
              <span className="text-zinc-700">Bare-Metal Ubuntu, Docker, Docker Compose, Nginx, Caddy, Cloudflare Tunnels, systemd, Codex Desktop, AGY CLI</span>
            </div>
          </div>
        </div>

        {/* Selected Projects */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
            {isRu ? "Ключевые реализованные проекты" : "Selected Featured Projects"}
          </h2>
          <div className="space-y-2.5">
            {data.projects.slice(0, 5).map(p => (
              <div key={p.id} className="text-xs">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-bold text-zinc-950">
                    {p.title}
                    <span className="font-normal text-zinc-500"> — {p.subtitle}</span>
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">
                    {p.tags.slice(0, 4).join(', ')}
                  </span>
                </div>
                <p className="text-zinc-700 mt-0.5 text-justify">
                  {p.systemsDesc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience (Starts cleanly on Page 2) */}
        <div className="pt-2 [break-before:page]">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
            {isRu ? "Опыт работы" : "Professional Work Experience"}
          </h2>
          <div className="space-y-3">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="text-xs [break-inside:avoid]">
                <div className="flex items-baseline justify-between gap-1">
                  <span className="font-bold text-zinc-950">
                    {exp.role}{" "}
                    {exp.url ? (
                      <a href={exp.url} className="font-medium text-zinc-700 hover:text-emerald-700 underline decoration-zinc-400">
                        | {exp.company}
                      </a>
                    ) : (
                      <span className="font-medium text-zinc-700">| {exp.company}</span>
                    )}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 whitespace-nowrap">
                    {exp.period} · {exp.location}
                  </span>
                </div>
                <ul className="mt-1 space-y-0.5 list-disc list-inside text-zinc-700">
                  {exp.details.map((d, dIdx) => (
                    <li key={dIdx} className="leading-snug">{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="pt-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2">
            {isRu ? "Образование" : "Education"}
          </h2>
          <div className="text-xs">
            <div className="flex items-baseline justify-between">
              {data.personal.educationUrl ? (
                <a href={data.personal.educationUrl} className="font-bold text-zinc-950 hover:underline">
                  {data.personal.education}
                </a>
              ) : (
                <span className="font-bold text-zinc-950">{data.personal.education}</span>
              )}
              <span className="font-mono text-[10px] text-zinc-600">2018–2021 | Новосибирск</span>
            </div>
            <p className="text-zinc-700 mt-0.5">{data.personal.educationDetails}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
