import Image from 'next/image'

type CTA = { label: string; href: string }

interface HeroLeftProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle?: string
  subpoints?: string[]      // NEW
  ctas?: CTA[]
  avatarVideoSrc?: string   // NEW
}

export default function HeroLeft({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  subpoints = [],
  ctas = [],
  avatarVideoSrc
}: HeroLeftProps) {
  return (
    <section className="relative isolate h-[62vh] min-h-[520px] overflow-hidden">
      {/* HERO IMAGE */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={85}
        className="object-cover object-center md:object-[right_center]"
        sizes="100vw"
      />

      {/* TOP GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/55 via-black/35 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-20">
        <div className="container h-full flex items-center relative">

          <div className="max-w-3xl relative">

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {title}
            </h1>

            {/* SUBTITLE */}
            {subtitle && (
              <p className="mt-3 text-white/90 text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                {subtitle}
              </p>
            )}

            {/* SUBPOINTS */}
            {subpoints.length > 0 && (
              <ul className="mt-4 space-y-1 text-white/85 text-base md:text-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                {subpoints.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            )}

            {/* CTAS */}
            {ctas.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {ctas.map(c => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="rounded-2xl border border-white/70 text-white/95 px-6 py-3 font-semibold backdrop-blur-[1px] hover:border-brand-accent hover:text-white transition"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}

            {/* STEVE AVATAR BUBBLE */}
            {avatarVideoSrc && (
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full overflow-hidden border border-white/20 shadow-xl backdrop-blur bg-black/30 z-30">
                <video
                  src={avatarVideoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
