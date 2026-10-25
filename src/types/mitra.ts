export type ExplanationLanguage = 'hinglish' | 'english' | 'hindi';
export type ExplanationDepth = 'step_by_step' | 'concise';

export type SubjectKey =
  | 'Quantitative Techniques'
  | 'Logical Reasoning'
  | 'Language Comprehension'
  | 'General Knowledge'
  | 'Innovation & Entrepreneurship'
  | 'Revision & Error Log';

export type TopicStatus =
  | 'not_started'
  | 'viewed'
  | 'quiz_attempted'
  | 'quiz_passed'
  | 'mastered';

export type MistakeType =
  | 'conceptual'
  | 'calculation'
  | 'reading'
  | 'time_pressure';

export type AIErrorCategory =
  | 'none'
  | 'missing_key'
  | 'auth_invalid'
  | 'quota_exhausted'
  | 'model_unsupported'
  | 'timeout'
  | 'network_error';

export interface UserLearningProfile {
  ownerId: string;
  displayName: string;
  preferredLanguage: ExplanationLanguage;
  explanationDepth: ExplanationDepth;
  currentDay: number;
  currentSubject: SubjectKey;
  currentTopicId: string;
  studyMinutesToday: number;
  totalStudyMinutes: number;
  missedDaysOffset: number;
  createdAt: string;
  updatedAt: string;
}

export interface ChatAttachment {
  id: string;
  name: string;
  mimeType: string;
  sizeBytes?: number;
  presetPaperId?: 'cmat_2025_slot_1' | 'cmat_2025_slot_2';
  uploadedFileId?: string;
  url?: string;
}

export interface ChatMessageItem {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  sourceMode: 'live' | 'offline' | 'user';
  modelUsed: string;
  attachmentName: string;
  attachments?: ChatAttachment[];
  errorReason?: string;
  errorCategory?: AIErrorCategory;
  bookmarked?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ConversationThread {
  id: string;
  title: string;
  subjectTag: string;
  archived: boolean;
  messageCount: number;
  lastMessagePreview: string;
  createdAt: string;
  updatedAt: string;
}

export interface TopicProgressRecord {
  topicId: string;
  subject: SubjectKey;
  status: TopicStatus;
  bestScore: number;
  totalQuestions: number;
  attemptsCount: number;
  timeSpentMinutes: number;
  createdAt: string;
  updatedAt: string;
}

export interface QuizQuestion {
  id: string;
  officialQuestionId?: string;
  sourceLabel: string;
  isOfficialPyq: boolean;
  subject: SubjectKey;
  topicId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'mcq' | 'written';
  comprehensionPassage?: string;
  diagramType?: 'slot1_pie_placement' | 'slot2_bar_bread';
  questionText: string;
  options?: string[];
  correctOptionIndex?: number;
  acceptedWrittenAnswers?: string[];
  hint: string;
  explanation: string;
  formulaUsed?: string;
}

export interface QuizSet {
  id: string;
  title: string;
  subtitle: string;
  subject: SubjectKey;
  topicId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'mixed';
  examFormat?: 'topic_quiz' | 'sectional_test' | 'full_mock';
  marksPerCorrect?: number;
  negativeMarkPerWrong?: number;
  timeLimitMinutes: number;
  passingPercent: number;
  sourceBadge: string;
  questions: QuizQuestion[];
}

export interface QuizAttemptRecord {
  id: string;
  quizId: string;
  title: string;
  subject: SubjectKey;
  topicId: string;
  examFormat?: 'topic_quiz' | 'sectional_test' | 'full_mock';
  score: number;
  total: number;
  accuracyPercent: number;
  rawMarks?: number;
  maxMarks?: number;
  negativeMarksDeducted?: number;
  unattemptedCount?: number;
  durationSeconds: number;
  passed: boolean;
  status: 'completed';
  answersSummary?: Record<string, string>;
  createdAt: string;
}

export interface ErrorLogRecord {
  id: string;
  questionId: string;
  subject: SubjectKey;
  topicId: string;
  questionText: string;
  studentAnswer: string;
  correctAnswer: string;
  mistakeType: MistakeType;
  explanation: string;
  resolved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StudyNoteRecord {
  id: string;
  title: string;
  subject: SubjectKey;
  topicId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface SyllabusTopic {
  id: string;
  dayNumber: number;
  subject: SubjectKey;
  title: string;
  chapter: string;
  estimatedMinutes: number;
  summary: string;
  keyConcepts: string[];
  linkedQuizId?: string;
  starterPrompt: string;
}

export interface SectionAnalyticsItem {
  subject: SubjectKey;
  totalTopics: number;
  masteredTopics: number;
  masteryPercent: number;
  viewedTopics: number;
  accuracyPercent: number;
  attemptsCount: number;
  timeSpentMinutes: number;
  unresolvedErrors: number;
  weakTopics: string[];
}

export interface DailyProgressCardSnapshot {
  dayNumber: number;
  dateLabel: string;
  minutesStudied: number;
  targetMinutes: number;
  subjects: {
    subject: SubjectKey;
    targetMinutes: number;
    statusLabel: string;
    detail: string;
    completed: boolean;
    pendingAssessment: boolean;
  }[];
  quizzesAttempted: number;
  quizzesPassed: number;
  overallAccuracy: number;
  strongAreas: string[];
  revisionNeeded: string[];
  nextRecommendedAction: {
    label: string;
    reason?: string;
    topicId: string;
    quizId?: string;
    prompt: string;
  };
}

export interface AIProviderStatus {
  liveAvailable: boolean;
  verifiedLive?: boolean;
  lastVerifiedAt?: string;
  probeLatencyMs?: number;
  errorCategory?: AIErrorCategory;
  cooldownModels?: string[];
  provider: string;
  configuredModel: string;
  activeModel: string;
  endpointType: string;
  authConfigured: boolean;
  fallbackModeLabel: string;
  diagnosticMessage: string;
}
