
import React, { useState, useEffect } from 'react';
import { CURRICULUM } from '../constants';
import { motion } from 'motion/react';

const SemesterPlanner: React.FC = () => {
  const [completedWeeks, setCompletedWeeks] = useState<number[]>(() => {
    const saved = localStorage.getItem('precalc_completed_weeks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('precalc_completed_weeks', JSON.stringify(completedWeeks));
  }, [completedWeeks]);

  const toggleWeek = (week: number) => {
    setCompletedWeeks(prev => 
      prev.includes(week) ? prev.filter(w => w !== week) : [...prev, week]
    );
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to reset your progress?')) {
      setCompletedWeeks([]);
    }
  };

  // Generate 18 weeks
  const weeks = Array.from({ length: 18 }, (_, i) => i + 1);

  const getUnitForWeek = (week: number) => {
    return CURRICULUM.find(unit => {
      // Handle both en-dash (–) and hyphen (-)
      const weekRange = unit.weeks.split(/[–-]/).map(w => parseInt(w.trim()));
      if (weekRange.length === 1) return weekRange[0] === week;
      return week >= weekRange[0] && week <= weekRange[1];
    });
  };

  const progress = (completedWeeks.length / 18) * 100;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Semester Planner</h2>
          <p className="text-slate-500">Track your 18-week journey through the Honors Precalculus curriculum.</p>
        </div>
        <button 
          onClick={clearAll}
          className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest"
        >
          Reset Progress
        </button>
      </header>

      {/* Progress Overview */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="text-slate-100 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent" />
              <motion.circle 
                initial={{ strokeDasharray: "0, 251.2" }}
                animate={{ strokeDasharray: `${progress * 2.51}, 251.2` }}
                className="text-indigo-600 stroke-current" 
                strokeWidth="10" 
                strokeLinecap="round" 
                cx="50" cy="50" r="40" fill="transparent" 
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-slate-900">{Math.round(progress)}%</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Completed</p>
                <p className="text-xl font-black text-slate-900">{completedWeeks.length} Weeks</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Remaining</p>
                <p className="text-xl font-black text-slate-900">{18 - completedWeeks.length} Weeks</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Phase</p>
                <p className="text-xl font-black text-slate-900">{progress > 50 ? 'Semester 2' : 'Semester 1'}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                <p className="text-xl font-black text-emerald-600">{progress === 100 ? 'Finished' : 'In Progress'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 18-Week Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {weeks.map(week => {
          const unit = getUnitForWeek(week);
          const isCompleted = completedWeeks.includes(week);

          return (
            <motion.div 
              key={week}
              whileHover={{ y: -4 }}
              onClick={() => toggleWeek(week)}
              className={`group relative p-6 rounded-3xl border-2 transition-all cursor-pointer overflow-hidden ${
                isCompleted 
                ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
                : 'bg-white border-slate-100 hover:border-indigo-200 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                  isCompleted ? 'bg-emerald-200 text-emerald-700' : 'bg-slate-100 text-slate-400'
                }`}>
                  {week}
                </div>
                {isCompleted && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs"
                  >
                    ✓
                  </motion.div>
                )}
              </div>

              {unit ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Unit {unit.id}</p>
                    <h4 className="font-bold text-slate-900 leading-tight">{unit.title}</h4>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {unit.focus}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {unit.standards.map(s => (
                      <span key={s} className="text-[8px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-24 flex flex-col items-center justify-center text-slate-300 italic">
                  <span className="text-xs">Review / Buffer</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Motivational Footer */}
      <div className="bg-slate-900 rounded-3xl p-8 text-center text-white">
        <h3 className="text-xl font-bold mb-2">"The only way to learn mathematics is to do mathematics."</h3>
        <p className="text-slate-400 text-sm">— Paul Halmos</p>
      </div>
    </div>
  );
};

export default SemesterPlanner;
