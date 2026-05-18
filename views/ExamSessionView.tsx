
import React, { useState, useEffect } from 'react';
import { ExamSection } from '../constants';
import { MOCK_EXAM_MCQ, MOCK_EXAM_FRQ, FRQQuestion } from '../mockExams';
import { QuizQuestion } from '../types';
import MathBlock from '../components/MathBlock';
import { Calculator, Clock, ChevronRight, ChevronLeft, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface ExamSessionViewProps {
  section: ExamSection;
  onBack: () => void;
}

const ExamSessionView: React.FC<ExamSessionViewProps> = ({ section, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(section.timeLimit * 60);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showRubric, setShowRubric] = useState<Record<number, boolean>>({});

  const mcqQuestions = MOCK_EXAM_MCQ[section.id] || [];
  const frqQuestions = MOCK_EXAM_FRQ[section.id] || [];
  const totalQuestions = section.type === 'MCQ' ? mcqQuestions.length : frqQuestions.length;

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setShowResults(true);
    }
  }, [timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFinish = () => {
    if (window.confirm('Are you sure you want to finish this section?')) {
      setShowResults(true);
    }
  };

  if (showResults) {
    const score = section.type === 'MCQ' 
      ? mcqQuestions.reduce((acc, q, idx) => acc + (answers[idx] === q.correctAnswer ? 1 : 0), 0)
      : 0;

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
        <div className="bg-white rounded-[2.5rem] p-12 text-center border border-slate-200 shadow-xl">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2">Section Complete</h2>
          <p className="text-slate-500 font-medium mb-8">Great job simulating the {section.title} environment.</p>
          
          {section.type === 'MCQ' ? (
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-3xl font-black text-slate-900">{score}/{mcqQuestions.length}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Raw Score</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-3xl font-black text-indigo-600">{Math.round((score/mcqQuestions.length)*100)}%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Accuracy</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-3xl font-black text-emerald-600">4.2</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Est. AP Score</div>
              </div>
            </div>
          ) : (
            <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 mb-10 text-left">
              <h4 className="font-bold text-indigo-900 mb-2">FRQ Self-Assessment Required</h4>
              <p className="text-indigo-700 text-sm leading-relaxed">
                Free Response questions are scored based on specific rubrics. Review the solutions provided for each part and award points for correct steps, justifications, and final answers.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={onBack} className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors">
              Back to Exam Center
            </button>
            {section.type === 'FRQ' && (
              <button 
                onClick={() => {
                  setShowResults(false);
                  setCurrentIndex(0);
                  setShowRubric(Object.fromEntries(frqQuestions.map((_, i) => [i, true])));
                }}
                className="px-10 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-colors"
              >
                Review Solutions
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-500" />
          </button>
          <div>
            <h3 className="font-bold text-slate-900">{section.title} - Part {section.part}</h3>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Question {currentIndex + 1} of {totalQuestions}</span>
              {section.calculator === 'Required' && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                  <Calculator className="w-3 h-3" />
                  Calculator
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-mono font-bold ${timeLeft < 300 ? 'bg-rose-50 text-rose-600 animate-pulse' : 'bg-slate-50 text-slate-700'}`}>
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>
          <button 
            onClick={handleFinish}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors"
          >
            Finish Section
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm min-h-[400px]">
            {section.type === 'MCQ' ? (
              <div className="space-y-8">
                <div className="text-xl font-medium text-slate-800 leading-relaxed">
                  {mcqQuestions[currentIndex].question.split(/(\$\$.*?\$$|\$.*?\$)/g).map((part, i) => {
                    if (part.startsWith('$$')) return <MathBlock key={i} math={part.slice(2, -2)} block />;
                    if (part.startsWith('$')) return <MathBlock key={i} math={part.slice(1, -1)} />;
                    return part;
                  })}
                </div>
                <div className="space-y-3">
                  {mcqQuestions[currentIndex].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAnswers({ ...answers, [currentIndex]: idx })}
                      className={`w-full p-5 rounded-2xl text-left font-medium transition-all border-2 flex items-center gap-4 ${
                        answers[currentIndex] === idx 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                          : 'border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border ${answers[currentIndex] === idx ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-lg">
                        {opt.split(/(\$.*?\$)/g).map((part, i) => part.startsWith('$') ? <MathBlock key={i} math={part.slice(1, -1)} /> : part)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-black">
                    {currentIndex + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{frqQuestions[currentIndex].title}</h2>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-slate-700 leading-relaxed italic">
                  {frqQuestions[currentIndex].scenario.split(/(\$.*?\$)/g).map((part, i) => part.startsWith('$') ? <MathBlock key={i} math={part.slice(1, -1)} /> : part)}
                </div>

                <div className="space-y-10">
                  {frqQuestions[currentIndex].parts.map((part, pIdx) => (
                    <div key={pIdx} className="space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="font-black text-indigo-600 mt-1">{part.label}</span>
                        <div className="text-lg text-slate-800 leading-relaxed">
                          {part.prompt.split(/(\$.*?\$)/g).map((p, i) => p.startsWith('$') ? <MathBlock key={i} math={p.slice(1, -1)} /> : p)}
                        </div>
                      </div>
                      
                      {showRubric[currentIndex] ? (
                        <div className="ml-8 p-6 bg-emerald-50 border border-emerald-100 rounded-3xl">
                          <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Scoring Rubric & Solution</div>
                          <div className="text-emerald-900 font-medium">
                            {part.solution.split(/(\$.*?\$)/g).map((p, i) => p.startsWith('$') ? <MathBlock key={i} math={p.slice(1, -1)} /> : p)}
                          </div>
                        </div>
                      ) : (
                        <textarea 
                          placeholder="Type your justification and steps here..."
                          className="w-full ml-8 p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all min-h-[150px]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button 
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(c => c - 1)}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 disabled:opacity-50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-indigo-600' : 'bg-slate-200'}`}
                />
              ))}
            </div>
            <button 
              disabled={currentIndex === totalQuestions - 1}
              onClick={() => setCurrentIndex(c => c + 1)}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 disabled:opacity-50 transition-all"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Question Map</h4>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-full aspect-square rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                    currentIndex === i 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                      : answers[i] !== undefined || (section.type === 'FRQ' && showRubric[i])
                        ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                        : 'bg-slate-50 text-slate-400 border border-slate-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
            <div className="flex items-center gap-2 text-amber-700 mb-3">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Exam Tip</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed font-medium">
              {section.type === 'MCQ' 
                ? "Don't spend more than 2 minutes on any single question. If you're stuck, mark it and move on."
                : "Always show your setup. Even if your final answer is wrong, you can earn partial credit for correct methods."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSessionView;
