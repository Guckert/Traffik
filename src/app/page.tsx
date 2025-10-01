export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full px-[5%] py-5 bg-[rgba(10,15,26,0.95)] backdrop-blur-[20px] z-[1000] flex justify-between items-center border-b border-[rgba(0,220,192,0.1)] transition-all duration-300">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-bold text-white tracking-[2px]">TRAFFIK</div>
          <div className="text-xs text-[#00dcc0] tracking-[1px] uppercase">AI Web Optimisation Limited</div>
        </div>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="#home" className="text-white no-underline transition-colors duration-300 font-medium text-sm uppercase tracking-[0.5px] hover:text-[#00dcc0]">Home</a></li>
          <li><a href="#services" className="text-white no-underline transition-colors duration-300 font-medium text-sm uppercase tracking-[0.5px] hover:text-[#00dcc0]">Services</a></li>
          <li><a href="#contact" className="text-white no-underline transition-colors duration-300 font-medium text-sm uppercase tracking-[0.5px] hover:text-[#00dcc0]">Contact</a></li>
        </ul>
        <div className="flex items-center gap-6">
          <a href="tel:0212658586" className="text-[#00dcc0] no-underline flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5">021 265 8586</a>
          <a href="mailto:steve@traffik.nz" className="text-[#00dcc0] no-underline flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5">Email</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center px-[5%] pt-32 pb-16 relative overflow-hidden bg-cover bg-center" style={{background: 'linear-gradient(135deg, rgba(10, 15, 26, 0.85) 0%, rgba(13, 21, 32, 0.75) 100%), url("/images/hero.jpg")'}}>
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-r from-[rgba(10,15,26,0.95)] via-[rgba(10,15,26,0.5)] to-transparent pointer-events-none"></div>
        <div className="relative z-[2] max-w-[1400px] mx-auto w-full">
          <div className="max-w-[700px]">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-white" style={{textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'}}>
              <span className="bg-gradient-to-r from-[#00dcc0] to-[#00b4d8] bg-clip-text text-transparent">Outperform</span> Your Competition
            </h1>
            <p className="text-xl text-[#e0e7ff] mb-10 leading-relaxed" style={{textShadow: '0 1px 10px rgba(0, 0, 0, 0.3)'}}>In today&apos;s search landscape, speed and intelligence win. Pair our $159 AI Website Audit with high-impact Google Business Profile optimisation to rank higher in Google and AI platforms, load faster across every device, and convert more visitors into customers.</p>
            <div className="inline-flex items-center bg-[rgba(0,220,192,0.15)] px-6 py-3 rounded-full border border-[rgba(0,220,192,0.4)] mb-8 backdrop-blur-[10px]">Start with our <span className="text-[#00dcc0] font-bold text-lg ml-2">$159 AI Audit</span></div>
            <div className="flex gap-6 flex-wrap">
              <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Get Audit — $159</a>
              <a href="#services" className="px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-transparent text-[#00dcc0] border-2 border-[#00dcc0] hover:bg-[rgba(0,220,192,0.1)] hover:-translate-y-1">View All Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* GBP Banner */}
      <section id="gbp-banner" className="min-h-[70vh] flex items-center px-[5%] py-24 relative overflow-hidden bg-cover bg-center" style={{background: 'linear-gradient(135deg, rgba(10, 15, 26, 0.85) 0%, rgba(13, 21, 32, 0.75) 100%), url("/images/gbp.jpg")'}}>
        <div className="relative z-[2] max-w-[1400px] mx-auto w-full text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight" style={{textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'}}>
            <span className="bg-gradient-to-r from-[#00dcc0] to-[#00b4d8] bg-clip-text text-transparent">Google Business Profile</span><br/>Optimisation
          </h2>
          <p className="text-xl text-[#e0e7ff] mb-10 leading-relaxed" style={{textShadow: '0 1px 10px rgba(0, 0, 0, 0.3)'}}>We improve your local rankings, drive more calls and customers, and maximise your Google presence.</p>
          <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Get GBP Optimisation — $350</a>
        </div>
      </section>

      {/* Audit Banner */}
      <section className="min-h-[70vh] flex items-center px-[5%] py-24 relative overflow-hidden bg-cover bg-center" style={{background: 'linear-gradient(135deg, rgba(10, 15, 26, 0.85) 0%, rgba(13, 21, 32, 0.75) 100%), url("/images/audit.jpg")'}}>
        <div className="relative z-[2] max-w-[700px]">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight" style={{textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'}}>
            <span className="bg-gradient-to-r from-[#00dcc0] to-[#00b4d8] bg-clip-text text-transparent">Website Audit</span>
          </h2>
          <p className="text-xl text-[#e0e7ff] mb-10 leading-relaxed" style={{textShadow: '0 1px 10px rgba(0, 0, 0, 0.3)'}}>Identify and fix the issues that hold your website back from peak performance with our AI-driven technical audit and optimization.</p>
          <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Get Audit — $159</a>
        </div>
      </section>{/* Services */}
      <section id="services" className="px-[5%] py-32 bg-[#0d1520] relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-[#b0c4de] max-w-[700px] mx-auto">Choose the package that fits your business goals and watch your online presence transform</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          
          {/* AI Website Audit */}
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,220,192,0.15)] rounded-3xl p-12 transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-[#00dcc0] hover:shadow-[0_20px_60px_rgba(0,220,192,0.3)]">
            <div className="text-6xl mb-6">🤖</div>
            <div className="inline-block bg-[#00dcc0] text-[#0a0f1a] px-6 py-2 rounded-full font-bold text-xl mb-6">$159</div>
            <h3 className="text-3xl mb-4 text-white">AI Website Audit</h3>
            <p className="text-[#b0c4de] leading-relaxed text-lg mb-6">Get a comprehensive AI-powered analysis of your website&apos;s performance, SEO, and user experience with actionable recommendations.</p>
            <ul className="list-none mb-8">
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Complete technical SEO analysis</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Performance & speed optimization report</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Mobile responsiveness check</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">AI-powered improvement roadmap</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Competitor comparison insights</li>
            </ul>
            <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Get Started</a>
          </div>

          {/* GBP Optimisation */}
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,220,192,0.15)] rounded-3xl p-12 transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-[#00dcc0] hover:shadow-[0_20px_60px_rgba(0,220,192,0.3)]">
            <div className="text-6xl mb-6">📍</div>
            <div className="inline-block bg-[#00dcc0] text-[#0a0f1a] px-6 py-2 rounded-full font-bold text-xl mb-6">$350</div>
            <h3 className="text-3xl mb-4 text-white">Google Business Profile Optimisation</h3>
            <p className="text-[#b0c4de] leading-relaxed text-lg mb-6">We improve your local rankings, drive more calls and customers, and maximise your Google presence to dominate local search.</p>
            <ul className="list-none mb-8">
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Complete GBP profile optimization</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Local SEO keyword targeting</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Review management strategy</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Google Posts scheduling</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Local search ranking boost</li>
            </ul>
            <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Get Optimised</a>
          </div>

          {/* AI Visibility Pack */}
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,220,192,0.15)] rounded-3xl p-12 transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-[#00dcc0] hover:shadow-[0_20px_60px_rgba(0,220,192,0.3)]">
            <div className="text-6xl mb-6">🚀</div>
            <div className="inline-block bg-[#00dcc0] text-[#0a0f1a] px-6 py-2 rounded-full font-bold text-xl mb-6">$3,450</div>
            <h3 className="text-3xl mb-4 text-white">AI Visibility Pack</h3>
            <p className="text-[#b0c4de] leading-relaxed text-lg mb-6">The complete solution for businesses serious about dominating their market. Full audit, GBP optimization, ongoing AI monitoring, and strategic growth planning.</p>
            <ul className="list-none mb-8">
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Everything in Audit + GBP packages</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Monthly AI performance monitoring</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Advanced competitor tracking</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Content strategy & creation</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Priority support & consulting</li>
              <li className="text-[#b0c4de] py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00dcc0] before:font-bold">Quarterly strategy sessions</li>
            </ul>
            <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Go Premium</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-[5%] py-32 bg-gradient-to-br from-[#0a0f1a] to-[#0d1520]">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 text-white">How It Works</h2>
          <p className="text-xl text-[#b0c4de]">Our proven process to transform your online presence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00dcc0] to-[#00b4d8] rounded-full flex items-center justify-center text-3xl font-extrabold text-[#0a0f1a] mx-auto mb-6 shadow-[0_10px_30px_rgba(0,220,192,0.4)]">1</div>
            <h3 className="text-2xl mb-4 text-white">Audit & Analysis</h3>
            <p className="text-[#b0c4de] leading-relaxed">Our AI scans every aspect of your website and online presence, identifying opportunities and issues.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00dcc0] to-[#00b4d8] rounded-full flex items-center justify-center text-3xl font-extrabold text-[#0a0f1a] mx-auto mb-6 shadow-[0_10px_30px_rgba(0,220,192,0.4)]">2</div>
            <h3 className="text-2xl mb-4 text-white">Strategic Planning</h3>
            <p className="text-[#b0c4de] leading-relaxed">We create a customized roadmap with prioritized recommendations based on impact and effort.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00dcc0] to-[#00b4d8] rounded-full flex items-center justify-center text-3xl font-extrabold text-[#0a0f1a] mx-auto mb-6 shadow-[0_10px_30px_rgba(0,220,192,0.4)]">3</div>
            <h3 className="text-2xl mb-4 text-white">Implementation</h3>
            <p className="text-[#b0c4de] leading-relaxed">Our team executes the optimization strategy, focusing on quick wins and long-term growth.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00dcc0] to-[#00b4d8] rounded-full flex items-center justify-center text-3xl font-extrabold text-[#0a0f1a] mx-auto mb-6 shadow-[0_10px_30px_rgba(0,220,192,0.4)]">4</div>
            <h3 className="text-2xl mb-4 text-white">Monitor & Grow</h3>
            <p className="text-[#b0c4de] leading-relaxed">Continuous tracking and refinement to ensure sustained growth and market dominance.</p>
          </div>
        </div>
      </section>{/* CTA */}
      <section id="contact" className="px-[5%] py-32 text-center bg-[linear-gradient(135deg,rgba(0,220,192,0.1)_0%,transparent_100%),#0d1520] relative">
        <h2 className="text-5xl mb-6 text-white font-extrabold">Ready to Dominate Your Local Market?</h2>
        <p className="text-xl text-[#b0c4de] mb-12 max-w-[700px] mx-auto">Join hundreds of NZ businesses that trust Traffik to drive their online growth. Start with our $159 AI audit today.</p>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">Call 021 265 8586</a>
          <a href="mailto:steve@traffik.nz" className="px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-transparent text-[#00dcc0] border-2 border-[#00dcc0] hover:bg-[rgba(0,220,192,0.1)] hover:-translate-y-1">Email Steve</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[5%] pt-16 pb-8 bg-[#0a0f1a] border-t border-[rgba(0,220,192,0.1)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <div>
            <h3 className="text-3xl mb-4 text-white tracking-[2px]">TRAFFIK</h3>
            <p className="text-[#b0c4de] leading-relaxed mb-6">AI Web Optimisation Limited</p>
            <p className="text-[#b0c4de] leading-relaxed">Empowering New Zealand businesses with cutting-edge AI-powered web optimization and local search dominance.</p>
          </div>
          <div>
            <h4 className="text-[#00dcc0] mb-4 text-xl">Quick Links</h4>
            <ul className="list-none">
              <li><a href="#home" className="text-[#b0c4de] no-underline block py-2 transition-colors duration-300 hover:text-[#00dcc0]">Home</a></li>
              <li><a href="#services" className="text-[#b0c4de] no-underline block py-2 transition-colors duration-300 hover:text-[#00dcc0]">Services</a></li>
              <li><a href="#contact" className="text-[#b0c4de] no-underline block py-2 transition-colors duration-300 hover:text-[#00dcc0]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#00dcc0] mb-4 text-xl">Contact</h4>
            <ul className="list-none">
              <li><a href="tel:0212658586" className="text-[#b0c4de] no-underline block py-2 transition-colors duration-300 hover:text-[#00dcc0]">021 265 8586</a></li>
              <li><a href="mailto:steve@traffik.nz" className="text-[#b0c4de] no-underline block py-2 transition-colors duration-300 hover:text-[#00dcc0]">steve@traffik.nz</a></li>
              <li className="text-[#b0c4de] py-2">Christchurch, New Zealand</li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-[rgba(0,220,192,0.1)] text-[#b0c4de]">
          <p>&copy; 2025 Traffik - AI Web Optimisation Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
