
import React from 'react';
import { Lab } from '../types';

interface LabDetailViewProps {
  lab: Lab;
  onBack: () => void;
}

const LabDetailView: React.FC<LabDetailViewProps> = ({ lab, onBack }) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-emerald-600 font-bold hover:text-emerald-800 transition-colors"
      >
        <span>←</span>
        <span>Back to Labs</span>
      </button>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-tighter">Excel Lab {lab.id}</span>
            <span className="text-slate-400 text-xs font-bold">CHAPTER {lab.chapterLink}</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{lab.title}</h2>
          <p className="text-slate-500 mt-2 font-medium">{lab.topic}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Step-by-Step Instructions</h3>
              <div className="space-y-6">
                {[
                  { step: 1, text: "Open Microsoft Excel and enter the Larson textbook data into columns A and B.", icon: "📂" },
                  { step: 2, text: "Create a Scatter Plot of the data. Right-click any data point and select 'Add Trendline'.", icon: "📉" },
                  { step: 3, text: "In the Trendline options, select the model type (Exponential/Logarithmic) and check 'Display Equation on Chart'.", icon: "⚙️" },
                  { step: 4, text: "Use the LINEST function in a new cell for more precise coefficient analysis.", icon: "🔢" }
                ].map(item => (
                  <div key={item.step} className="flex space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold border border-emerald-100">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <p className="text-slate-700 leading-relaxed font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12 group-hover:rotate-0 transition-transform">
                Excel
              </div>
              <h4 className="text-emerald-400 font-bold text-sm mb-4 tracking-widest uppercase">Formula Mastery</h4>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed italic">
                Pro Tip: Use absolute references ($) for your coefficients to easily drag your modeling formulas down!
              </p>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <code className="text-xl text-white">
                  {lab.id === 1 ? "=LINEST(known_y's, known_x's, TRUE, TRUE)" : "=MMULT(A1:C3, D1:D3)"}
                </code>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-4">Lab Deliverables</h4>
              <ul className="space-y-3">
                {["Completed Excel Spreadsheet", "Graph with Trendline", "Summary of Errors (R²)", "CA Standard Reflection"].map(item => (
                  <li key={item} className="flex items-center space-x-2 text-xs font-bold text-slate-500">
                    <span className="w-4 h-4 rounded-full border border-emerald-400 flex items-center justify-center text-[8px] text-emerald-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => alert(`Starting download: Larson_Lab_${lab.id}_Starter.xlsx`)}
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>📥</span>
              <span>Download Starter XLSX</span>
            </button>
            <button 
              onClick={() => alert(`Launching YouTube video walkthrough for Lab ${lab.id}...`)}
              className="w-full py-4 bg-white border border-emerald-200 text-emerald-600 rounded-2xl font-bold hover:bg-emerald-50 transition-all active:scale-95"
            >
              Watch Video Walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetailView;
