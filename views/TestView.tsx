
import React, { useState, useEffect } from 'react';
import { Chapter, QuizQuestion } from '../types';
import { generatePracticeTest } from '../services/geminiService';
import MathBlock from '../components/MathBlock';

interface TestViewProps {
  chapter: Chapter;
  onBack: () => void;
}

const TestView: React.FC<TestViewProps> = ({ chapter, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchTest = async () => {
      setLoading(true);
      const q = await generatePracticeTest(chapter.title, chapter.standards[0]);
      setQuestions(q);
      setLoading(false);
    };
    fetchTest();
  }, [chapter]);

  const handleNext = () => {
    if (selected === questions[currentIndex].correctAnswer) {
      setScore(s => s + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
        <div className="text-4xl animate-bounce">✍️</div>
        <h3 className="text-xl font-bold text-slate-900">Generating CAASPP Practice...</h3>
        <p className="text-slate-500">Aligning questions with standard {chapter.standards[0]}</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-200 animate-in zoom-in-95 duration-500">
        <div className="text-6xl mb-6">🎯</div>
        <h2 className="text-3xl font-bold mb-2 text-slate-900">Test Complete!</h2>
        <p className="text-slate-500 mb-8 font-medium">You scored {score} out of {questions.length} on Chapter {chapter.id}</p>
        <div className="flex justify-center gap-4">
          <button onClick={onBack} className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg">Return to Center</button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white px-6 py-4 rounded-2xl border border-slate-200">
        <span className="text-sm font-bold text-slate-400 uppercase">Question {currentIndex + 1} of {questions.length}</span>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded uppercase">{q.standard}</span>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <p className="text-xl font-medium text-slate-800 mb-8 leading-relaxed">
           {q.question.split(/(\$\$.*?\$\$|\$.*?\$)/g).map((part, i) => {
            if (part.startsWith('$$') && part.endsWith('$$')) return <MathBlock key={i} math={part.slice(2, -2)} block />;
            if (part.startsWith('$') && part.endsWith('$')) return <MathBlock key={i} math={part.slice(1, -1)} />;
            return part;
          })}
        </p>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full p-4 rounded-2xl text-left font-medium transition-all border-2 ${
                selected === idx 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                  : 'border-slate-100 hover:border-slate-300 text-slate-600'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${selected === idx ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          disabled={selected === null}
          onClick={handleNext}
          className={`w-full mt-10 py-4 rounded-2xl font-bold text-lg transition-all ${
            selected === null ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700'
          }`}
        >
          {currentIndex === questions.length - 1 ? 'Finish Test' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default TestView;
