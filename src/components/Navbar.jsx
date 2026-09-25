import { Camera, LogOut, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { navItems } from '../data/content'
import { useMenu } from '../hooks/useMenu'

export function Navbar({ compact = false }) {
  const { isOpen, toggle, close } = useMenu()
  const { user, logout } = useAuth()
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-blue-300/10 bg-ink/80 backdrop-blur-xl" aria-label="Navegação principal">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link className="flex min-h-11 items-center gap-3 font-mono text-xs tracking-wider text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" to="/" onClick={close}>
          <span className="grid size-9 place-items-center rounded-full border border-blue-300/15 bg-white/[.03]">
            <Camera size={17} aria-hidden="true" />
          </span>
          Grupo: Da Facul<span className="text-accent">.</span>
        </Link>

        {!compact && onHome && (
          <ul className={`absolute right-0 top-[76px] z-50 flex h-[calc(100dvh-76px)] w-[min(82vw,340px)] flex-col justify-center gap-3 border-l border-blue-300/10 bg-ink/95 px-9 shadow-2xl transition-transform duration-300 lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="block min-h-11 px-2 py-3 font-mono text-xs uppercase tracking-[.1em] text-paper/55 transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2">
          {user && (
            <button onClick={logout} className={`${compact ? 'flex' : 'hidden sm:flex'} min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 font-mono text-[10px] uppercase tracking-wider text-paper/60 transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`} type="button">
              <LogOut size={14} aria-hidden="true" /> Sair
            </button>
          )}
          {!compact && <Link to="/prototipo" className="hidden min-h-11 items-center rounded-full bg-accent px-5 font-mono text-[10px] uppercase tracking-wider text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink lg:flex">Ver protótipo</Link>}
          {!compact && onHome && (
            <button className="relative z-10 grid size-11 place-items-center rounded-xl border border-blue-300/15 text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden" onClick={toggle} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} type="button">
              {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
