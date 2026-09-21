import React from 'react'
import { Briefcase, Cpu } from 'lucide-react'

export function AudienceToggle({ mode, setMode, labels }) {
  return (
    <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
      <button
        onClick={() => setMode('business')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
          mode === 'business'
            ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
            : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span>{labels.business.label}</span>
      </button>

      <button
        onClick={() => setMode('systems')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
          mode === 'systems'
            ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
            : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        <Cpu className="w-3.5 h-3.5" />
        <span>{labels.systems.label}</span>
      </button>
    </div>
  )
}
