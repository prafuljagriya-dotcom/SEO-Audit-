export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-semibold text-slate-300">Praful Jagriya</p>
        <p>SEO · AEO/GEO · AI Automation · PPC · Analytics</p>
        <p>© {new Date().getFullYear()} · Built for AI-first search</p>
      </div>
    </footer>
  );
}
