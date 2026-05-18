
import React, { useState } from 'react';
import { EXAM_SECTIONS, ExamSection } from '../constants';
import { Calculator, Ban, FileText, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import ExamSessionView from './ExamSessionView';

const ExamCenter: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<ExamSection | null>(null);

  if (selectedSection) {
    return <ExamSessionView section={selectedSection} onBack={() => setSelectedSection(null)} />;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">AP Exam Center</h1>
          <p className="text-slate-500 font-medium max-w-xl">
            Simulate the AP Precalculus exam environment with timed sections, calculator-specific questions, and full FRQ scoring rubrics.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Exam Readiness: 85%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXAM_SECTIONS.map((section) => (
          <div 
            key={section.id}
            className="group bg-white rounded-3xl border border-slate-200 p-8 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer relative overflow-hidden"
            onClick={() => setSelectedSection(section)}
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              {section.type === 'MCQ' ? <CheckCircle className="w-32 h-32" /> : <FileText className="w-32 h-32" />}
            </div>

            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 rounded-2xl ${section.calculator === 'Required' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {section.calculator === 'Required' ? <Calculator className="w-6 h-6" /> : <Ban className="w-6 h-6" />}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                {section.timeLimit} Minutes
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">{section.title}</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded uppercase">Part {section.part}</span>
              <span className="text-slate-400 text-xs font-medium">•</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{section.questionsCount} Questions</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              {section.description}
            </p>

            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm group-hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
              Start Practice Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Master the Free Response</h2>
            <p className="text-indigo-100/80 leading-relaxed mb-6">
              Section II requires precise mathematical notation and clear justifications. Our FRQ simulator provides official scoring rubrics and AI-powered feedback on your responses.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold">Scoring Rubrics</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold">Justification Practice</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-4 bg-white text-indigo-900 rounded-2xl font-bold hover:bg-indigo-50 transition-colors">
              View FRQ Strategies
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ExamCenter;
