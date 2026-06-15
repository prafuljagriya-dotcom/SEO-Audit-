'use client';

import { useState } from 'react';

const suggestions = [
  'What is AEO and why does it matter in 2025?',
  'How do you make content get cited by ChatGPT?',
  'What\'s the difference between SEO and GEO?',
  'How do you approach a technical SEO audit?',
];

type Message = { role: 'user' | 'assistant'; content: string };

export default function AskPraful() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setError('');

    const userMessage: Message = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error('Failed to get response');
      const data = await res.json();
      setMessages([...updatedMessages, { role: 'assistant', content: data.response }]);
    } catch {
      setError('Something went wrong. Please try again.');
      setMessages(messages);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">AI Assistant</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Ask Praful</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Curious about AEO, SEO strategy, or how AI search actually works? Ask me anything.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Chat window */}
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Praful&apos;s AI Assistant</p>
                <p className="text-xs text-slate-400">Powered by Claude · SEO + AEO specialist</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs text-slate-400">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="min-h-[280px] max-h-[420px] overflow-y-auto p-5 flex flex-col gap-4">
              {messages.length === 0 ? (
                <div className="text-center text-slate-400 my-auto pt-10">
                  <div className="text-4xl mb-3">👋</div>
                  <p className="text-sm font-medium text-slate-600">Hi! I&apos;m Praful&apos;s AI assistant.</p>
                  <p className="text-xs mt-1">Ask me about AEO, SEO strategy, AI search, or anything digital marketing.</p>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <p className="text-xs text-red-500 text-center">{error}</p>
              )}
            </div>

            {/* Suggestions */}
            {messages.length === 0 && (
              <div className="px-5 pb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-slate-100 p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about AEO, SEO, PPC, or AI search…"
                  className="flex-1 text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-slate-300"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            This assistant reflects Praful&apos;s expertise and approach — not a general-purpose chatbot.
          </p>
        </div>
      </div>
    </section>
  );
}
