import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Praful Jagriya | SEO & AEO/GEO Specialist',
  description:
    'I help US SaaS & local-service brands become the answer AI recommends — across ChatGPT, Perplexity, and Google AI Overviews. SEO, AEO/GEO, and AI Automation specialist.',
  keywords:
    'SEO, Answer Engine Optimization, AEO, Generative Engine Optimization, GEO, AI Search, Google AI Overviews, Technical SEO, PPC, Analytics',
  openGraph: {
    title: 'Praful Jagriya | SEO & AEO/GEO Specialist',
    description:
      'Helping US SaaS & local-service brands get cited by ChatGPT, Perplexity & Google AI Overviews.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
