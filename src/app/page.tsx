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
          <a href="tel:0212658586" className="text-[#00dcc0] no-underline flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5">
            021 265 8586
          </a>
          <a href="mailto:steve@traffik.nz" className="text-[#00dcc0] no-underline flex items-center gap-2 font-medium transition-all duration-300 hover:-translate-y-0.5">
            Email
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-[5%] pt-32 pb-16 relative overflow-hidden bg-cover bg-center" style={{background: 'linear-gradient(135deg, rgba(10, 15, 26, 0.85) 0%, rgba(13, 21, 32, 0.75) 100%), url("/images/hero.jpg")'}}>
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-r from-[rgba(10,15,26,0.95)] via-[rgba(10,15,26,0.5)] to-transparent pointer-events-none"></div>
        <div className="relative z-[2] max-w-[1400px] mx-auto w-full">
          <div className="max-w-[700px]">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-white" style={{textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'}}>
              <span className="bg-gradient-to-r from-[#00dcc0] to-[#00b4d8] bg-clip-text text-transparent">Outperform</span> Your Competition
            </h1>
            <p className="text-xl text-[#e0e7ff] mb-10 leading-relaxed" style={{textShadow: '0 1px 10px rgba(0, 0, 0, 0.3)'}}>
              In today&apos;s search landscape, speed and intelligence win. Pair our $159 AI Website Audit with high-impact Google Business Profile optimisation to rank higher in Google and AI platforms, load faster across every device, and convert more visitors into customers.
            </p>
            <div className="inline-flex items-center bg-[rgba(0,220,192,0.15)] px-6 py-3 rounded-full border border-[rgba(0,220,192,0.4)] mb-8 backdrop-blur-[10px]">
              Start with our <span className="text-[#00dcc0] font-bold text-lg ml-2">$159 AI Audit</span>
            </div>
            <div className="flex gap-6 flex-wrap">
              <a href="tel:0212658586" className="px-10 py-4 text-base font-semibold border-none rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-[#00dcc0] text-[#0a0f1a] shadow-[0_10px_30px_rgba(0,220,192,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,220,192,0.6)] hover:bg-[#00f0d5]">
                Get Audit — $159
              </a>
              <a href="#services" className="px-10 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 uppercase tracking-[0.5px] bg-transparent text-[#00dcc0] border-2 border-[#00dcc0] hover:bg-[rgba(0,220,192,0.1)] hover:-translate-y-1">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections... */}
      <section id="services" className="px-[5%] py-32 bg-[#0d1520]">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-[#b0c4de] max-w-[700px] mx-auto">Choose the package that fits your business goals</p>
        </div>
      </section>
    </>
  )
}
