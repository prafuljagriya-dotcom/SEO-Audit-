const areas = [
  {
    title: 'SEO Strategy',
    desc: 'End-to-end organic search — technical audits, keyword architecture, content strategy, and on-page optimization across 300+ client sites.',
    tags: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'On-page SEO'],
    color: 'blue',
  },
  {
    title: 'AEO / GEO',
    desc: 'Answer Engine & Generative Engine Optimization — making your brand the answer AI gives in ChatGPT, Perplexity, and Google AI Overviews.',
    tags: ['Schema Markup', 'Entity Coverage', 'FAQ Structure', 'Citable Content'],
    color: 'indigo',
  },
  {
    title: 'PPC & Paid Media',
    desc: 'Paid search and display campaigns designed to compound your organic strategy — with ₹30L+/month in managed ad budgets across Google and Meta.',
    tags: ['Google Ads', 'Meta Ads', 'Bid Strategy', 'Conversion Tracking'],
    color: 'violet',
  },
  {
    title: 'Analytics & Data',
    desc: 'Custom GA4 → Looker Studio pipelines, automated reporting, and dashboards that surface what matters — across hundreds of properties at once.',
    tags: ['GA4', 'Looker Studio', 'Google Search Console', 'Ahrefs'],
    color: 'cyan',
  },
  {
    title: 'AI Automation',
    desc: 'Lightweight n8n agents that audit pages, trigger alerts, and output prioritized fixes — replacing hours of manual work with automated intelligence.',
    tags: ['n8n', 'Google Apps Script', 'AI Agents', 'Workflow Automation'],
    color: 'teal',
  },
  {
    title: 'Team & Budget Leadership',
    desc: 'Led a 4-person digital marketing team delivering SEO and paid campaigns for Indian and international clients including Dubai.',
    tags: ['Team Management', 'Campaign Planning', 'Client Reporting', 'Strategy'],
    color: 'slate',
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  teal: 'bg-teal-50 text-teal-700 border-teal-100',
  slate: 'bg-slate-50 text-slate-700 border-slate-200',
};

const iconColorMap: Record<string, string> = {
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
  cyan: 'bg-cyan-600',
  teal: 'bg-teal-600',
  slate: 'bg-slate-600',
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">What I do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Areas of Expertise</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            From AI-search visibility to paid campaigns and analytics automation — built from real work, not slides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className={`w-10 h-10 ${iconColorMap[area.color]} rounded-xl mb-5`} />
              <h3 className="font-bold text-slate-900 text-base mb-2">{area.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{area.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${colorMap[area.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
