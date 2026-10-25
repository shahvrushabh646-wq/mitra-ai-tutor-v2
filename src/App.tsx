import React, { useState } from 'react';
import { CMAT_SYLLABUS_TOPICS, INITIAL_USER_PROFILE } from './data/cmatCurriculum.ts';
import type { UserLearningProfile } from './types/mitra.ts';

export default function App() {
  const [profile] = useState<UserLearningProfile>(INITIAL_USER_PROFILE);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <h1 className="text-xl font-bold tracking-tight">Mitra AI Tutor — CMAT 2026</h1>
        <p className="text-sm text-slate-600 mt-1">
          Day {profile.currentDay} · {profile.currentSubject} · {profile.preferredLanguage}
        </p>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Syllabus loaded ({CMAT_SYLLABUS_TOPICS.length} topics)</h2>
          <ul className="space-y-2 text-sm">
            {CMAT_SYLLABUS_TOPICS.slice(0, 8).map((t) => (
              <li key={t.id} className="flex gap-3">
                <span className="font-mono text-xs text-slate-500 w-24 shrink-0">Day {t.dayNumber}</span>
                <span className="font-medium">{t.title}</span>
                <span className="text-slate-500">· {t.subject}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Core data layer is live. Full Chat / Dashboard / Practice / Vault UI can be restored next.
          </p>
        </section>
      </main>
    </div>
  );
}
