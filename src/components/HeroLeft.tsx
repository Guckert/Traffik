import Image from 'next/image';

type CTA = { label: string; href: string };

export default function HeroLeft({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctas = []
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctas?: CTA[];
}) {
  return (
    <section className="relative isolate h-[62vh] min-h-[520px] overflow-hidden">
      {/* Optimized background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={85}
        className="object-cover object-center md:object-[right_center]"
        sizes="100vw"
      />
      
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/55 via-black/35 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20">
        <div className="container h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-white/90 text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                {subtitle}
              </p>
            )}
            {ctas.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {ctas.map((c) => (
                  
                    key={c.label}
                    href={c.href}
                    className="rounded-2xl border border-white/70 text-white/95 px-6 py-3 font-semibold backdrop-blur-[1px] hover:border-brand-accent hover:text-white transition"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
