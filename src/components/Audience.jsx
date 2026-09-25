import { audiences } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Audience() {
  return (
    <section id="publico-alvo" aria-labelledby="publico-titulo" className="section-shell border-t border-blue-300/10">
      <SectionHeader eyebrow="Público-alvo" title="Para quem é o" emphasis="Camera Jovi" id="publico-titulo" description="Para pessoas que usam a câmera do celular todos os dias e querem uma interface que se adapte a elas — e não o contrário." />
      <div className="grid overflow-hidden border border-blue-300/10 md:grid-cols-3">
        {audiences.map((audience, index) => (
          <article className="border-b border-blue-300/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10" key={audience.title}>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Perfil {String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-8 font-display text-2xl font-normal">{audience.title}</h3>
            <p className="mt-4 text-sm leading-7 text-paper/50">{audience.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
