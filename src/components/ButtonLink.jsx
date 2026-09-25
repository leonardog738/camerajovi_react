import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-accent text-white hover:bg-blue-500 shadow-glow',
  secondary: 'border border-white/15 bg-white/[.03] text-paper hover:bg-white/[.08]',
}

export function ButtonLink({ children, to, variant = 'primary', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[.14em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={15} />
    </Link>
  )
}
