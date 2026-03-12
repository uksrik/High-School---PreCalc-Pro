
import React, { useState, useRef, useEffect } from 'react';
import { getAITutorResponse } from '../services/geminiService';
import MathBlock from '../components/MathBlock';

interface LensViewProps {
  initialPrompt?: string;
}

const LensView: React.FC<LensViewProps> = ({ initialPrompt }) => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState(initialPrompt || '');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      setPrompt(initialPrompt);
    }
  }, [initialPrompt]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!prompt && !image) return;
    setLoading(true);
    setResponse('');
    const text = await getAITutorResponse(
      prompt || "Analyze this precalculus problem and guide me through the steps using Larson 2007 methods.",
      image || undefined
    );
    setResponse(text || '');
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <header className="text-center">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">AI-Powered</div>
        <h2 className="text-4xl font-bold text-slate-900">The Larson Lens</h2>
        <p className="text-slate-500 mt-2">Scan any page or problem from your Larson 2007 book for instant CA-aligned guidance.</p>
      </header>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <label className="block text-sm font-bold text-slate-700">Scan or Upload Exercise</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all group overflow-hidden relative"
              >
                {image ? (
                  <img src={image} className="w-full h-full object-contain" alt="Problem" />
                ) : (
                  <>
                    <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">📸</span>
                    <span className="text-sm text-slate-400 font-medium">Click to capture or upload photo</span>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <label className="block text-sm font-bold text-slate-700">Specific Question or Section #</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Help me with Ch 4.2 Exercise 45... why do we use radians here?"
                className="w-full h-40 md:h-[calc(100%-2rem-1.25rem)] p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none transition-all"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center space-x-2 ${
              loading ? 'bg-slate-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white transform hover:-translate-y-1'
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Consulting PreCalc Pro AI...</span>
              </>
            ) : (
              <>
                <span>🚀</span>
                <span>Get Step-by-Step Help</span>
              </>
            )}
          </button>
        </div>

        {response && (
          <div className="border-t border-slate-100 bg-slate-50/50 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">AI</div>
              <h3 className="font-bold text-slate-900">Tutor Response</h3>
            </div>
            <div className="prose prose-indigo max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed">
              {response.split(/(\$\$.*?\$\$|\$.*?\$)/g).map((part, i) => {
                if (part.startsWith('$$') && part.endsWith('$$')) {
                  return <MathBlock key={i} math={part.slice(2, -2)} block />;
                }
                if (part.startsWith('$') && part.endsWith('$')) {
                  return <MathBlock key={i} math={part.slice(1, -1)} />;
                }
                return part;
              })}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl flex space-x-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-amber-900 text-sm">CA Standard F-TF.5</h4>
            <p className="text-amber-800 text-xs">Don't forget that modeling periodic phenomena often requires shifting the midline. The AI will check your 'd' value.</p>
          </div>
        </div>
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex space-x-3">
          <span className="text-2xl">✅</span>
          <div>
            <h4 className="font-bold text-emerald-900 text-sm">Larson Lens Tip</h4>
            <p className="text-emerald-800 text-xs">Clearer photos of the textbook's graphs yield better analysis of asymptotes and local extrema.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensView;
