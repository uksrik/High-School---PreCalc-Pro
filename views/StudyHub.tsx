
import React from 'react';
import { CURRICULUM } from '../constants';
import { Chapter } from '../types';

interface StudyHubProps {
  onSelectLesson: (chapter: Chapter) => void;
  onSelectTest: (chapter: Chapter) => void;
  onSelectQuiz: (chapter: Chapter) => void;
}

const StudyHub: React.FC<StudyHubProps> = ({ onSelectLesson, onSelectTest, onSelectQuiz }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">Study Center</h2>
        <p className="text-slate-500">Synthesized lessons, practice benchmarks, and full-length chapter quizzes.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CURRICULUM.map(chapter => (
          <div key={chapter.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Unit {chapter.id}: {chapter.title}</h3>
                <div className="flex gap-2 mt-1">
                  {chapter.standards.map(s => (
                    <span key={s} className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-slate-300 font-bold text-2xl">#{chapter.id}</div>
            </div>

            <p className="text-sm text-slate-600 mb-6 line-clamp-2">{chapter.description}</p>

            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => onSelectLesson(chapter)}
                className="flex flex-col items-center justify-center p-3 bg-indigo-50 rounded-2xl border border-indigo-100 group hover:bg-indigo-600 transition-all"
              >
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform">📖</span>
                <span className="text-[10px] font-bold text-indigo-700 group-hover:text-white uppercase tracking-tighter">Study</span>
              </button>
              <button 
                onClick={() => onSelectQuiz(chapter)}
                className="flex flex-col items-center justify-center p-3 bg-amber-50 rounded-2xl border border-amber-100 group hover:bg-amber-600 transition-all"
              >
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform">🧠</span>
                <span className="text-[10px] font-bold text-amber-700 group-hover:text-white uppercase tracking-tighter">Quiz</span>
              </button>
              <button 
                onClick={() => onSelectTest(chapter)}
                className="flex flex-col items-center justify-center p-3 bg-emerald-50 rounded-2xl border border-emerald-100 group hover:bg-emerald-600 transition-all"
              >
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform">📝</span>
                <span className="text-[10px] font-bold text-emerald-700 group-hover:text-white uppercase tracking-tighter">Test</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyHub;
