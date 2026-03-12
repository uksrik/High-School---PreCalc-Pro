
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './views/Dashboard';
import CurriculumView from './views/CurriculumView';
import LensView from './views/LensView';
import StudyHub from './views/StudyHub';
import LessonStudyView from './views/LessonStudyView';
import TestView from './views/TestView';
import QuizView from './views/QuizView';
import LessonDetailView from './views/LessonDetailView'; // Keep for curriculum drill-down
import { Chapter } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeLesson, setActiveLesson] = useState<Chapter | null>(null);
  const [activeTeachingLesson, setActiveTeachingLesson] = useState<Chapter | null>(null);
  const [activeTest, setActiveTest] = useState<Chapter | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Chapter | null>(null);
  const [lensInitialPrompt, setLensInitialPrompt] = useState<string | undefined>(undefined);

  const handleLaunchLesson = (chapter: Chapter) => {
    setActiveLesson(chapter);
    setActiveTeachingLesson(null);
    setActiveTest(null);
    setActiveQuiz(null);
  };

  const handleNavChange = (view: string) => {
    setCurrentView(view);
    setLensInitialPrompt(undefined);
    resetActiveViews();
  };

  const resetActiveViews = () => {
    setActiveLesson(null);
    setActiveTeachingLesson(null);
    setActiveTest(null);
    setActiveQuiz(null);
  };

  const renderView = () => {
    if (activeQuiz) {
      return <QuizView chapter={activeQuiz} onBack={resetActiveViews} />;
    }
    if (activeTest) {
      return <TestView chapter={activeTest} onBack={resetActiveViews} />;
    }
    if (activeTeachingLesson) {
      return <LessonStudyView chapter={activeTeachingLesson} onBack={resetActiveViews} />;
    }
    if (activeLesson) {
      return (
        <LessonDetailView 
          chapter={activeLesson} 
          onBack={resetActiveViews} 
          onLensClick={(prompt) => { 
            setLensInitialPrompt(prompt);
            resetActiveViews(); 
            setCurrentView('lens'); 
          }} 
        />
      );
    }

    switch (currentView) {
      case 'dashboard': return <Dashboard onResume={() => handleLaunchLesson({ id: 1, title: "Advanced Function Analysis I", weeks: "1–2", focus: "Parent functions, transformations, composition, and inverses.", standards: ["F-IF.7", "F-BF.3", "F-BF.4"], semester: 1, description: "Master parent functions and their transformations. Study function composition (f ∘ g) and the conditions for inverses." })} />;
      case 'curriculum': return <CurriculumView onLaunch={handleLaunchLesson} />;
      case 'study': return <StudyHub onSelectLesson={setActiveTeachingLesson} onSelectTest={setActiveTest} onSelectQuiz={setActiveQuiz} />;
      case 'lens': return <LensView initialPrompt={lensInitialPrompt} />;
      case 'cheatsheets': 
        return (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4 animate-in zoom-in-95 duration-500">
            <div className="text-6xl">📝</div>
            <h2 className="text-2xl font-bold text-slate-900">Cheat Sheet Builder</h2>
            <p className="text-slate-500 max-w-md">Select your current Unit to generate a customized California Standard Reference Sheet.</p>
            <div className="flex gap-4">
              <button onClick={() => alert("Simulating PDF Generation...")} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg active:scale-95">Unit Circle PDF</button>
              <button onClick={() => alert("Simulating PDF Generation...")} className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 active:scale-95">Identities Sheet</button>
            </div>
          </div>
        );
      default: return <Dashboard onResume={() => {}} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Navigation currentView={currentView} setView={handleNavChange} />
      
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto h-screen">
        <div className="md:hidden flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">P</div>
            <h1 className="text-lg font-bold text-indigo-900">PreCalc Pro</h1>
          </div>
          <select value={currentView} onChange={(e) => handleNavChange(e.target.value)} className="bg-white border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-indigo-600">
            <option value="dashboard">Dashboard</option>
            <option value="curriculum">Curriculum</option>
            <option value="study">Study Center</option>
            <option value="lens">Honors Lens</option>
            <option value="cheatsheets">Cheat Sheets</option>
          </select>
        </div>

        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>

      <button onClick={() => handleNavChange('lens')} className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-all z-50 md:hidden">🔍</button>
    </div>
  );
};

export default App;
