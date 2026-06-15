const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Answer-Ready Content',
    desc: 'Schema, FAQ structure, entity coverage, and citable formatting that gets brands referenced inside AI results.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data at Scale',
    desc: 'A unified GA4 → Looker Studio pipeline tracking 900+ client sites with automated daily traffic-drop alerts.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI-Powered Fixes',
    desc: 'Lightweight n8n agents that audit a URL and output prioritized AI-visibility recommendations — automatically.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: 'PPC That Compounds',
    desc: 'Paid campaigns designed to complement organic AI-search — so your brand wins at every stage of the buyer journey.',
  },
];

export default function AIApproach() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dark feature card */}
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">My approach</p>
            <h2 className="text-3xl font-extrabold leading-tight mb-4">
              Scaling visibility with{' '}
              <span className="text-blue-400">AI‑first SEO</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Most SEO playbooks were written for Google 2018. I build strategies for
              where buyers are actually searching today — and will be tomorrow.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Make pages answer-ready for AI models',
                'Build automation that replaces manual audits',
                'Track everything at scale — 900+ sites, one view',
                'Pair organic with paid for full-funnel coverage',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
