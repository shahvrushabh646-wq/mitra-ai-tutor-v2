## How to start this app (fixed)

The original ZIP was missing two critical files under `src/data/`:
- `cmatCurriculum.ts` (syllabus, initial profile, Day-1 seed data, DAILY_TIMETABLE)
- `questionBank.ts` (QUIZ_BANK + validateQuestionBank)

These have been added in this repository.

### Local run

```bash
git clone https://github.com/shahvrushabh646-wq/mitra-ai-tutor-v2.git
cd mitra-ai-tutor-v2
cp .env.example .env
# Put your GEMINI_API_KEY in .env
npm install
npm run dev
# open http://localhost:3000
```

If you still have the original ZIP assets (CMAT PDFs), copy them into `public/assets/aistudio/`.
