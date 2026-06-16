export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/praful-photo.jpg"
                alt="Praful Jagriya"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-slate-100 shadow-lg rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">900+ sites</div>
                <div className="text-xs text-slate-400">in one dashboard</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              The thinking behind the work
            </h2>

            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                Search is shifting faster than it has in 20 years. Buyers now ask AI instead of
                scrolling ten blue links — and the brands that get <em>cited</em> in those answers win.
                That shift — Answer Engine Optimization (AEO) and Generative Engine Optimization
                (GEO) — is exactly what I do.
              </p>
              <p>
                I&apos;m an SEO + AEO/GEO specialist with 5+ years of experience, currently driving
                organic and AI-search visibility for US self‑storage and local‑service brands at
                Storable, where I own SEO across ~300 client websites.
              </p>
              <p>
                I don&apos;t just audit — I build. I created a single dashboard tracking 900+ client
                sites with automated daily alerts, and I ship lightweight AI agents (n8n) that audit
                pages and output the exact fixes needed to improve AI visibility.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['AEO / GEO', 'Technical SEO', 'GA4 + Looker Studio', 'n8n Automation', 'Schema Markup', 'PPC'].map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-50 border border-slate-200 text-slate-600 text-sm px-3 py-1.5 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
