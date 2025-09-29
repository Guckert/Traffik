export default function Page() {
  return (
    <main>
      <section className="hero-fw" role="banner" aria-label="AI SEO & Website Optimisation">
        <img src="/images/home-hero.jpg" alt="AI SEO & Website Optimisation banner" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div>
            <h1 className="hero-title">AI SEO & Website Optimisation</h1>
            <p className="hero-lead">We optimise websites and Google Business Profiles for rankings, speed, and conversions across New Zealand.</p>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card"><div className="font-semibold">AI SEO</div><p className="text-white/70 mt-2">Rank in AI Overviews, ChatGPT search, and voice assistants with structured, high‑intent content.</p></div>
          <div className="card"><div className="font-semibold">Core Web Vitals</div><p className="text-white/70 mt-2">Lightning‑fast load times and seamless UX with code cleanup and asset optimisation.</p></div>
          <div className="card"><div className="font-semibold">GEO / AEO</div><p className="text-white/70 mt-2">Generative & Answer Engine Optimisation for the AI‑powered future of search.</p></div>
        </div>
      </section>
    </main>
  );
}