import express from 'express';
import type { Express } from 'express';

/** Minimal API app for Vercel. Expand with full routes from the original source when ready. */
export function createMitraApiApp(): Express {
  const app = express();
  app.use(express.json({ limit: '2mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'mitra-ai-tutor' });
  });

  app.get('/api/status', (_req, res) => {
    res.json({
      liveAvailable: Boolean(process.env.GEMINI_API_KEY),
      provider: 'Google Gemini',
      message: 'Minimal stub — full AI routes can be restored from the original ZIP.',
    });
  });

  return app;
}

// Local dev entry (not used on Vercel)
const PORT = Number(process.env.PORT) || 3000;
if (process.env.VERCEL !== '1' && import.meta.url.endsWith(process.argv[1] || '')) {
  const app = createMitraApiApp();
  app.listen(PORT, () => console.log(`Mitra stub listening on :${PORT}`));
}
