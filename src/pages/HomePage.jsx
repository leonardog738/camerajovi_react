import { Audience } from '../components/Audience'
import { Contact } from '../components/Contact'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Navbar } from '../components/Navbar'
import { Team } from '../components/Team'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const marqueeItems = ['Interface minimalista', 'Controles inteligentes', 'UX otimizada', 'Personalização inteligente', 'Experiência fluida']

export function HomePage() {
  useDocumentTitle('Início')
  return (
    <>
      <a href="#conteudo-principal" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-paper px-4 py-3 text-sm font-medium text-ink transition focus:translate-y-0">Pular para o conteúdo</a>
      <Navbar />
      <Hero />
      <Marquee items={marqueeItems} />
      <main id="conteudo-principal">
        <Features />
        <Audience />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
