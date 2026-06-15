'use client';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
              Let&apos;s build something{' '}
              <span className="text-blue-400">worth searching for.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              If your brand wants to be the answer AI recommends — or if you&apos;re thinking about
              SEO strategy, AEO, analytics automation, or PPC — I&apos;d love to connect.
              Open to remote and international engagements.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: '📧', label: 'Email', value: 'praful.jagriya@gmail.com', href: 'mailto:praful.jagriya@gmail.com' },
                { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/praful-jagariya', href: 'https://www.linkedin.com/in/praful-jagariya' },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="text-lg">{contact.icon}</span>
                  <span className="text-sm group-hover:underline underline-offset-2">{contact.value}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['Remote-first', 'US SaaS', 'Local Services', 'International'].map((tag) => (
                <span key={tag} className="border border-slate-700 text-slate-400 text-xs px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-5">Send a message</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-400 font-medium block mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-medium block mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium block mb-1.5">What are you looking for?</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option value="" className="bg-slate-800">Select a topic</option>
                  <option value="seo" className="bg-slate-800">SEO Strategy</option>
                  <option value="aeo" className="bg-slate-800">AEO / GEO</option>
                  <option value="ppc" className="bg-slate-800">PPC / Paid Media</option>
                  <option value="analytics" className="bg-slate-800">Analytics & Automation</option>
                  <option value="other" className="bg-slate-800">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or question…"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors text-sm"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
