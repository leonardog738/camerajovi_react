export function SectionHeader({ eyebrow, title, emphasis, description, id }) {
  return (
    <div className="mb-12 grid gap-8 lg:mb-20 lg:grid-cols-2 lg:items-end">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="max-w-2xl font-display text-4xl font-normal leading-[1.04] sm:text-5xl lg:text-6xl">
          {title} <em className="text-paper/35">{emphasis}</em>
        </h2>
      </div>
      <p className="max-w-2xl text-base leading-8 text-paper/55 lg:justify-self-end">{description}</p>
    </div>
  )
}
