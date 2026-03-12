
import React, { useState } from 'react';
import { Chapter } from '../types';
import GraphingTool from '../components/GraphingTool';

interface LessonDetailViewProps {
  chapter: Chapter;
  onBack: () => void;
  onLensClick: (prompt?: string) => void;
}

const LessonDetailView: React.FC<LessonDetailViewProps> = ({ chapter, onBack, onLensClick }) => {
  const [showSandbox, setShowSandbox] = useState(chapter.id === 1 || chapter.id === 4);

  const studyTools = [
    { name: "Digital Flashcards", action: () => alert(`Opening flashcards for Chapter ${chapter.id}: ${chapter.title}`) },
    { name: "Standards Quiz", action: () => alert(`Generating practice quiz for CA Standard ${chapter.standards[0] || 'N/A'}`) },
    { name: "Formula Recap", action: () => alert(`Downloading high-res formula sheet for ${chapter.title}`) }
  ];

  const isModelingChapter = chapter.id === 1 || chapter.id === 4;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
      >
        <span>←</span>
        <span>Back to Map</span>
      </button>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-tight">Chapter {chapter.id}</span>
              {isModelingChapter && (
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase tracking-widest">
                  Interactive Modeling (+)
                </span>
              )}
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{chapter.title}</h2>
          </div>
          <div className="flex gap-3">
            {chapter.suggestedEquations && (
               <button 
                onClick={() => setShowSandbox(!showSandbox)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold shadow-lg transition-all border-2 ${
                  showSandbox 
                  ? 'bg-rose-50 border-rose-200 text-rose-600' 
                  : 'bg-white border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <span>{showSandbox ? '✖ Hide Graph' : '📈 Graph Sandbox'}</span>
              </button>
            )}
            <button 
              onClick={() => onLensClick()}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
            >
              <span>🔍</span>
              <span>Scan Problem</span>
            </button>
          </div>
        </div>

        {showSandbox && chapter.suggestedEquations && (
          <div className="mb-10 animate-in slide-in-from-top-4 duration-500">
            <div className="flex items-center justify-between mb-4 px-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Visual Modeling Sandbox</h3>
                <p className="text-xs text-slate-500">Experiment with {chapter.title} functions in real-time.</p>
              </div>
              <div className="flex gap-2">
                {chapter.suggestedEquations.map((eq, i) => (
                  <span key={i} className="hidden md:inline-block px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono text-slate-500">
                    {eq}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border-4 border-slate-50 shadow-2xl overflow-hidden">
              <GraphingTool expressions={chapter.suggestedEquations} className="h-[450px]" />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2 underline decoration-indigo-200 italic">California Standard Alignment</h3>
              <p className="text-sm text-slate-600 mb-4">{chapter.focus}</p>
              <div className="flex flex-wrap gap-2">
                {chapter.standards.map(s => (
                  <span key={s} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500">
                    CCSS {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Essential Larson Exercises</h3>
              <p className="text-xs text-slate-400 font-medium -mt-2">Select a task to analyze with the Larson Lens AI.</p>
              <div className="space-y-2">
                {[
                  chapter.id === 1 ? "Section 1.2: Parent Functions & Transformations" : "Section 4.2: Trigonometric Functions & Unit Circle",
                  chapter.id === 1 ? "Section 1.3: Modeling with Shifting & Scaling" : "Section 4.5: Graphs of Sine and Cosine",
                  "Larson Review: Cumulative Skill Check",
                  "CA Application: Realistic Data Modeling Lab"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onLensClick(`I'm working on "${item}" from Chapter ${chapter.id} of Larson 2007. Can you explain the core concepts and give me a hint for the first few problems?`)}
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                    <span className="text-indigo-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">→</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <h4 className="font-bold text-amber-900 text-sm mb-2 flex items-center">
                <span className="mr-2">💡</span> Modeling Note (+)
              </h4>
              <p className="text-xs text-amber-800 leading-relaxed italic">
                {chapter.id === 1 
                  ? "Standard F-BF.3: Observe that horizontal shifts often act 'backward' compared to vertical shifts. Use the grapher above to verify y=f(x-h) vs y=f(x)+k."
                  : "Standard F-TF.5: Periodic tides are best modeled using y=a*sin(b(x-c))+d. Use the sandbox to adjust 'b' and see how it affects the period."}
              </p>
            </div>

            <div className="bg-indigo-900 p-6 rounded-2xl text-white shadow-xl shadow-indigo-100">
              <h4 className="font-bold text-sm mb-4">Mastery Tools</h4>
              <div className="space-y-3">
                {studyTools.map((tool) => (
                  <button 
                    key={tool.name}
                    onClick={tool.action}
                    className="w-full py-2.5 bg-indigo-800/50 rounded-lg text-xs font-bold hover:bg-indigo-700 hover:scale-[1.02] transition-all border border-indigo-700"
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailView;
