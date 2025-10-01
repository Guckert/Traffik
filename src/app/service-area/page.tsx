export default function Page(){const cities=['Auckland','Wellington','Christchurch','Hamilton','Tauranga','Dunedin','Palmerston North','Napier','Nelson','Rotorua','New Plymouth','Whangārei','Queenstown','Invercargill','Upper Hutt'];return(<main><section className="container py-14">
<h1 className="text-3xl md:text-4xl font-extrabold text-brand-accent">Service Area</h1><p className="mt-2 text-white/80">Christchurch • Canterbury • All of New Zealand</p>
<ul className="mt-6 grid gap-3 md:grid-cols-3 text-white/90">{cities.map(c=>(<li key={c}>• {c} SEO & GBP</li>))}</ul></section></main>);}
