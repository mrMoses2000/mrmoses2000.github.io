import React from 'react'
import { Send, MessageSquare, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './Icons'

export function Hero({ data, mode, lang }) {
  const isRu = lang === 'ru'
  const isBusiness = mode === 'business'

  return (
    <section className="relative pt-8 pb-12 border-b border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{data.personal.status}</span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1 text-zinc-400">
                <MapPin className="w-3 h-3" />
                {data.personal.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {data.personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                {isBusiness ? data.personal.taglineBusiness : data.personal.taglineSystems}
              </p>
            </div>

            {/* Value Proposition based on perspective */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 text-sm sm:text-base text-zinc-300 leading-relaxed">
              {isBusiness ? (
                <div>
                  <p className="font-normal">
                    {isRu 
                      ? "Помогаю компаниям оцифровывать и ускорять процессы: разрабатываю сложные Telegram-боты с Mini Apps, высокопроизводительные веб-платформы и системы автоматизации. Заказчики получают готовый продукт под ключ — от архитектуры и баз данных до развертывания на защищенных серверах."
                      : "I build end-to-end digital solutions for businesses: Telegram bots with integrated Mini Apps, high-converting web platforms, and workflow automation. You get a reliable turnkey product, from initial database architecture to production deployment on secure servers."}
                  </p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isRu ? "Сокращение рутины и ошибок менеджеров" : "Drastic reduction in manual overhead"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isRu ? "Прямой контакт с основателем без испорченного телефона" : "Direct engineer contact without agency layers"}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="font-normal font-mono text-xs sm:text-sm text-zinc-200">
                    {isRu
                      ? "Инженер с бэкграундом в системном C/C++, ядре Linux, DPDK/VPP и сетевых протоколах. Разворачиваю надежные отказоустойчивые сервисы на голом железе, проектирую очереди задач (Redis, FastAPI, PostgreSQL) и управляю инфраструктурой через systemd, Caddy/Nginx и Cloudflare."
                      : "Systems engineer with deep background in C/C++, Linux kernel internals, DPDK/VPP high-throughput networking, and bare-metal server infrastructure. Building resilient distributed queues (FastAPI, Redis, PostgreSQL) and automated systemd/Caddy services."}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60">C/C++20</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60">Linux Kernel & MIPS</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60">DPDK / VPP / DPI</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60">FastAPI & asyncpg</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60">Docker & systemd</span>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Contact CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={data.personal.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-all shadow-md"
              >
                <Send className="w-4 h-4 text-blue-600" />
                <span>{isRu ? "Написать в Telegram" : "Chat on Telegram"}</span>
              </a>

              <a
                href={data.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-emerald-800/60 text-emerald-400 hover:bg-zinc-800/80 text-sm font-medium transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {data.personal.whatsapp}</span>
              </a>

              <a
                href={`mailto:${data.personal.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Email</span>
              </a>

              <a
                href={data.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Avatar Photo & Fast Details */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center space-y-4">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-900">
                <img
                  src="/avatar.jpg"
                  alt={data.personal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 text-center">
                <p className="text-xs font-medium text-zinc-200">{data.personal.name}</p>
                <p className="text-[10px] text-zinc-400 font-mono">Software & Systems Engineer</p>
              </div>
            </div>

            <div className="w-full max-w-xs p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-xs text-zinc-400 space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">{isRu ? "Базовое образование:" : "Education:"}</span>
                <span className="inline-flex items-center gap-1.5 text-zinc-300 font-medium">
                  {data.personal.educationLogo && (
                    <span className="inline-flex items-center h-4 px-1 py-0.5 rounded bg-white border border-zinc-200/90 shadow-xs shrink-0">
                      <img
                        src={data.personal.educationLogo}
                        alt="НГУ"
                        className="h-2.5 w-auto object-contain max-w-[45px]"
                        loading="lazy"
                      />
                    </span>
                  )}
                  {isRu ? "НГУ (Новосибирск)" : "NSU (Novosibirsk)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">{isRu ? "Опыт в индустрии:" : "Industry Exp:"}</span>
                <span className="text-zinc-300 font-medium">5+ {isRu ? "лет" : "years"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">{isRu ? "Формат работы:" : "Work Format:"}</span>
                <span className="text-emerald-400 font-medium">{isRu ? "Контракт / Full-Time" : "Contract / Full-time"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-8 pt-6 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-4">
          {(isBusiness ? data.stats.business : data.stats.systems).map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/30 border border-zinc-800/60">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">{item.value}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Honest Statement on AI & Pre-AI Engineering */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>{data.aiPhilosophy.badge}</span>
          </div>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
            {data.aiPhilosophy.statement}
          </p>
          <div className="mt-3 pt-3 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-400 font-medium">
            <span className="text-zinc-200 font-semibold">{isRu ? "Практическая ценность: " : "Core Advantage: "}</span>
            {isBusiness ? data.aiPhilosophy.businessBenefit : data.aiPhilosophy.systemsBenefit}
          </div>
        </div>
      </div>
    </section>
  )
}
