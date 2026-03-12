
export interface Chapter {
  id: number;
  title: string;
  weeks: string;
  focus: string;
  standards: string[];
  semester: 1 | 2;
  description: string;
  suggestedEquations?: string[];
}

// Fixed missing Lab interface definition
export interface Lab {
  id: number;
  title: string;
  topic: string;
  description: string;
  excelFeatures: string[];
  chapterLink: number;
}

export interface TeachingSource {
  name: string;
  type: 'Textbook' | 'AI' | 'Standard' | 'Video';
  content: string;
}

export interface MultiSourceLesson {
  id: number;
  chapterId: number;
  title: string;
  sources: TeachingSource[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  standard: string;
}

export interface PracticeTest {
  chapterId: number;
  title: string;
  questions: QuizQuestion[];
}

export interface ProgressState {
  completedChapters: number[];
  quizScores: Record<number, number>;
  masteryPoints: number;
}
