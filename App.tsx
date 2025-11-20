import React, { useState } from 'react';
import { HierarchyLevel } from './types';
import { HIERARCHY_DATA, LEVELS_ORDERED } from './constants';
import { PyramidLevel } from './components/PyramidLevel';
import { InfoCard } from './components/InfoCard';
import { Generator } from './components/Generator';
import { ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [selectedLevelId, setSelectedLevelId] = useState<HierarchyLevel>(HierarchyLevel.DH0);

  const selectedLevelData = HIERARCHY_DATA[selectedLevelId];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-100">
      
      <header className="w-full max-w-6xl mx-auto pt-6 px-6 text-center flex flex-col items-center gap-2 animate-fade-in">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
          Hierarchy of Disagreement
        </h1>
        <a 
            href="http://www.paulgraham.com/disagree.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1.5 uppercase tracking-widest font-bold border-b border-transparent hover:border-indigo-600/50 pb-0.5"
        >
            Read Paul Graham's Essay <ExternalLink className="w-3 h-3" />
        </a>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mt-4">
          
          {/* Left Column: The Pyramid Visualization */}
          {/* Order 1 ensures it appears first (top) on mobile */}
          <div className="flex flex-col items-center w-full order-1 mt-4 lg:mt-0">
             <div className="text-center opacity-60 mb-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
                    Select a level
                </p>
             </div>

             <div className="w-full flex flex-col items-center">
                {LEVELS_ORDERED.map((levelId) => (
                    <PyramidLevel
                        key={levelId}
                        data={HIERARCHY_DATA[levelId]}
                        isSelected={selectedLevelId === levelId}
                        onClick={setSelectedLevelId}
                    />
                ))}
             </div>
          </div>

          {/* Right Column: Info & Generator */}
          <div className="flex flex-col justify-center order-2 w-full">
              <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl shadow-slate-200/50">
                  
                  {/* Background decorative number */}
                  <div className="absolute -top-6 -right-6 text-[8rem] md:text-[10rem] font-bold text-slate-100 select-none pointer-events-none leading-none font-sans">
                    {selectedLevelId.replace('DH', '')}
                  </div>

                  <div className="relative z-10">
                    <InfoCard level={selectedLevelData} />
                    <Generator level={selectedLevelData} />
                  </div>
              </div>
          </div>
        
        </div>
      </main>
    </div>
  );
};

export default App;