import { ExternalLink } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const figmaUrl = 'https://embed.figma.com/proto/TMHrrBERjgXywLHWE4onB9/Sem-t%C3%ADtulo?node-id=1-709&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A709&embed-host=share'

export function PrototypePage() {
  useDocumentTitle('Protótipo')
  return (
    <>
      <Navbar compact />
      <main className="grid-bg min-h-screen px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow">Página interativa</p>
              <h1 className="font-display text-5xl font-normal leading-[.95] sm:text-7xl">Navegue pela <em className="text-paper/35">experiência</em> Camera Jovi</h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-paper/50 lg:justify-self-end">Explore o protótipo diretamente no navegador e veja como cada detalhe foi pensado para uma experiência fluida, clara e intuitiva.</p>
          </div>

          <section className="mt-14 overflow-hidden border border-blue-300/10 bg-white/[.02] shadow-2xl" aria-label="Protótipo incorporado do Figma">
            <div className="flex min-h-16 items-center justify-between border-b border-blue-300/10 px-4 sm:px-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-2" aria-hidden="true"><span className="size-2.5 rounded-full bg-accent" /><span className="size-2.5 rounded-full bg-white/20" /><span className="size-2.5 rounded-full bg-white/20" /></div>
                <span className="hidden font-mono text-[10px] uppercase tracking-widest text-paper/35 sm:block">Camera Jovi — Protótipo Figma</span>
              </div>
              <a href={figmaUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/55 transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Abrir no Figma <ExternalLink size={14} aria-hidden="true" /></a>
            </div>
            <div className="h-[760px] bg-slate-950 sm:h-[900px]">
              <iframe title="Protótipo interativo Camera Jovi no Figma" className="h-full w-full border-0" src={figmaUrl} allowFullScreen loading="lazy" />
            </div>
            <div className="grid border-t border-blue-300/10 sm:grid-cols-3">
              {[['Experiência', 'Premium', 'Interface refinada com foco em fluidez e usabilidade.'], ['Design system', 'Modular', 'Componentes consistentes para uma navegação intuitiva.'], ['Performance', 'Fluida', 'Interações suaves e experiência otimizada para mobile.']].map(([label, value, text]) => (
                <article className="border-b border-blue-300/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" key={label}>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-paper/30">{label}</p>
                  <h2 className="mt-3 font-display text-2xl font-normal">{value}</h2>
                  <p className="mt-3 text-sm leading-6 text-paper/45">{text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
