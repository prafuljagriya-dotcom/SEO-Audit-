const credentials = [
  {
    title: 'Google AI Professional Certificate',
    issuer: 'Coursera · Google',
    year: '2026',
    icon: '🎓',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera · Google',
    year: '2026',
    icon: '✦',
  },
  {
    title: 'AI in Marketing',
    issuer: 'Professional Certificate',
    year: '2026',
    icon: '◆',
  },
  {
    title: 'SEO & AEO/GEO Practitioner',
    issuer: 'Hands-on — Storable',
    year: '5+ yrs',
    icon: '⬡',
  },
];

export default function Credentials() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Industry‑Recognised Credentials
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="text-2xl mb-3">{cred.icon}</div>
              <p className="text-sm font-bold text-slate-900 leading-snug mb-1">{cred.title}</p>
              <p className="text-xs text-slate-400">{cred.issuer}</p>
              <p className="text-xs text-blue-600 font-semibold mt-1">{cred.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
