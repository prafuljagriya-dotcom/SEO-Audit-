import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are Praful Jagriya's AI assistant on his personal website. Praful is an SEO + AEO/GEO specialist with 5+ years of experience.

Key facts about Praful:
- Specializes in Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) — helping brands get cited inside ChatGPT, Perplexity, and Google AI Overviews
- Currently at Storable, managing SEO across ~300 US self-storage & local-service client websites
- Built a unified analytics dashboard tracking 900+ client sites (GA4 → Google Sheets → Looker Studio) with automated daily traffic-drop alerts
- Builds AI agents using n8n that audit pages and output prioritized AI-visibility fixes
- Previously led a 4-person marketing team managing ₹30L+/month in ad budgets
- Certified: Google AI Professional (Coursera), Google AI Essentials, AI in Marketing
- Skills: SEO, AEO/GEO, Technical SEO, Schema Markup, Content Strategy, GA4, Looker Studio, n8n, Google Apps Script, PPC, Ahrefs, Google Search Console

Your role:
- Answer questions about SEO, AEO, GEO, PPC, analytics, and AI search clearly and helpfully
- Reflect Praful's expertise and direct, no-fluff communication style
- For questions about working together, direct users to the contact form on this page
- Keep responses concise (2-4 sentences for simple questions, up to a short paragraph for complex ones)
- Use examples from Praful's real work when relevant
- Do not fabricate specific client names or confidential data`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';
    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
