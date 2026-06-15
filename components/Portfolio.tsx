const projects = [
  {
    tag: 'AI Automation · Data',
    title: 'AI-Powered Multi-Client Analytics Dashboard',
    desc: 'Consolidated 900+ GA4 properties into a single free pipeline (Google Apps Script → Looker Studio) with automated daily traffic-drop alerts — replacing hours of manual checking with instant notifications.',
    results: ['900+ sites in one view', 'Automated drop alerts', 'Hours saved daily'],
    accent: 'bg-blue-600',
  },
  {
    tag: 'AEO / GEO',
    title: 'Self-Storage AEO Benchmark Study',
    desc: 'Analyzing AI-citation visibility across 40–50 US self-storage and local-service brands — measuring who gets cited in ChatGPT, Perplexity, and Google AI Overviews and why. Original data, published openly.',
    results: ['40–50 brands analyzed', 'ChatGPT + Perplexity + GAI', 'Original research'],
    accent: 'bg-indigo-600',
    badge: 'In progress',
  },
  {
    tag: 'AI Agent · Technical SEO',
    title: 'AEO Optimization Agent',
    desc: 'An n8n-powered agent that audits any URL and outputs a prioritized list of AI-visibility fixes — schema gaps, missing entity signals, FAQ structure issues, and citable content recommendations.',
    results: ['n8n workflow', 'URL-level audit', 'Prioritized fix output'],
    accent: 'bg-violet-600',
    badge: 'In progress',
  },
  {
    tag: 'SEO Strategy',
    title: 'US Self-Storage SEO at Scale',
    desc: 'Own SEO strategy across ~300 US self-storage & local-service client websites at Storable — technical SEO, content architecture, and AI-search optimization for a competitive, high-intent vertical.',
    results: ['300+ client sites', 'US self-storage vertical', 'AEO-first approach'],
    accent: 'bg-teal-600',
  },
  {
    tag: 'PPC · International',
    title: 'Multi-Market Paid Campaigns',
    desc: 'Led a 4-person team managing ₹30L+/month in combined ad budgets across Google Ads and Meta for Indian and international clients including Dubai — from strategy to execution.',
    results: ['₹30L+/month managed', 'Google + Meta', 'India & Dubai markets'],
    accent: 'bg-cyan-600',
  },
  {
    tag: 'Content Strategy',
    title: '"Cited or Invisible?" Series',
    desc: 'A signature content series analyzing why certain brands appear inside AI answers and others don\'t — with teardowns, schema examples, and actionable takeaways for marketers navigating the new search.',
    results: ['AEO teardowns', 'Brand-level analysis', 'Actionable frameworks'],
    accent: 'bg-slate-700',
    badge: 'Coming soon',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Portfolio Highlights</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Real projects, real results — built for the era where AI is the search engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all"
            >
              {/* Color bar */}
              <div className={`h-1.5 ${project.accent}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 font-medium">{project.tag}</span>
                  {project.badge && (
                    <span className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                      {project.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.results.map((r) => (
                    <span key={r} className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors text-sm"
          >
            Want a custom case study? Let&apos;s talk
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
