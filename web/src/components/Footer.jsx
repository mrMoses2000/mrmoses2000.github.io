import React from 'react'

export function Footer({ data, lang }) {
  const isRu = lang === 'ru'

  return (
    <footer className="py-8 text-center text-xs text-zinc-500 border-t border-zinc-900 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-2">
        <p>
          © {new Date().getFullYear()} {data.personal.name} · {data.personal.location}
        </p>
        <p className="font-mono text-[11px] text-zinc-600">
          {isRu
            ? "Развернуто на персональном Linux-сервере (Ubuntu bare-metal) с туннелем Cloudflare"
            : "Deployed on bare-metal Ubuntu Linux server via Cloudflare Edge Tunnel"}
        </p>
      </div>
    </footer>
  )
}
