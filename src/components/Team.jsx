import { Code2, Users } from 'lucide-react'
import { team } from '../data/content'
import { useGitHubProfiles } from '../hooks/useGitHubProfiles'
import { SectionHeader } from './SectionHeader'

export function Team() {
  const { profiles, loading, error } = useGitHubProfiles(team.map((member) => member.github))

  return (
    <section id="equipe" aria-labelledby="equipe-titulo" className="section-shell border-t border-blue-300/10">
      <SectionHeader eyebrow="Nossa equipe" title="Quem fez o" emphasis="Camera Jovi" id="equipe-titulo" description="O grupo Da Facul reuniu pesquisa, experiência do usuário, design e desenvolvimento para construir a solução." />
      {error && <p className="mb-4 border border-amber-300/20 bg-amber-300/5 p-3 text-sm text-amber-100" role="status">{error} Os nomes da equipe continuam disponíveis abaixo.</p>}
      <div className="grid overflow-hidden border border-blue-300/10 sm:grid-cols-2 lg:grid-cols-5">
        {team.map((member) => {
          const profile = member.github ? profiles[member.github.toLowerCase()] : null
          const isLoadingProfile = loading && member.github

          return (
            <article className="flex min-h-64 flex-col border-b border-blue-300/10 p-6 text-center last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0" key={member.rm}>
              {profile ? (
                <img className="mx-auto size-16 rounded-full border border-blue-300/20 object-cover" src={profile.avatarUrl} alt={`Avatar de ${member.name} no GitHub`} width="64" height="64" loading="lazy" />
              ) : (
                <div className={`mx-auto grid size-16 place-items-center rounded-full border border-blue-300/15 bg-blue-500/[.06] font-display text-2xl text-accent ${isLoadingProfile ? 'animate-pulse' : ''}`} aria-hidden="true">{member.name.charAt(0)}</div>
              )}
              <h3 className="mt-5 text-sm font-medium leading-6 text-paper">{member.name}</h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-accent">RM {member.rm}</p>

              <div className="mt-auto pt-5">
                {profile ? (
                  <>
                    <div className="mb-3 flex justify-center gap-4 font-mono text-[9px] uppercase tracking-wider text-paper/40">
                      <span>{profile.publicRepos} repositórios</span>
                      <span className="inline-flex items-center gap-1"><Users size={12} aria-hidden="true" /> {profile.followers}</span>
                    </div>
                    <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-300/15 px-4 font-mono text-[10px] tracking-wider text-paper/65 transition hover:border-accent hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={profile.profileUrl} target="_blank" rel="noreferrer">
                      <Code2 size={15} aria-hidden="true" /> @{profile.username}
                    </a>
                  </>
                ) : member.github ? (
                  <p className="font-mono text-[9px] uppercase tracking-wider text-paper/35" role="status">{isLoadingProfile ? 'Carregando GitHub…' : 'Perfil indisponível'}</p>
                ) : (
                  <p className="font-mono text-[9px] uppercase tracking-wider text-paper/25">GitHub a adicionar</p>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
