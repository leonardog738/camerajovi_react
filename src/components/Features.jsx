import { features } from '../data/content'
import { PhoneMockup } from './PhoneMockup'
import { SectionHeader } from './SectionHeader'

export function Features() {
  return (
    <section id="solucao" aria-labelledby="solucao-titulo" className="section-shell">
      <SectionHeader
        eyebrow="A solução"
        title="O problema que resolvemos e"
        emphasis="como funciona"
        id="solucao-titulo"
        description="Aplicativos de câmera costumam entregar a mesma interface para todos. O Camera Jovi coloca os recursos importantes ao alcance de cada pessoa, reduzindo menus e tornando a captura mais direta."
      />
      <ol className="grid overflow-hidden border border-blue-300/10 lg:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature.title} className={`group relative flex flex-col gap-9 border-blue-300/10 bg-white/[.015] p-6 transition hover:bg-blue-500/[.04] sm:p-10 xl:flex-row xl:items-center ${index < 4 ? 'border-b' : ''} ${index % 2 === 0 ? 'lg:border-r' : ''} ${index === features.length - 1 ? 'lg:col-span-2 lg:border-r-0' : ''}`}>
            <span className="absolute right-5 top-4 font-mono text-xs tracking-widest text-accent">{String(index + 1).padStart(2, '0')}</span>
            <PhoneMockup src={feature.image} alt={feature.alt} className="mx-auto shrink-0 group-hover:shadow-glow" />
            <div className="max-w-xl text-center xl:text-left">
              <h3 className="font-display text-2xl font-normal sm:text-3xl">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-paper/50 sm:text-base">{feature.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
