import React, { useState, useEffect } from 'react'
import { content } from './data/content'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ResumeDocument } from './components/ResumeDocument'
import { Send, MessageSquare, Download } from 'lucide-react'

export function App() {
  // Read initial params from URL or path if present
  const getInitialState = () => {
    const params = new URLSearchParams(window.location.search)
    const path = window.location.pathname.toLowerCase()

    let initialLang = 'ru'
    if (params.get('lang') === 'en' || path.startsWith('/en')) {
      initialLang = 'en'
    }

    let initialMode = 'business'
    if (path.includes('/tech') || path.includes('/systems') || params.get('mode') === 'systems') {
      initialMode = 'systems'
    } else if (path.includes('/business') || params.get('mode') === 'business') {
      initialMode = 'business'
    }

    let initialView = 'portfolio'
    if (path.includes('/resume') || path.includes('/cv') || params.get('view') === 'resume') {
      initialView = 'resume'
    }

    return { lang: initialLang, mode: initialMode, view: initialView }
  }

  const [lang, setLang] = useState(() => getInitialState().lang)
  const [mode, setMode] = useState(() => getInitialState().mode)
  const [view, setView] = useState(() => getInitialState().view)

  // Sync state to URL without reloading
  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    url.searchParams.set('mode', mode)
    if (view === 'resume') {
      url.searchParams.set('view', 'resume')
    } else {
      url.searchParams.delete('view')
    }
    window.history.replaceState({}, '', url.toString())
  }, [lang, mode, view])

  const t = content[lang]

  if (view === 'resume') {
    return <ResumeDocument data={t} lang={lang} mode={mode} />
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-zinc-800 selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        mode={mode}
        setMode={setMode}
        data={t}
      />

      <main>
        {/* Hero Section with Persona Shift and Honesty Statement */}
        <Hero data={t} mode={mode} lang={lang} />

        {/* Selected Projects */}
        <Projects data={t} mode={mode} lang={lang} />

        {/* Real Engineering Experience */}
        <Experience data={t} lang={lang} />

        {/* Core Stack & Deep Skills Breakdown */}
        <Skills data={t} lang={lang} />

        {/* Direct Contact */}
        <ContactSection data={t} lang={lang} />
      </main>

      {/* Footer */}
      <Footer data={t} lang={lang} />

      {/* Mobile Floating Action Bar */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-40 no-print">
        <div className="p-2 rounded-2xl bg-zinc-950/90 backdrop-blur-lg border border-zinc-800 shadow-2xl flex items-center justify-between gap-2">
          <a
            href={t.personal.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs shadow"
          >
            <Send className="w-3.5 h-3.5 text-blue-600" />
            <span>Telegram</span>
          </a>

          <a
            href={t.personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-zinc-900 border border-emerald-800/80 text-emerald-400 font-bold text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={lang === 'ru' ? '/Moisey_Vasilenko_CV_RU.pdf' : '/Moisey_Vasilenko_CV_EN.pdf'}
            download
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            title="Download PDF"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
