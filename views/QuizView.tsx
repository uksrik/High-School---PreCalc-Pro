
import React, { useState, useEffect } from 'react';
import { Chapter, QuizQuestion } from '../types';
import { generateChapterQuiz } from '../services/geminiService';
import MathBlock from '../components/MathBlock';
import { MOCK_QUIZZES } from '../mockQuizzes';

interface QuizViewProps {
  chapter: Chapter;
  onBack: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ chapter, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      
      // Check for High-Fidelity Mock First
      const mock = MOCK_QUIZZES[chapter.id];
      if (mock) {
        setQuestions(mock);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Smooth transition
      } else {
        const q = await generateChapterQuiz(chapter.id, chapter.title, chapter.focus);
        if (q) setQuestions(q);
      }
      setLoading(false);
    };
    fetchQuiz();
  }, [chapter]);

  const handleSelect = (idx: number) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
    if (idx === questions[currentIndex].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-amber-100 border-t-amber-500 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-3xl">🧠</div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900">Synthesizing {chapter.title} Quiz...</h3>
          <p className="text-slate-500">Retrieving 10 Larson-aligned problems...</p>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-100 animate-in zoom-in-95 duration-500">
        <div className="text-7xl mb-6">🏆</div>
        <h2 className="text-4xl font-bold mb-2 text-slate-900">Quiz Completed!</h2>
        
        <div className="relative w-48 h-48 mx-auto my-8">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle className="text-slate-100 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent" />
            <circle 
              className="text-amber-500 stroke-current transition-all duration-1000 ease-out" 
              strokeWidth="8" 
              strokeDasharray={`${percentage * 2.51}, 251.2`} 
              strokeLinecap="round" 
              cx="50" cy="50" r="40" fill="transparent" 
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-slate-900">{percentage}%</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mastery</span>
          </div>
        </div>

        <p className="text-slate-500 mb-8 font-medium">
          You answered {score} out of {questions.length} correctly. 
          {percentage >= 80 ? " Excellent mastery of Larson curriculum!" : " Consider reviewing the Multi-Source Lesson again."}
        </p>
        <div className="flex flex-col gap-3">
            <button onClick={onBack} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all">
            Return to Study Center
            </button>
            <button onClick={() => window.location.reload()} className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">
            Retake Quiz
            </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      <div className="bg-white px-8 py-4 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</span>
          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{chapter.title} Review</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl">
        <div className="prose prose-slate max-w-none text-xl font-bold text-slate-800 mb-10 leading-relaxed">
           {q.question.split(/(\$\$.*?\$\$|\$.*?\$)/g).map((part, i) => {
            if (part.startsWith('$$') && part.endsWith('$$')) return <MathBlock key={i} math={part.slice(2, -2)} block />;
            if (part.startsWith('$') && part.endsWith('$')) return <MathBlock key={i} math={part.slice(1, -1)} />;
            return part;
          })}
        </div>

        <div className="space-y-4">
          {q.options.map((opt, idx) => {
            let stateClass = "border-slate-100 hover:border-slate-300 text-slate-600 hover:bg-slate-50";
            if (showFeedback) {
              if (idx === q.correctAnswer) {
                stateClass = "border-emerald-500 bg-emerald-50 text-emerald-700";
              } else if (selected === idx) {
                stateClass = "border-rose-500 bg-rose-50 text-rose-700";
              } else {
                stateClass = "border-slate-100 opacity-50 grayscale text-slate-400";
              }
            } else if (selected === idx) {
              stateClass = "border-amber-500 bg-amber-50 text-amber-700";
            }

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => handleSelect(idx)}
                className={`w-full p-5 rounded-2xl text-left font-semibold transition-all border-2 relative ${stateClass}`}
              >
                <div className="flex items-center space-x-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${
                    showFeedback && idx === q.correctAnswer ? 'bg-emerald-500 text-white' : 
                    showFeedback && selected === idx ? 'bg-rose-500 text-white' :
                    selected === idx ? 'bg-amber-500 text-white' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">
                    {opt.split(/(\$\$.*?\$\$|\$.*?\$)/g).map((part, i) => {
                        if (part.startsWith('$$') && part.endsWith('$$')) return <MathBlock key={i} math={part.slice(2, -2)} block />;
                        if (part.startsWith('$') && part.endsWith('$')) return <MathBlock key={i} math={part.slice(1, -1)} />;
                        return part;
                    })}
                  </span>
                  {showFeedback && idx === q.correctAnswer && <span className="text-emerald-500">✓</span>}
                  {showFeedback && selected === idx && idx !== q.correctAnswer && <span className="text-rose-500">✕</span>}
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 animate-in slide-in-from-top-2">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">💡</span> Step-by-Step Logic
            </h4>
            <div className="text-sm text-slate-600 leading-relaxed italic">
              {q.explanation.split(/(\$\$.*?\$\$|\$.*?\$)/g).map((part, i) => {
                if (part.startsWith('$$') && part.endsWith('$$')) return <MathBlock key={i} math={part.slice(2, -2)} block />;
                if (part.startsWith('$') && part.endsWith('$')) return <MathBlock key={i} math={part.slice(1, -1)} />;
                return part;
              })}
            </div>
            <button
              onClick={handleNext}
              className="mt-6 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all"
            >
              {currentIndex === questions.length - 1 ? 'See Final Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizView;
