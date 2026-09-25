import { ButtonLink } from './ButtonLink'
import { PhoneMockup } from './PhoneMockup'
import { images } from '../data/content'

export function Hero() {
  return (
    <header id="inicio" className="grid-bg relative overflow-hidden border-b border-blue-300/10 pt-[76px]">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-5 py-14 sm:px-8 lg:order-1 lg:px-12 lg:py-24">
          <p className="eyebrow">UX/UI premium para câmera</p>
          <h1 className="max-w-3xl font-display text-[clamp(3rem,7vw,6.7rem)] font-normal leading-[.9] tracking-[-.03em]">
            O futuro da <em className="text-paper/35">experiência</em> de câmera
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-paper/55 sm:text-lg">
            Uma interface moderna, fluida e intuitiva que transforma a captura em algo pessoal — feita para se adaptar a você.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/prototipo">Explorar protótipo</ButtonLink>
          </div>
        </div>
        <div className="relative order-1 grid min-h-[430px] place-items-center overflow-hidden border-b border-blue-300/10 bg-blue-500/[.035] lg:order-2 lg:min-h-0 lg:border-b-0 lg:border-l">
          <div className="absolute size-[min(80vw,600px)] rounded-full border border-blue-400/20 bg-blue-500/10 blur-[1px]" aria-hidden="true" />
          <div className="absolute size-[min(58vw,430px)] rounded-full border border-blue-300/15" aria-hidden="true" />
          <PhoneMockup src={images.cameraImage} alt="Tela personalizada do aplicativo Camera Jovi" className="animate-float sm:w-56 lg:w-64" />
        </div>
      </div>
    </header>
  )
}
