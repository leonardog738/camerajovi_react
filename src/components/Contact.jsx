import { useState } from 'react'
import { Send } from 'lucide-react'

export function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  function handleSubmit(event) {
    event.preventDefault()
    const text = `Olá, meu nome é ${form.name.trim()}. Minha dúvida é: ${form.message.trim()}`
    window.open(`https://wa.me/5511969315562?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid-bg mx-auto max-w-[1320px] overflow-hidden border border-blue-300/10 bg-blue-500/[.025] p-6 sm:p-10 lg:grid lg:grid-cols-2 lg:p-14">
        <div className="max-w-xl">
          <p className="eyebrow">Contato</p>
          <h2 id="contato-titulo" className="font-display text-4xl font-normal leading-tight sm:text-6xl">Vamos conversar sobre a <em className="text-paper/35">experiência?</em></h2>
          <p className="mt-6 text-base leading-8 text-paper/50">Envie uma dúvida para a equipe. Ao continuar, o WhatsApp será aberto com a mensagem pronta para revisão.</p>
        </div>
        <form className="mt-10 flex flex-col gap-5 lg:mt-0" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-name" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-paper/55">Nome</label>
            <input id="contact-name" name="name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required autoComplete="name" placeholder="Seu nome" className="form-control" />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-paper/55">Dúvida</label>
            <textarea id="contact-message" name="message" value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} required placeholder="Escreva sua dúvida" rows="5" className="form-control resize-y" />
          </div>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 font-mono text-[11px] uppercase tracking-widest text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink sm:self-start" type="submit">
            Enviar mensagem <Send size={15} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
