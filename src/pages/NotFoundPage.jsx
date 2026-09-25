import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Página não encontrada')
  return (
    <main className="grid-bg grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm tracking-[.2em] text-accent">ERRO 404</p>
        <h1 className="mt-4 font-display text-5xl sm:text-7xl">Página não encontrada</h1>
        <p className="mx-auto mt-5 max-w-md text-paper/50">O endereço acessado não existe ou foi alterado.</p>
        <Link to="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-7 font-mono text-[11px] uppercase tracking-widest text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Voltar ao início</Link>
      </div>
    </main>
  )
}
