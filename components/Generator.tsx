import React, { useState, useEffect } from 'react';
import { LevelData } from '../types';
import { generateExample } from '../services/geminiService';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';

interface GeneratorProps {
  level: LevelData;
}

export const Generator: React.FC<GeneratorProps> = ({ level }) => {
  const [topic, setTopic] = useState("AI Regulation");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Clear result on level change
  useEffect(() => {
    setResult(null);
    setError(null);
  }, [level.id]);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const text = await generateExample(topic, level);
      setResult(text);
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unexpected error occurred");
        }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-slate-100">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
        Generate an example
      </h4>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Sparkles className={`w-4 h-4 ${isLoading ? 'text-slate-400' : level.textClass}`} />
        </div>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-12 py-4 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 shadow-sm"
        />
        
        <button
            onClick={handleGenerate}
            disabled={isLoading || !topic.trim()}
            className={`absolute right-2 top-2 bottom-2 px-3 ${level.colorClass} ${level.hoverClass} text-white rounded-lg transition-all disabled:opacity-0 disabled:cursor-not-allowed flex items-center justify-center aspect-square shadow-sm`}
        >
            {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-white" />
            ) : (
            <ArrowRight className="w-5 h-5" />
            )}
        </button>
      </div>

      {error && (
        <div className="mt-3 text-sm text-red-500 px-2 font-medium">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="mt-4 animate-fade-in bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden group">
             {/* Scanning gradient effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
             
             <div className="flex gap-4 items-center relative z-10">
                 {/* Glowing indicator */}
                 <div className={`w-1 h-8 rounded-full ${level.colorClass} shadow-[0_0_8px_currentColor] animate-pulse opacity-75`}></div>
                 
                 {/* Skeleton text */}
                 <div className="flex-1 space-y-2.5">
                     <div className="h-2 bg-slate-200 rounded-full w-3/4 animate-pulse"></div>
                     <div className="h-2 bg-slate-200/70 rounded-full w-1/2 animate-pulse delay-75"></div>
                 </div>
             </div>
        </div>
      )}

      {result && (
        <div className="mt-4 animate-fade-in bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                    <div className={`w-2 h-2 rounded-full ${level.colorClass}`}></div>
                </div>
                <div>
                    <p className="text-slate-700 italic font-medium leading-relaxed">
                        "{result}"
                    </p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};