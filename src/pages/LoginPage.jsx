import { useState } from 'react'
import { Camera, LockKeyhole } from 'lucide-react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function LoginPage() {
  useDocumentTitle('Acesso ao protótipo')
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  if (user) return <Navigate to="/prototipo" replace />

  function handleSubmit(event) {
    event.preventDefault()
    const result = login(credentials.email.trim(), credentials.password)
    if (!result.success) return setError(result.message)
    navigate(location.state?.from?.pathname || '/prototipo', { replace: true })
  }

  return (
    <main className="grid-bg grid min-h-screen place-items-center px-5 py-16">
      <div className="w-full max-w-md border border-blue-300/10 bg-ink/85 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
        <Link to="/" className="inline-flex min-h-11 items-center gap-2 font-mono text-xs text-paper/55 transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Camera size={17} /> Voltar à página inicial</Link>
        <div className="mt-9 grid size-12 place-items-center rounded-full bg-blue-500/10 text-accent"><LockKeyhole aria-hidden="true" /></div>
        <h1 className="mt-6 font-display text-4xl font-normal">Acesse o protótipo</h1>
        <p className="mt-3 text-sm leading-6 text-paper/50">Esta é uma rota privada criada para demonstrar autenticação e proteção de conteúdo no React.</p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-paper/55" htmlFor="email">E-mail</label>
            <input className="form-control" id="email" type="email" autoComplete="email" required value={credentials.email} onChange={(event) => setCredentials((current) => ({ ...current, email: event.target.value }))} />
          </div>
          <div>
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-paper/55" htmlFor="password">Senha</label>
            <input className="form-control" id="password" type="password" autoComplete="current-password" required value={credentials.password} onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))} />
          </div>
          {error && <p className="rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200" role="alert">{error}</p>}
          <button className="min-h-12 w-full rounded-full bg-accent px-6 font-mono text-[11px] uppercase tracking-widest text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink" type="submit">Entrar</button>
        </form>
        <div className="mt-7 rounded-lg border border-blue-300/10 bg-white/[.025] p-4 text-sm leading-6 text-paper/50">
          <p><strong className="font-medium text-paper/80">Usuário:</strong> aluno@camerajovi.com</p>
          <p><strong className="font-medium text-paper/80">Senha:</strong> sprint4</p>
        </div>
      </div>
    </main>
  )
}
