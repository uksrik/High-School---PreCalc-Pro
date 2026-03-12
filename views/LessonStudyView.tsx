
import React, { useState, useEffect } from 'react';
import { Chapter, TeachingSource } from '../types';
import MathBlock from '../components/MathBlock';
import GraphingTool from '../components/GraphingTool';
import { generateStructuredLesson } from '../services/geminiService';
import { MOCK_LESSONS } from '../mockLessons';

interface LessonStudyViewProps {
  chapter: Chapter;
  onBack: () => void;
}

const LessonStudyView: React.FC<LessonStudyViewProps> = ({ chapter, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [sources, setSources] = useState<TeachingSource[]>([]);
  // Automatically show the graph for modeling-heavy chapters (1 and 4)
  const [showGraph, setShowGraph] = useState(chapter.id === 1 || chapter.id === 4);
  const [masteredStandards, setMasteredStandards] = useState<string[]>([]);

  const toggleStandard = (std: string) => {
    setMasteredStandards(prev => 
      prev.includes(std) ? prev.filter(s => s !== std) : [...prev, std]
    );
  };

  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      
      const mockContent = MOCK_LESSONS[chapter.id];
      let content;
      if (mockContent) {
        content = mockContent;
        await new Promise(resolve => setTimeout(resolve, 800));
      } else {
        content = await generateStructuredLesson(
          chapter.id, 
          chapter.title, 
          chapter.focus, 
          chapter.standards
        );
      }
      
      if (content) {
        const generatedSources: TeachingSource[] = [
          {
            name: "Larson 2007 Textbook (Concept Excerpt)",
            type: "Textbook",
            content: content.textbookExcerpt
          },
          {
            name: "California Standards Connection",
            type: "Standard",
            content: content.standardsConnection
          },
          {
            name: "AI Synthesis & Mastery Notes",
            type: "AI",
            content: content.aiSynthesis
          },
          {
            name: content.videoTutorial.title,
            type: "Video",
            content: `${content.videoTutorial.description}|SEARCH|${content.videoTutorial.searchQuery}`
          }
        ];
        setSources(generatedSources);
      } else {
        setSources([{
          name: "Error",
          type: "AI",
          content: "Failed to generate multi-source content. Please check your connection."
        }]);
      }
      setLoading(false);
    };
    fetchLesson();
  }, [chapter]);

  const isModelingChapter = chapter.id === 1 || chapter.id === 4;

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="text-indigo-600 font-bold flex items-center space-x-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Study Center</span>
          </button>
          {(chapter.suggestedEquations || isModelingChapter) && (
            <button 
              onClick={() => setShowGraph(!showGraph)}
              className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center space-x-2 border-2 ${
                showGraph 
                  ? 'bg-rose-50 border-rose-200 text-rose-600' 
                  : 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100 hover:scale-105'
              }`}
            >
              <span>{showGraph ? '✖ Close Grapher' : '📈 Visual Modeling'}</span>
            </button>
          )}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
          <header className="mb-8 border-b border-slate-50 pb-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded uppercase tracking-widest">Mastery Hub</span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Weeks {chapter.weeks}</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Chapter {chapter.id}: {chapter.title}</h2>
            <p className="text-slate-500 mt-2 font-medium">{chapter.description}</p>
          </header>

          {showGraph && (
            <div className="mb-12 animate-in slide-in-from-top duration-500">
              <div className="flex items-center justify-between mb-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Modeling Laboratory</h3>
                  <p className="text-xs text-slate-500 font-medium">Interactive Desmos Integration • Larson 2007 Curriculum</p>
                </div>
                {isModelingChapter && (
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 uppercase tracking-tighter">
                      Active Sliders for {chapter.id === 1 ? 'Transformations' : 'Periodic Data'}
                    </span>
                  </div>
                )}
              </div>
              <div className="rounded-2xl border-4 border-slate-100 shadow-2xl overflow-hidden desmos-container relative">
                <GraphingTool expressions={chapter.suggestedEquations} chapterId={chapter.id} />
              </div>
              
              <div className="mt-6 p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center">
                  <span className="mr-2">🧩</span> Interactive Goal
                </h4>
                <p className="text-sm text-indigo-900 font-medium leading-relaxed">
                  {chapter.id === 1 
                    ? "Adjust sliders 'a', 'h', and 'k' to see how they transform the parent function $y=x^2$. Observe Standard F-BF.3 in action!"
                    : chapter.id === 4 
                    ? "Modify 'A' (Amplitude) and 'B' (Period adjustment) to fit periodic tides. Notice the midline shift 'D' for Standard F-TF.5."
                    : "Use the library below to plot specific Larson review exercises."}
                </p>
              </div>

              {chapter.suggestedEquations && (
                <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100 shadow-inner">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Equation Library</h4>
                  <div className="flex flex-wrap gap-2">
                    {chapter.suggestedEquations.map((eq, i) => (
                      <div key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        <MathBlock math={eq} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center text-xl">🎓</div>
              </div>
              <p className="text-slate-900 font-bold">Synthesizing Course Data...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {sources.map((source, idx) => (
                <section key={idx} className="relative pl-8 border-l-2 border-slate-100 last:border-0 pb-4">
                  <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 bg-white shadow-sm ${
                    source.type === 'AI' ? 'border-indigo-500' : 
                    source.type === 'Textbook' ? 'border-amber-500' : 
                    source.type === 'Video' ? 'border-rose-500' : 'border-emerald-500'
                  }`} />
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      source.type === 'AI' ? 'bg-indigo-100 text-indigo-700' : 
                      source.type === 'Textbook' ? 'bg-amber-100 text-amber-700' : 
                      source.type === 'Video' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {source.type} Source
                    </span>
                    <h3 className="font-bold text-slate-800 text-lg">{source.name}</h3>
                  </div>

                  {source.type === 'Video' ? (
                    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 group">
                      <div className="aspect-video bg-slate-800 flex items-center justify-center relative cursor-pointer hover:bg-slate-700 transition-colors" 
                           onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(source.content.split('|SEARCH|')[1])}`, '_blank')}>
                        <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl group-hover:scale-110 transition-transform">
                          ▶
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-bold text-sm drop-shadow-md">Video Walkthrough: {chapter.title}</p>
                          <p className="text-slate-400 text-xs">Recommended Larson 2007 Tutorial</p>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-800/50">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {source.content.split('|SEARCH|')[0]}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {source.content.split(/(\$\$.*?\$\$|\$.*?\$)/g).map((part, i) => {
                        if (part.startsWith('$$') && part.endsWith('$$')) return <MathBlock key={i} math={part.slice(2, -2)} block />;
                        if (part.startsWith('$') && part.endsWith('$')) return <MathBlock key={i} math={part.slice(1, -1)} />;
                        return part;
                      })}
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-72 space-y-6">
        <div className="bg-indigo-900 text-white rounded-3xl p-6 shadow-xl sticky top-8">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70 flex items-center">
            <span className="mr-2">📍</span> CA Standards Tracker
          </h3>
          
          <div className="space-y-4">
            {chapter.standards.map(std => {
              const isMastered = masteredStandards.includes(std);
              return (
                <div 
                  key={std} 
                  onClick={() => toggleStandard(std)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                    isMastered 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-100' 
                      : 'bg-indigo-800/40 border-indigo-700 text-indigo-200 hover:bg-indigo-800/60'
                  }`}
                >
                  <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    isMastered ? 'bg-emerald-500 border-emerald-500' : 'border-indigo-500'
                  }`}>
                    {isMastered && <span className="text-[10px] text-white">✓</span>}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase">{std}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-indigo-800">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold uppercase opacity-60 tracking-wider">Chapter Progress</span>
              <span className="text-xl font-black">{Math.round((masteredStandards.length / chapter.standards.length) * 100)}%</span>
            </div>
            <div className="w-full bg-indigo-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full transition-all duration-700" 
                style={{ width: `${(masteredStandards.length / chapter.standards.length) * 100}%` }} 
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Modeling Tip (+)</h4>
          <p className="text-xs text-slate-600 leading-relaxed italic">
            {chapter.id === 1 
              ? "Use the sliders to verify that the vertex of y=a(x-h)^2+k is at (h, k). This is the 'Vertex Form' from Larson Section 1.3."
              : chapter.id === 4 
              ? "Experiment with B. The period of the sine function is 2π/B. If B=2, the wave compresses horizontally."
              : "Interact with the visualization above to master the geometric interpretation of these CCSS standards."}
          </p>
        </div>
      </aside>
    </div>
  );
};

export default LessonStudyView;
