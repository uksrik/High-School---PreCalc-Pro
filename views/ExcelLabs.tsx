
import React from 'react';
import { LABS } from '../constants';
import { Lab } from '../types';

interface ExcelLabsProps {
  onOpenLab: (lab: Lab) => void;
}

const ExcelLabs: React.FC<ExcelLabsProps> = ({ onOpenLab }) => {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">Excel & Math Lab</h2>
        <p className="text-slate-500 italic">"Modeling with Tools Strategically" (MP5)</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {LABS.map(lab => (
          <div key={lab.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl group-hover:scale-110 transition-transform">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{lab.title}</h3>
                  <span className="text-xs font-bold text-emerald-600 uppercase">Lab {lab.id} • Ch {lab.chapterLink}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-6 flex-1">{lab.description}</p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Excel Toolkit</h4>
                <div className="flex flex-wrap gap-2">
                  {lab.excelFeatures.map(feat => (
                    <span key={feat} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-900 rounded-2xl text-white font-mono text-sm mb-6">
                <div className="flex items-center space-x-2 text-slate-500 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="ml-2 text-[10px] uppercase">Excel Formula Preview</span>
                </div>
                {lab.id === 2 ? (
                  <code className="text-emerald-400">=MMULT(MINVERSE(A1:C3), D1:D3)</code>
                ) : lab.id === 1 ? (
                  <code className="text-emerald-400">{"=LINEST(B2:B20, A2:A20^{1,2,3})"}</code>
                ) : (
                  <code className="text-emerald-400">=A2*(1+$B$1)</code>
                )}
              </div>

              <button 
                onClick={() => onOpenLab(lab)}
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100"
              >
                Open Lab Instructions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcelLabs;
