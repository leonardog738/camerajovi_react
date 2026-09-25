export function Marquee({ items }) {
  const repeatedItems = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-blue-300/10 bg-blue-500 py-4 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {repeatedItems.map((item, index) => (
          <span className="flex items-center gap-10 whitespace-nowrap font-mono text-[10px] uppercase tracking-[.16em] after:text-white/60 after:content-['✦']" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
