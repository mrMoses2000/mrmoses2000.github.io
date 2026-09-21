import React from 'react'
import { Send, MessageSquare, Mail, Download, FileText, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'

export function ContactSection({ data, lang }) {
  const isRu = lang === 'ru'

  return (
    <section id="contact" className="py-16 border-b border-zinc-900 section-break">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isRu ? "Открыт к предложениям" : "Open for projects & opportunities"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isRu ? "Давайте обсудим вашу задачу" : "Let's discuss your project"}
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              {isRu
                ? "Нужен надежный Telegram-бот, веб-платформа под ключ, интеграция ИИ-модулей в бизнес или системная разработка для серверов? Напишите напрямую в Telegram или WhatsApp — я отвечу оперативно."
                : "Looking for a reliable Telegram bot, turnkey web platform, AI agent integration, or low-level systems engineering? Reach out directly via Telegram or WhatsApp — I respond promptly."}
            </p>

            {/* Direct Connect Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <a
                href={data.personal.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-semibold transition-all shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Send className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-normal">Telegram</div>
                    <div className="text-sm font-bold text-zinc-950">{data.personal.telegram}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </a>

              <a
                href={data.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-emerald-800/60 hover:border-emerald-700 text-white font-medium transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-normal">WhatsApp</div>
                    <div className="text-sm font-bold text-emerald-400">{data.personal.whatsapp}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>

            {/* Secondary links */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-zinc-400">
              <a
                href={`mailto:${data.personal.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{data.personal.email}</span>
              </a>

              <a
                href={data.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>{data.personal.github}</span>
              </a>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all no-print"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>{isRu ? "Распечатать / PDF" : "Print / PDF"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
