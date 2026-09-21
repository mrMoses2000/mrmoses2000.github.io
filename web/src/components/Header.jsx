import React from 'react'
import { Send, MessageSquare, Download, Globe } from 'lucide-react'
import { AudienceToggle } from './AudienceToggle'

export function Header({ lang, setLang, mode, setMode, data }) {
  const isRu = lang === 'ru'

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 transition-all no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Avatar & Identity */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/avatar.jpg"
              alt={data.personal.name}
              className="w-10 h-10 rounded-full object-cover border border-zinc-700 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950 animate-pulse" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
              <span>{data.personal.name}</span>
              <span className="hidden sm:inline-block text-[11px] font-mono font-normal px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                {mode === 'business' ? (isRu ? 'Бизнес-решения' : 'Business ROI') : 'C / C++ · Linux'}
              </span>
            </div>
            <div className="text-xs text-zinc-400 hidden md:block">
              {data.personal.status}
            </div>
          </div>
        </div>

        {/* Center: Perspective Switcher */}
        <div className="order-3 sm:order-2 w-full sm:w-auto flex justify-center">
          <AudienceToggle mode={mode} setMode={setMode} labels={data.modes} />
        </div>

        {/* Right: Actions (Language, PDF, Telegram, WhatsApp) */}
        <div className="order-2 sm:order-3 flex items-center gap-2 ml-auto sm:ml-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(isRu ? 'en' : 'ru')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            title={isRu ? "Switch to English" : "Переключить на русский"}
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase font-semibold">{isRu ? 'EN' : 'RU'}</span>
          </button>

          {/* PDF Resume Trigger */}
          <a
            href={isRu ? "/Moisey_Vasilenko_CV_RU.pdf" : "/Moisey_Vasilenko_CV_EN.pdf"}
            download
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            <span>PDF</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={data.personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-emerald-900/60 hover:border-emerald-700/80 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Telegram Direct */}
          <a
            href={data.personal.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold shadow-sm transition-all"
          >
            <Send className="w-3.5 h-3.5 text-blue-600" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </header>
  )
}
