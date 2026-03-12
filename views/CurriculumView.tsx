
import React, { useState } from 'react';
import { CURRICULUM } from '../constants';
import { Chapter } from '../types';

interface CurriculumViewProps {
  onLaunch: (chapter: Chapter) => void;
}

const CurriculumView: React.FC<CurriculumViewProps> = ({ onLaunch }) => {
  const [semester, setSemester] = useState<1 | 2>(1);

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Curriculum Map</h2>
          <p className="text-slate-500">18-Week Semester Breakdown</p>
        </div>
        <div className="flex bg-slate-200 p-1 rounded-xl">
          <button 
            onClick={() => setSemester(1)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${semester === 1 ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-600'}`}
          >
            Semester 1
          </button>
          <button 
            onClick={() => setSemester(2)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${semester === 2 ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-600'}`}
          >
            Semester 2
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CURRICULUM.filter(c => c.semester === semester).map(chapter => (
          <div key={chapter.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Weeks {chapter.weeks}</span>
                <h3 className="text-xl font-bold">Unit {chapter.id}: {chapter.title}</h3>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                {chapter.id}
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 text-sm mb-4">{chapter.description}</p>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Core Focus</span>
                <p className="text-sm font-medium text-slate-800">{chapter.focus}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {chapter.standards.map(std => (
                  <span key={std} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md">
                    CA CCSS: {std}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => onLaunch(chapter)}
                className="mt-6 w-full py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm font-bold hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all"
              >
                Launch Lessons
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumView;
