export function PhoneMockup({ src, alt, className = '' }) {
  return (
    <div className={`relative aspect-[.485] w-44 overflow-hidden rounded-[2rem] border-[7px] border-slate-800 bg-slate-950 shadow-2xl ring-1 ring-white/20 sm:w-52 ${className}`}>
      <span className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-950" aria-hidden="true" />
      <img className="h-full w-full object-cover" src={src} alt={alt} />
    </div>
  )
}
