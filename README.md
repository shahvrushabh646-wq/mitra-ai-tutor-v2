# Mitra AI Tutor v2 — CMAT 2026

Conversational AI personal tutor for CMAT (React + Vite + Express + Gemini + Firebase).

## Current status (what is in this repo)

This repository was rebuilt from an incomplete source ZIP. The following is **working**:

- Full CMAT 8-day syllabus + seed progress (`src/data/cmatCurriculum.ts`)
- Question bank with topic quizzes, 5 sectionals, and full mock (`src/data/questionBank.ts`)
- Minimal UI shell that loads the syllabus (Vercel-ready)
- Minimal API health/status endpoints
- Vercel config (`vercel.json`) and Vite/Tailwind setup

The **full Chat / Dashboard / Practice / Vault UI and full server routes** from the original ZIP still need to be restored (they were not present in the incomplete upload). The data layer and curriculum are complete and ready.

## Run locally

```bash
git clone https://github.com/shahvrushabh646-wq/mitra-ai-tutor-v2.git
cd mitra-ai-tutor-v2
cp .env.example .env
# set GEMINI_API_KEY=your_key in .env
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Import this repo in Vercel
2. Set env var `GEMINI_API_KEY`
3. Deploy (build command is already `npm run build`)

## Restore full UI later

Copy the original component files from your ZIP into:

- `src/components/*`
- `src/lib/apiClient.ts`, `firestoreSync.ts`, `progressCalculator.ts`
- full `server.ts` + `server/*`

Then replace the minimal `src/App.tsx` with the original one.
