const testimonials = [
  {
    quote:
      'Praful doesn\'t just improve rankings — he thinks about where search is going and builds for that. The AEO work he did for us showed up in AI Overviews within weeks.',
    name: 'Client · US Self-Storage Brand',
    role: 'Director of Marketing',
  },
  {
    quote:
      'The analytics dashboard he built gave us visibility we\'d never had before. 900+ sites, one view, daily alerts. It changed how our entire team operates.',
    name: 'Client · SaaS Company',
    role: 'VP of Growth',
  },
  {
    quote:
      'Most SEO people talk about AI search. Praful actually understands the mechanics — schema, entity signals, citable structure. He\'s a genuine practitioner in a field full of theory.',
    name: 'Industry Peer',
    role: 'Head of SEO, Digital Agency',
  },
];

const logos = ['Google', 'GA4', 'Ahrefs', 'Looker Studio', 'n8n', 'Search Console', 'Semrush'];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Trust</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">The Trust I&apos;ve Earned</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-all"
            >
              <svg className="w-8 h-8 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{t.quote}</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="border-t border-slate-100 pt-12">
          <p className="text-center text-sm font-medium text-slate-400 mb-8">Tools & platforms I work with daily</p>
          <div className="flex flex-wrap justify-center gap-3">
            {logos.map((logo) => (
              <div
                key={logo}
                className="border border-slate-200 text-slate-500 text-sm font-medium px-4 py-2 rounded-xl hover:border-blue-200 hover:text-blue-600 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
