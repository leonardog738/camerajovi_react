import { Camera } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-blue-300/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <span className="flex items-center gap-2 font-mono text-xs text-paper/55"><Camera size={16} aria-hidden="true" /> Grupo: Da Facul<span className="text-accent">.</span></span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-paper/30">© 2026 — Camera Jovi</span>
      </div>
    </footer>
  )
}
