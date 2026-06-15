export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Blue gradient blob top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              SEO · AEO/GEO · AI Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Most brands rank.{' '}
              <br className="hidden sm:block" />
              The ones that win{' '}
              <span className="text-blue-600">get cited by AI.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              I help US SaaS & local‑service brands become the answer AI recommends —
              inside ChatGPT, Perplexity & Google AI Overviews. Not just ranking in blue links.
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <a
                href="#portfolio"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '5+', label: 'Years of experience' },
                { value: '300+', label: 'Client websites' },
                { value: '900+', label: 'Sites tracked' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* AI citations card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-3">AI Citation Visibility</p>
              <div className="flex flex-col gap-2">
                {[
                  { platform: 'ChatGPT', pct: 87 },
                  { platform: 'Perplexity', pct: 73 },
                  { platform: 'Google AI Overviews', pct: 91 },
                ].map((item) => (
                  <div key={item.platform} className="flex items-center gap-3">
                    <span className="text-sm text-slate-600 w-44 shrink-0">{item.platform}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400 w-8 text-right">{item.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-3">Example results from optimized client pages</p>
            </div>

            {/* Quick metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <div className="text-4xl font-extrabold mb-1">900+</div>
                <div className="text-blue-200 text-sm">Sites in unified analytics dashboard</div>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <div className="text-4xl font-extrabold mb-1">AI</div>
                <div className="text-slate-400 text-sm">Agents built to audit & fix AI visibility</div>
              </div>
            </div>

            {/* Logos */}
            <div className="bg-slate-50 rounded-2xl p-5">
              <p className="text-xs text-slate-400 font-medium mb-3">Platforms I optimize for</p>
              <div className="flex flex-wrap gap-2">
                {['ChatGPT', 'Perplexity', 'Gemini', 'Google SGE', 'Bing AI'].map((p) => (
                  <span key={p} className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
