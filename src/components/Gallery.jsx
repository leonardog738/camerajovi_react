import { gallery } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Gallery() {
  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="section-shell border-t border-blue-300/10">
      <SectionHeader eyebrow="Galeria" title="Veja a solução" emphasis="em ação" id="galeria-titulo" description="O passo a passo da experiência personalizada, do primeiro acesso à interface final adaptada às preferências do usuário." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {gallery.map((item) => (
          <figure className="group overflow-hidden border border-blue-300/10 bg-slate-900" key={item.caption}>
            <div className="aspect-[4/5] overflow-hidden">
              <img className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transition-none" src={item.src} alt={item.alt} loading="lazy" />
            </div>
            <figcaption className="border-t border-blue-300/10 px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-paper/50">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
